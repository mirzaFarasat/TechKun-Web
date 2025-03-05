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
        <div className="bg-primary-50">
            <div className="case-responsive-container py-16">
                <div className="mb-12 mx-auto w-full md:w-10/12 text-center">
                    <h2 className="mb-2 section-subtext font-medium text-primary-700">WHY CHOOSE US?</h2>
                    <h2 className="mb-2 section-heading text-gray-700">
                        We Build a Software That Your Customers Love
                    </h2>
                    <p className="section-subtext text-primary-700">
                        We don&apos;t just build software—we craft cutting-edge solutions that drive business success.
                    </p>
                </div>

                <div className="mx-auto lg:w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map(({ title, description, Icon }, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-xl p-6 text-center">
                            <div className="mb-4 flex justify-center">
                                <span className="rounded p-2 bg-primary-700 text-white ">
                                    <Icon size={"28"} />
                                </span>
                            </div>
                            <h3 className="mb-2 item-title text-gray-700">{title}</h3>
                            <p className="item-subtitle text-primary-700">{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
