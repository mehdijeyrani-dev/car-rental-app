import React from "react";
import { assets } from "../assets/data";
import Title from "./Title";

const features = [
  {
    title: "Quick Service",
    description:
      "Book in seconds with instant confirmations and flexible pickup options, so you get on the road fast without waiting or hassles.",
    bgClass: "bg-primary",
  },
  {
    title: "Wide Vehicle Selection",
    description:
      "Choose from economy to luxury models, regularly maintained and verified, giving you reliable performance and the perfect car for every trip.",
    bgClass: "bg-primaryOne",
  },
  {
    title: "Transparent pricing",
    description:
      "Upfront rates with no hidden fees, clear breakdowns for insurance and extras, so pricing stays predictable and easy to understand before booking.",
    bgClass: "bg-primaryTwo",
  },
  {
    title: "24/7 Support",
    description:
      "Around the clock customer support via chat and phone, resolving issues quickly and helping with changes, extensions, or roadside assistance anytime you need.",
    bgClass: "bg-primary",
  },
];

const About = () => {
  return (
    <section className="max-padd-container py-16 xl:py-28 !pt-36">
      <div className="flex items-center flex-col lg:flex-row gap-14">
        {/* INFO - LEFT SIDE */}
        <div className="flex-[5]">
          <Title
            subTitle={"Your Trusted Real Estate Partner"}
            heading={"Helping you every step of the way"}
            descriptionClassName={"hidden"}
          />
          <p className="mb-10 mt-5">
            Find reliable car with transparent pricing, verified inspections,
            flexible pickup and delivery options, and 24/7 customer support for
            a smooth rental or buying experience.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature, index) => (
              <div key={index} className={`p-4 rounded-xl ${feature.bgClass}`}>
                <h5 className="capitalize">{feature.title}</h5>
                <p className="text-sm mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* IMAGE - RIGHT SIDE */}
        <div className="flex-[4] flex gap-7">
          <div className="relative flex justify-end mb-8">
            <img src={assets.about1} alt="aboutImg" className="rounded-2xl" />
          </div>
          <div className="relative flex justify-end mt-8">
            <img src={assets.about2} alt="aboutImg" className="rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
