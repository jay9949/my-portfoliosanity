"use client";
import React from "react";
import sanityClient, { fetchDataFromSanity } from "../client";

const data = await fetchDataFromSanity();
const querylink = `*[_type == 'headerlink']{
  _id,
  name,
   link,
}`;

const datalink = await sanityClient.fetch(querylink);

const Header = () => {
  return (
    <div className="bg-[#04152d] container">
      {data.map((list) => {
        return (
          <div className="flex justify-between px-10 py-6" key={list._id}>
            <div>
              <h1 className="font-semibold text-3xl text-white cursor-pointer hover:text-[#576cbc] duration-500">
                {list.label}
              </h1>
            </div>
            <div className="flex gap-8">
              {datalink.map((item) => (
                <a
                  href={item.link}
                  className="text-[25px] text-white cursor-pointer hover:text-[#576cbc] duration-500"
                  key={item._id}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Header;
