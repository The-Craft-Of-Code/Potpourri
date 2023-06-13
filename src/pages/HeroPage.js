import React, {useEffect, useRef} from 'react';
import {
  HeroContent,
  HeroImage,
  HeroImageContainer,
  HeroTextContainer,
  HeroTextRow, PrimaryTextContainer,
  PrimaryTitle, SecondaryTitle
} from "../components/hero";
import mesh from "../assets/images/blur-mesh.png";
import hero from "../assets/images/hero.png";
import {Container} from "../components/root";
import useElementOnScreen from "../utils/useOnScreen";

export function HeroPage(props) {

  let heroPageRef = useRef(null);
  let isHeroPageVisible = useElementOnScreen(heroPageRef);

  useEffect(() => {
    isHeroPageVisible && props.onVisible();
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
          <HeroContent>
            We write, thing two, thing three, thing four
          </HeroContent>
        </HeroTextRow>
      </HeroTextContainer>
    </Container>
  );
}