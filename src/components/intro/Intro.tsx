import {Carousel, Divider, Flex, List, Typography} from "antd";
import styles from "./Intro.module.css";

import carouselImg1 from "../../assets/gallery/landingpage/carousal1.jpg";
import carouselImg2 from "../../assets/gallery/landingpage/carousal2.jpg";
import carouselImg3 from "../../assets/gallery/landingpage/carousal3.jpg";
import discovery from "../../assets/discovery.png";
import planning from "../../assets/planning.png";
import design from "../../assets/design-and-quotation.png";
import execution from "../../assets/execution.png";
import retention from "../../assets/retention.png";
import {useGetBreakPoint} from "../../common/hooks/useGetBreakPoint";
import {useRef} from "react";
import type {CarouselRef} from "antd/es/carousel";

const PROCESS_LIST = [
  {title: "Discovery", description: ["Site visit", "Requirement gathering"], imgSrc: discovery},
  {title: "Planning", description: ["Plants selection", "Landscaping", "Bio wall & Turfing"], imgSrc: planning},
  {title: "Design & quotation", description: ["Design & quotation", "2D/3D drawing Pricing"], imgSrc: design},
  {title: "Execution", description: ["Project completion", "Client Satisfaction"], imgSrc: execution},
  {title: "Retention and Maintenance", description: ["Project completion", "Client Satisfaction"], imgSrc: retention},
];

export const Intro = () => {
  const screens = useGetBreakPoint();
  const carouselRef = useRef<CarouselRef>(null);

  const handleImageClick = () => {
    carouselRef.current?.next();
  };

  return (
    <div className={styles.mainWrapper}>
      {/* 1. Header Section */}
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

      {/* 2. Floating Circular CTA Button - Overlaps text and carousel */}

      <article className={styles.carouselContainer}>
        <div className={styles.ctaButtonWrapper}>
          <button className={styles.ctaButton}>
            <div className={styles.arrowIcon}>↗</div>
            <svg
              viewBox="0 0 120 120"
              className={styles.ctaButtonSvg}
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 60, 60 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
                />
              </defs>
              <text className={styles.ctaButtonText}>
                <textPath
                  href="#circlePath"
                  startOffset="0%"
                  style={{fontSize: "12px"}}
                >
                  GET IN TOUCH • GET IN TOUCH •
                </textPath>
              </text>
            </svg>
          </button>
        </div>

        <Carousel
          ref={carouselRef}
          dotPosition="bottom"
          className={styles.carousel}
          autoplay
          autoplaySpeed={4000}
        >
          <img
            src={carouselImg1}
            alt="Garden 1"
            className={styles.carouselImage}
            onClick={handleImageClick}
          />
          <img
            src={carouselImg2}
            alt="Garden 2"
            className={styles.carouselImage}
            onClick={handleImageClick}
          />
          <img
            src={carouselImg3}
            alt="Garden 3"
            className={styles.carouselImage}
            onClick={handleImageClick}
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
              key={process.title}
              align="start"
              gap="12px"
            >
              <img
                className={styles.processItemIcon}
                src={process.imgSrc}
                alt="Garden 3"
              />
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
    </div>
  );
};
