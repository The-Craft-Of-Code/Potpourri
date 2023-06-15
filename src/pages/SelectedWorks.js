import React, {useEffect, useRef} from 'react';
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

  let selectedWorksRef = useRef(null);
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
          Selected
        </PrimaryTitle>
        <SecondaryTitle>
          Works
        </SecondaryTitle>
        <WorkList>
          {
            works.map((item, index) => {
              return <WorkItem
                selected={selectedWork === item}
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
          return <TextContent>
            {item}
          </TextContent>
        })}
      </SelectedWorkContainer>
    </WorksContainer>
  );
}