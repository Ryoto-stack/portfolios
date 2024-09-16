import Image from "next/image";
import React from "react";

const Logos = [
  {
    logo: "/react.png",
    alt: "",
  },
  {
    logo: "/nextjs.png",
    alt: "",
  },
  {
    logo: "/tailwind.png",
    alt: "",
  },
  {
    logo: "/ts.png",
    alt: "",
  },
  {
    logo: "/nodejs.png",
    alt: "",
  },
  {
    logo: "/mongodb.png",
    alt: "",
  },
  {
    logo: "/git.png",
    alt: "",
  },
];

const Skillset = () => {
  return (
    <section className="ezy__clients7 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white w-full">
      <div className=" px-1">
        <div className="grid grid-cols-12 justify-center mb-12">
          <div className="col-span-12 lg:col-span-6 lg:col-start-4 text-center">
            <h2 className="text-3xl md:text-[45px] font-bold mb-6">
              Tech Stack
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center text-center gap-4">
          {Logos.map((logo, i) => (
            <div
              className="bg-slate-100 dark:bg-[#4e5f79] rounded-lg p-6 lg:p-12"
              key={i}
            >
              <Image
                height={96}
                width={96}
                src={logo.logo}
                alt={logo.alt}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skillset;
