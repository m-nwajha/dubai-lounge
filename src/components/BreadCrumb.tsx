import Image from 'next/image';
import Link from 'next/link';
import { Container } from './ui/Container';

export type BreadCrumbProps = {
  title: string;
  sub_title?: string;
};

const BreadCrumb = ({ title, sub_title }: BreadCrumbProps) => {
  return (
    <section className="relative flex h-64 w-full items-center overflow-hidden bg-black pt-20 sm:h-72">
      <Image
        src="/images/hero-bg.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-[78%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />

      <Container variant="xl" className="relative z-10">
        {sub_title && (
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#fbce6b]">
            {sub_title}
          </p>
        )}
        <h1 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">{title}</h1>
        <p className="mt-3 text-sm text-white/50">
          <Link href="/" className="transition-colors hover:text-[#fbce6b]">
            Home
          </Link>
          <span className="mx-2 text-white/30">/</span>
          <span className="text-white/70">{title}</span>
        </p>
      </Container>
    </section>
  );
};

export default BreadCrumb;
