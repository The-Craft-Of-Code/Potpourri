import styled from "styled-components";
import {colors} from "../../colors";

export const HeroImageContainer = styled.div`
  width: 100%;
  height: 50%;
  position: relative;
`

//multiple images stacked on each other so should be absolute
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
  color: ${colors.primaryTextColor};
`

export const SecondaryTitle = styled.h1`
  margin: 0;
  font-size: 120px;
  font-family: Brant, serif;
  color: ${colors.primaryTextColor};
  font-weight: 500;
`

export const HeroContent = styled.p`
  max-width: 40%;
  margin: 0;
  font-size: 50px;
  font-family: Shocka Serif, serif;
`

export const PrimaryTextContainer = styled.div`
  width: 100%;
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

    ${SecondaryTitle} {
      font-size: 80px;
    }

    ${PrimaryTitle} {
      font-size: 20px;
    }
  }
`