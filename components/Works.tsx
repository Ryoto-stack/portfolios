import React from "react";

const portfolioList = [
  {
    image: "/carepulse.png",
    title: "Patient Management System",
    description:
      "A Patient Management System helps you streamline and automate administrative and clinical tasks in your healthcare practice, making it easier to manage patient care and improve overall efficiency. Equipped with Twilio SMS, Appwrite as Database and Sentry for tracking, managing, and correcting errors in applications ",
    href: "https://carepulse-topaz.vercel.app/",
  },
  {
    image: "/ecolluminate.png",
    title: "Candle E-Commerce",
    description:
      "platform allows you to effortlessly browse and purchase a wide variety of candles, from luxury scents to everyday favorites, all while enjoying a seamless shopping experience from the comfort of your home.",
    href: "https://eco-lluminate.vercel.app/",
  },
  {
    image: "/baseapparel.png",
    title: "Coming Soon Page",
    description:
      "Vitae bibendum egestas magna sit elit non. Netus volutpat dignissim pharetra felis. Orci commodo mauris digital industry is booming adipiscing semper amet.",
    href: "https://ryoto-stack.github.io/Base-apparel/",
  },
];

const Works = () => {
  return (
    <section className="ezy__portfolio8 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-slate-800 dark:text-white">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-12 justify-center mb-6 md:mb-12">
          <div className="col-span-12 lg:col-span-6 lg:col-start-4 text-center">
            <h2 className="text-3xl md:text-[45px] font-bold mb-6">
              My Latest Works
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-6 gap-6 gap-y-8 lg:gap-y-0 max-w-7xl mx-auto">
          {portfolioList.map((portfolio, i) => (
            <div
              className="col-span-6 md:col-span-3 lg:col-span-2 h-full flex w-full"
              key={i}
            >
              <div className="static bg-white shadow-xl dark:bg-slate-800 hover:-translate-y-1 mt-6 duration-300 rounded-xl">
                <div className="bg-green-100 flex h-[13rem] rounded-xl p-6 lg:p-5 pt-0 lg:pt-0 relative">
                  <img
                    src={portfolio.image}
                    alt={portfolio.title}
                    className="w-full -mb-24 mt-12 rounded-xl"
                  />
                </div>
                <div className="p-6 lg:p-12 mt-20">
                  <h4 className="text-xl font-medium mb-4">
                    {portfolio.title}
                  </h4>
                  <p className="opacity-50 mb-0">{portfolio.description}</p>
                  <div className="mt-5">
                    <a
                      href={portfolio.href}
                      className="px-5 py-2 rounded border border-blue-600 hover:text-white hover:bg-blue-600 duration-300 mt-6"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      View Work
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Works;
