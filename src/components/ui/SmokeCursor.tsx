"use client";

import { useEffect, useRef } from "react";

class Particle {
  x: number;
  y: number;
  size: number;
  life: number;
  maxLife: number;
  vx: number;
  vy: number;
  opacity: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 20 + 10;
    this.maxLife = Math.random() * 80 + 40; // 40-120 frames
    this.life = this.maxLife;
    this.vx = (Math.random() - 0.5) * 1.5; // Slight drift left/right
    this.vy = -Math.random() * 1.5 - 0.5; // Drift upwards
    this.opacity = Math.random() * 0.25 + 0.1; // Very subtle base opacity
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.life--;
    this.size += 0.4; // Grow as it dissipates
  }

  draw(ctx: CanvasRenderingContext2D) {
    const progress = this.life / this.maxLife;
    // Fade out smoothly as it dies
    const currentOpacity = this.opacity * progress;

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`;
    ctx.fill();
  }
}

export default function SmokeCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const animationFrameId = useRef<any>(null);

  useEffect(() => {
    // Disable on touch devices for performance and since there is no "mouse"
    if (window.matchMedia("(hover: none)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Handle canvas resizing
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Track mouse and emit particles
    let lastMouseX = -100;
    let lastMouseY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - lastMouseX;
      const dy = e.clientY - lastMouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Add a new particle if moved more than 5px to avoid clustering,
      // or simply randomly when moving very slowly
      if (dist > 5 || Math.random() > 0.8) {
        particles.current.push(new Particle(e.clientX, e.clientY));
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw all particles, removing dead ones
      particles.current = particles.current.filter((p) => {
        p.update();
        p.draw(ctx);
        return p.life > 0;
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50 h-screen w-screen mix-blend-screen opacity-20"
      style={{ filter: "blur(6px)" }}
      aria-hidden="true"
    />
  );
}
