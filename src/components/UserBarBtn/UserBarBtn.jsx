// import React, { useEffect, useRef, useState } from "react";
// import UserPanel from "../UserPanel/UserPanel";
// import { Icon } from "../../components/Icon/Icon";
// import s from "./UserBarBtn.module.css";
// import { useSelector } from "react-redux";
// import { selectAvatarUrl, selectUser } from "../../redux/user/selectors";
// import clsx from "clsx";
// const UserBarBtn = ({ user, onOpenModal, onOpenLogoutModal }) => {
//   const [isUserPanelOpen, setIsUserPanelOpen] = useState(false);
//   const containerRef = useRef(null);
//   const avatarUrl = useSelector(selectAvatarUrl);
//   const userSelectInfo = useSelector(selectUser);
//   const toggleUserPanel = () => {
//     setIsUserPanelOpen((prevState) => !prevState);
//   };
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (containerRef.current && !containerRef.current.contains(e.target)) {
//         setIsUserPanelOpen(false);
//       }
//     };

//     if (isUserPanelOpen) {
//       document.addEventListener("click", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, [isUserPanelOpen]);

//   return (
//     <div className={s.userBarBtnContainer} ref={containerRef}>
//       <button
//         className={clsx(s.userBarBtn, isUserPanelOpen && s.open)}
//         onClick={toggleUserPanel}
//       >
//         {avatarUrl ? (
//           <img
//             className={s.userBarBtnAvatar}
//             src={`${avatarUrl}`}
//             alt="user avatar"
//           />
//         ) : (
//           <span className={s.userBarDefAvatar}>{userSelectInfo.name[0]}</span>
//         )}
//         <span className={s.userBarBtnName}>{userSelectInfo.name}</span>
//         <span className={s.userBarBtnIconWrap}>
//           <Icon className={s.userBarBtnIcon} name="up" size="20" />
//         </span>
//       </button>

//       {isUserPanelOpen && (
//         <UserPanel
//           onOpenModal={onOpenModal}
//           onOpenLogoutModal={onOpenLogoutModal}
//         />
//       )}
//     </div>
//   );
// };

// export default UserBarBtn;
import { useEffect, useRef, useState } from "react";
import UserPanel from "../UserPanel/UserPanel";
import { Icon } from "../../components/Icon/Icon";
import s from "./UserBarBtn.module.css";
import { useSelector } from "react-redux";
import { selectAvatarUrl, selectUser } from "../../redux/user/selectors";
import clsx from "clsx";

const UserBarBtn = ({ onOpenModal, onOpenLogoutModal }) => {
  const [isUserPanelOpen, setIsUserPanelOpen] = useState(false);
  const containerRef = useRef(null);

  const avatarUrl = useSelector(selectAvatarUrl);
  const userSelectInfo = useSelector(selectUser);

  const toggleUserPanel = () => setIsUserPanelOpen((prevState) => !prevState);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsUserPanelOpen(false);
      }
    };

    if (isUserPanelOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isUserPanelOpen]);

  return (
    <div className={s.userBarBtnContainer} ref={containerRef}>
      <button
        className={clsx(s.userBarBtn, isUserPanelOpen && s.open)}
        onClick={toggleUserPanel}
      >
        {avatarUrl ? (
          <img
            className={s.userBarBtnAvatar}
            src={avatarUrl}
            alt="user avatar"
          />
        ) : (
          <span className={s.userBarDefAvatar}>{userSelectInfo.name[0]}</span>
        )}
        <span className={s.userBarBtnName}>{userSelectInfo.name}</span>
        <span className={s.userBarBtnIconWrap}>
          <Icon className={s.userBarBtnIcon} name="up" size="20" />
        </span>
      </button>

      {isUserPanelOpen && (
        <UserPanel
          onOpenModal={onOpenModal}
          onOpenLogoutModal={onOpenLogoutModal}
        />
      )}
    </div>
  );
};

export default UserBarBtn;
