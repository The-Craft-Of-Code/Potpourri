import {
  AppName, BottomBarCenter,
  BottomBarContainer,
  BottomBarLeft, BottomBarRight,
  ContactContainer, EmailAddress, NavBarContainer, NewsLetterCaption, NewsLetterContainer, NewsLetterTitle,
  PrimaryContactText, PrimaryPhoneNumber, SocialAnchor, SocialsContainer, SocialsContainerWrapper
} from "../components/bottombar";
import {LinkButton, RouterLinkButton} from "../components/navbar";
import {AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillMediumSquare} from "react-icons/ai";
import {LaunchButton} from "../components/learnmore/LaunchButton";
import React from "react";

export function BottomBar(props) {
  return (
    <BottomBarContainer>
      <BottomBarLeft>
        <AppName onClick={() => props.scroll(0)}>
          Potpourri
        </AppName>
        <ContactContainer>
          <PrimaryContactText>
            PST Snigdha
            Address Line 1
            Address Line 2
          </PrimaryContactText>
          <PrimaryPhoneNumber>
            +91 9876543210
          </PrimaryPhoneNumber>
          <EmailAddress>
            contact@potpurri.com
          </EmailAddress>
        </ContactContainer>
      </BottomBarLeft>
      <BottomBarCenter>
        <NavBarContainer>
          <LinkButton onClick={() => props.scroll(0)}>
            Home
          </LinkButton>
          <LinkButton onClick={() => props.scroll(2)}>
            Why us?
          </LinkButton>
          <LinkButton onClick={() => props.scroll(3)}>
            Services
          </LinkButton>
          <LinkButton onClick={() => props.scroll(5)}>
            Profile
          </LinkButton>
          <LinkButton onClick={() => props.scroll(6)}>
            Get in touch
          </LinkButton>
          <RouterLinkButton to="about" target="_blank" rel="noopener noreferrer">
            About Me
          </RouterLinkButton>
        </NavBarContainer>
        <SocialsContainerWrapper>
          <SocialsContainer>
            <SocialAnchor color={"#3b5998"}>
              <AiFillFacebook/>
            </SocialAnchor>
            <SocialAnchor color={"#0077b5"}>
              <AiFillLinkedin/>
            </SocialAnchor>
            <SocialAnchor color={"#00ab6c"}>
              <AiFillMediumSquare/>
            </SocialAnchor>
            <SocialAnchor color={"#c32aa3"}>
              <AiFillInstagram/>
            </SocialAnchor>
          </SocialsContainer>
        </SocialsContainerWrapper>
      </BottomBarCenter>
      <BottomBarRight>
        <NewsLetterContainer>
          <NewsLetterTitle>
            Newsletter.
          </NewsLetterTitle>
          <NewsLetterCaption>
            We write about interesting things.
          </NewsLetterCaption>
          <LaunchButton onClick={() => props.scroll(0)} label={"Sign Up Now"}/>
        </NewsLetterContainer>
      </BottomBarRight>
    </BottomBarContainer>
  );
}