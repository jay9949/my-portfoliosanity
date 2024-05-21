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
    <div className="container pb-8 bg-[#04152d]">
      {datalink.map((item) => (
        <div key={item._id} className="flex px-10 justify-center items-center">
          <div className="ml-8">
            <h5 className="text-[70px] font-extrabold roboto text-white mb-8 hero">
              {item.title}
            </h5>
            <p className="text-white w-[85%] text-3xl font-medium pb-10">
              {item.hero_description}
            </p>
            <a
              href={item.link}
              target="blank"
              className="text-white bg-[#576cbc] text-xl font-medium px-6 py-4 rounded-full hover:bg-[#384784] duration-500"
            >
              {item.role}
            </a>
          </div>
          <img src={item.hero_image} alt={item.alt} className="heroImg" />
        </div>
      ))}
    </div>
  );
};

export default Hero;
