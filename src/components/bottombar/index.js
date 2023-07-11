import styled from 'styled-components';
import {colors} from "../../colors";
import {Container as RootContainer} from "../root";
import {Name} from "../navbar";

export const Container = styled(RootContainer)`
  height: calc(70vh - 75px);
`

export const TestimonialsContainer = styled.div`
  padding-top: 4em;
  padding-left: 3em;
  padding-right: 3em;
  display: flex;
  height: 70%;
  flex: 2;
  flex-direction: column;
`

export const BottomBarContainer = styled.div`
  min-height: 30vh;
  display: flex;
  flex: 1;
  flex-direction: row;
  
  border-top: 1px solid black;
  border-bottom: 1px solid black;

  @media (max-width: 768px) {
    flex-direction: column;
    overflow-y: scroll;
  }
`

export const BottomBarLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const BottomBarRight = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 1em;

  @media (max-width: 768px) {
    border-top: 1px solid black;
  }
`

export const AppName = styled(Name)`
  margin-left: 1em;
  text-shadow: none;
  color: ${colors.primaryColor};
`

export const ContactContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1em 2em;
  gap: 0.7em;
  border-top: 1px solid black;
  
  @media (max-width: 768px) {
    border-bottom: 1px solid black;
  }
`

export const PrimaryContactText = styled.p`
  font-size: calc(0.4em + 0.1vw + 6px);
  font-family: Subjectivity, sans-serif;
  margin: 0;
  padding: 0;
  color: #7F7F7F;
`

export const PrimaryPhoneNumber = styled.a`
  font-size: calc(0.4em + 0.1vw + 6px);
  font-family: Brant, sans-serif;
  margin: 0;
  padding: 0;
  color: #454545;
`

export const EmailAddress = styled.a`
  font-size: calc(0.5em + 0.1vw + 6px);
  font-family: Subjectivity, sans-serif;
  margin: 0;
  padding: 0;
  color: #7F7F7F;
`

export const NewsLetterContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const NewsLetterTitle = styled.p`
  font-family: Shocka Serif, serif;
  font-size: calc(0.8em + 0.6vw + 6px);
  margin: 0;
`

export const NewsLetterCaption = styled.p`
  font-family: Subjectivity, sans-serif;
  font-size: calc(0.4em + 0.1vw + 6px);
  color: #454545;
  margin: 0.5em 0 2em;
`

export const BottomBarCenter = styled.div`
  flex: 4.5;
  border-left: 1px solid black;
  border-right: 1px solid black;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    border-left: none;
    border-right: none;
  }
`

export const NavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 1em 2em;
  flex: 2;
  border-bottom: 1px solid black;
  
  @media (max-width: 768px) {
    display: none;
  }
`

export const SocialsContainerWrapper = styled.div`
  flex: 1.75;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SocialsContainer = styled.div`
  display: flex;
  padding: 2em;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 2em;
`

export const SocialAnchor = styled.a`
  font-size: 1.5em;
  transition: all 0.2s ease-in-out;
  &:hover {
    scale: 1.25;
    cursor: pointer;
    color: ${props => props.color};
  }
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
  overflow: scroll;
  
  @media (max-width: 768px) {
    flex-direction: row;
  }
`