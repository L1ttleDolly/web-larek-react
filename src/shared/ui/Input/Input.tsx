import styles from "./input.module.scss";
import * as React from "react";

type TProps = React.ComponentProps<"input"> & {};
export const Input = (props: TProps) => {
  const { type = "text", placeholder, id, onChange, onClick, value, name, required, autoComplete } = props;

  return (
    <input
      autoComplete={autoComplete}
      id={id}
      name={name}
      type={type}
      className={styles.input}
      placeholder={placeholder}
      onChange={onChange}
      onClick={onClick}
      value={value}
      required={required}
    ></input>
  );
};
