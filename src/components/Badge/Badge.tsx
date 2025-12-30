import styles from "./badge.module.scss";
import type { ReactNode } from "react";
import clsx from "clsx";

type variant = "category1" | "category2" | "category3" | "category4" | "category5";

type TBadgeProps = {
  variant: variant;
  children: ReactNode;
};

export const Badge = (props: TBadgeProps) => {
  const { variant, children } = props;

  return <span className={clsx(styles.cardBadge, styles[variant])}>{children}</span>;
};
