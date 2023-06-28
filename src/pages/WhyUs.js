import React, {useEffect, useRef} from 'react';
import useElementOnScreen from "../utils/useOnScreen";
import {Container, SecondaryTitle, TextContent} from "../components/root";
import {
  LeftContainerBottom,
  LeftContainerTop,
  RightContainerBottom,
  RightContainerTop, TopContentBox, TopContentContainer, TopPrimaryText, TopSecondaryText,
  WhyUsRow
} from "../components/whyus";

export function WhyUs(props) {

  let standOutRef = useRef(null);
  let isStandOutVisible = useElementOnScreen(standOutRef);

  useEffect(() => {
    if(isStandOutVisible) {
      props.onVisible();
    }
  }, [isStandOutVisible, props]);

  return (
    <Container className="WhyUs" ref={standOutRef}>
      <TopContentBox>
        <TopContentContainer>
          <TopPrimaryText>
            75+
          </TopPrimaryText>
          <TopSecondaryText>
            clients
          </TopSecondaryText>
        </TopContentContainer>
        <TopContentContainer>
          <TopPrimaryText>
            500+
          </TopPrimaryText>
          <TopSecondaryText>
            Pieces
          </TopSecondaryText>
        </TopContentContainer>
        <TopContentContainer>
          <TopPrimaryText>
            20+
          </TopPrimaryText>
          <TopSecondaryText>
            Collaborations
          </TopSecondaryText>
        </TopContentContainer>
      </TopContentBox>
      <WhyUsRow>
        <LeftContainerTop>
          <SecondaryTitle>
            WHY US?
          </SecondaryTitle>
        </LeftContainerTop>
        <RightContainerTop>
          <TextContent>
            At Potpourri, we are dedicated to elevating your 
            brand's communication to new heights. Whether it's refining your 
            sound, honing your speaking abilities, crafting compelling written 
            content, optimizing your digital presence, or strategizing for 
            success, we have you covered. Our mission is to empower you with 
            the tools and expertise needed to communicate effectively and 
            make a lasting impact. With Potpourri by your side, you can be 
            confident that your voice will resonate stronger than ever before.
          </TextContent>
        </RightContainerTop>
      </WhyUsRow>
      <WhyUsRow>
        <LeftContainerBottom>
          <TextContent>
              We are a diverse team of professionals, united by our 
              shared passion for the art of writing. With varied 
              backgrounds, qualifications, and cultural perspectives, 
              we bring a rich tapestry of experience to our work. What 
              sets us apart is the fusion of our unwavering creativity 
              and in-depth expertise in content marketing. This unique 
              blend enables us to truly grasp the needs and desires of 
              our clients, allowing us to consistently deliver 
              exceptional results. Our commitment to continuous 
              improvement drives us to refine our craft with every 
              project, ensuring that we exceed expectations time and 
              time again.
          </TextContent>
        </LeftContainerBottom>
        <RightContainerBottom>
          <SecondaryTitle>
            ABOUT US
          </SecondaryTitle>
        </RightContainerBottom>
      </WhyUsRow>
    </Container>
  );
}