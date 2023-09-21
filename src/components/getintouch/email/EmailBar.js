import React, {useState} from "react";
import {EmailContainer, EmailInput, GetInTouchButton} from "./index";

export function EmailBar(props) {

  const [body, setBody] = useState("");

  const onSubmit = () => {

    if (body === "") {
      props.onError("Content cannot be empty");
      return;
    }

    props.onSubmit(body);

  }

  return (
    <EmailContainer>
      <EmailInput placeholder={"Your query"} value={body} onChange={(e) => setBody(e.target.value)}/>
      <GetInTouchButton onClick={onSubmit}>
        Get in touch!
      </GetInTouchButton>
    </EmailContainer>
  )
}