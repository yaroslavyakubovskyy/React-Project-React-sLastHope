import React, { useState } from "react";
import UserPanel from "../UserPanel/UserPanel";
import { Icon } from "../../components/Icon/Icon";
import s from "./UserBarBtn.module.css";
import { useSelector } from "react-redux";
import { selectAvatarUrl, selectUser } from "../../redux/user/selectors";
const UserBarBtn = ({ user, onOpenModal }) => {
  const [isUserPanelOpen, setIsUserPanelOpen] = useState(false);
  const avatarUrl = useSelector(selectAvatarUrl);
  const userSelectInfo = useSelector(selectUser);
  const toggleUserPanel = () => {
    setIsUserPanelOpen((prevState) => !prevState);
  };
  return (
    <div className={s.userBarBtnContainer} onClick={toggleUserPanel}>
      <button className={s.userBarBtn}>
        {user.avatarUrl ? (
          <img src={`${avatarUrl}`} alt="user avatar" width={44} />
        ) : (
          <span>{userSelectInfo.name[0].toUpperCase()}</span>
        )}
        <span className={s.userBarBtnName}>{userSelectInfo.name}</span>
        <span>
          <Icon className={s.userBarBtnIcon} name="up" size="20" />
        </span>
      </button>

      {isUserPanelOpen && <UserPanel onOpenModal={onOpenModal} />}
    </div>
  );
};

export default UserBarBtn;
