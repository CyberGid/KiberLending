import { useCallback, useEffect, useState } from "react";
import styles from "./icon-logotip.module.css";
import { TYPE_HEADER, TYPE_FOOTER } from "../../utils/constants";

const IconLogotip = ({ type }) => {
  const [styleSvg, setStyleSvg] = useState(`${styles.container_svg}`);

  const handleType = useCallback(() => {
    switch (type) {
      case TYPE_HEADER:
        setStyleSvg(`${styles.container_svg} ${styles.container_svg_header}`);
        break;
      case TYPE_FOOTER:
        setStyleSvg(`${styles.container_svg} ${styles.container_svg_footer}`);
        break;
      default:
        return;
    }
  }, [type]);

  useEffect(() => {
    handleType();
  }, [type, handleType]);

  return (
    <>
      <svg
        className={styleSvg}
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <g clipPath="url(#clip0_171_3477)">
          <path
            d="M1.00239 17.8388C1.00239 9.20475 7.75629 2.05084 16.2612 1.06409C23.7655 0.324033 31.0197 4.27102 33.7713 11.1782C34.0215 11.9183 34.5218 12.165 35.2722 12.6584C37.7736 13.6451 39.0244 15.8653 39.0244 18.5788C38.7742 21.0457 37.0232 23.0192 34.5218 23.7593C32.0203 24.2526 29.2687 23.2659 28.018 20.799C26.7673 18.5788 27.2676 15.6186 29.2687 13.8918C30.0192 13.1517 30.0192 12.6584 29.5189 11.9183C27.0174 7.72463 23.2653 5.25777 18.2624 5.25777C11.2583 4.76439 5.25485 10.1915 5.0047 17.0987C4.75456 21.0457 6.25542 24.4993 9.00701 27.4596C10.758 29.1864 14.0099 31.8999 16.2612 33.8734C17.5119 35.1069 19.5131 34.8602 20.7638 33.8734L23.7655 30.9132C25.0163 29.6797 25.0163 27.7063 23.7655 26.4728C23.0151 25.4861 22.0145 24.746 21.5142 24.2526C21.014 23.5126 20.2635 23.2659 19.5131 23.5126C16.7615 24.006 14.0099 23.0192 13.0093 20.5523C11.7586 18.0855 12.2589 15.3719 14.5102 13.3984C16.2612 11.9183 19.2629 11.6716 21.2641 12.9051C23.5154 14.3852 24.7661 17.0987 24.0157 19.3189C23.7655 20.3057 24.0157 20.799 24.516 21.2924C25.2664 22.0325 26.5171 23.2659 27.5177 24.2526C30.0192 26.7195 29.769 30.4198 27.5177 32.8867L22.765 37.327C20.5137 39.5472 16.7615 39.5472 14.26 37.5737C11.2583 34.8602 7.50615 31.4066 5.50499 29.4331C2.25311 26.2261 0.752243 22.2791 1.00239 17.8388ZM33.271 19.5656C34.2716 19.5656 35.022 18.5788 35.022 17.8388C35.022 17.0987 34.2716 16.112 33.271 16.112C32.2705 16.112 31.52 16.852 31.2699 17.8388C31.52 18.8255 32.2705 19.5656 33.271 19.5656ZM19.7632 17.8388C19.7632 16.852 19.0128 16.112 18.0122 16.112C17.2618 16.112 16.2612 17.0987 16.2612 17.8388C16.2612 18.8255 17.2618 19.5656 18.0122 19.5656C19.0128 19.5656 19.7632 18.8255 19.7632 17.8388Z"
            fill="#3495CF"
          />
        </g>
        <defs>
          <clipPath id="clip0_171_3477">
            <rect width="40" height="40" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default IconLogotip;