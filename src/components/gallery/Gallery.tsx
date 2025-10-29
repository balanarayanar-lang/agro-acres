import Header from "../header/Header";
import {GalleryImagesSection} from "./GalleryImagesSection";
import {GalleryIntro} from "./GalleryIntro";

const Gallery = () => (
  <>
    <Header onContactClick={() => {}} />
    <GalleryIntro />
    <GalleryImagesSection />
  </>
);

export default Gallery;
