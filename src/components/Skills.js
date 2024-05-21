import React from "react";
import sanityClient from "../client";

const query = `*[_type == "skills"] {
    _id,
    title,
    "content": content[]{
      "icon": icon.asset->url,
      "role": role
    }
  }`;
const data = await sanityClient.fetch(query);
const Skills = () => {
  return (
    <div
      className="bg-[#04152d] container mx-auto px-4 sm:px-6 lg:px-10 py-14"
      id="experience"
    >
      {data.map((item) => (
        <div key={item._id} className="mb-8">
          <h2 className="text-white text-[28px] sm:text-[35px] font-bold tracking-[1.75px] text-center sm:text-left">
            {item.title}
          </h2>
          <div className="flex flex-col sm:flex-row justify-evenly mt-8 sm:mt-4">
            <div className="w-full sm:w-[45%] flex flex-wrap justify-center sm:justify-start gap-8">
              {item.content.map((contentItem, index) => (
                <div key={index} className="flex flex-col items-center gap-3">
                  <div className="bg-[#19376d] rounded-full flex items-center justify-center w-[100px] h-[100px] sm:w-[120px] sm:h-[120px]">
                    <img
                      src={contentItem.icon}
                      alt={contentItem.role}
                      className="w-[60px] sm:w-[75px]"
                    />
                  </div>
                  <p className="text-lg sm:text-2xl font-medium text-white text-center">
                    {contentItem.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
