import {Carousel, Divider, Flex, List, Typography} from "antd";
import styles from "./Intro.module.css";
import lawnChair from "./../../assets/lawn-chair.jpg";
import {StepBackwardOutlined} from "@ant-design/icons";
import {useGetBreakPoint} from "../../common/hooks/useGetBreakPoint";

const PROCESS_LIST = [
  {
    title: "Discovery",
    description: ["Site visit", "Requirement gathering"],
  },
  {
    title: "Planning",
    description: ["Plants selection", "Landscaping", "Bio wall & Turfing"],
  },
  {
    title: "Design & quotation",
    description: ["Design & quotation", "2D/3D drawing Pricing"],
  },
  {
    title: "Execution",
    description: ["Project completion", "Client Satisfaction"],
  },
  {
    title: "Retention and Maintenance",
    description: ["Project completion", "Client Satisfaction"],
  },
];
export const Intro = () => {
  const screens = useGetBreakPoint();
  return (
    <>
      <section
        id="intro"
        className={styles.introSection}
      >
        <Typography.Title className={styles.introHeader}>
          Cultivating <i>ideas</i> for <i>better</i> tomorrow
        </Typography.Title>
        <Typography.Text className={styles.introContent}>
          We transform your property into a beautiful oasis, maximizing space with innovative, designer features. Bringing your unique vision to life!
        </Typography.Text>
      </section>
      <article className={styles.introImage}>
        <Carousel
          dotPosition="bottom"
          className={styles.carousel}
        >
          <img
            src={lawnChair}
            alt="Garden"
            className={styles.carouselImage}
          />
          <img
            src={lawnChair}
            alt="Garden"
            className={styles.carouselImage}
          />
          <img
            src={lawnChair}
            alt="Garden"
            className={styles.carouselImage}
          />
        </Carousel>
      </article>
      <Flex className={styles.processSection}>
        <Typography.Text className={styles.processTitle}>
          <i>The process</i>
        </Typography.Text>
        {!screens.md && <Divider className={styles.divider} />}
        <Flex className={styles.processContainer}>
          {PROCESS_LIST.map((process) => (
            <Flex
              className={styles.processItem}
              key={process.title}
            >
              <StepBackwardOutlined />
              <Flex vertical>
                <Typography.Text className={styles.processSubHeader}>{process.title}</Typography.Text>
                <List className={styles.processList}>
                  {process.description.map((desc, index) => (
                    <List.Item
                      className={styles.processListItem}
                      key={index}
                    >
                      {desc}
                    </List.Item>
                  ))}
                </List>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </>
  );
};
