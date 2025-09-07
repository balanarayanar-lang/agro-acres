import {Divider, Flex, Typography} from "antd";
import styles from "./OurServices.module.css";

import grass from "./../../assets/grass.png";

const OUR_SERVICES = [
  {
    icon: grass,
    description: "Landscaping Design / Development",
  },
  {
    icon: grass,
    description: "Lawn Development",
  },
  {
    icon: grass,
    description: "Consultancy & Management",
  },
  {
    icon: grass,
    description: "Terrace Gardens & Bio walls",
  },
  {
    icon: grass,
    description: "Garden Tools & Equipments",
  },
  {
    icon: grass,
    description: "Traders & Suppliers",
  },
];
export const OurServices = () => {
  return (
    <section
      id="our-services"
      className={styles.ourServicesSection}
    >
      <Flex gap={16}>
        <Divider className={styles.divider} />
        <Typography.Text className={styles.ourServicesHeader}>Our Services</Typography.Text>
      </Flex>
      <Typography.Title>
        Adding Green Spaces &<br /> Making People Happy.
      </Typography.Title>
      <Flex className={styles.ourServicesContentBox}>
        {OUR_SERVICES.map((item, index) => {
          return (
            <Flex
              className={styles.ourServiceBox}
              key={index}
            >
              <img
                src={item.icon}
                alt={item.description}
                className={styles.ourServiceImage}
              ></img>
              <Typography.Text className={styles.ourServiceDescription}>{item.description}</Typography.Text>
            </Flex>
          );
        })}
      </Flex>
    </section>
  );
};
