import styles from "./mainPage.module.scss";

import { Gallery } from "../../components/Gallery/Gallery.tsx";
import { Modal } from "../../components/Modal/Modal.tsx";
import { useDispatch, useSelector } from "../../services/store.ts";
import { CardModal } from "../../components/CardModal/CardModal.tsx";
import { closeSelectedCard } from "../../services/slices/modalSlice.ts";

export const MainPage = () => {
  const open = useSelector((state) => state.modal.selectedCard);

  const product = useSelector((state) => state.products.products[open]);
  const isOpen = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();

  return (
    <main className={styles.container}>
      {open && (
        <Modal isOpen={isOpen} onClose={() => dispatch(closeSelectedCard(false))}>
          <CardModal
            title={product.title}
            price={product.price}
            category={product.category}
            image={product.image}
            id={product.id}
            description={product.description}
          />
        </Modal>
      )}
      <Gallery />
    </main>
  );
};
