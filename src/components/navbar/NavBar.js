import React, {useState} from "react";
import {
  BlogButton,
  ButtonContainer,
  Name,
  NavBarRoot, Flex1Container, DropDownButton, DropDownModal, NavBarContainer,
} from "./index";
import {BiMenuAltRight} from "react-icons/bi";
import {AiOutlineClose} from "react-icons/ai";

export function NavBar() {

  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <NavBarContainer blur={showDropDown}>
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
          {/*TODO: Replace with actual links as we progress*/}
          <div>
            Home
          </div>
          <div>
            Why us?
          </div>
          <div>
            Works
          </div>
          <div>
            Services
          </div>
          <div>
            Profile
          </div>
        </ButtonContainer>
        <Flex1Container>
          <BlogButton>
            Blog
          </BlogButton>
        </Flex1Container>
      </NavBarRoot>
      <DropDownModal show={showDropDown}>
        <div>
          Home
        </div>
        <div>
          Why us?
        </div>
        <div>
          Works
        </div>
        <div>
          Services
        </div>
        <div>
          Profile
        </div>
        <BlogButton>
          Blog
        </BlogButton>
      </DropDownModal>
    </NavBarContainer>
  );
}