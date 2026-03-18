"use client";

import React, { useState } from "react";
import UxuiWorks from "./uxuiWork";
import DevWork from "./devWork";
import WorkNav from "./WorkNav";

export default function Page() {
  const [activeTab, setActiveTab] = useState("uxui-works");

  return (
    <div className="relative flex flex-col">
      <WorkNav activeTab={activeTab} onTabChange={setActiveTab} />
      <div>
        {activeTab === "uxui-works" && (
          <div
            id="uxui-works-panel"
            role="tabpanel"
            aria-labelledby="uxui-works-tab"
            className="min-h-screen flex justify-start items-start"
          >
            <UxuiWorks />
          </div>
        )}
        {activeTab === "dev-works" && (
          <div
            id="dev-works-panel"
            role="tabpanel"
            aria-labelledby="dev-works-tab"
            className="min-h-screen flex justify-start items-start"
          >
            <DevWork />
          </div>
        )}
      </div>
    </div>
  );
}
