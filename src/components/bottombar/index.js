import styled from 'styled-components';
import {colors} from "../../colors";
import {Container as RootContainer} from "../root";

export const Container = styled(RootContainer)``

export const TestimonialsContainer = styled.div`
  padding-top: 4em;
  padding-left: 3em;
  padding-right: 3em;
  display: flex;
  flex: 2;
  max-height: 70%;
  flex-direction: column;
`

export const BottomBarContainer = styled.div`
  display: flex;
  flex: 1;
  background-color: white;
`

export const Testimonial = styled.h1`
  padding: 0;
  margin: 0 0 0.5em;
  text-transform: uppercase;
  font-size: calc(1.5rem + 1.5vw);
  color: ${colors.primaryColor};
  font-family: Shocka Serif, serif;
`

export const CardRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 1em;
  flex: 1;
  height: 100%;
  padding: 0 0 3em;
  flex-wrap: wrap;
  overflow: scroll;
`