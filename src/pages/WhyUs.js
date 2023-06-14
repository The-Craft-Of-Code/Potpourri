import React, {useEffect, useRef} from 'react';
import useElementOnScreen from "../utils/useOnScreen";
import {Container, PrimaryTitle, SecondaryTitle, TextContent} from "../components/root";
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
            60+
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
            60+
          </TopPrimaryText>
          <TopSecondaryText>
            Something
          </TopSecondaryText>
        </TopContentContainer>
      </TopContentBox>
      <WhyUsRow>
        <LeftContainerTop>
          <PrimaryTitle>
            Some text here
          </PrimaryTitle>
          <SecondaryTitle>
            WHY US?
          </SecondaryTitle>
        </LeftContainerTop>
        <RightContainerTop>
          <TextContent>
            Step into the world of limitless creativity entrust us to bestow upon you an intricately woven tapestry of
            cohesive identity, where each thread of captivating content converges to unveil your brand’s *extrodinary*
            essence.
          </TextContent>
        </RightContainerTop>
      </WhyUsRow>
      <WhyUsRow>
        <LeftContainerBottom>
          <TextContent>
            Step into the world of limitless creativity entrust us to bestow upon you an intricately woven tapestry of
            cohesive identity, where each thread of captivating content converges to unveil your brand’s *extrodinary*
            essence.
          </TextContent>
        </LeftContainerBottom>
        <RightContainerBottom>
          <PrimaryTitle>
            Some text here
          </PrimaryTitle>
          <SecondaryTitle>
            ABOUT US
          </SecondaryTitle>
        </RightContainerBottom>
      </WhyUsRow>
    </Container>
  );
}