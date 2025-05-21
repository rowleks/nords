import Heading from "../heading/Heading";
import { staff } from "@/lib/data";
import StaffCard from "./StaffCard";

export default function Staff() {
  const StaffHeading = {
    text: "The People Behind The",
    featuredText: "Flavors",
  };

  return (
    <section>
      <div className="px-5 md:px-8 max-w-[90rem] mx-auto">
        <div className="py-16 md:py-32 flex flex-col gap-12 md:gap-16">
          <div className="text-center max-w-4xl mx-auto">
            <Heading {...StaffHeading} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {staff.map((member, index) => (
              <StaffCard key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
