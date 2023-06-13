import React from 'react';
import {Container, LearnMoreLabel} from "./index";
import {RiArrowRightUpLine} from "react-icons/ri";

export function LearnMore(props) {
  return (
    <Container onClick={() => props.onClick ? props.onClick() : null}>
      <LearnMoreLabel>Learn More</LearnMoreLabel>
      <RiArrowRightUpLine/>
    </Container>
  )
}