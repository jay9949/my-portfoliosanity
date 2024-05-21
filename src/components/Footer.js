import React from "react";
import sanityClient from "../client";

const query = `*[_type == "footer"] {
    _id,
    title,
    name,
    "content": content[]{
      "icon": icon.asset->url,
      "role": role,
      "link": link,
    }
  }`;
const data = await sanityClient.fetch(query);

const Footer = () => {
  return (
    <div
      className="text-white bg-[#19376d] flex flex-col lg:flex-row justify-center lg:justify-evenly w-full px-4 sm:px-8 lg:px-[5%] py-14 gap-10 lg:gap-3"
      id="contact"
    >
      {data.map((item) => (
        <div key={item._id} className="text-center lg:text-left">
          <h2 className="text-[40px] sm:text-[50px] lg:text-[80px] font-bold tracking-[2px] lg:tracking-[4px] mb-4">
            {item.title}
          </h2>
          <p className="text-[24px] sm:text-[30px] lg:text-[40px] tracking-[1px] lg:tracking-[2px] mb-6">
            {item.name}
          </p>
          <ul className="flex flex-col items-center lg:items-start gap-7">
            {item.content.map((links) => (
              <li className="flex items-center gap-6" key={links._id}>
                <img
                  src={links.icon}
                  alt="icons"
                  className="w-[30px] sm:w-[35px] lg:w-[38px] mt-1"
                />
                <a
                  href={links.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg sm:text-2xl lg:text-3xl font-normal"
                >
                  {links.role}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Footer;
