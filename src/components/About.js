import React, { useEffect, useState } from "react";
import sanityClient from "../client";

const About = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await sanityClient.fetch(`
            *[_type == "about"] {
              _id,
              title,
              "content": content[]{
                "image": image.asset->url,
                "icon": icon.asset->url,
                "role": role,
                "description": description
              }
            }[0]
          `);

        setAboutData(data);
      } catch (error) {
        console.error("Error fetching data from Sanity:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section
      className="container bg-[#04152d] px-4 sm:px-6 lg:px-10 pt-8 mx-auto"
      id="about"
    >
      <h2 className="text-white text-[28px] sm:text-[35px] font-bold tracking-[1.75px] text-center sm:text-left">
        {aboutData?.title}
      </h2>
      {aboutData?.content && (
        <div
          className="flex flex-col space-y-8 sm:space-y-0 sm:space-x-8 sm:flex-row"
          key={aboutData._id}
        >
          {aboutData.content.map((item) => (
            <div
              className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-8"
              key={item._id}
            >
              {item.image && (
                <div className="flex justify-center sm:justify-start w-full sm:w-auto">
                  <img
                    src={item.image}
                    alt="Img"
                    className="w-full sm:w-[90%] h-auto object-cover"
                  />
                </div>
              )}
              <div className="pt-8 sm:pt-12 pr-0 sm:pr-10 text-center sm:text-left">
                {item.icon && (
                  <div className="flex justify-center sm:justify-start mb-4">
                    <img src={item.icon} alt="Icon" className="w-12 h-12" />
                  </div>
                )}
                <h3 className="font-semibold text-xl sm:text-2xl pb-4 text-white">
                  {item.role}
                </h3>
                <p className="text-white text-lg sm:text-2xl">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default About;
