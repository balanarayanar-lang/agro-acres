import {Button, Divider, Flex, Space, Typography} from "antd";
import styles from "./Testimonials.module.css";
import {ArrowLeftOutlined, ArrowRightOutlined} from "@ant-design/icons";
import {useState} from "react";
import leaves from "./../../assets/leaves.png";

const reviews = [
  {
    name: "Rahul R Nair",
    company: "Shivam Publicity",
    stars: 5,
    review:
      "I couldn't be more thrilled with the stunning transformation Agro Acres made to my backyard. Their team was professional, creative, and dedicated to quality throughout the project. I highly recommend Agro Acres for exceptional landscaping services!",
  },
  {
    name: "Suman Kumar",
    company: "GKC",
    stars: 4,
    review:
      "Agro Acres delivered exceptional landscaping work for our highway stretch and toll booth area. Their team handled both the design and execution with remarkable professionalism, attention to detail, and a strong commitment to timelines. The transformation has significantly enhanced the visual appeal and functionality of the entire site.",
  },
  {
    name: "Palash Shrivastava",
    company: "BSCPL",
    stars: 4,
    review:
      "They have been an outstanding partner in delivering high-quality landscaping solutions for our project. Their design expertise, disciplined execution, and proactive coordination set them apart from other vendors we have worked with.",
  },
  {
    name: "Harshit Khurana",
    company: "Shanvi’s Resort",
    stars: 5,
    review: "The team consistently demonstrated professionalism, ensured clear communication at every stage, and maintained excellent quality standards throughout the engagement.",
  },
];

const GetStarRating = ({stars}: {stars: number}) => {
  return (
    <div className={styles.stars}>
      {Array(stars)
        .fill(0)
        .map((_, index) => (
          <img
            src={leaves}
            key={index}
          />
        ))}
    </div>
  );
};
export const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const go = (next: number) => {
    setIndex(((next % reviews.length) + reviews.length) % reviews.length);
  };

  const dotIndex = index >= 3 ? 3 : index;
  const prev = () => go(index - 1);
  const next = () => go(index + 1);

  return (
    <>
      <section
        id="testimonials"
        className={styles.testimonialsSection}
      >
        <Flex
          gap={16}
          style={{alignItems: "center"}}
        >
          <Divider className={styles.divider} />
          <Typography.Text className={styles.testimonialsHeader}>TESTIMONIALS</Typography.Text>
        </Flex>
        <Typography.Title>Hear it from our Clients..</Typography.Title>
        <Space direction="vertical">
          <Flex
            gap={32}
            flex={1}
            align="center"
            justify="space-between"
            className={styles.testimonialCard}
          >
            <Button
              onClick={prev}
              disabled={index === 0}
              className={styles.arrowButton}
            >
              <ArrowLeftOutlined onClick={prev} />
            </Button>
            <Flex
              vertical
              gap={16}
              justify="space-between"
              align="center"
              style={{height: "450px"}}
            >
              <GetStarRating stars={reviews[index].stars} />
              <Typography.Text className={styles.testimonialReview}>"{reviews[index].review}"</Typography.Text>
              <Typography.Text className={styles.testimonialName}>{reviews[index].name}</Typography.Text>
              <Typography.Text className={styles.testimonialCompany}>{reviews[index].company}</Typography.Text>
            </Flex>
            <Button
              onClick={next}
              disabled={index === reviews.length - 1}
              className={styles.arrowButton}
            >
              <ArrowRightOutlined onClick={prev} />
            </Button>
          </Flex>
          <Flex
            gap={8}
            justify="center"
          >
            <div className={`${styles.dot} ${dotIndex === 0 && styles.activeDot}`}></div>
            <div className={`${styles.dot} ${dotIndex === 1 && styles.activeDot}`}></div>
            <div className={`${styles.dot} ${dotIndex === 2 && styles.activeDot}`}></div>
            <div className={`${styles.dot} ${dotIndex === 3 && styles.activeDot}`}></div>
          </Flex>
        </Space>
        <Divider className={styles.bottomDivider} />
      </section>
    </>
  );
};
