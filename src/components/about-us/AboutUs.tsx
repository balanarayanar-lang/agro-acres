import {Divider, Flex, Typography} from "antd";

import mirrorImage from "./../../assets/mirror.jpg";
import plants from "./../../assets/plants.jpg";
import styles from "./AboutUs.module.css";
import {useGetBreakPoint} from "../../common/hooks/useGetBreakPoint";
import {useAnimatedNumber} from "../../common/hooks/useAnimatedNumber";

const aboutUsFooter = [
  {
    number: "100%",
    description: "CLIENT SATISFACTION",
  },
  {
    number: "100+",
    description: "ACRES COVERED FOR TRANSFORMATION",
  },
  {
    number: "100+",
    description: "GARDENS SOWED WITH HAPPINESS",
  },
];

const AnimatedNumber = ({value}: {value: string}) => {
  const animatedValue = useAnimatedNumber(value);
  return <span className={styles.aboutUsNumber}>{animatedValue}</span>;
};

export const AboutUs = () => {
  const screens = useGetBreakPoint();
  return (
    <section
      id="about-us"
      className={styles.aboutUsSection}
    >
      <Flex gap={16}>
        <Divider className={styles.divider} />
        <Typography.Text className={styles.aboutUsHeader}>About Us</Typography.Text>
      </Flex>
      <div className={styles.contentBox}>
        <img
          src={mirrorImage}
          alt="mirror"
          className={styles.mirrorImage}
        />
        <img
          src={plants}
          alt="plants"
          className={styles.plantsImage}
        />
        <Typography.Title style={{fontSize: "60px"}}>Beautifying Corners with Greenery.</Typography.Title>
        <br />
        <Typography.Text className={styles.aboutUsContent}>
          At Agro Acres Farm & Landscape Developers in Raipur, we provide comprehensive landscaping solutions from design to execution. Our experienced team transforms properties
          into attractive, valuable landscapes, supporting clients through every project stage.
        </Typography.Text>
        <br />
        <br />
        <Typography.Text className={styles.aboutUsContent}>
          As pioneers in Chhattisgarh's landscaping industry, we have influenced many landscape transformations. Our skilled team, including landscape architects and project
          managers, offers custom services tailored to diverse client needs.
        </Typography.Text>
        <br />
        <br />
        <Typography.Text className={styles.aboutUsContent}>
          Our company, formed by experienced landscapers and management professionals, focuses on building long-term client partnerships, prioritizing reliability, quality, and
          modern technology.
        </Typography.Text>
      </div>
      {screens.sm && !screens.md && (
        <Flex
          justify="center"
          gap={16}
          style={{marginTop: "1rem"}}
        >
          <img
            src={plants}
            alt="plants"
            className={styles.plantsMirrorImage}
          />
          <img
            src={mirrorImage}
            alt="mirror"
            className={styles.mobileMirrorImage}
          />
        </Flex>
      )}
      <Flex className={styles.aboutUsFooter}>
        {aboutUsFooter.map((item, index) => {
          return (
            <Flex
              className={styles.aboutUsFooterItem}
              key={index}
            >
              <AnimatedNumber value={item.number} />
              <span className={styles.aboutUsDescription}>{item.description}</span>
            </Flex>
          );
        })}
      </Flex>
    </section>
  );
};
