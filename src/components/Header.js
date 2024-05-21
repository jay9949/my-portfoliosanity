"use client";
import React, { useState } from "react";
import sanityClient, { fetchDataFromSanity } from "../client";

// Fetch data from Sanity
const data = await fetchDataFromSanity();
const querylink = `*[_type == 'headerlink']{
  _id,
  name,
  link,
}`;
const datalink = await sanityClient.fetch(querylink);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#04152d] container mx-auto px-4 sm:px-6 lg:px-8">
      {data.map((list) => (
        <div className="flex justify-between items-center py-6" key={list._id}>
          <div>
            <h1 className="font-semibold text-2xl md:text-3xl text-white cursor-pointer hover:text-[#576cbc] duration-500">
              {list.label}
            </h1>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
          <div
            className={`md:flex gap-8 ${
              menuOpen ? "block" : "hidden"
            } md:block`}
          >
            {datalink.map((item) => (
              <a
                href={item.link}
                className="block text-lg md:text-[25px] text-white cursor-pointer hover:text-[#576cbc] duration-500"
                key={item._id}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Header;
