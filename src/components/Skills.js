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
    <div className="bg-[#04152d] container px-10 py-14">
      {data.map((item) => (
        <div key={item._id}>
          <h2 className="text-white text-[35px] pb-5 font-bold tracking-[1.75px]">
            {item.title}
          </h2>
          <div className="flex flex-row justify-evenly mt-4">
            <div className="w-[45%] flex flex-wrap gap-[37px]">
              {item.content.map((contentItem, index) => (
                <div key={index} className="flex flex-col items-center gap-3">
                  <div className="bg-[#19376d] rounded-full flex items-center justify-center w-[120px] h-[120px]">
                    <img
                      src={contentItem.icon}
                      alt={contentItem.role}
                      className="w-[75px]"
                    />
                  </div>
                  <p className="text-2xl font-medium text-white">
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
