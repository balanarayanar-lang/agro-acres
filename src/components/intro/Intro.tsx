import { Carousel, Divider, Flex, List, Typography } from "antd";
import styles from "./Intro.module.css";

import carouselImg1 from "../../assets/gallery/landingpage/carousal1.jpg";
import carouselImg2 from "../../assets/gallery/landingpage/carousal2.jpg";
import carouselImg3 from "../../assets/gallery/landingpage/carousal3.jpg";
import { StepBackwardOutlined } from "@ant-design/icons";
import { useGetBreakPoint } from "../../common/hooks/useGetBreakPoint";
import { useRef } from "react";
import type { CarouselRef } from "antd/es/carousel";

const PROCESS_LIST = [
  { title: "Discovery", description: ["Site visit", "Requirement gathering"] },
  { title: "Planning", description: ["Plants selection", "Landscaping", "Bio wall & Turfing"] },
  { title: "Design & quotation", description: ["Design & quotation", "2D/3D drawing Pricing"] },
  { title: "Execution", description: ["Project completion", "Client Satisfaction"] },
  { title: "Retention and Maintenance", description: ["Project completion", "Client Satisfaction"] },
];

export const Intro = () => {
  const screens = useGetBreakPoint();
  const carouselRef = useRef<CarouselRef>(null);

  const handleImageClick = () => {
    carouselRef.current?.next();
  };

  return (
    <div className={styles.mainWrapper}>
      
      <section id="intro" className={styles.introSection}>
        <Typography.Title className={styles.introHeader}>
          Cultivating <i>ideas</i> for <i>better</i> tomorrow
        </Typography.Title>
        <Typography.Text className={styles.introContent}>
          We transform your property into a beautiful oasis, maximizing space with innovative, designer features. Bringing your unique vision to life!
        </Typography.Text>
      </section>

      
      <button className={styles.ctaButton}>
        <div className={styles.arrowIcon}>↗</div>
        <svg viewBox="0 0 120 120" className={styles.ctaButtonSvg}>
          <defs>
            <path
              id="circlePath"
              d="M 60, 60 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
            />
          </defs>
          <text className={styles.ctaButtonText}>
            <textPath href="#circlePath" startOffset="0%">
              GET IN TOUCH • GET IN TOUCH • 
            </textPath>
          </text>
        </svg>
      </button>

      
      <article className={styles.carouselContainer}>
        <Carousel
          ref={carouselRef}
          dotPosition="bottom"
          className={styles.carousel}
          autoplay
          autoplaySpeed={4000}
        >
          <img src={carouselImg1} alt="Garden 1" className={styles.carouselImage} onClick={handleImageClick} />
          <img src={carouselImg2} alt="Garden 2" className={styles.carouselImage} onClick={handleImageClick} />
          <img src={carouselImg3} alt="Garden 3" className={styles.carouselImage} onClick={handleImageClick} />
        </Carousel>
      </article>

      
      <Flex className={styles.processSection}>
        <Typography.Text className={styles.processTitle}>
          <i>The process</i>
        </Typography.Text>
        {!screens.md && <Divider className={styles.divider} />}
        <Flex className={styles.processContainer}>
          {PROCESS_LIST.map((process) => (
            <Flex className={styles.processItem} key={process.title}>
              <StepBackwardOutlined />
              <Flex vertical>
                <Typography.Text className={styles.processSubHeader}>{process.title}</Typography.Text>
                <List className={styles.processList}>
                  {process.description.map((desc, index) => (
                    <List.Item className={styles.processListItem} key={index}>
                      {desc}
                    </List.Item>
                  ))}
                </List>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </div>
  );
};