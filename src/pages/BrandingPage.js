import React, {useEffect} from "react";
import {Container, PrimaryTitle, SecondaryTitle} from "../components/root";
import useElementOnScreen from "../utils/useOnScreen";
import {
  BrandingContainer, BrandingText, BrandListContainer,
  LeftImage,
  ListButton, MarqueeContainer,
  RightContainer,
  RowContainer,
  TitleContainer
} from "../components/branding";
import blurImage from "../assets/images/blur-mesh.png";

export const BrandingPage = (props) => {

  let brandingRef = props.propRef;
  let isBrandingVisible = useElementOnScreen(brandingRef);

  useEffect(() => {
    if (isBrandingVisible) {
      props.onVisible();
    }
  }, [isBrandingVisible, props]);

  const branding = ["abc", "def", "ghi", "jkl", "mno", "pqr", "stu", "vwx", "yz"];

  return (
    <Container ref={brandingRef}>
      <RowContainer>
        <LeftImage src={blurImage}/>
        <RightContainer>
          <ListButton>
            How can we help make an impact?
          </ListButton>
          <ListButton>
            How to get in touch with us?
          </ListButton>
          <ListButton>
            How can you be sure?
          </ListButton>
        </RightContainer>
      </RowContainer>
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
                  <BrandingText key={index}>
                    {brand}
                  </BrandingText>
                )
              })
            }
            {
              branding.map((brand, index) => {
                return (
                  <BrandingText key={index}>
                    {brand}
                  </BrandingText>
                )
              })
            }
            {
              branding.map((brand, index) => {
                return (
                  <BrandingText key={index}>
                    {brand}
                  </BrandingText>
                )
              })
            }
          </MarqueeContainer>
        </BrandListContainer>
      </BrandingContainer>
    </Container>
  )
}