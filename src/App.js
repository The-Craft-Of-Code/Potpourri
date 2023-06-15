import React, {useRef} from 'react';
import {NavBar} from "./components/navbar/NavBar";
import {Root} from "./components/root";
import {HeroPage} from "./pages/HeroPage";
import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import {StandOut} from "./pages/StandOut";
import {WhyUs} from "./pages/WhyUs";
import {SelectedWorks} from "./pages/SelectedWorks";

function App() {

  let ref = useRef(null);
  let navBarRef = useRef(null);

  const scroll = (to) => {
    if (ref.current) {
      ref.current.scrollTo(to);
    }
  };

  const setCurrentPage = (page) => {
    if (navBarRef.current)
      navBarRef.current.setCurrentPage(page);
  }

  return (
    <Root>
      <NavBar scroll={scroll} ref={navBarRef}/>
      <Parallax
        pages={6}
        ref={ref}
        style={{top: "0", left: "0", height: "calc(100vh - 75px)", marginTop: "75px"}}
      >
        <ParallaxLayer offset={0} speed={3.5}>
          <HeroPage onVisible={() => setCurrentPage(0)} scroll={scroll}/>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1.35}>
          <StandOut onVisible={() => setCurrentPage(1)}/>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1.35}>
          <WhyUs onVisible={() => setCurrentPage(2)}/>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={1.35}>
          <SelectedWorks onVisible={() => setCurrentPage(3)}/>
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={1.35}>
        </ParallaxLayer>
        <ParallaxLayer offset={5} speed={1.35}>
        </ParallaxLayer>
      </Parallax>
    </Root>

  );
}

export default App;
