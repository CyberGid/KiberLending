import styles from "./main.module.css";
import Banner from "../banner/banner";
import About from "../about/about";
import Audience from "../audience/audience";
import TryIt from "../try-it/try-it";

const Main = () => {
  return (
    <section className={styles.wrapper}>
      <Banner />
      <About />
      <Audience />
      <TryIt />
    </section>
  );
};

export default Main;
