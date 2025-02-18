import React from "react";
import Image from "next/image";

import { HamburgerMenu } from "./HamburgerMenu";
import Logo from "../assets/images/logo.jpg";

export default function Topbar() {
  return (
    <header className="absolute top-0 left-0 w-full h-14 flex items-center px-0 justify-between border-b border-gray-300 bg-transparent">
      <div className="pl-2 mr-8">
        <HamburgerMenu />
      </div>
      <div>
        <Image
          className="h-12 w-12 object-cover rounded-full"
          src={Logo}
          alt="Logo"
          width={0}
          height={0}
          priority
        />
      </div>
      <a
        href="#"
        className="text-md font-bold uppercase w-fit flex h-full items-center px-5 bg-transparent"
      >
        CONTACT
      </a>
    </header>
  );
}
