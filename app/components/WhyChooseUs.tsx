import React from "react";
import { IconType } from "react-icons";
import { BiCustomize } from "react-icons/bi";
import { SiStreamrunners } from "react-icons/si";
import { MdChecklist } from "react-icons/md";

const features: {
    title: string;
    description: string;
    Icon: IconType
}[] = [
    {
        title: "Customizable",
        description:
            "Tailor your landing page’s look and feel, from the color scheme to the font size, to the design of the page.",
        Icon: BiCustomize
    },
    {
        title: "Fast Performance",
        description:
            "We build our templates for speed in mind, for super-fast load times so your customers never waver.",
        Icon: SiStreamrunners
    },
    {
        title: "Fully Featured",
        description:
            "Everything you need to succeed and launch your landing page, right out of the box. No need to install anything else.",
        Icon: MdChecklist
    },
];

const WhyChooseUs = () => {
    return (
        <div className="bg-primary-50 py-16 px-6 md:px-12 lg:px-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary-700 mb-3">Why Choose Us?</h2>
                <h3 className="text-3xl md:text-4xl font-semibold text-gray-700 mb-3">
                    We Build a Software That Your Customers Love
                </h3>
                <p className="text-primary-700 max-w-2xl mx-auto">
                    We don&apos;t just build software—we craft cutting-edge solutions that drive business success.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {features.map(({ title, description, Icon }, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-xl p-6 text-center">
                        <div className="flex justify-center mb-4">
                            <span className="rounded p-2 bg-primary-700 text-white ">
                                <Icon size={"28"} />
                            </span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">{title}</h3>
                        <p className="text-primary-700">{description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyChooseUs;
