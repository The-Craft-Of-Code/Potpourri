import styled from "styled-components";
import {colors} from "../../colors";

export const Flex1Container = styled.div`
  display: flex;
  flex: 1;
  max-width: 30%;
  align-items: center;
  justify-content: center;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex: 5;
  max-width: 70%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-left: 1px solid #000000;
  border-right: 1px solid #000000;
  font-family: Subjectivity, sans-serif;
`

export const Name = styled.h1`
  font-family: Brant, serif;
  font-size: 30px;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.38);
`

export const BlogButton = styled.button`
  border-radius: 30px;
  width: 80%;
  border: 1px solid #000000;
  padding: 0.7em;
  background-color: #FFFFFF;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #000000;
    color: #FFFFFF;
  }
`

export const DropDownButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  transition: all 0.2s ease-in-out;
  font-size: 30px;
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
  }
  
  &:hover {
    scale: 1.1;
  }
`

export const DropDownModal = styled.div`
  z-index: 50;
  border-bottom: 1px solid #000000;
  padding: 2em;
  background-color: ${colors.backgroundColor};
  display: none;
  transition: all 0.2s ease-in-out;
  transform: ${props => props.show ? "translateY(0)" : "translateY(-200%)"};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  @media (max-width: 768px) {
    display: flex;
    
    ${BlogButton} {
      margin-top: 1em;
    }
  }

`

export const NavBarContainer = styled.div`
  z-index: 100;
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${props => props.blur ? "100%" : "75px"};
  transition: all 0.2s ease-in-out;
  backdrop-filter: ${props => props.blur ? "blur(5px)" : "none"};
  background-color: ${props => props.blur ? "rgba(0, 0, 0, 0.5)" : "none"};
`


export const NavBarRoot = styled.div`
  z-index: 100;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 75px;
  border-top: 1px solid #000000;
  border-bottom: 1px solid #000000;
  background-color: ${colors.backgroundColor};
  top: 0;
  transition: all 0.2s ease-in-out;

  @media (max-width: 768px) {
    ${ButtonContainer} {
      display: none;
    }

    ${Flex1Container}:nth-child(3) {
      display: none;
    }

    ${Flex1Container}:nth-child(1) {
      padding-left: 1em;
      padding-right: 1em;
      flex: 1;
      width: 100%;
      max-width: 100%;
      display: flex;
      justify-content: space-between;
    }

    ${BlogButton} {
      display: none;
    }

  }
`
