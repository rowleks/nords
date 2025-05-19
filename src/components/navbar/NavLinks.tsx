import Link from "next/link";
import Facebook from "../svg/Facebook";
import Instagram from "../svg/Instagram";
import Twitter from "../svg/Twitter";
import Whatsapp from "../svg/Whatsapp";

type NavLinksProps = {
  onLinkClick?: () => void;
};

export default function NavLinks({ onLinkClick }: NavLinksProps) {
  return (
    <div className="bg-pink h-[32rem] flex justify-center items-center relative z-10 max-lg:h-screen border-4 border-t-0 rounded-b-[2rem] ">
      <nav className="flex">
        <ul className="flex flex-col lg:flex-row gap-8 max-lg:items-center">
          <Link href="/" className="animate-link" onClick={onLinkClick}>
            <h1>Home</h1>
          </Link>
          <Link href="/menu" className="animate-link" onClick={onLinkClick}>
            <h1>Menu</h1>
          </Link>
          <Link href="#" className="animate-link" onClick={onLinkClick}>
            <h1>Categories</h1>
          </Link>
          <Link href="#" className="animate-link" onClick={onLinkClick}>
            <h1>Contact</h1>
          </Link>
        </ul>

        <div className="absolute bottom-[10%] left-0 z-50 w-full">
          <div className="flex items-center justify-center gap-5">
            <Facebook />
            <Instagram />
            <Twitter />
            <Whatsapp />
          </div>
        </div>
      </nav>
    </div>
  );
}
