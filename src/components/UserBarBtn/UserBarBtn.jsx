import React, { useState } from "react";
import UserPanel from "../UserPanel/UserPanel";

const UserBarBtn = ({ user, onOpenModal }) => {
  const [isUserPanelOpen, setIsUserPanelOpen] = useState(false);

  const toggleUserPanel = () => {
    setIsUserPanelOpen((prevState) => !prevState);
  };

  return (
    <div className="user-bar-btn" onClick={toggleUserPanel}>
      <span className="avatar">
        {user?.avatar ? (
          <img src={user.avatar} alt="user avatar" />
        ) : (
          user?.name[0]
        )}
      </span>
      <span>{user?.name}</span>
      <span>{isUserPanelOpen ? "↑" : "↓"}</span>
      {isUserPanelOpen && <UserPanel onOpenModal={onOpenModal} />}
    </div>
    // <div className="user-bar-btn" onClick={toggleUserPanel}>
    //   <span className="avatar">
    //     {
    //       user?.name
    //         ? user.name[0].toUpperCase() // Перевірка, що name є, перед викликом toUpperCase
    //         : "?" // або якийсь інший запасний символ, якщо name відсутнє
    //     }
    //   </span>
    //   <span>{user?.name || "Anonymous"}</span> {/* Теж перевірка для name */}
    //   <span>{isUserPanelOpen ? "↑" : "↓"}</span>
    //   {isUserPanelOpen && <UserPanel onOpenModal={onOpenModal} />}
    // </div>
  );
};

export default UserBarBtn;
