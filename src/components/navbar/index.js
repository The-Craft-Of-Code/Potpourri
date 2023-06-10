import styled from "styled-components";

export const Flex1Container = styled.div`
  display: flex;
  flex: 1;
  max-width: 30%;
  align-items: center;
  justify-content: center;
  padding-left: 3em;
  padding-right: 3em;
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
  width: 100%;
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
  
`


export const NavBarRoot = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border: 1px solid #000000;

  @media (max-width: 768px) {
    ${ButtonContainer} {
      display: none;
      visibility: hidden;
    }

    ${Flex1Container}:nth-child(2) {
      display: none;
      visibility: hidden;
    }

    ${Flex1Container}:nth-child(1) {
      padding-left: 1em;
      padding-right: 1em;
    }

    ${BlogButton} {
      display: none;
      visibility: hidden;
    }

  }
`
