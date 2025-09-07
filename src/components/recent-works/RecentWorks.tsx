import {Button, Divider, Flex, Typography} from "antd";
import styles from "./RecentWorks.module.css";
import chairs from "./../../assets/chairs.jpg";
import shanvi from "./../../assets/shanvis-resort.jpg";
import lawnChair from "./../../assets/lawn-chair.jpg";
import {ArrowRightOutlined} from "@ant-design/icons";
export const RecentWorks = () => {
  return (
    <>
      <section
        id="recent-works"
        className={styles.recentWorksSection}
      >
        <Flex
          align="center"
          vertical
          gap={96}
          flex={1}
        >
          <Flex
            vertical
            gap={24}
            style={{alignSelf: "flex-start"}}
          >
            <Flex gap={16}>
              <Divider className={styles.divider} />
              <Typography.Text className={styles.recentWorksHeader}>RECENT WORKS</Typography.Text>
            </Flex>
            <Typography.Title className={styles.headerTitle}>Some of our Crafts.</Typography.Title>
          </Flex>
          <Flex vertical>
            <img
              src={chairs}
              className={styles.recentWorksChairsImg}
              alt="chairs"
            />
            <Typography.Title className={styles.recentWorksContent}>State Tribal Museum</Typography.Title>
            <Typography.Text className={styles.recentWorksSubContent}>
              One of kind tribal museus in chhattisgarh, in the theme of chhattisgarh tirbal art and nautral resoruces
            </Typography.Text>
          </Flex>
        </Flex>
        <Flex
          flex={2}
          align="center"
          gap={80}
          vertical
        >
          <Flex
            gap={16}
            vertical
          >
            <img
              src={shanvi}
              className={styles.shanviImg}
            />
            <Typography.Title className={styles.recentWorksContent}>Shanvi’s Resort</Typography.Title>
            <Typography.Text className={styles.recentWorksSubContent}>Landscape design, execution, maintenance, 2 acre, laid Mexican grass from Kolkata</Typography.Text>
          </Flex>
          <Flex
            gap={16}
            vertical
          >
            <img
              src={lawnChair}
              className={styles.lawnChairImg}
            />
            <Typography.Title className={styles.recentWorksContent}>Shanvi’s Resort</Typography.Title>
            <Typography.Text className={styles.recentWorksSubContent}>Landscape design, execution, maintenance, 2 acre, laid Mexican grass from Kolkata</Typography.Text>
          </Flex>
        </Flex>
        <Button
          type="primary"
          className={styles.viewAllButton}
        >
          View all <ArrowRightOutlined />
        </Button>
      </section>
    </>
  );
};
