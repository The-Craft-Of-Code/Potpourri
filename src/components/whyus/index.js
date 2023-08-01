import styled from "styled-components";
import {colors} from "../../colors";

export const LeftContainerTop = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
`

export const RightContainerTop = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  justify-content: space-between;
`

export const LeftContainerBottom = styled.div`
  display: flex;
  flex: 4;
`

export const RightContainerBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: start;
  flex: 3;
`

export const TopContentBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 1.5vh 0;
  background-color: ${colors.primaryColor};
`

export const TopContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TopPrimaryText = styled.h1`
  margin: 0;
  padding: 0;
  font-size: calc(4vw + 2vmin);
  font-family: Shocka Serif, serif;
  color: white;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: calc(3vw + 2vmin);
  }
`

export const TopSecondaryText = styled.h3`
  margin: 0;
  padding: 0;
  font-size: calc(2vw + 1vmin);
  font-family: Shocka Serif, serif;
  color: white;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: calc(1vw + 1.5vmin);
  }

`


export const WhyUsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 3em;
  flex: 1;

  &:nth-child(2) {
    padding-bottom: 0;
  }
  
  &:nth-child(3) {
    padding-top: 0;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
    
    &:nth-child(3) {
      flex-direction: column-reverse;
    }
    
    >${RightContainerBottom} {
      align-items: start;
    }
  }

`