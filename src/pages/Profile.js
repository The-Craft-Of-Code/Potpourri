import React, {useEffect, useRef} from 'react'
import useElementOnScreen from "../utils/useOnScreen";
import {BottomBarContainer, CardRow, Container, Testimonial, TestimonialsContainer} from "../components/bottombar";
import {TestimonialCard} from "../components/testimonialcard/TestimonialCard";

export function Profile(props) {

  let profilePageRef = useRef(null);
  let isProfilePageVisible = useElementOnScreen(profilePageRef);

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
          <TestimonialCard/>
          <TestimonialCard/>
          <TestimonialCard/>
        </CardRow>
      </TestimonialsContainer>
      <BottomBarContainer>
        bottom
      </BottomBarContainer>
    </Container>
  )
}