import styles from "./cardBasket.module.scss";

export const CardBasket = () => {
  return (
    <>
      <article className={styles.cardBasket}>
        <span className={styles.cardIndex}>1</span>
        <h2 className={styles.cardTitle}>Кнопка «Замьютить кота»</h2>{" "}
        {/*сделать чтоб при ховере писалось полное назвние*/}
        <span className={styles.cardPrice}>150 000 синапсов</span>
        <button className={styles.deleteButton}>X</button> {/*component*/}
      </article>

      <article className={styles.cardBasket}>
        <span className={styles.cardIndex}>1</span>
        <h2 className={styles.cardTitle}>Фреймворк куки судьбы</h2>
        <span className={styles.cardPrice}>15 синапсов</span>
        <button className={styles.deleteButton}>X</button> {/*component*/}
      </article>

      <article className={styles.cardBasket}>
        <span className={styles.cardIndex}>1</span>
        <h2 className={styles.cardTitle}>Микровселенная в кармане</h2>
        <span className={styles.cardPrice}>199 синапсов</span>
        <button className={styles.deleteButton}>X</button> {/*component*/}
      </article>

      <article className={styles.cardBasket}>
        <span className={styles.cardIndex}>1</span>
        <h2 className={styles.cardTitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
        <span className={styles.cardPrice}>7900 синапсов</span>
        <button className={styles.deleteButton}>X</button> {/*component*/}
      </article>
    </>
  );
};
