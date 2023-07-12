import styled from "styled-components";
import {colors} from "../../colors";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: ${colors.backgroundColor};
`

export const ScrollSpace = styled.div`
  margin-top: 75px;
  display: flex;
  flex: 1;
  height: max-content;
  flex-direction: column;
  gap: 3em;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 75px);
`

export const PrimaryTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: calc(1.5vw + 1.5vmin);
  font-weight: 400;
  font-family: Shocka Serif, serif;
  color: ${colors.primaryColor};
  
  @media (max-width: 768px) {
    font-size: calc(3vw + 2vmin);
  }
  
`

export const SecondaryTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-size: calc(3vw + 3vmin);
  font-family: Brant, serif;
  color: ${colors.primaryColor};
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: calc(4vw + 3vmin);
  }
`


export const TextContent = styled.p`
  padding: 0;
  font-size: calc(1vw + .2em);
  font-style: normal;
  font-weight: 300;
  line-height: 1.25;
  text-align: justify;
  color: ${(props) => props.color};
  font-family: Subjectivity, serif;
  margin: 0 0 1em;
  
  @media (max-width: 768px) {
    font-size: calc(1vw + 0.6em);
  }
`