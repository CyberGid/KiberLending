import styles from "./audience.module.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useEffect, useState } from "react";
import CardCarouselAudience from "../card/CardCarouselAudience/card-carousel-audience";
import CardInfoAudience from "../card/CardInfoAudience/card-info-audience";
import {
  TEXT_AUDIENCE_TITLE,
  CARD_CAROUSEL_AUDIENCE,
  CARD_INFO_AUDIENCE,
} from "../../utils/constants";

const Audience = () => {
  const [width] = useState(window.innerWidth);
  const [widthCard, setWidthCard] = useState();
  const [partCard, setPartCard] = useState("");

  const handleCards = () => {
    return CARD_CAROUSEL_AUDIENCE
      ? CARD_CAROUSEL_AUDIENCE.map((card) => (
          <CardCarouselAudience
            key={card.id}
            card={card}
            setWidthCard={setWidthCard}
          />
        ))
      : null;
  };

  const responsive = {
    0: { items: 1, itemsFit: "contain" },
    375: { items: 1.35, itemsFit: "contain" },
    430: { items: 1.5, itemsFit: "contain" },
    490: { items: 1.8, itemsFit: "contain" },
    590: { items: 2.1, itemsFit: "contain" },
    660: { items: 2.4, itemsFit: "contain" },
    760: { items: 2.7, itemsFit: "contain" },
    768: { items: 3, itemsFit: "contain" },
  };

  useEffect(() => {
    width && widthCard && setPartCard(responsive);
  }, [width, widthCard]);

  return (
    <article id="audience" className={styles.wrapper}>
      <h2 className={styles.title}>{TEXT_AUDIENCE_TITLE}</h2>
      <div className={styles.cards}>
        <AliceCarousel
          items={handleCards()}
          disableDotsControls
          disableButtonsControls
          keyboardNavigation={true}
          responsive={partCard}
        ></AliceCarousel>
      </div>
      {CARD_INFO_AUDIENCE
        ? CARD_INFO_AUDIENCE.map((item) => (
            <CardInfoAudience key={item.id} item={item} />
          ))
        : null}
    </article>
  );
};

export default Audience;
