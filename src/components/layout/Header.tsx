import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="flex items-center justify-center gap-32 p-3 border-b border-b-white border-t-0 fixed w-full bg-black z-10">
      <h1>
        <Link href="/">
          <Image
            aria-hidden
            src="/icons/lol.png"
            alt="홈 아이콘"
            width={24}
            height={24}
            className="invert"
          />
        </Link>
      </h1>
      <Nav />
    </header>
  );
}
