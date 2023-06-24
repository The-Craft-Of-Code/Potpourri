import React, {useEffect, useRef} from 'react'
import useElementOnScreen from "../utils/useOnScreen";
import {
  AppName,
  BottomBarCenter,
  BottomBarContainer,
  BottomBarLeft,
  BottomBarRight,
  CardRow,
  ContactContainer,
  Container, EmailAddress,
  NavBarContainer, NewsLetterCaption,
  NewsLetterContainer, NewsLetterSignUp, NewsLetterTitle,
  PrimaryContactText, PrimaryPhoneNumber,
  SocialAnchor,
  SocialsContainer,
  SocialsContainerWrapper,
  Testimonial,
  TestimonialsContainer
} from "../components/bottombar";
import {TestimonialCard} from "../components/testimonialcard/TestimonialCard";
import {LinkButton} from "../components/navbar";
import {AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillMediumSquare, AiOutlineArrowsAlt} from "react-icons/ai";
import {LaunchButton} from "../components/learnmore/LaunchButton";

export function Profile(props) {

  let profilePageRef = useRef(null);
  let isProfilePageVisible = useElementOnScreen(profilePageRef);

  let testimonialData = [
    {
      name: "John Doe",
      employmentTitle: "Manager at Company Name",
      reviewTitle: "Great service!",
      reviewBody: "Some great comment about the services offered by the agency. Maybe talk about the quality or quickness or something of that sort. Crisp, interesting comment. ",
      brandName: "Brand name user",
      date: "01/01/2021",
      profileImage: "https://www.w3schools.com/howto/img_avatar.png"
    },
    {
      name: "Ethan Hunt",
      employmentTitle: "Manager at some other company",
      reviewTitle: "Amazing service!",
      reviewBody: "Some great comment about the services offered by the agency. Maybe talk about the quality or quickness or something of that sort. Crisp, interesting comment. ",
      brandName: "Brand name user",
      date: "01/01/2023",
      profileImage: "https://www.w3schools.com/howto/img_avatar.png"
    },
    {
      name: "John Doe",
      employmentTitle: "Manager at Company Name",
      reviewTitle: "Great service!",
      reviewBody: "Some great comment about the services offered by the agency. Maybe talk about the quality or quickness or something of that sort. Crisp, interesting comment. Some great comment about the services offered by the agency. Maybe talk about the quality or quickness or something of that sort. Crisp, interesting comment. Some great comment about the services offered by the agency. Maybe talk about the quality or quickness or something of that sort. Crisp, interesting comment. Some great comment about the services offered by the agency. Maybe talk about the quality or quickness or something of that sort. Crisp, interesting comment. Some great comment about the services offered by the agency. Maybe talk about the quality or quickness or something of that sort. Crisp, interesting comment. Some great comment about the services offered by the agency. Maybe talk about the quality or quickness or something of that sort. Crisp, interesting comment. Some great comment about the services offered by the agency. Maybe talk about the quality or quickness or something of that sort. Crisp, interesting comment. ",
      brandName: "Brand name user",
      date: "01/01/2021",
      profileImage: "https://www.w3schools.com/howto/img_avatar.png"
    },
  ];

  useEffect(() => {
    if (isProfilePageVisible) {
      props.onVisible();
    }
  }, [isProfilePageVisible, props]);

  return (
    <Container>
      <TestimonialsContainer>
        <Testimonial>
          TESTIMONIALS
        </Testimonial>
        <CardRow>
          {
            testimonialData.map((testimonial, index) => {
              return (
                <TestimonialCard key={index} testimonial={testimonial}/>
              )
            })
          }
        </CardRow>
      </TestimonialsContainer>
      <BottomBarContainer>
        <BottomBarLeft>
          <AppName onClick={() => props.scroll(0)}>
            Potputti
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
              Works
            </LinkButton>
            <LinkButton onClick={() => props.scroll(4)}>
              Services
            </LinkButton>
            <LinkButton onClick={() => props.scroll(5)}>
              Profile
            </LinkButton>
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
    </Container>
  )
}