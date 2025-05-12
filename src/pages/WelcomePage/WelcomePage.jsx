import { NavLink } from "react-router-dom";
import { BgImageWrapper } from "../../components/BgImageWrapper/BgImageWrapper";
import users from "../../images/users.avif";
import users2x from "../../images/users@2x.avif";
import s from "./WelcomePage.module.scss";
import Media from "react-media";

const WelcomePage = () => {
  return (
    <div className={s.welcomePage}>
      <Media query="(max-width: 1439px)">
        {(matches) => matches && <BgImageWrapper />}
      </Media>
      <div className={s.welcomePage__home}>
        <div className={s.welcomePage__text}>
          <p className={s.welcomePage__subtitle}>Expense log</p>
          <h1 className={s.welcomePage__title}>
            Manage Your{" "}
            <span className={s.welcomePage__titleHighlight}>Finances</span>{" "}
            Masterfully!
          </h1>
          <p className={s.welcomePage__description}>
            ExpenseTracker effortlessly empowers you to take control of your
            finances! With intuitive features, it simplifies the process of
            tracking and managing expenses, allowing for a stress-free mastery
            over your financial world.
          </p>
          <div className={s.welcomePage__buttons}>
            <NavLink to="/register" className={s.welcomePage__button_signup}>
              Sign Up
            </NavLink>
            <NavLink to="/login" className={s.welcomePage__button_signin}>
              Sign In
            </NavLink>
          </div>
        </div>
        <div className={s.welcomePage__image}>
          <picture>
            <source srcSet={`${users}, ${users2x} 2x`} type="image/avif" />
            <img className={s.welcomePage__imageMain} src={users} alt="Users" />
          </picture>
          <div className={s.welcomePage__users}>
            <h2 className={s.welcomePage__usersTitle}>1000 users +</h2>
            <p className={s.welcomePage__usersText}>
              Trusted by users for reliable expense tracking!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
