import Image from "next/image";
import Link from "next/link";
import Facebook from "../svg/Facebook";
import Instagram from "../svg/Instagram";
import Twitter from "../svg/Twitter";
import Whatsapp from "../svg/Whatsapp";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-24 pb-10">
      <div className="wrapper px-5 md:px-8">
        <div className="flex flex-col gap-16">
          <Link href="/" className="cursor-pointer relative z-20 self-center">
            <Image
              src="/images/nords-logo-yellow.png"
              alt="nords bakery logo"
              width={125}
              height={40}
            />
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex gap-12 lg:gap-24">
              <div className="flex flex-col gap-2 uppercase">
                <h5>PAGES:</h5>
                <nav className="flex flex-col gap-2">
                  <Link href="/">Home</Link>
                  <Link href="/menu">Menu</Link>
                  <Link href="/categories">Categories</Link>
                  <Link href="/contact">Contact</Link>
                  <Link href="/categories">Categories</Link>
                </nav>
              </div>
              <div className="flex flex-col gap-2 uppercase">
                <h5>MENU:</h5>
                <nav className="flex flex-col gap-2">
                  <Link href="/categories/desserts">Desserts</Link>
                  <Link href="/categories/sides">Sides</Link>
                  <Link href="/categories/burgers">Burgers</Link>
                </nav>
              </div>
            </div>

            <div className="flex flex-col gap-2 uppercase">
              <h5>OPENING HOURS:</h5>
              <div className="flex flex-col gap-2">
                <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                <p>Sat - Sun: 9:00 AM - 5:00 PM</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h5>CONTACT:</h5>
              <p>
                Tel: <Link href="tel:+2348038209794">(+234) 803 820 9794</Link>
              </p>
              <p>
                Email:{" "}
                <Link href="mailto:momohrowland@gmail.com">
                  momohrowland@gmail.com
                </Link>
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 uppercase items-center">
            <h5>SOCIALS:</h5>
            <div className="flex items-center gap-5 text-black h-12 group">
              <Facebook />
              <Instagram />
              <Twitter />
              <Whatsapp />
            </div>
          </div>

          <div className="text-center flex flex-col gap-2 md:flex-row-reverse md:justify-between items-center">
            <div className="flex flex-col gap-2">
              <p>
                Designed by{" "}
                <Link
                  href="https://www.flowaze.com/"
                  target="_blank"
                  className="text-yellow"
                >
                  Flowaze
                </Link>
              </p>
              <p>
                Developed by{" "}
                <Link
                  href="https://rowland-momoh.netlify.app/"
                  target="_blank"
                  className="text-yellow"
                >
                  Rowland Momoh
                </Link>
              </p>
            </div>
            <p>
              &copy; {new Date().getFullYear()} Nords Bakery. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
