import React from "react";

import {useState} from "react";
import {Divider, Flex, Typography} from "antd";
import formImage from "../../assets/form.png";
import styles from "./ContactUs.module.css";
import {SocialMedia} from "../../common/components/SocialMedia/SocialMedia";

export const ContactUs = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      <Flex
        gap={16}
        align="center"
      >
        <Divider className={styles.divider} />
        <Typography.Text className={styles.contactHeader}>Contact Us</Typography.Text>
      </Flex>

      <Typography.Title className={styles.mainTitle}>Let's discuss Ideas.</Typography.Title>

      <Flex
        className={styles.contentWrapper}
        justify="center"
        align="flex-start"
        gap={44}
        wrap="wrap"
      >
        <img
          src={formImage}
          alt="Gardening tools"
          className={styles.formImage}
        />

        <div className={styles.formContainer}>
          {!isSubmitted ? (
            <form
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <input
                type="text"
                name="fullName"
                placeholder="Full name"
                required
                className={styles.formInput}
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                required
                className={styles.formInput}
              />
              <textarea
                name="message"
                placeholder="Message"
                required
                className={styles.formInput}
                rows={3}
              ></textarea>
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                required
                className={styles.formInput}
              />
              <button
                type="submit"
                className={styles.submitButton}
              >
                SUBMIT
              </button>
            </form>
          ) : (
            <div className={styles.thankYouContainer}>
              <Typography.Title
                level={3}
                className={styles.thankYouMessage}
              >
                Thank you for contacting us!
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
          <div style={{marginTop: "40px"}}>
            <SocialMedia />
          </div>
        </div>
      </Flex>
    </>
  );
};
