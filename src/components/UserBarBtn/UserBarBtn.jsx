import React, { useState } from "react";
import UserPanel from "../UserPanel/UserPanel";
import { Icon } from "../../components/Icon/Icon";
import s from "./UserBarBtn.module.css";
const UserBarBtn = ({ user, onOpenModal }) => {
  const [isUserPanelOpen, setIsUserPanelOpen] = useState(false);

  const toggleUserPanel = () => {
    setIsUserPanelOpen((prevState) => !prevState);
  };
  console.log(user.avatarUrl);

  return (
    <div className={s.userBarBtnContainer} onClick={toggleUserPanel}>
      <button className={s.userBarBtn}>
        <div
          className={s.userAvatar}
          style={{
            backgroundImage: user?.avatarUrl
              ? `url(${user.avatarUrl})`
              : undefined,
          }}
        >
          {!user?.avatarUrl && user?.name?.[0]}
        </div>
        <span className={s.userBarBtnName}>{user?.name}</span>
        <span>
          <Icon className={s.userBarBtnIcon} name="up" size="20" />
        </span>
      </button>

      {isUserPanelOpen && <UserPanel onOpenModal={onOpenModal} />}
    </div>
  );
};

export default UserBarBtn;
