import styled from "styled-components";
import {colors} from "../../colors";

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 3em;
  max-height: 40%;
  flex: 3;
`

export const LeftImage = styled.img`
  display: flex;
  flex: 2;
  max-width: 40%;
`

export const ListButton = styled.div`
  width: 100%;
  padding: 1em;
  border-bottom: 1px solid #000;
  font-size: calc(0.8rem + 0.5vw);
  font-family: Shocka Serif, serif;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    color: ${colors.primaryColor};
  }
`

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  justify-content: space-between;
  height: 100%;
  margin-left: 3em;
`

export const BrandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 3em;
  padding-right: 3em;
  flex: 2;
`

export const BrandListContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #FECCC3;
  overflow-x: hidden;
  flex: 5;
  align-items: center;
`

export const MarqueeContainer = styled.div`
  display: flex;
  flex-direction: row;
  --gap: 15rem;
  user-select: none;
  gap: var(--gap);
  animation: scroll 20s linear infinite;
  @keyframes scroll {
    from {
      transform: translateX(5%);
    }
    to {
      transform: translateX(-30%);
    }
  }

`

export const BrandingImage = styled.img`
  padding: 0;
  margin: 0;
  height: 200px;
  object-fit: contain;
`