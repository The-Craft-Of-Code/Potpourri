import styled from "styled-components";

export const StandOutRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 3em;
  flex: 1;
  
  &:nth-child(1) {
    padding-bottom: 0;
  }
  
  &:nth-child(2) {
    padding-right: 0;
  }
  
`

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
`

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  justify-content: space-between;
`

export const LeftContainerBottom = styled.div`
  display: flex;
  flex: 2;
`

export const RightContainerBottom = styled.img`
  display: flex;
  flex: 3;
  margin-left: 5em;
  max-width: 55%;
`
