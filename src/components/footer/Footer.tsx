import {Divider, Flex, Space, Typography} from "antd";
import {FacebookOutlined, InstagramOutlined, PinterestOutlined, YoutubeOutlined} from "@ant-design/icons";
import bscpl from "./../../assets/bscpl.png";
import school from "./../../assets/school.png";
import gkc from "./../../assets/gkc.png";
import maic from "./../../assets/maic.png";
import styles from "./Footer.module.css";
export const Footer: React.FC<{onContactClick: () => void}> = ({onContactClick}) => {
  return (
    <Flex className={styles.footerSection}>
      <Flex className={styles.footerLogos}>
        <img
          style={{width: "120px", height: "92px"}}
          src={bscpl}
          alt="bscpl"
        />
        <img
          style={{width: "120px", height: "92px"}}
          src={school}
          alt="school"
        />
        <img
          style={{width: "120px", height: "92px"}}
          src={gkc}
          alt="gkc"
        />
        <img
          style={{width: "120px", height: "92px"}}
          src={maic}
          alt="maic"
        />
      </Flex>

      <Divider className={styles.divider} />
      <Flex
        justify="space-between"
        wrap
      >
        <Flex
          vertical
          gap={4}
          style={{maxWidth: "592px"}}
        >
          <Typography.Text className={styles.kickStartText}>Kick-start designing your green space with us</Typography.Text>
          <Typography.Title
            className={styles.letsTalkText}
            onClick={onContactClick}
          >
            let’s talk
          </Typography.Title>
        </Flex>

        <Flex vertical>
          <Space direction="vertical">
            <Typography.Text className={styles.addressHeader}>Raipur, Chhattisgarh</Typography.Text>
            <Typography.Text className={styles.addressFooter}>Greenland, Vishal Nagar, Raipur C.G 492001</Typography.Text>
          </Space>

          <Space direction="vertical">
            <Typography.Text className={styles.addressHeader}>Email us at</Typography.Text>
            <Typography.Text className={styles.addressFooter}>connect@agroacres.com</Typography.Text>
          </Space>

          <Space direction="vertical">
            <Typography.Text className={styles.addressHeader}>If you're hurry, quick call for us</Typography.Text>
            <Typography.Text className={styles.addressFooter}>+91 9340908982</Typography.Text>
          </Space>
        </Flex>
      </Flex>

      <Divider className={styles.divider} />

      <Flex
        justify="space-between"
        wrap
        gap={16}
      >
        <Typography.Text className={styles.copyrightText}>© 2024 Agroacres - Made with love by Lexicon Digital</Typography.Text>

        <Flex
          gap={16}
          align="center"
        >
          <Typography.Text className={styles.sitemapText}>CONNECT</Typography.Text>
          <div className={styles.customLine} />
          <a
            href="https://www.instagram.com/agroacres04?igsh=dmM2MWI3ZWNpMWp5&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerIcon}
          >
            <InstagramOutlined />
          </a>

          <a
            href="https://www.facebook.com/share/1JSrzRdpBN/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerIcon}
          >
            <FacebookOutlined />
          </a>

          <a
            href="https://youtube.com/@agroacres?si=oI9YP6zW4m5jleKt"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerIcon}
          >
            <YoutubeOutlined />
          </a>

          <a
            href="https://pin.it/6ZqMudsIA"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerIcon}
          >
            <PinterestOutlined />
          </a>
        </Flex>
      </Flex>
    </Flex>
  );
};
