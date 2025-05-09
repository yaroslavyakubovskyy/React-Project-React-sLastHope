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

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1280;
  const isDesktop = windowWidth >= 1280;
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
  const toggleBurger = () => setIsBurgerOpen(!isBurgerOpen);
  const closeBurger = () => setIsBurgerOpen(false);

  const toggleModal = () => {
    if (isBurgerOpen) {
      closeBurger();
    }
    setIsModalOpen((prev) => !prev);
  };
  return (
    <header>
      <Logo />

      {isLoggedIn && (
        <>
          {isDesktop && (
            <div>
              <TransactionsHistoryNav />
              <UserBarBtn user={user} onOpenModal={toggleModal} />
            </div>
          )}
          {isLoggedIn && (isMobile || isTablet) && (
            <div>
              <BurgerMenuBtn onClick={toggleBurger} />
              {isBurgerOpen && <BurgerMenu onClose={closeBurger} />}
            </div>
          )}
        </>
      )}
      {isModalOpen && <UserSetsModal user={user} onClose={toggleModal} />}
    </header>
  );
};

export default Header;
