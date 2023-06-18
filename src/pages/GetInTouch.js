import React, {useEffect, useRef, useState} from "react";
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
  let getInTouchRef = useRef(null);
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

  const handleSubmit = (email) => {
    window.open(`mailto:${email}`);
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
          <EmailBar onSubmit={(email) => handleSubmit(email)} onError={(error) => handleError(error)}/>
        </PrimaryContainer>
        <GraphicContentContainer>
          {/*  TODO: Add stuff */}
        </GraphicContentContainer>
      </Container>
      <ErrorContainer>
        <ErrorContainerInner show={error}>
          {errorMessage}
        </ErrorContainerInner>
      </ErrorContainer>
    </>
  )
}