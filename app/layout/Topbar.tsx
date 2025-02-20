import React from "react";
import Image from "next/image";
import SwitchTheme from "./SwitchTheme";
import { HamburgerMenu } from "./HamburgerMenu";
import Logo from "../assets/images/logo.jpg";

export default function Topbar() {
  return (
    <header className="absolute top-0 left-0 w-full h-14 flex items-center px-0 justify-between border-b dark:border-gray-500 border-gray-400 bg-transparent">
      <div className="pl-2 mr-12">
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
      <div className="flex items-center h-full gap-2">
        <SwitchTheme />
        <a
          href="#"
          className="text-md font-bold uppercase w-fit flex h-full items-center px-5 dark:bg-blue-950 bg-blue-200 rounded-bl-xl"
        >
          CONTACT
        </a>
      </div>
    </header>
  );
}
