import React, {useState} from "react";
import {EmailContainer, EmailInput, GetInTouchButton} from "./index";

export function EmailBar(props) {

  const [email, setEmail] = useState("");

  const onSubmit = () => {
    const emailRegex = new RegExp("^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[A-Za-z]+$");

    if (email === "") {
      props.onError && props.onError("Email cannot be empty");
      return;
    } else if (!emailRegex.test(email)) {
      props.onError && props.onError("Email is invalid");
      return;
    }

    props.onSubmit && props.onSubmit(email);

  }

  return (
    <EmailContainer>
      <EmailInput placeholder={"Your email address"} value={email} onChange={(e) => setEmail(e.target.value)}/>
      <GetInTouchButton onClick={onSubmit}>
        Get in touch!
      </GetInTouchButton>
    </EmailContainer>
  )
}