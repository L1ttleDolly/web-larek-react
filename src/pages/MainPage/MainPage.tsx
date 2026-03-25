import styles from "./mainPage.module.scss";
import { Gallery } from "../../widgets/Gallery/Gallery.tsx";
import { ModalRoot } from "../../widgets/ModalRoot/ModalRoot.tsx";

export const MainPage = () => {
  return (
    <main className={styles.container}>
      <ModalRoot />
      <Gallery />
    </main>
  );
};
