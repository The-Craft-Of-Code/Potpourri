import React from "react";
import {
  BrandNameDateContainer, BrandText,
  ContentContainer, ContentWrapperFlex, EmploymentTitle, Name,
  PictureContainer, ProfilePicture, ReviewText,
  ReviewTitle, StackIcon,
  TestimonialCardContainer,
  TextContainer
} from "./index";

import StackImage from "../../assets/images/profile-icon.svg";

export function TestimonialCard(props) {

  const testimonial = props.testimonial;

  return (
    <TestimonialCardContainer>
      <ReviewTitle>
        {testimonial.title}
      </ReviewTitle>
      <ContentContainer>
        <PictureContainer>
          <ProfilePicture
            src={testimonial.profileImage}/>
        </PictureContainer>
        <ContentWrapperFlex>
          <TextContainer>
            <Name>
              {testimonial.name}
            </Name>
            <EmploymentTitle>
              {testimonial.employmentTitle}
            </EmploymentTitle>
            <ReviewText>
              {testimonial.reviewBody}
            </ReviewText>
          </TextContainer>
          <BrandNameDateContainer>
            <StackIcon src={StackImage}/>
            <BrandText>
              {testimonial.brandName}, {testimonial.date}
            </BrandText>
          </BrandNameDateContainer>
        </ContentWrapperFlex>
      </ContentContainer>
    </TestimonialCardContainer>
  )
}