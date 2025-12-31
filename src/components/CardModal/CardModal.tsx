import styles from "./cardModal.module.scss";
import { Badge } from "../Badge/Badge.tsx";
import clsx from "clsx";

type TCardModalProps = {};
export const CardModal = (props: TCardModalProps) => {
  const {} = props;

  return (
    <article className={styles.card}>
      <div>
        <img src="./mockCard.jpg" alt="" className={styles.cardImg} />
      </div>
      <div className={styles.cardContentWrapper}>
        <Badge variant={"category2"}>софт-скилл</Badge>
        <h2 className={styles.cardTitle}>HEX-леденец</h2>
        <p className={clsx(styles.cardDescription, styles.scrollbar)}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consequuntur cumque cupiditate eaque
          expedita labore laborum modi molestias, natus nisi non omnis quas temporibus. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Animi beatae corporis cumque ducimus expedita, explicabo itaque magnam qui unde,
          velit veritatis voluptatum? Autem, laboriosam, quos.
        </p>
        <div className={styles.buttonPriceWrapper}>
          <div className={styles.buttonContainer}>
            <button className={styles.button}>Купить</button>
          </div>
          <span className={styles.cardPrice}>750 синапсов</span>
        </div>
      </div>
    </article>
  );
};
