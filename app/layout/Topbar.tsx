import React from "react";
import Image from "next/image";
import Link from "next/link";
import SwitchTheme from "./SwitchTheme";
import { HamburgerMenu } from "./HamburgerMenu";
import Logo from "../images/logo/logo.jpg";

export default function Topbar() {
  return (
    <header className="topbar fixed top-0 left-0 w-full h-20 lg:hidden md:hidden flex items-center justify-between border-b border-theme px-4 z-50">
      <div>
        <HamburgerMenu />
      </div>
      <div>
        <Link href="/home">
          <Image
            className="h-12 w-12 object-cover rounded-full"
            src={Logo}
            alt="Logo"
            width={0}
            height={0}
            priority
          />
        </Link>
      </div>
      <div className="flex items-center h-full gap-2">
        <SwitchTheme />
      </div>
    </header>
  );
}
