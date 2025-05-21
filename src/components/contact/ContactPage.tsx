import { HeadingType } from "@/types/types";
import Heading from "../heading/Heading";
import Facebook from "../svg/Facebook";
import Instagram from "../svg/Instagram";
import Twitter from "../svg/Twitter";
import Whatsapp from "../svg/Whatsapp";
import Form from "./Form";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  const contactHeading: HeadingType = {
    text: "Get in",
    featuredText: "Touch",
  };
  return (
    <section className="py-24">
      <div className="px-5 md:px-8 wrapper">
        <div className="flex flex-col gap-12">
          <div className="text-center mb-5 flex flex-col gap-5">
            <div className="max-w-xl text-center mx-auto">
              <Heading {...contactHeading} />
            </div>
            <span className="max-w-md mx-auto text-center">
              Got questions or feedback? We’d love to hear from you! Reach out
              to us through the form below or use the provided contact details.
            </span>
            <div className="flex items-center justify-center gap-5 my-8">
              <Facebook />
              <Instagram />
              <Twitter />
              <Whatsapp />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10 max-w-[45rem] mx-auto ">
          <Form />

          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3134.7032110096447!2d-85.74544709999999!3d38.2167866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88690d153bc037f1%3A0xaf1991367ebeccc2!2sNord&#39;s%20Bakery!5e0!3m2!1sen!2sng!4v1747663879820!5m2!1sen!2sng"
                width="700"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <Link
              href="mailto:momohrowland@gmail.com"
              className="flex flex-col gap-2 card-container"
            >
              <div className="flex items-center gap-4">
                <Image
                  src="/icons/email.svg"
                  width={24}
                  height={24}
                  alt="email icon"
                />
                <div className="flex flex-col gap-1 items-center">
                  <p className="font-bold">Send us an email</p>
                  <span>momohrowland@gmail.com</span>
                </div>
              </div>
            </Link>

            <Link
              href="tel:+234803829794"
              className="flex flex-col gap-2 card-container"
            >
              <div className="flex items-center gap-4">
                <Image
                  src="/icons/tel.svg"
                  width={24}
                  height={24}
                  alt="email icon"
                />
                <div className="flex flex-col gap-1 items-center">
                  <p className="font-bold">Give us a call</p>
                  <span>+234 80 3820 9794</span>
                </div>
              </div>
            </Link>

            {/* <Link
              href="https://www.google.com/maps?q=38.2167866,-85.7454471"
              target="_blank"
              className="flex flex-col gap-2 card-container"
            >
              <div className="flex items-center gap-4">
                <Image
                  src="/icons/location.svg"
                  width={24}
                  height={24}
                  alt="email icon"
                />
                <div className="flex flex-col gap-1 items-center">
                  <p className="font-bold">Our location</p>
                  <span>view on map</span>
                </div>
              </div>
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}
