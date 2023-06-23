import React, {useEffect, useRef} from 'react'
import useElementOnScreen from "../utils/useOnScreen";
import {BottomBarContainer, CardRow, Container, Testimonial, TestimonialsContainer} from "../components/bottombar";
import {TestimonialCard} from "../components/testimonialcard/TestimonialCard";

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
      reviewBody: "Some great comment about the services offered by the agency. Maybe talk about the quality or quickness or something of that sort. Crisp, interesting comment. ",
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
        bottom
      </BottomBarContainer>
    </Container>
  )
}