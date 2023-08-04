import styles from "./header.module.css";
import Button from "../button/button";
import {
  TYPE_HEADER,
  TEXT_MENU_ABOUT,
  TEXT_MENU_AUDIENCE,
  TEXT_MENU_CONTACT,
  PATH_LINK_ABOUT,
  PATH_LINK_AUDIENCE,
  PATH_LINK_TRY_IT,
  TYPE_BTN_HEADER,
  PATH_TG_BOLDAREV,
} from "../../utils/constants";
import Logotip from "../logotip/logotip";

const Header = () => {
  return (
    <section className={styles.wrapper}>
      <Logotip type={TYPE_HEADER} />
      <nav className={styles.menu}>
        <a href={PATH_LINK_ABOUT} className={styles.menu_link}>
          {TEXT_MENU_ABOUT}
        </a>
        <a href={PATH_LINK_AUDIENCE} className={styles.menu_link}>
          {TEXT_MENU_AUDIENCE}
        </a>
        <a href={PATH_LINK_TRY_IT} className={styles.menu_link}>
          {TEXT_MENU_CONTACT}
        </a>
        <a
          href={PATH_TG_BOLDAREV}
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          <Button type={TYPE_BTN_HEADER} />
        </a>
      </nav>
    </section>
  );
};

export default Header;
