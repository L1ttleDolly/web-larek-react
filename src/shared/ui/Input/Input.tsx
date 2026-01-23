import styles from "./input.module.scss";
import * as React from "react";

type TProps = React.ComponentProps<"input"> & {};
export const Input = (props: TProps) => {
  const { type = "text", placeholder, id, onChange, onBlur, value, name, required } = props;

  return (
    <input
      id={id}
      name={name}
      type={type}
      className={styles.input}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      required={required}
    ></input>
  );
};
