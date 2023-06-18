import styled from "styled-components";
import {colors} from "../../colors";

export const Container = styled.div`
  padding: 3.5em;
  background-color: ${colors.primaryColor};
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const PrimaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  color: #fff;
  max-height: 80%;
`

export const PrimaryText = styled.div`
  font-family: Shocka Serif, serif;
  font-size: calc(1.5rem + 1vw);
  text-align: center;
  margin-bottom: 1em;
`

export const SecondaryText = styled.div`
  font-family: Shocka Serif, serif;
  font-size: calc(3rem + 3vw);
  text-align: center;
  margin-bottom: 1em;
`

export const ErrorContainer = styled.div`
  position: absolute;
  bottom: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: Shocka Serif, serif;
`

export const ErrorContainerInner = styled.div`
  width: 30%;
  background-color: #fff;
  padding: 1em;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
  color: red;
  transition: all 0.2s ease-in-out;
  opacity: ${props => props.show ? 1 : 0};
  transform: ${props => props.show ? 'translateY(0)' : 'translateY(20px)'};
`

export const GraphicContentContainer = styled.div`
  display: flex;
  
`