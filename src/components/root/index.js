import styled from "styled-components";
import {colors} from "../../colors";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: ${colors.backgroundColor};
`


export const ScrollSpace = styled.div`
  margin-top: 75px;
  display: flex;
  flex: 1;
  flex-direction: column;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`