// "use client";
// import React from "react";
// import sanityClient, { fetchDataFromSanity } from "../client";

// const data = await fetchDataFromSanity();
// const querylink = `*[_type == 'headerlink']{
//   _id,
//   name,
//    link,
// }`;

// const datalink = await sanityClient.fetch(querylink);

// const Header = () => {
//   return (
//     <div className="bg-[#04152d] container">
//       {data.map((list) => {
//         return (
//           <div className="flex justify-between px-10 py-6" key={list._id}>
//             <div>
//               <h1 className="font-semibold text-3xl text-white cursor-pointer hover:text-[#576cbc] duration-500">
//                 {list.label}
//               </h1>
//             </div>
//             <div className="flex gap-8">
//               {datalink.map((item) => (
//                 <a
//                   href={item.link}
//                   className="text-[25px] text-white cursor-pointer hover:text-[#576cbc] duration-500"
//                   key={item._id}
//                 >
//                   {item.name}
//                 </a>
//               ))}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Header;

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
    <div className="bg-[#04152d] container mx-auto px-4 sm:px-6 lg:px-8">
      {data.map((list) => {
        return (
          <div
            className="flex flex-col md:flex-row justify-between px-4 py-6"
            key={list._id}
          >
            <div className="mb-4 md:mb-0">
              <h1 className="font-semibold text-2xl md:text-3xl text-white cursor-pointer hover:text-[#576cbc] duration-500">
                {list.label}
              </h1>
            </div>
            <div className="flex flex-wrap gap-4 md:gap-8">
              {datalink.map((item) => (
                <a
                  href={item.link}
                  className="text-lg md:text-[25px] text-white cursor-pointer hover:text-[#576cbc] duration-500"
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
