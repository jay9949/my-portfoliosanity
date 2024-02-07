import React from "react";
import sanityClient from "../client";

const query = ` *[_type == "projects"] {
    _id,
    title,
    "content": content[]{
      "image": image.asset->url,
      "role": role,
      "description": description,
      "demo": demo,
      "source": source,
    }
  }`;
const datalink = await sanityClient.fetch(query);

const Projects = () => {
  return (
    <div className="container bg-[#04152d] px-10 py-14">
      {datalink.map((item) => (
        <>
          <h1
            key={item._id}
            className="text-white text-[35px] font-bold tracking-[1.75px]"
          >
            {item.title}
          </h1>
          <div className="flex flex-row mt-9 flex-wrap items-center justify-center gap-4 w-full">
            {item.content.map((list) => (
              <>
                <div
                  className="flex flex-col rounded-xl projects"
                  key={list._id}
                >
                  <img src={list.image} alt="car-rental" className="mb-6" />
                  <h3 className="text-2xl font-bold text-white">{list.role}</h3>
                  <p className="mt-2 text-2xl font-normal text-white">
                    {list.description}
                  </p>
                  <div className="w-full mt-6 flex ml-4">
                    <a
                      href={list.demo.link}
                      className="mr-12 text-white text-2xl font-medium bg-[#576cbc] py-[1px] px-5 rounded-[100px]"
                      target="blank"
                    >
                      {list.demo.text}
                    </a>
                    <a
                      href={list.source.link}
                      className="mr-12 text-white text-2xl font-medium bg-[#576cbc] py-[1px] px-5 rounded-[100px]"
                      target="blank"
                    >
                      {list.source.text}
                    </a>
                  </div>
                </div>
              </>
            ))}
          </div>
        </>
      ))}
    </div>
  );
};

export default Projects;
