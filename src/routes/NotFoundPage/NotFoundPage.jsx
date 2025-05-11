import s from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.wrapper__code}>
        <span className={s.wrapper__codeNumber}>4</span>
        <div className={s.wrapper__loader}>
          <svg
            className={s.wrapper__spinner}
            viewBox="0 0 120 120"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className={s["wrapper__circle--one"]}
              cx="60"
              cy="60"
              r="40"
            />
            <circle
              className={s["wrapper__circle--two"]}
              cx="60"
              cy="60"
              r="40"
            />
            <circle
              className={s["wrapper__circle--three"]}
              cx="60"
              cy="60"
              r="40"
            />
            <g>
              <circle
                className={s["wrapper__dot--one"]}
                cx="45"
                cy="70"
                r="5"
              />
              <circle
                className={s["wrapper__dot--two"]}
                cx="60"
                cy="70"
                r="5"
              />
              <circle
                className={s["wrapper__dot--three"]}
                cx="75"
                cy="70"
                r="5"
              />
            </g>
          </svg>
        </div>
        <span className={s.wrapper__codeNumber}>4</span>
      </div>
      <h1 className={`${s.wrapper__title} ${s["wrapper__title--glitch"]}`}>
        ERROR
      </h1>
      <p className={`${s.wrapper__subtitle} ${s["wrapper__subtitle--glitch"]}`}>
        PAGE NOT FOUND
      </p>
      <button
        className={s.wrapper__button}
        onClick={() => (window.location.href = "/")}
      >
        Back to Home
      </button>
    </div>
  );
};

export default NotFoundPage;
