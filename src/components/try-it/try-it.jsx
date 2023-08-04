import styles from "./try-it.module.css";
import Button from "../button/button";
import {
  TYPE_BTN_TRY_IT_HIDDEN,
  TEXT_TRY_IT_TITLE,
  TEXT_TRY_IT_SUBTITLE,
  PATH_CYBERGID,
} from "../../utils/constants";
import QrCode from "../../images/qr-code/qr-code";
import { useEffect, useState } from "react";

const TryIt = () => {
  const [styleImg, setStyleImg] = useState(`${styles.img}`);
  const [styleContent, setStyleContent] = useState(`${styles.content}`);
  const [styleLink, setStyleLink] = useState(`${styles.link}`);

  const handleSelectedWord = (string, start, finish) => {
    const arr = string.split(" ");
    return arr.slice(start, finish).join(" ");
  };

  useEffect(() => {
    setStyleImg(`${styles.img} ${styles.img_mount}`);
    setStyleContent(`${styles.content} ${styles.content_mount}`);
    setStyleLink(`${styles.link} ${styles.link_mount}`);
  }, []);

  return (
    <article id="try_it" className={styles.wrapper}>
      <div className={styleImg}></div>
      <section className={styleContent}>
        <h2 className={styles.title}>
          {handleSelectedWord(TEXT_TRY_IT_TITLE, 0, 8) + " "}
          <span>{handleSelectedWord(TEXT_TRY_IT_TITLE, 8)}</span>
        </h2>
        <p className={styles.subtitle}>{TEXT_TRY_IT_SUBTITLE}</p>
        <QrCode />
      </section>
      <a href={PATH_CYBERGID} className={styleLink}>
        <Button type={TYPE_BTN_TRY_IT_HIDDEN} />
      </a>
    </article>
  );
};

export default TryIt;
