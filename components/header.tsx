import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex h-14 justify-between items-center border-b border-zinc-300 px-4 sm:px-6">
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="Blog logo"
          width={32}
          height={32}
          priority
        />
      </Link>
      <nav className="flex items-center gap-4 text-sm font-medium text-zinc-600">
        <Link href="/" className="hover:text-zinc-950">
          Home
        </Link>
        <Link href="/posts" className="hover:text-zinc-950">
          Posts
        </Link>
      </nav>
    </header>
  );
};

export default Header;
