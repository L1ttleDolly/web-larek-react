import styles from "./logo.module.scss";
import LogoIcon from "../../assets/images/icon/logo.svg";

export const Logo = () => {
  return (
    <a href="/">
      <img src={LogoIcon} alt="" className={styles.logo} />
    </a>
  );
};
