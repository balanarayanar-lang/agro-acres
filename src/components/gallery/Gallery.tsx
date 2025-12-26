import React from "react";

import { useState } from "react";
import { Modal } from "antd";
import Header from "../header/Header";
import { GalleryImagesSection } from "./GalleryImagesSection";
import { GalleryIntro } from "./GalleryIntro";
import { ContactUs } from "../contact-us/ContactUs";

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header onContactClick={() => setIsModalOpen(true)} />

      <GalleryIntro />
      <GalleryImagesSection />

      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        width={1400}
        closable
        style={{ top: 60 }}
        styles={{
          body: {
            padding: "3rem 4rem",
            backgroundColor: "#fdfcfb",
          },
        }}
      >
        <ContactUs />
      </Modal>
    </>
  );
};

export default Gallery;
