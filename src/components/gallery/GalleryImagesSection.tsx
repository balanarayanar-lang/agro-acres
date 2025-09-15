import {Flex, Typography} from "antd";
import {useState} from "react";
import styles from "./Gallery.module.css";
import garden from "./../../assets/gallery/garden.jpg";
import lawn1 from "./../../assets/gallery/lawn1.jpg";
import lawn2 from "./../../assets/gallery/lawn2.jpg";
import lawn3 from "./../../assets/gallery/lawn3.jpg";
import nightLawn from "./../../assets/gallery/nightLawn.jpg";
import path from "./../../assets/gallery/path.jpg";
import pool from "./../../assets/gallery/pool.jpg";
import pool2 from "./../../assets/gallery/pool2.jpg";
import tree from "./../../assets/gallery/tree.jpg";
import {FooterContent} from "../footer/FooterContent";

const images = {
  hotel: [garden, lawn1, path, pool, pool2, tree],
  farmHouse: [nightLawn, path, pool, pool2, tree],
  residential: [garden, lawn1, lawn2, lawn3, pool2, tree],
  greenWall: [garden, lawn1, lawn2, lawn3, nightLawn, path, pool, pool2, tree],
  pool: [garden, lawn1, path, pool, pool2, tree],
  governmentProjects: [lawn2, lawn3, nightLawn, path, pool, pool2, tree],
};

const HOTEL = "hotel" as const;
const FARMHOUSE = "farmHouse" as const;
const RESIDENTIAL = "residential" as const;
const GREEN_WALL = "greenWall" as const;
const POOL = "pool" as const;
const GOVERNMENT_PROJECT = "governmentProjects" as const;
const listOfMenuItems = [
  {
    id: HOTEL,
    label: "Hotel",
  },
  {
    id: FARMHOUSE,
    label: "Farmhouse",
  },
  {
    id: RESIDENTIAL,
    label: "Residential",
  },
  {
    id: GREEN_WALL,
    label: "Green wall",
  },
  {
    id: POOL,
    label: "Swimming pool",
  },
  {
    id: GOVERNMENT_PROJECT,
    label: "Government projects",
  },
];

// Define a type for the menu item ids
type MenuItemsIdsType = (typeof listOfMenuItems)[number]["id"];
export const GalleryImagesSection = () => {
  const [activeMenu, setActiveMenu] = useState<MenuItemsIdsType>(HOTEL);
  const activeClass = `${styles.activeMenu} ${styles.menuOption}`;
  return (
    <article>
      <Flex className={styles.galleryMenuBox}>
        <Flex className={styles.galleryMenu}>
          {listOfMenuItems.map((menu) => (
            <Typography.Link
              className={activeMenu === menu.id ? activeClass : styles.menuOption}
              onClick={() => setActiveMenu(menu.id)}
            >
              {menu.label}
            </Typography.Link>
          ))}
        </Flex>
      </Flex>
      <Flex className={styles.imageBox}>
        {images[activeMenu].map((image: string) => (
          <img
            key={image}
            src={image}
            width={380}
            height={380}
            alt="Garden"
            className={styles.carouselImage}
          />
        ))}
        <FooterContent />
      </Flex>
    </article>
  );
};
