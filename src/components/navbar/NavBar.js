import React from "react";
import {BlogButton, ButtonContainer, DropDownButton, Flex1Container, Name, NavBarRoot} from "./index";

export function NavBar() {
  return (
    <NavBarRoot>
      <Flex1Container id={"name-container"}>
        <Name>
          Potputti
        </Name>
      </Flex1Container>
      <ButtonContainer id={"button-container"}>
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
      <Flex1Container id={"blog-container"}>
        <BlogButton>
          Blog
        </BlogButton>
      </Flex1Container>
    </NavBarRoot>
  );
}