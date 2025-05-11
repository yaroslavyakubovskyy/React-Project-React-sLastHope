import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../redux/auth/slice";
import UserSetsModal from "../UserSetsModal/UserSetsModal";
import s from "./UserPanel.module.css";
const UserPanel = ({ onOpenModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logOut());
    navigate("/");
  };
  return (
    <div className={s.userPanel}>
      <button className={s.userPanelBtn} onClick={onOpenModal}>
        <span>
          <Icon name="user" className={s.bgImageWrapper__iconItem7} size="16" />
        </span>
        Profile settings
      </button>
      <button className={s.userPanelBtn} onClick={handleLogout}>
        <span>
          <Icon
            name="logout"
            className={s.bgImageWrapper__iconItem8}
            size="16"
          />
        </span>
        Log out
      </button>
    </div>
  );
};

export default UserPanel;
