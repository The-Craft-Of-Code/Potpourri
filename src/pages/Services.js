import React, {useEffect, useRef} from 'react'
import useElementOnScreen from "../utils/useOnScreen";
import {
  Container,
  Content,
  ContentContainer,
  RowContainer,
  RowContainerWrapper, SecondaryTitle,
  ServiceTitle,
  ServiceVector
} from "../components/services";
import group21 from "../assets/images/service-vectors/Group21.png";
import group22 from "../assets/images/service-vectors/Group22.png";
import group27 from "../assets/images/service-vectors/Group27.png";
import group28 from "../assets/images/service-vectors/Group28.png";

export function Services(props) {

  let servicesRef = useRef(null);
  let isServiceVisible = useElementOnScreen(servicesRef);

  useEffect(() => {
    if (isServiceVisible) {
      props.onVisible();
    }
  }, [isServiceVisible, props]);

  return (
    <Container ref={servicesRef}>
      <SecondaryTitle>
        Services
      </SecondaryTitle>
      <RowContainerWrapper>
        <RowContainer>
          <ContentContainer>
            <ServiceVector src={group21}/>
            <ServiceTitle>
              Explore
            </ServiceTitle>
            <Content>
              We shape brands through exploration, applying in-depth research to challenge assumptions at every turn.
            </Content>
          </ContentContainer>
          <ContentContainer>
            <ServiceVector src={group22}/>
            <ServiceTitle>
              Experiment
            </ServiceTitle>
            <Content>
              Our design approch is to simplify. We embrace the joy in creating something unique that is easy for end
              users.
            </Content>
          </ContentContainer>
          <ContentContainer>
            <ServiceVector src={group27}/>
            <ServiceTitle>
              Execute
            </ServiceTitle>
            <Content>
              Using modern technologies, we build with efficency and skill, creating flexible and scalable
              business-driven solutions.
            </Content>
          </ContentContainer>
          <ContentContainer>
            <ServiceVector src={group28}/>
            <ServiceTitle>
              Evolve
            </ServiceTitle>
            <Content>
              Using modern technologies, we build with efficency and skill, creating flexible and scalable
              business-driven solutions. </Content>
          </ContentContainer>
        </RowContainer>
      </RowContainerWrapper>
    </Container>
  )
}