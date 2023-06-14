import React, {useEffect} from 'react';
import {CenterWrapper, CircularContainer, CircularText} from "./index";
import {BsArrowBarDown} from "react-icons/bs";

export function CircularButton(props) {

  const str = "MORE ABOUT US "

  useEffect(() => {

    let circularElement = document.getElementById("text");

    for (let i = 0; i < str.length; i++) {
      let span = document.createElement("span");
      span.innerText = str[i];
      circularElement.appendChild(span);
      span.style.transform = `rotate(${i * 360 / str.length}deg)`;
    }

  }, []);

  return (
    <CircularContainer onClick={props.onClick ? props.onClick : () => {
    }}>
      <CircularText id={"text"}/>
      <CenterWrapper>
        <BsArrowBarDown/>
      </CenterWrapper>
    </CircularContainer>
  );
}