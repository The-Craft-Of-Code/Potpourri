import React, {useEffect, useRef} from "react";
import {Container, PrimaryTitle, SecondaryTitle, TextContent} from "../components/root";
import {
  LeftContainer,
  LeftContainerBottom,
  RightContainer,
  RightContainerBottom,
  StandOutRow
} from "../components/standout";
import {LearnMore} from "../components/learnmore/LearnMore";
import blurImage from "../assets/images/blur-mesh.png";
import useElementOnScreen from "../utils/useOnScreen";

export function StandOut(props) {

  let standOutRef = useRef(null);
  let isStandOutVisible = useElementOnScreen(standOutRef);

  useEffect(() => {
    isStandOutVisible && props.onVisible();
  }, [isStandOutVisible, props]);

  return (
    <Container ref={standOutRef}>
      <StandOutRow>
        <LeftContainer>
          <PrimaryTitle>
            We make you
          </PrimaryTitle>
          <SecondaryTitle>
            Stand Out
          </SecondaryTitle>
        </LeftContainer>
        <RightContainer>
          <TextContent>
            Step into the world of limitless creativity entrust us to bestow upon you an intricately woven tapestry of
            cohesive identity, where each thread of captivating content converges to unveil your brand’s *extrodinary*
            essence.
          </TextContent>
          <LearnMore onClick={() => {
          }}/>
        </RightContainer>
      </StandOutRow>
      <StandOutRow>
        <LeftContainerBottom>
          <TextContent>
            From selecting the perfect words to evoke emotion to crafting engaging copy that sparks curiosity, we are
            committed to sculpting an immersive experience that breathes life into your brand's story. Embrace the power
            of our content creation expertise as we blend ingenuity and strategy, positioning your brand for success in
            the digital landscape.
          </TextContent>
        </LeftContainerBottom>
        <RightContainerBottom src={blurImage}/>
      </StandOutRow>
    </Container>
  );
}