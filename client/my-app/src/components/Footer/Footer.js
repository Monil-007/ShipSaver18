import React from "react";
import {
  ArrowToTop,
  ContactHeader,
  ContactLink,
  Copyright,
  FooterArrowLine,
  FooterBigLink,
  FooterBigLinkContainer,
  FooterContact,
  FooterContacts,
  FooterLine,
  FooterSmallTitle,
  FooterSmallTitleWrapper,
  FooterSocials,
  Small,
  StyledFooter,
} from "../styles/Footer.styled";
import { animateScroll as scroll } from "react-scroll";

const toTop = () => {
  scroll.scrollToTop({ delay: 0, duration: 0 });
};

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <StyledFooter>
      <FooterSmallTitleWrapper>
        <FooterSmallTitle>Get in touch</FooterSmallTitle>
      </FooterSmallTitleWrapper>

      <FooterBigLinkContainer>
        <FooterBigLink
          href="mailto:jerichobantiquete@gmail.com"
          data-hover="Let's talk!"
        >
          Need to register?
        </FooterBigLink>
      </FooterBigLinkContainer>
      <FooterContacts>
        <FooterContact>
          <ContactHeader>Call us</ContactHeader>
          <ContactLink href="tel:+639951076206">+91 9157033554</ContactLink>
        </FooterContact>
        <FooterContact>
          <ContactHeader>Social</ContactHeader>{" "}
          <FooterSocials>
            <ContactLink
              href="https://github.com/prodigee-project/Data-Analysis---Grocery"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </ContactLink>
            {/* <ContactLink
              href="https://www.linkedin.com/in/jericho-bantiquete-450541179/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </ContactLink>
            <ContactLink
              href="https://www.instagram.com/monciego/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </ContactLink> */}
          </FooterSocials>
        </FooterContact>
        <FooterContact>
          <ContactHeader>Let's grab a coffee.</ContactHeader>
          <ContactLink href="tel:+639951076206">
            gandhi.monil288@gmail.com
          </ContactLink>
        </FooterContact>
      </FooterContacts>

      <FooterArrowLine>
        <FooterLine />
        <ArrowToTop title="Back to Top" onClick={toTop}></ArrowToTop>
      </FooterArrowLine>

      <Copyright>
        <small>
          &copy; Copyright {year},{" "}
          <Small
            href="https://github.com/prodigee-project/Data-Analysis---Grocery"
            target="_blank"
            rel="noopener noreferrer"
          >
            Team MLcrats
          </Small>
        </small>
      </Copyright>
    </StyledFooter>
  );
};

export default Footer;
