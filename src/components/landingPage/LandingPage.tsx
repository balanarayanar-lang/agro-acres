import { useState } from "react";
import { Modal } from "antd";
import { AboutUs } from "../about-us/AboutUs";
import { Footer } from "../footer/Footer";
import Header from "../header/Header";
import { Intro } from "../intro/Intro";
import { OurServices } from "../our-services/OurServices";
import { RecentWorks } from "../recent-works/RecentWorks";
import { Testimonials } from "../testimonials/Testimonials";
import { ContactUs } from "../contact-us/ContactUs";

export const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Header onContactClick={showModal} />
      <main style={{overflowX : 'hidden'}}>
        <Intro />
        <AboutUs />
        <OurServices />
        <RecentWorks />
        <Testimonials />
        <Footer />
      </main>

      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={1400}
        closable={true}
        style={{ top: 60 }}
        styles={{
          body: {
            padding: "3rem 4rem",
            backgroundColor: "#fdfcfb",
          },
        }}
      >
        {isModalOpen && <ContactUs key={Date.now()} />}
      </Modal>
    </>
  );
};