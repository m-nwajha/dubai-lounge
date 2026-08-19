import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/images/logo.png"
        alt="Logo"
        width={200}
        height={100}
        className="h-16 w-auto"
      />
    </Link>
  );
};

export default Logo;
