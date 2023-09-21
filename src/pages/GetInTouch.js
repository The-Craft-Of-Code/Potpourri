import React, {useEffect, useState} from "react";
import useElementOnScreen from "../utils/useOnScreen";
import {
  Container,
  ErrorContainer,
  ErrorContainerInner, GraphicContentContainer,
  PrimaryContainer,
  PrimaryText,
  SecondaryText
} from "../components/getintouch";
import {EmailBar} from "../components/getintouch/email/EmailBar";

export function GetInTouch(props) {
  let getInTouchRef = props.propRef;
  let isGetInTouchVisible = useElementOnScreen(getInTouchRef);
  let [error, setError] = useState(false);
  let [errorMessage, setErrorMessage] = useState("");

  const handleError = (error) => {
    setError(true);
    setErrorMessage(error);
    setTimeout(() => {
      setError(false);
      setErrorMessage("");
    }, 3000);
  }

  const handleSubmit = (body) => {
    window.open("mailto:admin@potpourri.agency?subject=Get in touch&body=" + body);
  }

  useEffect(() => {
    if (isGetInTouchVisible) {
      props.onVisible();
    }
  }, [isGetInTouchVisible, props]);
  return (
    <>
      <Container ref={getInTouchRef}>
        <PrimaryContainer>
          <PrimaryText>
            Get in touch with us!
          </PrimaryText>
          <SecondaryText>
            Fulfil your writing needs.
          </SecondaryText>
          <EmailBar onSubmit={(body) => handleSubmit(body)} onError={(error) => handleError(error)}/>
        </PrimaryContainer>
        <GraphicContentContainer>
        </GraphicContentContainer>
        <ErrorContainer>
          <ErrorContainerInner show={error ? 1 : 0}>
            {errorMessage}
          </ErrorContainerInner>
        </ErrorContainer>
      </Container>
    </>
  )
}