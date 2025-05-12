// import React, { useEffect, useState } from "react";
// import Logo from "../Logo/Logo";
// import TransactionsHistoryNav from "../TransactionsHistoryNav/TransactionsHistoryNav";
// import UserBarBtn from "../UserBarBtn/UserBarBtn";
// import BurgerMenuBtn from "../BurgerMenuBtn/BurgerMenuBtn";
// import BurgerMenu from "../BurgerMenu/BurgerMenu";
// import { useDispatch, useSelector } from "react-redux";
// import { selectIsLoggedIn } from "../../redux/auth/selectors";
// import { Navigate } from "react-router-dom";
// import UserSetsModal from "../UserSetsModal/UserSetsModal";
// import s from "./Header.module.css";
// import clsx from "clsx";
// import { selectUser } from "../../redux/user/selectors";
// import { logOut } from "../../redux/auth/operations";
// import LogoutConfirmModal from "../LogoutConfirmModal/LogoutConfirmModal";
// const Header = () => {
//   //
//   const dispatch = useDispatch();
//   //
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   const [isBurgerOpen, setIsBurgerOpen] = useState(false);
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   //
//   const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
//   //
//   const user = useSelector(selectUser);
//   // const user = useSelector((state) => ({
//   //   name: state.auth.name,
//   //   avatarUrl: state.auth.avatarUrl,
//   // }));
//   //

//   const isMobile = windowWidth < 768;
//   const isTablet = windowWidth >= 768 && windowWidth < 1440;
//   const isDesktop = windowWidth >= 1440;
//   const handleOpenModal = () => setIsModalOpen(true);
//   // const handleCloseModal = () => setIsModalOpen(false);
//   useEffect(() => {
//     const handleResize = () => {
//       const currentWidth = window.innerWidth;
//       setWindowWidth((prevWidth) =>
//         prevWidth !== currentWidth ? currentWidth : prevWidth
//       );
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
//   const toggleBurger = () => {
//     if (isModalOpen) return;
//     setIsBurgerOpen(!isBurgerOpen);
//   };
//   const closeBurger = () => setIsBurgerOpen(false);

//   const toggleModal = () => {
//     if (isBurgerOpen) {
//       setIsBurgerOpen(false);
//     }
//     setIsModalOpen(!isModalOpen);
//     // setIsModalOpen((prev) => !prev);
//   };
//   //
//   const openLogoutModal = () => {
//     setIsBurgerOpen(false);
//     setIsLogoutModalOpen(true);
//   };
//   const closeLogoutModal = () => setIsLogoutModalOpen(false);
//   const confirmLogout = () => {
//     dispatch(logOut());
//     closeLogoutModal();
//   };
//   //

//   return (
//     <div className={s.headerContainer}>
//       <header
//         className={clsx(
//           s.header,
//           isLoggedIn ? (isDesktop ? s.authDesktop : s.authMobile) : s.guest
//         )}
//       >
//         <Logo />
//         {isLoggedIn && (
//           <>
//             {isDesktop && (
//               <>
//                 <TransactionsHistoryNav />
//                 <UserBarBtn
//                   user={user}
//                   onOpenModal={toggleModal}
//                   onOpenLogoutModal={openLogoutModal}
//                 />
//               </>
//             )}
//             {isLoggedIn && (isMobile || isTablet) && (
//               <div>
//                 <BurgerMenuBtn onClick={toggleBurger} />
//                 {isBurgerOpen && (
//                   <BurgerMenu
//                     isBurgerOpen={isBurgerOpen}
//                     onClose={closeBurger}
//                     onOpenModal={handleOpenModal}
//                     onOpenLogoutModal={openLogoutModal}
//                   />
//                 )}
//               </div>
//             )}
//           </>
//         )}
//         {isModalOpen && <UserSetsModal user={user} onClose={toggleModal} />}
//         {isLogoutModalOpen && (
//           <LogoutConfirmModal
//             onConfirm={confirmLogout}
//             onCancel={closeLogoutModal}
//           />
//         )}
//       </header>
//     </div>
//   );
// };

// export default Header;
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import clsx from "clsx";

import Logo from "../Logo/Logo";
import TransactionsHistoryNav from "../TransactionsHistoryNav/TransactionsHistoryNav";
import UserBarBtn from "../UserBarBtn/UserBarBtn";
import BurgerMenuBtn from "../BurgerMenuBtn/BurgerMenuBtn";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import UserSetsModal from "../UserSetsModal/UserSetsModal";
import LogoutConfirmModal from "../LogoutConfirmModal/LogoutConfirmModal";

import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { selectUser } from "../../redux/user/selectors";
import { logOut } from "../../redux/auth/operations";

import s from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1440;
  const isDesktop = windowWidth >= 1440;

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
    if (!isModalOpen) {
      setIsBurgerOpen((prev) => !prev);
    }
  };

  const closeBurger = () => setIsBurgerOpen(false);

  const toggleModal = () => {
    if (isBurgerOpen) closeBurger();
    setIsModalOpen((prev) => !prev);
  };

  const handleOpenModal = () => setIsModalOpen(true);

  const openLogoutModal = () => {
    closeBurger();
    setIsLogoutModalOpen(true);
  };

  const closeLogoutModal = () => setIsLogoutModalOpen(false);

  const confirmLogout = () => {
    dispatch(logOut());
    closeLogoutModal();
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
                <UserBarBtn
                  user={user}
                  onOpenModal={toggleModal}
                  onOpenLogoutModal={openLogoutModal}
                />
              </>
            )}
            {(isMobile || isTablet) && (
              <div>
                <BurgerMenuBtn onClick={toggleBurger} />
                {isBurgerOpen && (
                  <BurgerMenu
                    isBurgerOpen={isBurgerOpen}
                    onClose={closeBurger}
                    onOpenModal={handleOpenModal}
                    onOpenLogoutModal={openLogoutModal}
                  />
                )}
              </div>
            )}
          </>
        )}
        {isModalOpen && <UserSetsModal user={user} onClose={toggleModal} />}
        {isLogoutModalOpen && (
          <LogoutConfirmModal
            onConfirm={confirmLogout}
            onCancel={closeLogoutModal}
          />
        )}
      </header>
    </div>
  );
};

export default Header;
