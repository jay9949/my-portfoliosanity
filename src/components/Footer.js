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
    <div className="text-white  bg-[#19376d] flex flex-row justify-evenly w-[100vw] px-[10%] py-14 gap-3">
      {data.map((item) => (
        <>
          <div key={item._id}>
            <h2 className="text-[80px] font-bold tracking-[4px]">
              {item.title}
            </h2>
            <p className="text-[40px] tracking-[2px]">{item.name}</p>
          </div>
          <ul className="flex flex-col items-start gap-7">
            {item.content.map((links) => (
              <li className="flex items-center gap-6" key={links._id}>
                <img src={links.icon} alt="icons" className="w-[38px] mt-1" />
                <a
                  href={links.link}
                  target="blank"
                  className="text-3xl font-normal"
                >
                  {links.role}
                </a>
              </li>
            ))}
          </ul>
        </>
      ))}
    </div>
  );
};

export default Footer;
