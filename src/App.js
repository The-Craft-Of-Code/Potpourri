import React, {useEffect, useRef} from 'react';
import {NavBar} from "./components/navbar/NavBar";
import {Root, ScrollSpace} from "./components/root";
import {HeroPage} from "./pages/HeroPage";
import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import {StandOut} from "./pages/StandOut";

function App() {

  let ref = useRef(null);
  const scroll = (to) => {
    if (ref.current) {
      ref.current.scrollTo(to);
    }
  };

  return (
    <Root>
      <NavBar/>
        <Parallax
          pages={2}
          ref={ref}
          style={{top: "0", left: "0", height: "calc(100vh - 75px)", marginTop: "75px"}}
        >
          <ParallaxLayer offset={0} speed={0.5}>
            <HeroPage/>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.5}>
            <StandOut/>
          </ParallaxLayer>
        </Parallax>
    </Root>

  );
}

export default App;
