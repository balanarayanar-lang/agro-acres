import {Divider, Flex, Typography, Space} from "antd";
import styles from "./Footer.module.css";
import {SocialMedia} from "../../common/components/SocialMedia/SocialMedia";

export const FooterContent = () => {
  return (
    <>
      <Divider className={styles.divider} />
      <Flex
        justify="space-between"
        wrap
        style={{padding: "8px 20px 40px"}}
      >
        <Flex
          vertical
          gap={4}
          style={{maxWidth: "592px"}}
        >
          <Typography.Text className={styles.kickStartText}>Kick-start designing your green space with us</Typography.Text>
          <Typography.Title className={styles.letsTalkText}>let’s talk</Typography.Title>
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
        style={{padding: "8px 20px 40px"}}
      >
        <Typography.Text className={styles.copyrightText}>© 2024 Agroacres - Made with love by Lexicon Digital</Typography.Text>
        <SocialMedia />
      </Flex>
    </>
  );
};
