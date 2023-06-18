import React, {useEffect, useRef} from "react";
import {Container} from "../components/root";
import useElementOnScreen from "../utils/useOnScreen";
import {BrandingContainer, RowContainer} from "../components/branding";
import {RightContainerBottom as Image} from "../components/standout";
import blurImage from "../assets/images/blur-mesh.png";

export const BrandingPage = (props) => {

  let brandingRef = useRef(null);
  let isBrandingVisible = useElementOnScreen(brandingRef);

  useEffect(() => {
    if (isBrandingVisible) {
      props.onVisible();
    }
  }, [isBrandingVisible, props]);

  return (
    <Container ref={brandingRef}>
      <RowContainer>
        <Image/>
      </RowContainer>
      <BrandingContainer>
        branding
      </BrandingContainer>
    </Container>
  )
}