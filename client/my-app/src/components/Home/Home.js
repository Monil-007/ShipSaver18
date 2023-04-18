import React from "react";
import { StyledButton } from "../styles/Button.styled";
import {
  Name,
  StyledButtonsContainer,
  StyledHome,
  Title,
  Line,
  Greeting,
  Social,
  Socials,
  Quote,
} from "../styles/Home.styled";
import "./style.css";
import projectIcon from "../../assets/icons/project-icon.svg";
import aboutIcon from "../../assets/icons/about-me.svg";
import { IconContext } from "react-icons";
import { GrLinkedinOption } from "react-icons/gr";
import { GoMarkGithub } from "react-icons/go";
import { FaEnvelope } from "react-icons/fa";

const Home = () => {
  let today = new Date(),
    hour = today.getHours();

  return (
    <IconContext.Provider value={{ size: "1rem" }}>
      <StyledHome id="home">
        <Name>Team MLcrats</Name>
        <Title style={{ fontSize: "35px" }}>Retail Recommendation System for Micro Enterprises</Title>
        <Title style={{ fontSize: "18px", color: "green" }}>A supply chain management project</Title>
        <p>
          We <span className="change-text"></span>{" "}
          <span className="responsive">Machine</span>
          <span className="responsive">Learning,</span>
          <span className="responsive">blockchain,</span>
          {/* <span className="responsive">blockchain,</span> */}
          <span className="responsive">realworld</span>
          {/* <span className="responsive">r</span>
          <span className="responsive">n</span>
          <span className="responsive">i</span>
          
          <span className="responsive">g</span>
  <span className="responsive">s</span>*/} projects.
        </p>
        <StyledButtonsContainer>
          <StyledButton
            icon={projectIcon}
            to="projects"
            smooth={true}
            duration={0}
            delay={0}
            spy={true}
            spyThrottle={0}
            exact="true"
            offset={-50}
          >
            <span>Project Idea</span>
          </StyledButton>
          <StyledButton
            icon={aboutIcon}
            secondary="true"
            content="B"
            to="about"
            smooth={true}
            duration={0}
            delay={0}
            spy={true}
            spyThrottle={0}
            exact="true"
            offset={-50}
          >
            <span>About our team</span>
          </StyledButton>
        </StyledButtonsContainer>
        <Line />
        <Greeting>
          have a great
          <span>
            {hour < 12 ? " morning" : hour < 18 ? " afternoon" : " evening"}
          </span>
          .
        </Greeting>
        {/* <Socials>
          <Social
            href="mailto:gandhi.monil288@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </Social>
          <Social
            href="https://github.com/prodigee-project/Data-Analysis---Grocery"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GoMarkGithub />
          </Social>
          
        </Socials> */}
        <Quote>We're gonna make the supply chain like never before!!!</Quote>
      </StyledHome>
    </IconContext.Provider>
  );
};

export default Home;
