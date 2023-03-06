import React, { ReactNode } from "react";

import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-screen w-full overflow-auto ">
      <Navbar />
      <div className="h-full w-full overflow-auto bg-[#EBECF1]">{children}</div>
    </div>
  );
};

export default Layout;
