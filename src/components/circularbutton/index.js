import styled from "styled-components";

export const CircularContainer = styled.div`
  scale: 0.8;
  border: 20px solid #4DDF87;
  border-radius: 50%;
  height: 150px;
  width: 150px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px #4DDF87, inset 0 0 10px #407a53;
  }

`

export const CenterWrapper = styled.div`
  position: absolute;
`

export const CircularText = styled.p`
  height: 100px;
  width: 100px;
  animation: rotate 8s linear infinite;
  position: relative;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  span {
    left: 50%;
    font-size: 12px;
    font-weight: 300;
    position: absolute;
    transform-origin: 0 50px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    text-rendering: optimizeLegibility;
  }
`