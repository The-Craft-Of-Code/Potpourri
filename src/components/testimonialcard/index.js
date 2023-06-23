import styled from "styled-components";
import {colors} from "../../colors";

export const TestimonialCardContainer = styled.div`
  display: flex;
  flex: 1;
  background-color: white;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  box-shadow: 0 0 10px 0 rgba(152, 152, 152, 0.2);
  padding: 1.5em;
  min-width: 300px;
  flex-direction: column;
  font-family: Sans-serif,serif;
`

export const ReviewTitle = styled.h1`
  padding: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  margin: 0 0 0.75em;
  font-size: calc(1rem + 1vw);
  color: ${colors.primaryColor};
`

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  overflow-y: scroll;
`

export const PictureContainer = styled.div`
  width: 15%;
  margin-right: 0.75em;
`

export const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 100%;
`

export const ContentWrapperFlex = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`

export const Name = styled.h1`
  padding: 0;
  margin: 0 0 0.2em;
  font-size: calc(1rem + 0.5vw);
`

export const EmploymentTitle = styled.h2`
  padding: 0;
  margin: 0;
  font-size: calc(0.7rem + 0.5vw);
  color: #B9B9B9;
  font-weight: 400;
`

export const ReviewText = styled.p`
  padding: 0;
  margin: 0.5em 0 0;
  font-size: calc(0.7rem + 0.5vw);
  color: #1A1B1D;
  font-weight: 300;
  text-align: justify;
`

export const BrandNameDateContainer = styled.div`
  margin-top: 1em;
  height: min-content;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`

export const StackIcon = styled.img`
  margin-right: 0.75em;
`

export const BrandText = styled.h2`
  padding: 0;
  margin: 0;
  font-size: calc(0.55rem + 0.5vw);
  color: #B9B9B9;
  font-weight: 400;
`