"use client";

import Link from "next/link";
import { links } from "./";
import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  return (
    <>
      {links.map((link, index) => (
        <div key={index} className="relative">
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="text-xl md:hidden inline">
                {heading === link.name ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <IoIosArrowDown />
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div
                  className={`absolute top-20 hidden group-hover:md:block hover:md:block ${index > links.length / 2 ? "right-0" : ""}`}
                >
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute 
                mt-1 bg-white rotate-45 shadow-lg"
                    ></div>
                  </div>
                  <div className="bg-white p-5 flex flex-wrap gap-10 shadow-lg">
                    {link.sublinks.map((mysublinks, subIndex) => (
                      <div key={subIndex}>
                        <h1 className="text-lg font-semibold">
                          {mysublinks.Head}
                        </h1>
                        <ul>
                          {mysublinks.sublink.map((slink, subSlinkIndex) => (
                            <li key={subSlinkIndex} className="text-sm text-gray-600 my-2.5">
                              <Link
                                href={slink.link}
                                className="hover:text-primary"
                              >
                                {slink.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
        ${heading === link.name ? "md:hidden" : "hidden"}
      `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks, subLinkIndex) => (
              <div key={subLinkIndex}>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center"
                  >
                    {slinks.Head}

                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      {subHeading === slinks.Head ? (
                        <IoIosArrowUp />
                      ) : (
                        <IoIosArrowDown />
                      )}
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink, innerSubLinkIndex) => (
                      <li key={innerSubLinkIndex} className="py-3 pl-14">
                        <Link href={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
