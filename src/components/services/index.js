import styled from "styled-components";
import {Container as DefaultContainer} from "../root";
import {SecondaryTitle as DefaultSecondaryTitle} from "../root";

export const RowContainerWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 3em;
  justify-content: center;
`

export const SecondaryTitle = styled(DefaultSecondaryTitle)`
  @media (max-width: 768px) {
    font-size: calc(2vw + 20px);
  }
`

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-height: 100%;
  padding-top: 1.5em;
  padding-bottom: 1.5em;
  justify-content: space-evenly;
  align-items: start;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 6em;

  &:first-child {
    margin-left: 0;
  }
`

export const ServiceVector = styled.img`
  height: calc(60px + 0.5vw);
  object-fit: contain;
  align-self: start;
  margin-top: 0.5em;
`

export const ServiceTitle = styled.h3`
  padding: 0;
  margin: 1em 0 0;
  font-size: calc(0.8vw + 1vmin + 6px);
  font-weight: 400;
  font-family: Subjectivity, sans-serif;
`

export const Content = styled.p`
  padding: 0;
  margin: 1em 0 0;
  font-size: calc(0.6vw + .25em + 4px);
  font-style: normal;
  line-height: 1.25;
  font-weight: 300;
  text-align: left;
  font-family: Subjectivity, sans-serif;
`


export const Container = styled(DefaultContainer)`
  padding: 3em;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    ${RowContainer} {
      flex-wrap: wrap;

      ${ContentContainer}:nth-child(3) {
        margin-left: 0;
      }

    }

    ${RowContainerWrapper} {
      align-items: center;
    }

    ${ContentContainer} {
      max-width: 30%;
      min-width: 30%;
    }
  }

  @media (max-width: 480px) {
    padding: 1em;

    ${RowContainer} {
      flex-direction: column;
      flex-wrap: nowrap;

      ${ContentContainer} {
        width: 100%;
        max-width: 100%;
        margin: 0;
      }
    }

  }

`
