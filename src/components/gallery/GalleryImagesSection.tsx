import { Flex, Typography } from "antd";
import { useState, useEffect } from "react";
import styles from "./Gallery.module.css";
import { FooterContent } from "../footer/FooterContent";


const HORECA = "horeca";
const FARMHOUSE = "farmhouse";
const RESIDENTIAL = "residential";
const GREEN_WALL = "greenWall";
const GOVERNMENT_PROJECT = "governmentProjects";

const listOfMenuItems = [
  { id: HORECA, label: "HORECA" },
  { id: FARMHOUSE, label: "Farmhouse" },
  { id: RESIDENTIAL, label: "Residential" },
  { id: GREEN_WALL, label: "Green wall" },
  { id: GOVERNMENT_PROJECT, label: "Government projects" },
];

export const GalleryImagesSection = () => {
  const [activeMenu, setActiveMenu] = useState(HORECA);
  const [images, setImages] = useState({
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
       
        const horecaModules = import.meta.glob("../../assets/gallery/HORECA/*.*", { eager: true });
        const farmhouseModules = import.meta.glob("../../assets/gallery/Farmhouse/*.*", { eager: true });
        const residentialModules = import.meta.glob("../../assets/gallery/Residential/*.*", { eager: true });
        const greenWallModules = import.meta.glob("../../assets/gallery/Green wall/*.*", { eager: true });
        const govModules = import.meta.glob("../../assets/gallery/Government Projects/*.*", { eager: true });

        console.log("HORECA modules:", horecaModules);
        console.log("Farmhouse modules:", farmhouseModules);
        console.log("Residential modules:", residentialModules);
        console.log("Green Wall modules:", greenWallModules);
        console.log("Gov Projects modules:", govModules);

       
        const horecaImages = Object.values(horecaModules).map(mod => mod.default);
        const farmhouseImages = Object.values(farmhouseModules).map(mod => mod.default);
        const residentialImages = Object.values(residentialModules).map(mod => mod.default);
        const greenWallImages = Object.values(greenWallModules).map(mod => mod.default);
        const govImages = Object.values(govModules).map(mod => mod.default);

        setImages({
          horeca: horecaImages.filter(Boolean),
          farmhouse: farmhouseImages.filter(Boolean),
          residential: residentialImages.filter(Boolean),
          greenWall: greenWallImages.filter(Boolean),
          governmentProjects: govImages.filter(Boolean),
        });

        console.log("Images loaded:", {
          horeca: horecaImages.length,
          farmhouse: farmhouseImages.length,
          residential: residentialImages.length,
          greenWall: greenWallImages.length,
          governmentProjects: govImages.length,
        });
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };

    loadAllImages();
  }, []);

  const currentImages = images[activeMenu] || [];

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

      <Flex className={styles.imageBox} wrap="wrap" gap={16}>
        {currentImages.length > 0 ? (
          currentImages.map((image, index) => (
            <img
              key={`${activeMenu}-${index}`}
              src={image}
              width={380}
              height={380}
              alt={`${activeMenu} project ${index + 1}`}
              className={styles.carouselImage}
              style={{ objectFit: 'cover' }}
              onError={(e) => {
                console.error(`Failed to load image:`, image);
                e.target.style.display = 'none';
              }}
            />
          ))
        ) : (
          <Flex 
            vertical 
            align="center" 
            justify="center" 
            style={{ width: '100%', minHeight: 400 }}
          >
            <Typography.Title level={4}>
              Loading images for {activeMenu}...
            </Typography.Title>
            <Typography.Text type="secondary">
              If images don't appear, check the console for errors
            </Typography.Text>
          </Flex>
        )}
      </Flex>
      
      <FooterContent />
    </article>
  );
};