import Header from "../../components/Header/Header.jsx";
import { Outlet } from "react-router-dom";
import { BgImageWrapper } from "../../components/BgImageWrapper/BgImageWrapper.jsx";
import React, { Fragment } from "react";
import Media from "react-media";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Media query="(min-width: 1440px)">
        {(matches) => matches && <BgImageWrapper />}
      </Media>
      <Outlet />
    </>
  );
};

export default SharedLayout;
