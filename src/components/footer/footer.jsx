import styles from "./footer.module.css";
import {
  TYPE_FOOTER,
  TEXT_BRAND_NAME_ENG,
  TEXT_LINK_FOOTER,
  PATH_TG_BOLDAREV,
} from "../../utils/constants";
import IconTelegram from "../../images/icon-telegram/icon-telegram";
import Logotip from "../logotip/logotip";

const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear();
  };

  return (
    <section className={styles.wrapper}>
      <article className={styles.content}>
        <Logotip type={TYPE_FOOTER} />
        <a
          href={PATH_TG_BOLDAREV}
          className={styles.link}
          target="_blank"
          rel="noreferrer"
        >
          <p className={styles.link_subtitle}>{TEXT_LINK_FOOTER}</p>
          <IconTelegram />
        </a>
      </article>
      <div className={styles.copyright}>
        <span>{getYear()}</span>
        <span>{"," + TEXT_BRAND_NAME_ENG}</span>
      </div>
    </section>
  );
};

export default Footer;
