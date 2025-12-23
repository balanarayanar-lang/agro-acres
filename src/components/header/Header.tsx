import React from "react";

import { useState } from "react";
import { Button, Drawer, Menu, Row, Col } from "antd";
import { MenuOutlined, ArrowRightOutlined } from "@ant-design/icons";
import logo from "./../../assets/logo.png";
import styles from "./Header.module.css";
import { useGetBreakPoint } from "../../common/hooks/useGetBreakPoint";
import { Link } from "react-router-dom";
// @ts-expect-error: 'react-router-hash-link' does not have TypeScript types
import { HashLink } from "react-router-hash-link";

const items = [
  { key: "about", label: "About Us", href: "#about-us" },
  { key: "services", label: "Services", href: "#our-services" },
  { key: "gallery", label: "Gallery", href: "/gallery" },
  { key: "clients", label: "Clients", href: "#testimonials" },
];

export default function Header({ onContactClick }: { onContactClick: () => void }) {
  const [open, setOpen] = useState(false);
  const screens = useGetBreakPoint();

  return (
    <header className={styles.header}>
      <Row align="middle" justify="space-between" gutter={16} style={{ flexWrap: "nowrap" }}>
        <Col>
          <Row align="middle" gutter={16}>
            {!screens.md && (
              <MenuOutlined className={styles.menuIcon} onClick={() => setOpen(true)} />
            )}
            <img src={logo} alt="Agro Acres" style={{ height: 40, marginLeft: "16px" }} />
          </Row>
        </Col>

        {screens.md && (
          <Col className={styles.navLinks}>
            {items.map((item) => {
              if (item.href.startsWith("/")) {
                return (
                  <Link to={item.href} key={item.key} className={styles.navLink}>
                    {item.label}
                  </Link>
                );
              }
              return (
                <HashLink smooth to={`/${item.href}`} key={item.key} className={styles.navLink}>
                  {item.label}
                </HashLink>
              );
            })}
          </Col>
        )}

        <Col>
          <Button
            type="primary"
            className={styles.contactButton}
            onClick={onContactClick}
          >
            CONTACT US <ArrowRightOutlined />
          </Button>
        </Col>
      </Row>

      <Drawer title="Menu" placement="left" onClose={() => setOpen(false)} open={open}>
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
