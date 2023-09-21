import React from 'react';
import {
  Container,
  Row,
  SubtitleContainer,
  TextContainer,
  TextContent,
  TitleContainer
} from "../components/aboutus";

export function AboutUs() {

  return (
    <Container>
      <Row>
        <TextContainer>
          <TitleContainer>
            Potpourri
          </TitleContainer>
          <SubtitleContainer>
            Empowering your voice
          </SubtitleContainer>
          <TextContent>
            Brainchild of a techie with loads of creativity but no literature background, Potpourri is one of the most unique teams you will find. Talking about diversity and creativity, we have experts from all industry backgrounds with their own quirky perfections.
          </TextContent>
        </TextContainer>
      </Row>
    </Container>
  );

}