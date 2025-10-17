// src/components/contact-us/ContactUs.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Divider, Flex, Typography } from "antd";
import {
  InstagramOutlined,
  WhatsAppOutlined,
  FacebookOutlined,
  PinterestOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import formImage from "../../assets/form.png";
import styles from "./ContactUs.module.css";

export const ContactUs = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  const handleClose = () => {
    navigate("/");
  };

  return (
    <section id="contact-us" className={styles.contactSection}>
      <CloseOutlined className={styles.closeButton} onClick={handleClose} />

      <Flex gap={16} align="center">
        <Divider className={styles.divider} />
        <Typography.Text className={styles.contactHeader}>Contact Us</Typography.Text>
      </Flex>
      <Typography.Title className={styles.mainTitle}>Let's discuss Ideas.</Typography.Title>

      <Flex className={styles.contentWrapper} justify="center" align="flex-start" gap={60}>
        <div className={styles.imageWrapper}>
          <img src={formImage} alt="Gardening tools" className={styles.formImage} />
        </div>

        <Flex className={styles.formAndDetailsWrapper} gap={80}>
          <div className={styles.formContainer}>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} autoComplete="off">
                <input type="text" name="fullName" placeholder="Full name" required className={styles.formInput} />
                <input type="email" name="email" placeholder="E-mail" required className={styles.formInput} />
                <textarea name="message" placeholder="Message" required className={styles.formInput} rows={3}></textarea>
                <input type="tel" name="phone" placeholder="Phone" required className={styles.formInput} />
                <button type="submit" className={styles.submitButton}>SUBMIT</button>
              </form>
            ) : (
              <div className={styles.thankYouContainer}>
                <Typography.Title level={3} className={styles.thankYouMessage}>
                  Thanks you for contacting us!!
                </Typography.Title>
              </div>
            )}
          </div>

          <div className={styles.contactInfo}>
            <div className={styles.infoBlock}>
              <Typography.Text className={styles.infoLocation}>Raipur, Chhattisgarh</Typography.Text>
              <Typography.Text className={styles.infoAddress}>
                Greenland, Vishal Nagar, <br />
                Raipur C.G 492001
              </Typography.Text>
            </div>

            <div className={styles.infoBlock}>
              <Typography.Text className={styles.infoLabel}>Email us at</Typography.Text>
              <Typography.Text className={styles.infoDetail}>connect@agroacres.com</Typography.Text>
            </div>

            <div className={styles.infoBlock}>
              <Typography.Text className={styles.infoLabel}>If you're hurry, quick call for us</Typography.Text>
              <Typography.Text className={styles.infoDetail}>+91 9340908982</Typography.Text>
            </div>

            <Flex align="center" gap={20} className={styles.socials}>
              <Typography.Text className={styles.infoLabel}>CONNECT</Typography.Text>
              <Divider className={styles.socialDivider} />
              <a href="https://wa.me/919340908982" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><WhatsAppOutlined /></a>
              <a href="#" className={styles.socialIcon}><InstagramOutlined /></a>
              <a href="#" className={styles.socialIcon}><FacebookOutlined /></a>
              <a href="#" className={styles.socialIcon}><PinterestOutlined /></a>
            </Flex>
          </div>
        </Flex>
      </Flex>
    </section>
  );
};
