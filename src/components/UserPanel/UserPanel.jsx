import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import s from "./UserPanel.module.css";
import { logOut } from "../../redux/auth/operations.js";
const UserPanel = ({ onOpenModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <div className={s.userPanel}>
      <button className={s.userPanelBtn} onClick={onOpenModal}>
        Profile settings
      </button>
      <button className={s.userPanelBtn} onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
};

export default UserPanel;
