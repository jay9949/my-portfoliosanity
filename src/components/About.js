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
    <section className="container bg-[#04152d] px-10 pt-8" id="about">
      <h2 className="text-white text-[35px] font-bold tracking-[1.75px]">
        {aboutData?.title}
      </h2>
      {aboutData?.content && (
        <div className="flex" key={aboutData._id}>
          {aboutData.content.map((item) => (
            <div className="flex" key={item._id}>
              <div className="">
                {item.image && (
                  <img src={item.image} alt="Img" className="w-[90%]" />
                )}
              </div>
              <div className=" pt-12 pr-10">
                {item.icon && (
                  <>
                    <div className=" flex justify-center" key={item._id}>
                      <img
                        src={item.icon}
                        alt="Icon"
                        className="items-center"
                      />
                    </div>
                    <h3 className="font-semibold text-2xl pb-6 text-white text-center">
                      {item.role}
                    </h3>
                  </>
                )}
                <div className="text-white text-center">
                  <p className="text-2xl">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default About;
