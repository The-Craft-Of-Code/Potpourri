import React, {useEffect} from 'react';
import {
  SelectedWorkContainer, SelectedWorkTitle,
  WorkItem,
  WorkList,
  WorksContainer,
  WorksListContainer
} from "../components/selectedworks";
import useElementOnScreen from "../utils/useOnScreen";
import {PrimaryTitle, SecondaryTitle, TextContent} from "../components/root";
import {works} from "../components/selectedworks/data";

export function SelectedWorks(props) {

  let selectedWorksRef = props.propRef;
  let isSelectedWorksVisible = useElementOnScreen(selectedWorksRef);

  let [selectedWork, setSelectedWork] = React.useState(works[0]);

  useEffect(() => {
    if (isSelectedWorksVisible) {
      props.onVisible();
    }
  }, [isSelectedWorksVisible, props]);

  return (
    <WorksContainer ref={selectedWorksRef}>
      <WorksListContainer>
        <PrimaryTitle>
          Our
        </PrimaryTitle>
        <SecondaryTitle>
          Services
        </SecondaryTitle>
        <WorkList>
          {
            works.map((item, index) => {
              return <WorkItem
                selected={selectedWork === item}
                key={index}
                onClick={() => {
                  setSelectedWork(item)
                }}>
                {item.title}
              </WorkItem>
            })
          }
        </WorkList>
      </WorksListContainer>
      <SelectedWorkContainer>
        <SelectedWorkTitle>
          {selectedWork.title}
        </SelectedWorkTitle>
        {selectedWork.description.map((item, index) => {
          return <TextContent key={index}>
            {item}
          </TextContent>
        })}
      </SelectedWorkContainer>
    </WorksContainer>
  );
}