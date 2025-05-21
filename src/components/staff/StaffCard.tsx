import { StaffType } from "@/types/types";
import Image from "next/image";
import Socials from "../svg/Socials";

export default function StaffCard({ name, avatar, role, links }: StaffType) {
  return (
    <>
      <div className="card-container flex flex-col gap-4 p-4 pb-8">
        <div className="rounded-[1rem] border-2">
          <Image
            src={avatar}
            alt={`${name} - Nord's bakery ${role}`}
            width={500}
            height={500}
            className="object-cover aspect-square rounded-[1rem]"
          />
        </div>

        <div className="ml-2 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-2xl font-medium">{name}</span>
            <small className="text-small">{role}</small>
          </div>
          <Socials {...links} />
        </div>
      </div>
    </>
  );
}
