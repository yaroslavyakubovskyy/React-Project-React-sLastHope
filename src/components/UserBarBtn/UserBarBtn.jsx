import React, { useState } from "react";
import UserPanel from "../UserPanel/UserPanel";
import { Icon } from "../../components/Icon/Icon";

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
      <span>
        <Icon name="up" size="28" />
      </span>
      {isUserPanelOpen && <UserPanel onOpenModal={onOpenModal} />}
    </div>
  );
};

export default UserBarBtn;
