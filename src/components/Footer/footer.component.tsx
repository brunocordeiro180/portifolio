import React from "react";
import { SocialIcon } from "react-social-icons";
import "./footer.styles.scss";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <footer className="main-footer">
      <div className="main-container">
        <div className="main-footer__upper">
          <div className="main-footer__row main-footer__row-1">
            <h2 className="heading font-bold text-lg mb-2">Bruno Cordeiro</h2>
            <p className="main-footer__short-desc">
              A Backend developer focused on Java applications using Spring Boot
              and Spring Cloud for microservices
            </p>
          </div>
          <div className="main-footer__row main-footer__row-2">
            <h2 className="heading heading-sm main-footer__heading-sm">
              <span className="font-bold">Social</span>
              <div className="main-footer__social-cont">
                <SocialIcon
                  className="mr-3 mt-2"
                  url="https://github.com/brunocordeiro180"
                />
                <SocialIcon
                  className="mr-3 mt-2"
                  url="https://www.instagram.com/brunocordeiro180/"
                />
                <SocialIcon
                  className="mr-3 mt-2"
                  url="https://www.linkedin.com/in/bruno-cordeiro-mendes/"
                />
                <SocialIcon
                  className="mr-3 mt-2"
                  url="https://twitter.com/brunocordm"
                />
              </div>
            </h2>
          </div>
        </div>
        <div className="main-footer__lower">
          © Copyright Bruno Cordeiro
        </div>
      </div>
    </footer>
  );
};
