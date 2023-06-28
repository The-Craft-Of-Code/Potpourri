import styled from "styled-components";
import {colors} from "../../colors";

export const WorksContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 3em;
  display: flex;
  flex-direction: row;
`

export const WorksListContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const WorkList = styled.div`
  padding-top: 2em;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
`

export const WorkItem = styled.h1`
  margin: 0;
  font-size: calc(0.75rem + 1vw);
  border-bottom: ${props => props.selected ? `2px solid ${colors.primaryColor}` : `1px solid ${colors.primaryColor}`};
  color: ${props => props.selected ? colors.primaryColor : null};
  padding-bottom: 0.5em;
  padding-top: 0.5em;
  width: 60%;
  font-family: Shocka Serif, serif;
  font-weight: 500;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    color: ${colors.primaryColor};
  }
`

export const SelectedWorkContainer = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 2em;
  line-height: 1.25;
  overflow-y: hidden;
  overflow-x: hidden;
`

export const SelectedWorkTitle = styled.h1`
  margin: 0;
  font-size: calc(1vw + 2vmin);
  font-family: Shocka Serif, serif;
  font-weight: normal;
  padding-bottom: 0.5em;
`