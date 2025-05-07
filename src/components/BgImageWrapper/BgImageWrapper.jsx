import React, { useState, useRef, useEffect, useCallback } from "react";
import { Icon } from "../Icon/Icon";
import {
  randomNumber,
  randomPercentage,
} from "../../pages/WelcomePage/getRandomNumber";
import s from "./BgImageWrapper.module.scss";

export const BgImageWrapper = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [randomSum, setRandomSum] = useState(randomNumber());
  const [randomPercent, setRandomPercent] = useState(randomPercentage());
  const animationDuration = 15;

  const animationRef = useRef(null);
  const startTimeRef = useRef(null);
  const viewportWidthRef = useRef(window.innerWidth);

  const updateAnimationProgress = useCallback(() => {
    const elapsedTime = performance.now() - startTimeRef.current;
    const percentage = (elapsedTime / (animationDuration * 1000)) * 100;
    const newStep = Math.ceil(percentage / (100 / 8));

    if (newStep !== currentStep) {
      setCurrentStep(newStep);
      setRandomSum(randomNumber());
      setRandomPercent(randomPercentage());
    }

    if (elapsedTime < animationDuration * 1000) {
      animationRef.current = requestAnimationFrame(updateAnimationProgress);
    } else {
      setRandomSum(randomNumber());
      setRandomPercent(randomPercentage());
    }
  }, [currentStep]);

  const handleAnimationStart = useCallback(() => {
    const viewportWidth = window.innerWidth;
    viewportWidthRef.current = viewportWidth;

    if (viewportWidth < 768) {
      return;
    }

    startTimeRef.current = performance.now();
    animationRef.current = requestAnimationFrame(updateAnimationProgress);
  }, [updateAnimationProgress]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
          animationRef.current = null;
        }
      } else {
        if (!animationRef.current) {
          handleAnimationStart();
        }
      }
      viewportWidthRef.current = window.innerWidth;
    };

    window.addEventListener("resize", handleResize);
    handleAnimationStart();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [handleAnimationStart]);

  return (
    <div className={s.bgImageWrapper}>
      <div
        className={s.bgImageWrapper__text}
        onAnimationStart={handleAnimationStart}
      >
        <div className={s.bgImageWrapper__icon}>
          <Icon
            name="arrow-up"
            className={s.bgImageWrapper__iconItem}
            size="18"
          />
        </div>
        <div className={s.bgImageWrapper__balance}>
          <p className={s.bgImageWrapper__balanceText}>Your balance</p>
          <p className={s.bgImageWrapper__balanceAmount}>{`$${randomSum}`}</p>
        </div>
        <div className={s.bgImageWrapper__percent}>
          <p
            className={s.bgImageWrapper__percentText}
          >{`+${randomPercent.toFixed(2)}%`}</p>
        </div>
        <p className={s.bgImageWrapper__dynamicText}></p>
      </div>
    </div>
  );
};
