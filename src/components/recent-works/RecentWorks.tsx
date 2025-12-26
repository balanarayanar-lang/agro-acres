import { Button, Divider, Flex, Typography } from "antd";
import styles from "./RecentWorks.module.css";
// Updated imports to match your folder structure
import museumImg from "../../assets/gallery/recent_works/museum.jpg";
import resortImg from "../../assets/gallery/recent_works/resort.jpg";
import gpraImg from "../../assets/gallery/recent_works/gpra.jpg";
import { ArrowRightOutlined } from "@ant-design/icons";

export const RecentWorks = () => {
  return (
    <section id="recent-works" className={styles.recentWorksSection}>
      <Flex vertical gap={48} style={{ width: "100%" }}>
        {/* Header Section */}
        <Flex vertical gap={24} style={{ alignSelf: "flex-start" }}>
          <Flex gap={16} align="center">
            <Divider className={styles.divider} />
            <Typography.Text className={styles.recentWorksHeader}>RECENT WORKS</Typography.Text>
          </Flex>
          <Typography.Title level={1} className={styles.headerTitle}>
            Some of our Crafts.
          </Typography.Title>
        </Flex>

        {/* Top Row: Museum and Resort */}
        <Flex gap={40} className={styles.projectsContainer}>
          <Flex vertical gap={16} className={styles.workCard}>
            <img src={museumImg} className={styles.museumImg} alt="State Tribal Museum" />
            <Typography.Title level={3} className={styles.contentTitle}>
              State Tribal Museum
            </Typography.Title>
            <Typography.Text className={styles.description}>
              From the forests of Chhattisgarh to the walls of history, the story of its tribe.
              Celebrating Chhattisgarh's indigenous Wisdom Craft and soul. Proudly inaugurated
              by the Prime Minister of India.
            </Typography.Text>
          </Flex>

          <Flex vertical gap={16} className={styles.workCard}>
            <img src={resortImg} className={styles.resortImg} alt="Shanvi's Resort" />
            <Typography.Title level={3} className={styles.contentTitle}>
              Shanvi's Resort
            </Typography.Title>
            <Typography.Text className={styles.description}>
              Landscape design, execution, and maintenance across 2 acres of lush greenery —
              featuring premium Mexican grass sourced from Kolkata. A seamless blend of
              planning, precision, and natural beauty.
            </Typography.Text>
          </Flex>
        </Flex>

        {/* Bottom Row: GPRA (Centered on desktop) */}
        <Flex vertical align="center" className={styles.gpraContainer}>
          <Flex vertical gap={16} className={styles.workCardCentered}>
            <img src={gpraImg} className={styles.gpraImg} alt="GPRA Accommodation" />
            <Typography.Title level={3} className={styles.contentTitle}>
              GPRA - General Pool Residential accommodation
            </Typography.Title>
            <Typography.Text className={styles.description}>
              Executed under a Central Government project, over 1 lakh trees and plants were
              cultivated to develop a vibrant, eco-conscious landscape for officers' quarters
              and surrounding premises.
            </Typography.Text>
          </Flex>
        </Flex>

        {/* View All Button */}
        <Flex justify="center" style={{ marginTop: '20px' }}>
          <Button type="primary" className={styles.viewAllButton}>
            View all <ArrowRightOutlined />
          </Button>
        </Flex>
      </Flex>
    </section>
  );
};