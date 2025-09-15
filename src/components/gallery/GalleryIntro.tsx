import {Flex, Typography} from "antd";
import lawnChair from "./../../assets/lawn-chair.jpg";
import styles from "./Gallery.module.css";

export const GalleryIntro = () => {
  return (
    <div className={styles.imageContainer}>
      <img
        src={lawnChair}
        alt="Garden"
        className={styles.galleryIntroImage}
      />
      <Flex className={styles.galleryIntroText}>
        <Typography.Text className={styles.title}>Gallery</Typography.Text>
        <Typography.Text className={styles.description}>See what we transformed, and made places grand</Typography.Text>
      </Flex>
    </div>
  );
};
