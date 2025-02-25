"use client";

import React from "react";
import Image from "next/image";
import SwitchTheme from "./SwitchTheme";
import Link from "next/link";
import NavMenu from "../utils/navMenu";
import Logo from "../images/logo/logo.jpg";
import { usePathname } from "next/navigation";

export default function StickySideNav() {
  const currYear = new Date().getFullYear();
  const pathname = usePathname();

  return (
    <>
      <aside className="lg:flex md:flex hidden flex-col justify-between gap-16 sticky top-0 h-screen px-8 py-12">
        <div className="flex flex-col gap-6">
          {/* <div className="logo text-5xl font-black">TJ</div> */}
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
          <div>
            <h1 className="font-extrabold">Thornthan Jomtharak</h1>
            <h4 className="text-gray-400">
              UX/UI Designer and
              <br /> Frontend Developer
            </h4>
          </div>
          <p>
            Hey, Thornthan’s here! I’m a UX/UI Designer and Web Developer
            who always inspired, fresh, and never stops learning.
          </p>
          <nav className="mt-12">
            <ul className="flex flex-col space-y-4 list-none">
              {NavMenu.map((item) => {
                const isActive = pathname === item.link; // Check if current route matches link

                return (
                  <li key={item.id}>
                    <Link
                      href={item.link}
                      className={`${
                        isActive ? "font-bold" : "opacity-75"
                      } transition-all duration-300 hover:opacity-100`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="flex justify-between items-center">
          <SwitchTheme />
          <small>© 2023 - {currYear} Thornthan J.</small>
        </div>
      </aside>
    </>
  );
}
