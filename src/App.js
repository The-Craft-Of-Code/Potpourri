import React, {useEffect, useRef} from 'react';
import {NavBar} from "./components/navbar/NavBar";
import {Root} from "./components/root";
import {HeroPage} from "./pages/HeroPage";
import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import {StandOut} from "./pages/StandOut";
import {WhyUs} from "./pages/WhyUs";
import {KeepAlive, Provider} from "react-keep-alive";

function App() {

  let ref = useRef(null);
  let [currentPage, setCurrentPage] = React.useState(0);

  const scroll = (to) => {
    if (ref.current) {
      ref.current.scrollTo(to);
    }
  };

  return (
    <Root>
      <NavBar scroll={scroll} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <Parallax
        pages={6}
        ref={ref}
        style={{top: "0", left: "0", height: "calc(100vh - 75px)", marginTop: "75px"}}
      >
        <ParallaxLayer offset={0} speed={1.0}>
          <HeroPage onVisible={() => setCurrentPage(0)} scroll={scroll}/>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1.0}>
          <StandOut onVisible={() => setCurrentPage(1)}/>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1.0}>
          <WhyUs onVisible={() => setCurrentPage(2)}/>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={1.0}>
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={1.0}>
        </ParallaxLayer>
        <ParallaxLayer offset={5} speed={1.0}>
        </ParallaxLayer>
      </Parallax>
    </Root>

  );
}

export default App;
