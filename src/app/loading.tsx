export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0905]">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#fbce6b]/10 blur-[100px]" />
      
      <div className="relative flex flex-col items-center">
        {/* Brand Name */}
        <h1 className="font-display text-3xl font-bold tracking-[0.2em] text-white sm:text-4xl">
          DUBAI<span className="text-[#fbce6b]">LOUNGE</span>
        </h1>
        
        {/* Loading Dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          <div 
            className="h-2 w-2 rounded-full bg-[#fbce6b] animate-bounce" 
            style={{ animationDelay: "0ms" }} 
          />
          <div 
            className="h-2 w-2 rounded-full bg-[#fbce6b] animate-bounce" 
            style={{ animationDelay: "150ms" }} 
          />
          <div 
            className="h-2 w-2 rounded-full bg-[#fbce6b] animate-bounce" 
            style={{ animationDelay: "300ms" }} 
          />
        </div>
      </div>
    </div>
  );
}
