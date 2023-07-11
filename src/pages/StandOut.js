import React, {useEffect} from "react";
import {Container, PrimaryTitle, SecondaryTitle, TextContent} from "../components/root";
import {
  LeftContainer,
  LeftContainerBottom,
  RightContainer,
  RightContainerBottom,
  StandOutRow
} from "../components/standout";
import {LaunchButton} from "../components/learnmore/LaunchButton";
import blurImage from "../assets/images/blur-mesh.png";
import useElementOnScreen from "../utils/useOnScreen";

export function StandOut(props) {

  let standOutRef = props.propRef;
  let isStandOutVisible = useElementOnScreen(standOutRef);

  useEffect(() => {
    if(isStandOutVisible) {
      props.onVisible();
    }
  }, [isStandOutVisible, props]);

  return (
    <Container ref={standOutRef}>
      <StandOutRow>
        <LeftContainer>
          <PrimaryTitle>
            We make you
          </PrimaryTitle>
          <SecondaryTitle>
            STAND OUT
          </SecondaryTitle>
        </LeftContainer>
        <RightContainer>
          <TextContent>
          At Potpourri, we understand that your brand's voice and tone 
          require the same level of attention and dedication as your 
          products. That's why we are here to alleviate that burden for 
          you. We offer comprehensive content solutions, taking care of 
          every aspect from start to finish. Our approach is fully 
          tailored to your brand philosophy, values, and business 
          line, ensuring a seamless alignment between your identity 
          and the content we create. With Potpourri, you can trust that 
          your brand's messaging will be handled with the utmost care and 
          expertise.

          </TextContent>
          <LaunchButton onClick={() => {
          }} label={"Learn More"}/>
        </RightContainer>
      </StandOutRow>
      <StandOutRow>
        <LeftContainerBottom>
          <TextContent>
              At our core, we recognize the distinctiveness of every brand 
              and the individuality of each idea. We firmly believe that a 
              multitude of possibilities exists to captivate and resonate 
              with clients, provided we convey the right messages and 
              leverage appropriate content. Our approach revolves around 
              tailoring bespoke content for every client, fulfilling our 
              commitment to meticulously craft each piece. We prioritize 
              thoughtful consideration, meticulous editing, and strategic 
              writing that aligns with the market dynamics, target audience, 
              and specific business type of our valued clients.
          </TextContent>
        </LeftContainerBottom>
        <RightContainerBottom src={blurImage}/>
      </StandOutRow>
    </Container>
  );
}