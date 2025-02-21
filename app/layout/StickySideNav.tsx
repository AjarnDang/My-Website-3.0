"use client";

import React from "react";
import SwitchTheme from "./SwitchTheme";

export default function StickySideNav() {
  const currYear = new Date().getFullYear();

  return (
    <>
      <aside className="hidden lg:flex flex-col justify-between gap-16 sticky top-0 h-screen px-8 py-12">
        <div className="flex flex-col gap-6">
          <div className="logo text-5xl font-black">TJ</div>
          <div>
            <h1 className="font-extrabold">Thornthan Jomtharak</h1>
            <h4 className="text-gray-400">
              Frontend Developer and
              <br /> UX/UI Designer
            </h4>
          </div>
          <p>
            Hey, Thornthan’s here! I’m a Web Developer and UX/UI Designer
            who always inspired, fresh, and never stops learning.
          </p>
          <nav className="mt-12">
            <ul className="flex flex-col space-y-4 list-none">
              <li>Works</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>

        <div className="flex justify-between items-center">
          <SwitchTheme />
          <small>© {currYear} - Thornthan J.</small>
        </div>
      </aside>
    </>
  );
}
