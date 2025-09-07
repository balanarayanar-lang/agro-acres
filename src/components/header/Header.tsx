import {useState} from "react";
import {Button, Drawer, Menu, Row, Col} from "antd";
import {MenuOutlined, ArrowRightOutlined} from "@ant-design/icons";
import logo from "./../../assets/logo.png";

import styles from "./Header.module.css";
import {useGetBreakPoint} from "../../common/hooks/useGetBreakPoint";

const items = [
  {key: "about", label: "About Us", href: "#about-us"},
  {key: "services", label: "Services", href: "#our-services"},
  {key: "gallery", label: "Gallery", href: "#gallery"},
  {key: "clients", label: "Clients", href: "#testimonials"},
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const screens = useGetBreakPoint();

  return (
    <header className={styles.header}>
      <Row
        align="middle"
        justify="space-between"
        gutter={16}
      >
        <Col>
          <Row
            align="middle"
            gutter={16}
          >
            {!screens.md && (
              <MenuOutlined
                className={styles.menuIcon}
                onClick={() => setOpen(true)}
              />
            )}

            <img
              src={logo}
              alt="Agro Acres"
              style={{height: 40, marginLeft: "16px"}}
            />
          </Row>
        </Col>

        {screens.md && (
          <Col className={styles.navLinks}>
            {items.map((item) => {
              return (
                <a
                  href={item.href}
                  key={item.key}
                  className={styles.navLink}
                >
                  {item.label}
                </a>
              );
            })}
          </Col>
        )}

        <Col>
          <Button
            type="primary"
            className={styles.contactButton}
          >
            CONTACT US <ArrowRightOutlined />
          </Button>
        </Col>
      </Row>

      <Drawer
        title="Menu"
        placement="left"
        onClose={() => setOpen(false)}
        open={open}
      >
        <Menu
          mode="inline"
          items={items}
          className={styles.drawerMenu}
          onClick={() => setOpen(false)}
        />
      </Drawer>
    </header>
  );
}
