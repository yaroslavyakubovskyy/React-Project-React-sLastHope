import UserSetsModal from "../UserSetsModal/UserSetsModal";
import s from "./UserPanel.module.css";
import { Icon } from "../Icon/Icon";
import clsx from "clsx";
const UserPanel = ({ onOpenModal, onOpenLogoutModal }) => {
  return (
    <ul className={s.userPanel}>
      <li>
        <button className={s.userPanelBtn} onClick={onOpenModal}>
          <span>
            <Icon
              name="user"
              className={clsx(s.bgImageWrapper__iconItem7, s.userPanelIcon)}
              size="16"
            />
          </span>
          Profile settings
        </button>
      </li>
      <button className={s.userPanelBtn} onClick={onOpenLogoutModal}>
        <span>
          <Icon
            name="logout"
            className={clsx(s.bgImageWrapper__iconItem8, s.userPanelIcon)}
            size="16"
          />
        </span>
        Log out
      </button>
    </ul>
  );
};

export default UserPanel;
