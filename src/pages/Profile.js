import React, {useEffect, useRef} from 'react'
import useElementOnScreen from "../utils/useOnScreen";
import {Container} from "../components/root";
import {BottomBarContainer, TestimonialsContainer} from "../components/bottombar";

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
        top
      </TestimonialsContainer>
      <BottomBarContainer>
        bottom
      </BottomBarContainer>
    </Container>
  )
}