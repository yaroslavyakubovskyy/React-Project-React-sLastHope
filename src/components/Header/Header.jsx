import React, { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import TransactionsHistoryNav from "../TransactionsHistoryNav/TransactionsHistoryNav";
import UserBarBtn from "../UserBarBtn/UserBarBtn";
import BurgerMenuBtn from "../BurgerMenuBtn/BurgerMenuBtn";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";
import UserSetsModal from "../UserSetsModal/UserSetsModal";
import s from "./Header.module.css";
import clsx from "clsx";
const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useSelector((state) => state.auth.user);
  // const user = useSelector((state) => ({
  //   name: state.auth.name,
  //   avatarUrl: state.auth.avatarUrl,
  // }));
  //

  console.log("user from state:", user);
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1440;
  const isDesktop = windowWidth >= 1440;
  const handleOpenModal = () => setIsModalOpen(true);
  // const handleCloseModal = () => setIsModalOpen(false);
  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      setWindowWidth((prevWidth) =>
        prevWidth !== currentWidth ? currentWidth : prevWidth
      );
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const toggleBurger = () => {
    if (isModalOpen) return;
    setIsBurgerOpen(!isBurgerOpen);
  };
  const closeBurger = () => setIsBurgerOpen(false);

  const toggleModal = () => {
    if (isBurgerOpen) {
      setIsBurgerOpen(false);
    }
    setIsModalOpen(!isModalOpen);
    // setIsModalOpen((prev) => !prev);
  };
  return (
    <div className={s.headerContainer}>
      <header
        className={clsx(
          s.header,
          isLoggedIn ? (isDesktop ? s.authDesktop : s.authMobile) : s.guest
        )}
      >
        <Logo />
        {isLoggedIn && (
          <>
            {isDesktop && (
              <>
                <TransactionsHistoryNav />
                <UserBarBtn user={user} onOpenModal={toggleModal} />
              </>
            )}
            {isLoggedIn && (isMobile || isTablet) && (
              <div>
                <BurgerMenuBtn onClick={toggleBurger} />
                {isBurgerOpen && (
                  <BurgerMenu
                    onClose={closeBurger}
                    onOpenModal={handleOpenModal}
                  />
                )}
              </div>
            )}
          </>
        )}
        {isModalOpen && <UserSetsModal user={user} onClose={toggleModal} />}
      </header>
    </div>
  );
};

export default Header;
