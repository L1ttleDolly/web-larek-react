import { Modal } from "../Modal/Modal.tsx";
import { closeModal } from "../../entities/modal/model/modalSlice.ts";
import { Basket } from "../Basket/Basket.tsx";
import { CardModal } from "../CardModal/CardModal.tsx";
import { FormOrder } from "../FormOrder/FormOrder.tsx";
import { FormContacts } from "../FormContacts/FormContacts.tsx";
import { useDispatch, useSelector } from "../../app/store/store.ts";

export const ModalRoot = () => {
  const selectedCard = useSelector((state) => state.modal.payload);

  const open = useSelector((state) => state.modal.isOpen);
  const type = useSelector((state) => state.modal.type);

  const product = useSelector((state) => state.products.products[selectedCard]);
  const dispatch = useDispatch();
  return (
    <>
      {open && (
        <Modal isOpen={open} onClose={() => dispatch(closeModal())}>
          {type === "basket" && <Basket />}
          {type === "card" && (
            <CardModal
              title={product.title}
              price={product.price}
              category={product.category}
              image={product.image}
              id={product.id}
              description={product.description}
            />
          )}
          {type === "stepOrder" && <FormOrder />}
          {type === "stepContacts" && <FormContacts />}
        </Modal>
      )}
    </>
  );
};
