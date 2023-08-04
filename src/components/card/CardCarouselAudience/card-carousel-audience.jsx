import styles from './card-carousel-audience.module.css';
import { useRef, useEffect } from 'react';

const CardCarouselAudience = ({card, setWidthCard}) => {
  const refCard = useRef()

  useEffect(()=> {
    setWidthCard(refCard.current.offsetWidth)
  }, [])

  return (
    <article className={styles.wrapper}>
      <img className={styles.img} src={card.img} alt={card.altImg}></img>
      <div ref={refCard} className={styles.container}>
        <p className={styles.subtitle}>{card.text}</p>
      </div>
    </article>
  )
};

export default CardCarouselAudience;
