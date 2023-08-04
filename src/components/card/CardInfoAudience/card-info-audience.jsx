import styles from "./card-info-audience.module.css";
import { useEffect, useState } from "react";
import { TYPE_AUDIENCE_INFO_TYPE_RIGHT } from "../../../utils/constants";

const CardInfoAudience = ({ item }) => {
  const [width] = useState(window.innerWidth);
  const [img, setImg] = useState("");
  const [classContent, setClassContent] = useState(`${styles.content}`);
  const [classImg, setClassImg] = useState(`${styles.img}`);
  const [classList, setClassList] = useState(`${styles.list}`);

  const handleSelectedWord = (string, start, finish) => {
    const arr = string.split(" ");
    return arr.slice(start, finish).join(" ");
  };

  useEffect(() => {
    width > 767 ? setImg(item.imgBig) : setImg(item.imgSmall);
  }, [width]);

  useEffect(() => {
    if (item.type === TYPE_AUDIENCE_INFO_TYPE_RIGHT) {
      setClassContent(`${styles.content} ${styles.content_right}`);
      setClassImg(`${styles.img} ${styles.img_right}`);
      setClassList(`${styles.list} ${styles.list_right}`);
    } else {
      setClassContent(`${styles.content}`);
      setClassImg(`${styles.img}`);
      setClassList(`${styles.list}`);
    }
  }, [item.type]);

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>
        <span>{handleSelectedWord(item.title, 0, 1) + " "}</span>
        <span>{handleSelectedWord(item.title, 1)}</span>
      </h2>
      <article className={classContent}>
        <img className={classImg} src={img} alt={item.altImg}></img>
        <ul className={classList}>
          {item.array_text &&
            item.array_text.map((el, index) => (
              <li key={el.id} className={styles.item}>
                <div className={styles.item_wrapper}>
                  <div className={styles.item_number}>{el.id}</div>
                  <p className={styles.item_subtitle}>{el.text}</p>
                </div>
                <ul className={styles.item_list}>
                  {el.array_text_second &&
                    el.array_text_second.map((item) => (
                      <li key={item} className={styles.item_subtitle}>
                        {item}
                      </li>
                    ))}
                </ul>
              </li>
            ))}
        </ul>
      </article>
    </section>
  );
};

export default CardInfoAudience;
