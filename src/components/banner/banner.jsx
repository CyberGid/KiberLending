import styles from "./banner.module.css";
import Button from "../button/button";
import {
  TEXT_BANNER_TITLE,
  TEXT_BANNER_SUBTITLE,
  TYPE_BTN_TRY_IT_BANNER,
  PATH_CYBERGID,
} from "../../utils/constants";
import { useEffect, useState } from "react";

const Banner = () => {
  const [styleContainerText, setStyleContainerText] = useState(
    `${styles.container_text}`
  );
  const [styleLink, setStyleLink] = useState(`${styles.link}`);
  const [styleImg, setStyleImg] = useState(`${styles.img}`);

  const handleSelectedWord = (string, start, finish) => {
    const arr = string.split(" ");
    return arr.slice(start, finish).join(" ");
  };

  useEffect(() => {
    setStyleContainerText(
      `${styles.container_text} ${styles.container_text_mount}`
    );
    setStyleLink(`${styles.link} ${styles.link_mount}`);
    setStyleImg(`${styles.img} ${styles.img_mount}`);
  }, []);

  return (
    <article className={styles.wrapper}>
      <div className={styleContainerText}>
        <h1 className={styles.title}>
          <span>{handleSelectedWord(TEXT_BANNER_TITLE, 0, 1) + " "}</span>
          <span>{handleSelectedWord(TEXT_BANNER_TITLE, 1, 6) + " "}</span>
          <span>{handleSelectedWord(TEXT_BANNER_TITLE, 6)}</span>
        </h1>
        <p className={styles.subtitle}>{TEXT_BANNER_SUBTITLE}</p>
        <a href={PATH_CYBERGID} className={styles.link_desctop}>
          <Button type={TYPE_BTN_TRY_IT_BANNER} />
        </a>
      </div>
      <div className={styleImg}></div>
      <a href={PATH_CYBERGID} className={styleLink}>
        <Button type={TYPE_BTN_TRY_IT_BANNER} />
      </a>
    </article>
  );
};

export default Banner;
