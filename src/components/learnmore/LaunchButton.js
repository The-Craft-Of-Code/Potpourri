import React from 'react';
import {Container, LearnMoreLabel} from "./index";
import {RiArrowRightUpLine} from "react-icons/ri";

export function LaunchButton(props) {
  return (
    <Container onClick={() => props.onClick ? props.onClick() : null}>
      <LearnMoreLabel>{props.label}</LearnMoreLabel>
      <RiArrowRightUpLine/>
    </Container>
  )
}