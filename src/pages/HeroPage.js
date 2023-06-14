import React, {useEffect, useRef} from 'react';
import {
  CenterButtonContainer,
  HeroContent,
  HeroImage,
  HeroImageContainer,
  HeroTextContainer,
  HeroTextRow, PrimaryTextContainer,
  PrimaryTitle, ScrollDownContainer, SecondaryTitle
} from "../components/hero";
import mesh from "../assets/images/blur-mesh.png";
import hero from "../assets/images/hero.png";
import {Container} from "../components/root";
import useElementOnScreen from "../utils/useOnScreen";
import {CircularButton} from "../components/circularbutton/CircularButton";
import {BsArrowBarDown} from "react-icons/bs";

export function HeroPage(props) {

  let heroPageRef = useRef(null);
  let isHeroPageVisible = useElementOnScreen(heroPageRef);

  useEffect(() => {
    if (isHeroPageVisible) {
      props.onVisible();
    }
  }, [isHeroPageVisible, props]);

  return (
    <Container>
      <HeroImageContainer ref={heroPageRef}>
        <HeroImage src={hero}/>
        <HeroImage src={mesh}/>
      </HeroImageContainer>
      <HeroTextContainer>
        <HeroTextRow>
          <PrimaryTextContainer>
            <PrimaryTitle>
              WE ARE
            </PrimaryTitle>
            <SecondaryTitle>
              Potputti
            </SecondaryTitle>
          </PrimaryTextContainer>
          <CenterButtonContainer>
            <CircularButton onClick={() => {
              props.scroll(1)
            }}/>
          </CenterButtonContainer>
          <HeroContent>
            We write, thing two, thing three, thing four
          </HeroContent>
          <ScrollDownContainer onClick={() => {
            props.scroll(1)
          }}>
            MORE ABOUT US
            <BsArrowBarDown style={{marginLeft: "10px"}}/>
          </ScrollDownContainer>
        </HeroTextRow>
      </HeroTextContainer>
    </Container>
  );
}