/* eslint-disable react/jsx-no-comment-textnodes */
import React, {useEffect} from "react";
import {Container, PrimaryTitle, SecondaryTitle} from "../components/root";
import useElementOnScreen from "../utils/useOnScreen";
import {
  BrandingContainer, BrandingImage, BrandListContainer,
  MarqueeContainer,
  TitleContainer
} from "../components/branding";

import artha_logo from "../assets/images/brands/Artha_Logo.png";
import Band_Capricio_Logo from "../assets/images/brands/Band_Capricio_Logo.png";
import Behold_social from "../assets/images/brands/Behold_social.png";
import Ikshana_Logo from "../assets/images/brands/Ikshana_Logo.png";
import Virtual_Overseas_Consultancy_logo from "../assets/images/brands/Virtual_Overseas_Consultancy_logo.png";

//Use imports when enabling question container
//import {
//   BrandingContainer, BrandingText, BrandListContainer,
//   LeftImage,
//   ListButton, MarqueeContainer,
//   RightContainer,
//   RowContainer,
//   TitleContainer
// } from "../components/branding";
// import blurImage from "../assets/images/blur-mesh.png";

export const BrandingPage = (props) => {

  let brandingRef = props.propRef;
  let isBrandingVisible = useElementOnScreen(brandingRef);

  useEffect(() => {
    if (isBrandingVisible) {
      props.onVisible();
    }
  }, [isBrandingVisible, props]);

  const branding = [artha_logo, Band_Capricio_Logo, Behold_social, Ikshana_Logo, Virtual_Overseas_Consultancy_logo];

  return (
    <Container ref={brandingRef}>
    {/* //   <RowContainer>
    //     <LeftImage src={blurImage}/>
    //     <RightContainer>
    //       <ListButton>
    //         How can we help make an impact?
    //       </ListButton>
    //       <ListButton>
    //         How to get in touch with us?
    //       </ListButton>
    //       <ListButton>
    //         How can you be sure?
    //       </ListButton>
    //     </RightContainer>
    //   </RowContainer> */}
      <BrandingContainer>
        <TitleContainer>
          <PrimaryTitle>
            Collaborating
          </PrimaryTitle>
          <SecondaryTitle>
            Brands
          </SecondaryTitle>
        </TitleContainer>
        <BrandListContainer>
          <MarqueeContainer>
            {
              branding.map((brand, index) => {
                return (
                  <BrandingImage key={index} src={brand}/>
                )
              })
            }
            {
              branding.map((brand, index) => {
                return (
                  <BrandingImage key={index} src={brand}/>
                )
              })
            }
            {
              branding.map((brand, index) => {
                return (
                  <BrandingImage key={index} src={brand}/>
                )
              })
            }
          </MarqueeContainer>
        </BrandListContainer>
      </BrandingContainer>
    </Container>
  )
}