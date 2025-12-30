import {Flex, Typography} from "antd";
import {useState, useEffect} from "react";
import styles from "./Gallery.module.css";
import {FooterContent} from "../footer/FooterContent";

/* =======================
   Types
======================= */

type MenuKey = "horeca" | "farmhouse" | "residential" | "greenWall" | "governmentProjects";

type ImageModule = {default: string};

/* =======================
   Menu constants
======================= */

const HORECA: MenuKey = "horeca";
const FARMHOUSE: MenuKey = "farmhouse";
const RESIDENTIAL: MenuKey = "residential";
const GREEN_WALL: MenuKey = "greenWall";
const GOVERNMENT_PROJECT: MenuKey = "governmentProjects";

/* =======================
   Menu items
======================= */

const listOfMenuItems: {id: MenuKey; label: string}[] = [
  {id: HORECA, label: "HORECA"},
  {id: FARMHOUSE, label: "Farmhouse"},
  {id: RESIDENTIAL, label: "Residential"},
  {id: GREEN_WALL, label: "Green wall"},
  {id: GOVERNMENT_PROJECT, label: "Government projects"},
];

/* =======================
   Component
======================= */

export const GalleryImagesSection = () => {
  const [activeMenu, setActiveMenu] = useState<MenuKey>(HORECA);

  const [images, setImages] = useState<Record<MenuKey, string[]>>({
    horeca: [],
    farmhouse: [],
    residential: [],
    greenWall: [],
    governmentProjects: [],
  });

  const activeClass = `${styles.activeMenu} ${styles.menuOption}`;

  useEffect(() => {
    const loadAllImages = async () => {
      try {
        const horecaModules = import.meta.glob("../../assets/gallery/HORECA/*.*", {eager: true});
        const farmhouseModules = import.meta.glob("../../assets/gallery/Farmhouse/*.*", {eager: true});
        const residentialModules = import.meta.glob("../../assets/gallery/Residential/*.*", {eager: true});
        const greenWallModules = import.meta.glob("../../assets/gallery/Green wall/*.*", {eager: true});
        const govModules = import.meta.glob("../../assets/gallery/Government Projects/*.*", {eager: true});

        const extractImages = (modules: Record<string, unknown>) =>
          Object.values(modules)
            .map((m) => (m as ImageModule).default)
            .filter(Boolean);

        setImages({
          horeca: extractImages(horecaModules),
          farmhouse: extractImages(farmhouseModules),
          residential: extractImages(residentialModules),
          greenWall: extractImages(greenWallModules),
          governmentProjects: extractImages(govModules),
        });
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };

    loadAllImages();
  }, []);

  const currentImages = images[activeMenu];

  return (
    <article>
      <Flex className={styles.galleryMenuBox}>
        <Flex className={styles.galleryMenu}>
          {listOfMenuItems.map((menu) => (
            <Typography.Link
              key={menu.id}
              className={activeMenu === menu.id ? activeClass : styles.menuOption}
              onClick={() => setActiveMenu(menu.id)}
            >
              {menu.label}
            </Typography.Link>
          ))}
        </Flex>
      </Flex>

      <Flex
        className={styles.imageBox}
        wrap="wrap"
        gap={16}
      >
        {currentImages.length > 0 ? (
          currentImages.map((image, index) => (
            <img
              key={`${activeMenu}-${index}`}
              src={image}
              width={380}
              height={380}
              alt={`${activeMenu} project ${index + 1}`}
              className={styles.carouselImage}
              style={{objectFit: "cover"}}
              onError={(e) => {
                const img = e.currentTarget as HTMLImageElement;
                img.style.display = "none";
              }}
            />
          ))
        ) : (
          <Flex
            vertical
            align="center"
            justify="center"
            style={{width: "100%", minHeight: 400}}
          >
            <Typography.Title level={4}>Loading images for {activeMenu}...</Typography.Title>
            <Typography.Text type="secondary">If images don't appear, check the console for errors</Typography.Text>
          </Flex>
        )}
      </Flex>

      <FooterContent />
    </article>
  );
};
