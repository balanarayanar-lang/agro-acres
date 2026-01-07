import {Col, Divider, Flex, Row, Typography} from "antd";
import styles from "./OurServices.module.css";

import landscaping from "./../../assets/landscaping.png";
import lawn from "./../../assets/lawn.png";
import consulting from "./../../assets/consulting.png";
import terrace from "./../../assets/terrace.png";
import tools from "./../../assets/tools.png";
import supplier from "./../../assets/supplier.png";
import {useEffect, useState} from "react";
const isMobile = window.matchMedia("(hover: none)").matches;
const OUR_SERVICES = [
  {
    icon: landscaping,
    title: ["Landscaping", "Design / Development"],
    fullContent:
      "We provide comprehensive landscaping design and development services, transforming outdoor spaces into beautiful, functional environments. Our expert team handles everything from initial design concepts to full project execution, ensuring your vision comes to life with sustainable and aesthetically pleasing solutions.",
  },
  {
    icon: lawn,
    title: ["Lawn Development"],
    fullContent:
      "Professional lawn development services including soil preparation, seeding, sodding, and maintenance. We create lush, healthy lawns that enhance your property's curb appeal and provide a perfect foundation for your outdoor activities.",
  },
  {
    icon: consulting,
    title: ["Consultancy & Management"],
    fullContent:
      "Expert consultancy and management services for all your landscaping needs. Our experienced consultants provide strategic advice, project management, and ongoing maintenance planning to ensure your landscape projects succeed and thrive long-term.",
  },
  {
    icon: terrace,
    title: ["Terrace Gardens & Bio walls"],
    fullContent:
      "Transform your terraces and vertical spaces with our innovative terrace gardens and bio walls. We design and install living walls that improve air quality, reduce noise, and create stunning visual features while maximizing limited space.",
  },
  {
    icon: tools,
    title: ["Garden Tools & Equipments"],
    fullContent:
      "We supply high-quality garden tools and equipment for both residential and commercial projects. From basic hand tools to advanced machinery, we provide everything you need to maintain and enhance your landscape efficiently.",
  },
  {
    icon: supplier,
    title: ["Traders & Suppliers"],
    fullContent:
      "As trusted traders and suppliers, we provide a wide range of landscaping materials, plants, and supplies. Our extensive network ensures you get the best quality products at competitive prices, delivered on time for your projects.",
  },
];
export const OurServices = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const close = () => setActiveIndex(null);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  return (
    <section
      id="our-services"
      className={styles.ourServicesSection}
    >
      <Flex gap={16}>
        <Divider className={styles.divider} />
        <Typography.Text className={styles.ourServicesHeader}>Our Services</Typography.Text>
      </Flex>
      <Typography.Title style={{fontSize: "60px"}}>
        Adding Green Spaces &<br /> Making People Happy.
      </Typography.Title>
      <Row gutter={[24, 24]}>
        {OUR_SERVICES.map((item, index) => {
          const isActive = isMobile && activeIndex === index;

          return (
            <Col
              xs={24}
              sm={12}
              xl={8}
              key={index}
            >
              <Flex
                key={index}
                className={`${styles.ourServiceBox} ${isActive ? styles.active : ""}`}
                onClick={() => {
                  if (isMobile) {
                    setActiveIndex(activeIndex === index ? null : index);
                  }
                }}
              >
                <img
                  src={item.icon}
                  alt={item.title[0]}
                  className={styles.ourServiceImage}
                />
                <Flex vertical>
                  {item.title.map((line, idx) => (
                    <Typography.Text
                      key={idx}
                      className={styles.ourServiceTitle}
                    >
                      {line}
                    </Typography.Text>
                  ))}
                </Flex>
                <div className={styles.ourServiceFullContent}>{item.fullContent}</div>
              </Flex>
            </Col>
          );
        })}
      </Row>
    </section>
  );
};
