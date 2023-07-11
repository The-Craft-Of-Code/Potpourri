import React, {forwardRef, useImperativeHandle, useState} from "react";
import {
  BlogButton,
  ButtonContainer,
  Name,
  NavBarRoot, Flex1Container, DropDownButton, DropDownModal, NavBarContainer, LinkButton, RemainingSpace,
} from "./index";
import {BiMenuAltRight} from "react-icons/bi";
import {AiOutlineClose} from "react-icons/ai";

export const NavBar = forwardRef((props, ref) => {

  const [showDropDown, setShowDropDown] = useState(false);
  let [currentPage, setCurrentPage] = React.useState(0);

  useImperativeHandle(ref, () => ({
    setCurrentPage: (index) => {
      setCurrentPage(index);
    },
  }));

  return (
    <NavBarContainer blur={showDropDown ? 1 : 0}>
      <NavBarRoot>
        <Flex1Container>
          <Name onClick={() => props.scroll(0)}>
            Potpourri
          </Name>
          <DropDownButton onClick={() => setShowDropDown(!showDropDown)}>
            {showDropDown
              ? <AiOutlineClose/> : <BiMenuAltRight/>
            }
          </DropDownButton>
        </Flex1Container>
        <ButtonContainer>
          <LinkButton active={(currentPage === 0 ? 1 : 0) || (currentPage === 1 ? 1 : 0)}
                      onClick={() => props.scroll(0)}>
            Home
          </LinkButton>
          <LinkButton active={currentPage === 2 ? 1 : 0} onClick={() => props.scroll(2)}>
            Why us?
          </LinkButton>
          <LinkButton active={(currentPage === 3 ? 1 : 0) || (currentPage === 4 ? 1 : 0)} onClick={() => props.scroll(3)}>
            Services
          </LinkButton>
          <LinkButton active={currentPage === 5 ? 1 : 0} onClick={() => props.scroll(5)}>
            Profile
          </LinkButton>
          <LinkButton active={currentPage === 6 ? 1 : 0} onClick={() => props.scroll(6)}>
            Get in touch
          </LinkButton>
          <LinkButton active={currentPage === 7 ? 1 : 0} onClick={() => props.scroll(7)}>
            Testimonials
          </LinkButton>
        </ButtonContainer>
        <Flex1Container>
          <BlogButton>
            Blog
          </BlogButton>
        </Flex1Container>
      </NavBarRoot>
      <DropDownModal show={showDropDown ? 1 : 0}>
        <LinkButton active={(currentPage === 0 ? 1 : 0) || (currentPage === 1 ? 1 : 0)} onClick={() => {
          props.scroll(0)
          setShowDropDown(false)
        }}>
          Home
        </LinkButton>
        <LinkButton active={currentPage === 2 ? 1 : 0} onClick={() => {
          props.scroll(2)
          setShowDropDown(false)
        }}>
          Why us?
        </LinkButton>
        <LinkButton active={(currentPage === 3 ? 1 : 0) || (currentPage === 4 ? 1 : 0)} onClick={() => {
          props.scroll(3)
          setShowDropDown(false)
        }}>
          Services
        </LinkButton>
        <LinkButton active={currentPage === 5 ? 1 : 0} onClick={() => {
          props.scroll(5)
          setShowDropDown(false)
        }}>
          Profile
        </LinkButton>
        <LinkButton active={currentPage === 6 ? 1 : 0} onClick={() => {
          props.scroll(6)
          setShowDropDown(false)
        }}>
          Get in touch
        </LinkButton>
        <LinkButton active={currentPage === 7 ? 1 : 0} onClick={() => {
          props.scroll(7)
          setShowDropDown(false)
        }}>
          Testimonials
        </LinkButton>
        <BlogButton>
          Blog
        </BlogButton>
      </DropDownModal>
      <RemainingSpace onClick={() => setShowDropDown(false)}/>
    </NavBarContainer>
  );
});