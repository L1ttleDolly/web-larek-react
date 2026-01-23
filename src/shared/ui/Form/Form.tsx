import styles from "./form.module.scss";
import type { ReactNode } from "react";

type TProps = React.ComponentProps<"form"> & {
  children: ReactNode;
};
export const Form = (props: TProps) => {
  const { children, className, onChange } = props;

  return (
    <form className={className} onChange={onChange}>
      {children}
    </form>
  );
};
