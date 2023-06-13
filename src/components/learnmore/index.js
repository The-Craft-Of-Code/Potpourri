import styled from "styled-components";
import {colors} from "../../colors";

export const Container = styled.div`
  border-bottom: 1px solid #000000;
  width: max-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const LearnMoreLabel = styled.div`
  font-size: calc(1vw + .45em);
  font-style: normal;
  font-weight: bold;
  font-family: Subjectivity, serif;
  transition: all 0.3s ease-in-out;
  margin-right: 0.2em;

  &:hover {
    cursor: pointer;
    color: ${colors.primaryTextColor};
  }
`