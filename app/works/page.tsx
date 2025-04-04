import React from "react";
import UxuiWorks from "./uxuiWork";
import DevWork from "./devWork";
import WorkNav from "./WorkNav";

export default function page() {
  return (
    <div className="relative lg:flex lg:flex-col flex-row">
      <WorkNav /> {/* Sticky navigation bullets */}
      <div
        id="uxui-works"
        className="min-h-screen flex justify-start items-start"
      >
        <UxuiWorks />
      </div>
      <div
        id="dev-works"
        className="min-h-screen flex justify-start items-start"
      >
        <DevWork />
      </div>
    </div>
  );
}
