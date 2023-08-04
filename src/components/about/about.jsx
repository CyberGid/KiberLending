import styles from "./about.module.css";
import { TEXT_ABOUT_TITLE, TEXT_ABOUT_SUBTITLE } from "../../utils/constants";
import { useEffect, useState } from "react";

const About = () => {
  const [styleImg, setStyleImg] = useState(`${styles.img}`);
  const [styleContent, setStyleContent] = useState(`${styles.content}`);

  useEffect(() => {
    setStyleImg(`${styles.img} ${styles.img_mount}`);
    setStyleContent(`${styles.content} ${styles.content_mount}`);
  }, []);

  return (
    <article id="about" className={styles.wrapper}>
      <div className={styles.background_img}></div>
      <div className={styleImg}></div>
      <section className={styleContent}>
        <h2 className={styles.title}>{TEXT_ABOUT_TITLE}</h2>
        <ul className={styles.list}>
          {TEXT_ABOUT_SUBTITLE.length
            ? TEXT_ABOUT_SUBTITLE.map((li) => (
                <li key={li} className={styles.subtitle}>
                  {li}
                </li>
              ))
            : null}
        </ul>
      </section>
    </article>
  );
};

export default About;
