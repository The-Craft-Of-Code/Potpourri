import styled from "styled-components";
import {colors} from "../../colors";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background-color: ${colors.backgroundColor};
`

export const ScrollSpace = styled.div`
  margin-top: 75px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
`