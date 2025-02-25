import React from "react";

const features = [
    {
      title: "Customizable",
      description:
        "Tailor your landing page’s look and feel, from the color scheme to the font size, to the design of the page.",
    },
    {
      title: "Fast Performance",
      description:
        "We build our templates for speed in mind, for super-fast load times so your customers never waver.",
    },
    {
      title: "Fully Featured",
      description:
        "Everything you need to succeed and launch your landing page, right out of the box. No need to install anything else.",
    },
  ];
  
  const WhyChooseUs = () => {
    return (
      <section className="bg-blue-50 text-blue-900 py-16 px-6 md:px-12 lg:px-20">
        <div className="text-center mb-12">
          <h3 className="text-lg font-semibold uppercase">Why Choose Us</h3>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
           We Build a Software That Your Customers Love
          </h2>
          <p className="text-blue-700 max-w-2xl mx-auto mt-4">
          We don’t just build software—we craft cutting-edge solutions that drive business success.
          </p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-white shadow-lg rounded-xl p-6 text-center">
              <div className="flex justify-center mb-4">
                <span className="bg-blue-500 text-white ">
                  {/* Icon can be placed here */}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-blue-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default WhyChooseUs;
  