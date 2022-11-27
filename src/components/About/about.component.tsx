import React from "react";
import { motion } from "framer-motion";
import "./about.styles.scss";
import { Divider } from "../Divider/divider.component";

export const About = () => {
  return (
    <div id="about" className="about-section">
      <motion.div
        initial={{
          x: '-100%',
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.5,
        }}
        className="about-section__imageContainer"
      >
        <img alt="Bruno Cordeiro" src="images/profile.jpg" />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.5,
        }}
        className="about-section__info"
      >
        <h1 className="heading font-bold text-lg">ABOUT ME</h1>
        <Divider isCentered={false} className="divider"/>
        <br />
        <p>I'm Bruno Cordeiro, a FullStack developer focused on Backend.</p>
        <br />
        <p>
        Bachelor in Computer Science from University of Brasilia and currently working as a Systems Analyst at Seguros SURA using technologies such as Java 8, AWS, Spring Boot, Spring Cloud, Angular and Oracle DB.
        </p>
        <br />
        <br />
        <p>I'm passionate about microservices and my goal is to learn everything possible on the subject.</p>
      </motion.div>
    </div>
  );
};
