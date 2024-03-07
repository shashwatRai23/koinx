"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  const [active, setActive] = useState(false);

  return (
    <nav className="flex justify-between bg-white px-5 py-3 items-center">
      <Link href={"/"}>
        <img src="/assets/logo.svg" alt="logo" />
      </Link>
      {/* Desktop Navbar */}
      <div className="flex gap-5 font-bold items-center nav">
        <Link href={""}>Crypto Taxes</Link>
        <Link href={""}>Free Tools</Link>
        <Link href={""}>Resource center</Link>
        <Link className="getStarted" href={"/getstarted"}>
          Get Started
        </Link>
      </div>

      {/* Mobile Navbar */}
      <div className="mobileNav">
        <GiHamburgerMenu
          className="cursor-pointer"
          onClick={() => setActive((prevState) => !prevState)}
        />
        {active && (
          <div className="absolute bg-white top-[40px] px-3 py-2 rounded-md right-[0px] flex flex-col w-fit gap-5 font-bold items-center">
            <Link href={""}>Crypto Taxes</Link>
            <Link href={""}>Free Tools</Link>
            <Link href={""}>Resource center</Link>
            <Link className="getStarted" href={"/getstarted"}>
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
