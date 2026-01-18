import styles from "./formContacts.module.scss";
import { Form } from "../../shared/ui/Form/Form.tsx";
import { Input } from "../../shared/ui/Input/Input.tsx";
import { Label } from "../../shared/ui/Label/Label.tsx";
import { Button } from "../../shared/ui/Button/Button.tsx";
import { setCheckoutStep } from "../../entities/modal/model/modalSlice.ts";
import { useDispatch, useSelector } from "../../app/store/store.ts";
import { useState } from "react";
import { setEmail, setPhone } from "../../entities/order/model/orderSlice.ts";

export const FormContacts = () => {
  const dispatch = useDispatch();
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const handleOrder = () => {
    dispatch(setEmail({ email: emailValue }));
    dispatch(setPhone({ phone: phoneValue }));
  };

  return (
    <Form className={styles.form}>
      <div className={styles.containerButtonBack}>
        <Button className={styles.buttonBack} onClick={() => dispatch(setCheckoutStep({ step: "order" }))}>
          <span className="visuallyHidden">Назад</span>
        </Button>
      </div>
      <div className={styles.inputWrapper}>
        <div className={styles.inputContainer}>
          <Label htmlFor={"email"}>Email </Label>
          <Input
            id={"email"}
            placeholder={"Введите Email"}
            value={emailValue}
            onChange={(evt) => setEmailValue(evt.target.value)}
          />
        </div>

        <div className={styles.inputContainer}>
          <Label htmlFor={"tel"}>Телефон</Label>
          <Input
            id={"tel"}
            placeholder={"Введите номер телефона"}
            value={phoneValue}
            onChange={(evt) => setPhoneValue(evt.target.value)}
          />
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <Button onClick={handleOrder}>Оформить</Button>
        <span>Проверьте данные!</span>
      </div>
    </Form>
  );
};
