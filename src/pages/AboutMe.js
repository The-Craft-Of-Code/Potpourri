import React from 'react';
import {
  Container,
  ImageContainer,
  Row,
  SubtitleContainer,
  TextContainer,
  TextContent,
  TitleContainer
} from "../components/aboutme";
import snigdha from "../assets/svg/snigdha.svg";

export function AboutMe() {

  return (
    <Container>
      <Row>
        <ImageContainer src={snigdha}/>
        <TextContainer>
          <TitleContainer>
            I am
          </TitleContainer>
          <TitleContainer>
            Snigdha,
          </TitleContainer>
          <SubtitleContainer>
            a freelance writer based in Bengaluru.
          </SubtitleContainer>
          <TextContent>
            I work as a Project Manager for a tech giant in the IT field and practice content writing and psychology out of passion. I have more than three years of experience in the field of writing and have managed various types of projects for both SMBs and Corporates.
          </TextContent>
        </TextContainer>
      </Row>
    </Container>
  );

}