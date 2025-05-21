import { SocialsType } from "@/types/types";
import Facebook from "./Facebook";
import Instagram from "./Instagram";
import LinkedIn from "./LinkedIn";
import Twitter from "./Twitter";

export default function Socials({
  facebook,
  instagram,
  twitter,
  linkedIn,
}: SocialsType) {
  return (
    <>
      <div className="flex items-center gap-5">
        <LinkedIn link={linkedIn} />
        <Twitter link={twitter} />
        <Facebook link={facebook} />
        <Instagram link={instagram} />
      </div>
    </>
  );
}
