import React from 'react';
import {
  HeroContainer, HeroContent,
  HeroImage,
  HeroImageContainer,
  HeroTextContainer,
  HeroTextRow, PrimaryTextContainer,
  PrimaryTitle, SecondaryTitle
} from "../components/hero";
import mesh from "../assets/images/blur-mesh.png";
import hero from "../assets/images/hero.png";

export function HeroPage() {
  return (
    <HeroContainer>
      <HeroImageContainer>
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
    </HeroContainer>
  );
}