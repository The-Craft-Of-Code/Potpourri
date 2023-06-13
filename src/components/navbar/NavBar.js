import React, {useState} from "react";
import {
  BlogButton,
  ButtonContainer,
  Name,
  NavBarRoot, Flex1Container, DropDownButton, DropDownModal, NavBarContainer, LinkButton,
} from "./index";
import {BiMenuAltRight} from "react-icons/bi";
import {AiOutlineClose} from "react-icons/ai";

export function NavBar(props) {

  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <NavBarContainer blur={showDropDown ? 1 : 0}>
      <NavBarRoot>
        <Flex1Container>
          <Name>
            Potputti
          </Name>
          <DropDownButton onClick={() => setShowDropDown(!showDropDown)}>
            {showDropDown
              ? <AiOutlineClose/> : <BiMenuAltRight/>
            }
          </DropDownButton>
        </Flex1Container>
        <ButtonContainer>
          <LinkButton active={props.currentPage === 0 || props.currentPage === 1 ? 1 : 0} onClick={() => props.scroll(0)}>
            Home
          </LinkButton>
          <LinkButton active={props.currentPage === 2 ? 1 : 0} onClick={() => props.scroll(2)}>
            Why us?
          </LinkButton>
          <LinkButton active={props.currentPage === 3 ? 1 : 0} onClick={() => props.scroll(3)}>
            Works
          </LinkButton>
          <LinkButton active={props.currentPage === 4 ? 1 : 0} onClick={() => props.scroll(4)}>
            Services
          </LinkButton>
          <LinkButton active={props.currentPage === 5 ? 1 : 0} onClick={() => props.scroll(5)}>
            Profile
          </LinkButton>
        </ButtonContainer>
        <Flex1Container>
          <BlogButton>
            Blog
          </BlogButton>
        </Flex1Container>
      </NavBarRoot>
      <DropDownModal show={showDropDown ? 1 : 0}>
        <LinkButton active={props.currentPage === 0 || props.currentPage === 1 ? 1 : 0} onClick={() => props.scroll(0)}>
          Home
        </LinkButton>
        <LinkButton active={props.currentPage === 2 ? 1 : 0} onClick={() => props.scroll(2)}>
          Why us?
        </LinkButton>
        <LinkButton active={props.currentPage === 3 ? 1 : 0} onClick={() => props.scroll(3)}>
          Works
        </LinkButton>
        <LinkButton active={props.currentPage === 4 ? 1 : 0} onClick={() => props.scroll(4)}>
          Services
        </LinkButton>
        <LinkButton active={props.currentPage === 5 ? 1 : 0} onClick={() => props.scroll(5)}>
          Profile
        </LinkButton>
      </DropDownModal>
    </NavBarContainer>
  );
}