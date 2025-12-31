import styles from "./gallery.module.scss";
import { Card } from "../Card/Card.tsx";
import { CardModal } from "../CardModal/CardModal.tsx";
import { CardBasket } from "../CardBasket/CardBasket.tsx";

type Props = {};
export const Gallery = (props: Props) => {
  const {} = props;

  return (
    <section className={styles.container}>
      <Card />
      <Card />
      <CardModal />
      <CardBasket />
    </section>
  );
};
