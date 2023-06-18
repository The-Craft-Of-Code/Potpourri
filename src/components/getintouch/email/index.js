import styled from "styled-components";
import {colors} from "../../../colors";

export const EmailContainer = styled.div`
  width: 50%;
  border-radius: 5px;
  padding: 0.3em;
  background-color: ${colors.secondaryColor};
  display: flex;
  flex-direction: row;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const EmailInput = styled.input`
  flex: 1;
  padding: 15px;
  background-color: transparent;
  border: none;
  color: #fff;
  font-family: Shocka Serif, serif;
  font-size: calc(0.8rem + 0.6vw);
  
  &::placeholder {
    color: #fff;
    font-size: calc(0.8rem + 0.6vw);
    font-family: Shocka Serif, serif;
  }
  
  &:focus {
    outline: none;
  }
`

export const GetInTouchButton = styled.div`
  width: max-content;
  background-color: white;
  color: ${colors.secondaryColor};
  font-family: Shocka Serif, serif;
  font-weight: bold;
  padding: 0.5em;
  border-radius: 5px;
  margin-left: 0.5em;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
  }
`