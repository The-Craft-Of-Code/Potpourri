import styled from "styled-components";
import {colors} from "../../colors";

export const HeroImageContainer = styled.div`
  width: 100%;
  height: 50%;
  position: relative;
`

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
`

export const HeroTextContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3em;
`

export const PrimaryTitle = styled.h3`
  margin: 0;
  font-size: 40px;
  font-weight: 400;
  font-family: Shocka Serif, serif;
  color: ${colors.primaryColor};
`

export const SecondaryTitle = styled.h1`
  margin: 0;
  font-size: calc(4vw + 50px);
  font-family: Brant, serif;
  color: ${colors.primaryColor};
  font-weight: 500;
`

export const CenterButtonContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`

export const HeroContent = styled.p`
  flex: 1;
  margin: 0;
  font-size: calc(2.5vw + 1.5vmin);
  font-family: Shocka Serif, serif;
  color: ${colors.secondaryTextColor};

`

export const PrimaryTextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
`

export const ScrollDownContainer = styled.div`
  flex-direction: row;
  display: none;
  align-self: start;
  transition: all 0.3s ease-in-out;
  color: ${colors.secondaryTextColor};

  &:hover {
    cursor: pointer;
    color: ${colors.primaryColor};
    border-bottom: 2px solid ${colors.primaryColor};
  }

  @media (max-width: 768px) {
    display: flex;
  }
`


export const HeroTextRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;

    ${HeroContent} {
      width: 100%;
      max-width: 100%;
      text-align: start;
      font-size: 25px;
    }

    ${PrimaryTextContainer} {
      width: 100%;
    }

    ${PrimaryTitle} {
      font-size: 20px;
    }
  }
`