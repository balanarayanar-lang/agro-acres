import {Button} from "antd";
import {ArrowRightOutlined} from "@ant-design/icons";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <img
        src="/logo.png"
        alt="Agro Acres"
        className={styles.logo}
      />

      <nav className={styles.nav}>
        <a
          href="#about"
          className={styles.link}
        >
          About Us
        </a>
        <a
          href="#services"
          className={styles.link}
        >
          Services
        </a>
        <a
          href="#gallery"
          className={styles.link}
        >
          Gallery
        </a>
        <a
          href="#clients"
          className={styles.link}
        >
          Clients
        </a>
      </nav>

      <Button
        type="primary"
        style={{background: "#008D36", borderColor: "#008D36", fontWeight: 600}}
      >
        CONTACT US <ArrowRightOutlined />
      </Button>
    </header>
  );
}
