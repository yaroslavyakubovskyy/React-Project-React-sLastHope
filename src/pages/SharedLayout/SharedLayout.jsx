import Header from "../../components/Header/Header.jsx";
import { Outlet } from "react-router-dom";
import { BgImageWrapper } from "../../components/BgImageWrapper/BgImageWrapper.jsx";
import React, { Fragment } from "react";
import Media from "react-media";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors.js";

const SharedLayout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <Header />
      {!isLoggedIn && (
        <Media query="(min-width: 1440px)">
          {(matches) => matches && <BgImageWrapper />}
        </Media>
      )}
      <Outlet />
    </>
  );
};

export default SharedLayout;
