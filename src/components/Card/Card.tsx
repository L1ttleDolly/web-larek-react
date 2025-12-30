import styles from "./card.module.scss";
import { Badge } from "../Badge/Badge.tsx";

type TCardProps = {};

export const Card = (props: TCardProps) => {
  const {} = props;

  return (
    <article className={styles.card}>
      <Badge variant={"category4"}>дополнительное</Badge>

      <img src="./mockCard.jpg" alt="" className={styles.cardImg} />

      <span className={styles.cardPrice}>750 синапсов</span>
    </article>
  );
};
