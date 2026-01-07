import {FacebookOutlined, InstagramOutlined, PinterestOutlined, YoutubeOutlined} from "@ant-design/icons";
import {Divider, Flex, Typography} from "antd";
import styles from "./SocialMedia.module.css";

export const SocialMedia = () => (
  <Flex
    justify="flex-end"
    gap={24}
  >
    <Flex
      gap={16}
      justify="space-between"
      align="center"
    >
      <Typography.Text className={styles.infoLabel}>CONNECT</Typography.Text>
      <Divider className={styles.socialDivider} />
    </Flex>
    <Flex gap={20}>
      <a
        href="https://www.instagram.com/agroacres04?igsh=dmM2MWI3ZWNpMWp5&utm_source=qr"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialIcon}
      >
        <InstagramOutlined />
      </a>
      <a
        href="https://www.facebook.com/share/1JSrzRdpBN/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialIcon}
      >
        <FacebookOutlined />
      </a>
      <a
        href="https://youtube.com/@agroacres?si=oI9YP6zW4m5jleKt"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialIcon}
      >
        <YoutubeOutlined />
      </a>
      <a
        href="https://pin.it/6ZqMudsIA"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialIcon}
      >
        <PinterestOutlined />
      </a>
    </Flex>
  </Flex>
);
