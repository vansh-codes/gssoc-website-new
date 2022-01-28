/*  ./components/Navbar.js     */
// import { useTheme } from "next-themes";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import useDarkMode from "../useDarkmode";
import ThemeChanger from "./Toggler";
import Link from "next/link";
// import { useState } from "react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export const Navbar = () => {
  // const [colorTheme, setTheme] = useDarkMode();
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <nav className="flex items-center transition-colors flex-wrap bg-white drop-shadow-xl p-1 justify-center mb-24 dark:bg-slate-800 dark:text-primary_orange-0 dark:transition-colors">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 ">
            <span className="text-xl text-orange font-bold uppercase tracking-wide  ml-8">
              {/* <img
                src="https://user-images.githubusercontent.com/64256342/151362487-b8574a92-6d37-418b-8c97-03ba3470f4fa.png"
                alt=""
                width="36"
                height="36"
              /> */}
              {theme === "light" ? (
                <img
                  src="https://user-images.githubusercontent.com/64256342/151362487-b8574a92-6d37-418b-8c97-03ba3470f4fa.png"
                  alt="logo"
                />
              ) : (
                <img
                  src="https://user-images.githubusercontent.com/64256342/151406017-3c029548-2b21-47a6-b81c-0bcb24310e77.png"
                  alt="logo"
                />
              )}
            </span>
          </a>
        </Link>
        {/* {colorTheme === "light" ? (
          <img
            src="https://user-images.githubusercontent.com/64256342/151415459-adf26d5f-ad89-4a4a-85b4-477ee85d0b61.png"
            onClick={() => setTheme("light")}
            className="h-6 w-6 block ml-auto lg:hidden"
          />
        ) : (
          <img
            src="https://user-images.githubusercontent.com/64256342/151416170-51c1f8ec-28bd-41b0-bf9c-837509e5460e.png"
            onClick={() => setTheme("dark")}
            className="h-6 w-6 block ml-auto lg:hidden"
          />
        )} */}
        <button
          className=" inline-flex p-3 hover:bg-orange-600 rounded lg:hidden text-grey-800 ml-auto hover:text-grey-800 outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto text-center mr-8`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center content-center items-start  flex flex-col lg:h-auto mr-3.5">
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 text-center rounded text-grey-800 text-1xl  mr-3.5">
                ABOUT
              </a>
            </Link>
            <Link href="/schedule">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 text-center rounded text-grey-800 text-1xl  mr-3.5">
                SCHEDULE
              </a>
            </Link>
            <Link href="/project">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2  text-center rounded text-grey-800 text-1xl  mr-3.5">
                PROJECT
              </a>
            </Link>
            <Link href="/faq">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 text-center rounded text-grey-800 text-1xl  mr-3.5">
                FAQ
              </a>
            </Link>
            <Link href="/team">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 text-center rounded text-grey-800 text-1xl  mr-3.5">
                TEAM
              </a>
            </Link>
            <a
              href="#Contact"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 mr-30 text-center rounded text-grey-800 text-1xl  mr-3.5"
            >
              CONTACT
            </a>
            <ThemeChanger />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
