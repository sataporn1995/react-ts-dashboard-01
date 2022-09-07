import React from "react";

import NavbarMenu from "./NavbarMenu";
import Footer from "./Footer";

type Props = {
  children: JSX.Element;
};

const ContentWrapper: React.FC<Props> = ({ children }) => {
  return (
    <div className="no-select wrapper">
      <NavbarMenu />
      {children}
      <Footer />
    </div>
  );
}

export default ContentWrapper;
