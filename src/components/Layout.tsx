import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-screen w-full overflow-auto ">
      <div className="h-full w-full overflow-auto bg-color2">{children}</div>
    </div>
  );
};

export default Layout;
