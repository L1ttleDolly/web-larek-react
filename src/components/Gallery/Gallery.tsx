import styles from "./gallery.module.scss";
import { Card } from "../Card/Card.tsx";

type Props = {};
export const Gallery = (props: Props) => {
  const {} = props;

  return (
    <section className={styles.container}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  );
};
