import React from "react";

interface ILoginProps {
  children: any;
}

const Layout = ({ children }: ILoginProps) => {
  return <div className="Layout">{children}</div>;
};

export default Layout;
