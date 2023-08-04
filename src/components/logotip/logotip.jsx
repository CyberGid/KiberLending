import styles from "./logotip.module.css";
import IconLogotip from "../../images/icon-logotip/icon-logotip";
import {
  TEXT_BRAND_NAME_RU,
  TYPE_HEADER,
  TYPE_FOOTER,
  PATH_CYBERGID,
} from "../../utils/constants";
import { useCallback, useEffect, useState } from "react";

const Logotip = ({ type }) => {
  const [styleContainer, setStyleContainer] = useState(`${styles.container}`);
  const [styleText, setStyleText] = useState(`${styles.text}`);

  const handleStyle = useCallback(() => {
    switch (type) {
      case TYPE_HEADER:
        setStyleContainer(`${styles.container} ${styles.container_header}`);
        setStyleText(`${styles.text} ${styles.text_header}`);
        break;
      case TYPE_FOOTER:
        setStyleContainer(`${styles.container} ${styles.container_footer}`);
        setStyleText(`${styles.text} ${styles.text_footer}`);
        break;
      default:
        return;
    }
  }, [type]);

  useEffect(() => {
    handleStyle();
  }, [type, handleStyle]);

  return (
    <>
      <a href={PATH_CYBERGID} className={styleContainer}>
        <IconLogotip type={type} />
        <p className={styleText}>{TEXT_BRAND_NAME_RU}</p>
      </a>
    </>
  );
};

export default Logotip;
