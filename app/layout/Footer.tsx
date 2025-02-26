import React from "react";

export default function Footer() {
  const currYear = new Date().getFullYear();

  return (
    <div className="md:hidden flex justify-center items-center py-6 mt-6 border-t border-neutral-300">
      <small>© 2023 - {currYear} Thornthan J.</small>
    </div>
  );
}
