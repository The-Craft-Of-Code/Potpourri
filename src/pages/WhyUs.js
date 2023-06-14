import React, {useEffect, useRef} from 'react';
import useElementOnScreen from "../utils/useOnScreen";

export function WhyUs(props) {

  let standOutRef = useRef(null);
  let isStandOutVisible = useElementOnScreen(standOutRef);

  useEffect(() => {
    if(isStandOutVisible) {
      props.onVisible();
    }
  }, [isStandOutVisible, props]);

  return (
    <div className="WhyUs" ref={standOutRef}>
      <h1>WhyUs</h1>
    </div>
  );
}