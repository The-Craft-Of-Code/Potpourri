import styled from "styled-components";
import {colors} from "../../colors";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 80%;
  padding: 1em 3em 1em 1em;

  @media (max-width: 1000px) {
    flex-direction: column;
    height: 100%;
  }
`

export const ImageContainer = styled.img`
  flex: 2;

  @media (max-width: 1000px) {
    height: 20%;
    align-self: start;
    padding-left: 3em;
  }
`

export const TextContainer = styled.div`
  flex: 3;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  height: 90%;
  
  @media (max-width: 1000px) {
    align-items: flex-start;
    padding-left: 3em;
    padding-right: 3em;
    padding-top: 4em;
  }
`

export const TitleContainer = styled.div`
  font-size: calc(3vw + 30px);
  font-family: Shocka Serif, serif;
`

export const SubtitleContainer = styled.div`
  font-size: calc(1vw + 10px);
  margin-top: 0.5em;
  font-family: Subjectivity, serif;
  width: 30%;
  align-self: flex-end;
  font-weight: bold;
  text-align: end;
  flex: 1;
  
  @media (max-width: 1000px) {
    width: max-content;
  }
  
  @media (max-width: 1000px) {
    align-self: flex-start;
    flex: 0;
    width: 100%;
    text-align: start;
  }
`

export const TextContent = styled.p`
  font-size: calc(1vw + 10px);
  font-family: Subjectivity, serif;
  font-weight: lighter;
  color: ${colors.secondaryTextColor};
  text-align: end;
  max-width: 70%;
  align-self: flex-end;
  justify-self: flex-end;

  @media (max-width: 1000px) {
    align-self: flex-start;
    text-align: start;
    padding-top: 2em;
    max-width: 100%;
  }
`