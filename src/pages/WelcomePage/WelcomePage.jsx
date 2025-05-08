import { NavLink } from "react-router-dom";
import { Icon } from "../../components/Icon/Icon";

import { BgImageWrapper } from "../../components/BgImageWrapper/BgImageWrapper";
import users from "../../images/users.avif";
import users2x from "../../images/users@2x.avif";

import s from "./WelcomePage.module.scss";

const WelcomePage = () => {
  return (
    // ТИМЧАСОВА СЕКЦІЯ ВИДАЛИТИ НА ФІНІШІ!!!
    <section>
      <div className={s.welcomePage}>
        <BgImageWrapper />
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
              <img
                className={s.welcomePage__imageMain}
                src={users}
                alt="Users"
              />
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
      <section>
        <span>
          1__
          <Icon
            name="arrow-up"
            className={s.bgImageWrapper__iconItem1}
            size="28"
          />
        </span>
        <br />
        <span>
          2__
          <Icon
            name="arrow-down"
            className={s.bgImageWrapper__iconItem2}
            size="28"
          />
        </span>
        <br />
        <span>
          3__
          <Icon name="up" className={s.bgImageWrapper__iconItem3} size="28" />
        </span>
        <br />
        <span>
          4__
          <Icon name="down" className={s.bgImageWrapper__iconItem4} size="28" />
        </span>
        <br />
        <span>
          5__
          <Icon
            name="burger-menu"
            className={s.bgImageWrapper__iconItem5}
            size="28"
          />
        </span>
        <br />
        <span>
          6__
          <Icon
            name="user-logo"
            className={s.bgImageWrapper__iconItem6}
            size="28"
          />
        </span>
        <br />
        <span>
          7__
          <Icon name="user" className={s.bgImageWrapper__iconItem7} size="28" />
        </span>
        <br />
        <span>
          8__
          <Icon
            name="logout"
            className={s.bgImageWrapper__iconItem8}
            size="28"
          />
        </span>
        <br />
        <span>
          9__
          <Icon
            name="calendar"
            className={s.bgImageWrapper__iconItem9}
            size="28"
          />
        </span>
        <br />
        <span>
          10__
          <Icon
            name="clock"
            className={s.bgImageWrapper__iconItem10}
            size="28"
          />
        </span>
        <br />
        <span>
          11__
          <Icon
            name="search"
            className={s.bgImageWrapper__iconItem11}
            size="28"
          />
        </span>
        <br />
        <span>
          12__
          <Icon
            name="check"
            className={s.bgImageWrapper__iconItem12}
            size="28"
          />
        </span>
        <br />
        <span>
          13__
          <Icon
            name="edit"
            className={s.bgImageWrapper__iconItem13}
            size="28"
          />
        </span>
        <br />
        <span>
          14__
          <Icon name="x" className={s.bgImageWrapper__iconItem14} size="28" />
        </span>
        <br />
        <span>
          15__
          <Icon
            name="trash"
            className={s.bgImageWrapper__iconItem15}
            size="28"
          />
        </span>
        <br />
        <span>
          16__
          <Icon
            name="eye-on"
            className={s.bgImageWrapper__iconItem16}
            size="28"
          />
        </span>
        <br />
        <span>
          17__
          <Icon
            name="eye-off"
            className={s.bgImageWrapper__iconItem17}
            size="28"
          />
        </span>
        <br />
        <span>
          18__
          <Icon
            name="error"
            className={s.bgImageWrapper__iconItem18}
            size="28"
          />
        </span>
        <br />
        <span>
          19__
          <Icon
            name="success"
            className={s.bgImageWrapper__iconItem19}
            size="28"
          />
        </span>
        <br />
        <span>
          20__
          <Icon
            name="close"
            className={s.bgImageWrapper__iconItem20}
            size="28"
          />
        </span>
        <br />
        <span>
          0__
          <Icon
            name="default"
            className={s.bgImageWrapper__iconItem0}
            size="28"
          />
        </span>
        <br />
      </section>
    </section>
  );
};

export default WelcomePage;
