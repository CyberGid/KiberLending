import styles from "./button.module.css";
import {
  TYPE_BTN_HEADER,
  TEXT_BTN_CONTACT,
  TYPE_BTN_TRY_IT_BANNER,
  TEXT_BTN_TRY_IT,
  TYPE_BTN_TRY_IT_HIDDEN,
} from "../../utils/constants";
import { useState, useEffect, useCallback } from "react";

const Button = ({ type }) => {
  const [styleBtn, setStyleBtn] = useState(`${styles.button}`);
  const [textBtn, setTextBtn] = useState("");

  const handleStyleBtn = useCallback(() => {
    switch (type) {
      case TYPE_BTN_HEADER:
        setTextBtn(TEXT_BTN_CONTACT);
        setStyleBtn(`${styles.button} ${styles.button_header}`);
        break;
      case TYPE_BTN_TRY_IT_BANNER:
        setTextBtn(TEXT_BTN_TRY_IT);
        setStyleBtn(`${styles.button} ${styles.button_try_it_banner}`);
        break;
      case TYPE_BTN_TRY_IT_HIDDEN:
        setTextBtn(TEXT_BTN_TRY_IT);
        setStyleBtn(`${styles.button} ${styles.button_try_it_hidden}`);
        break;
      default:
        return;
    }
  }, [type]);

  useEffect(() => {
    handleStyleBtn();
  }, [type, handleStyleBtn]);

  return (
    <>
      <button className={styleBtn}>{textBtn}</button>
    </>
  );
};

export default Button;
