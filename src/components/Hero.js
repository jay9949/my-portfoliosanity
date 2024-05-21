import React from "react";
import sanityClient from "../client";

const query = `*[_type == "hero"]{
  _id,
  title,
  "hero_image": hero_image.asset->url, 
  hero_description,
  role,
  link,
  alt,
}`;
const datalink = await sanityClient.fetch(query);
const Hero = () => {
  return (
    <div className="container pb-8 bg-[#04152d] mx-auto px-4 md:pt-0 pt-4 sm:px-6 lg:px-8">
      {datalink.map((item) => (
        <div
          key={item._id}
          className="flex flex-col md:flex-row px-4 sm:px-10 justify-center items-center md:items-start md:justify-between space-y-8 md:space-y-0 md:space-x-8"
        >
          <div className="ml-0 md:ml-8 text-center md:text-left">
            <h5 className="text-[40px] sm:text-[50px] md:text-[70px] font-extrabold roboto text-white mb-4 md:mb-8">
              {item.title}
            </h5>
            <p className="text-white text-lg sm:text-2xl md:text-3xl font-medium pb-6 md:pb-10 w-full md:w-[85%]">
              {item.hero_description}
            </p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-[#576cbc] text-lg sm:text-xl font-medium px-6 py-4 rounded-full hover:bg-[#384784] duration-500"
            >
              {item.role}
            </a>
          </div>
          <img
            src={item.hero_image}
            alt={item.alt}
            className="!w-full md:w-auto heroImg"
          />
        </div>
      ))}
    </div>
  );
};

export default Hero;
