import { Icon } from "../Icon/Icon";
import s from "./BurgerMenuBtn.module.css";
const BurgerMenuBtn = ({ onClick }) => {
  return (
    <button className={s.burgerMenuBtn} onClick={onClick}>
      <Icon
        name="burger-menu"
        className={s.bgImageWrapper__iconItem5}
        size="100%"
      />
    </button>
  );
};

export default BurgerMenuBtn;
