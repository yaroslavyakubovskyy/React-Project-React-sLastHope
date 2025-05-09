import React, { useState } from "react";
import UserPanel from "../UserPanel/UserPanel";
import { Icon } from "../../components/Icon/Icon";
import s from "./UserBarBtn.module.css";
const UserBarBtn = ({ user, onOpenModal }) => {
  const [isUserPanelOpen, setIsUserPanelOpen] = useState(false);

  const toggleUserPanel = () => {
    setIsUserPanelOpen((prevState) => !prevState);
  };

  return (
    <div className="user-bar-btn" onClick={toggleUserPanel}>
      <button>
        {user?.avatarUrl ? (
          <img
            className={s.userAvatar}
            src={user.avatarUrl}
            alt="user avatar"
          />
        ) : (
          user?.name?.[0]
        )}
        <span>{user?.name}</span>
        <span>
          <Icon className={s.userBarBtnIcon} name="up" size="45" />
        </span>
      </button>

      {isUserPanelOpen && <UserPanel onOpenModal={onOpenModal} />}
    </div>
  );
};

export default UserBarBtn;
