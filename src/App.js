import React, {useRef} from 'react';
import {NavBar} from "./components/navbar/NavBar";
import {Root} from "./components/root";
import {HeroPage} from "./pages/HeroPage";
import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import {StandOut} from "./pages/StandOut";
import {WhyUs} from "./pages/WhyUs";
import {SelectedWorks} from "./pages/SelectedWorks";
import {Services} from "./pages/Services";
import {BrandingPage} from "./pages/BrandingPage";
import {GetInTouch} from "./pages/GetInTouch";
import {Profile} from "./pages/Profile";

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
        pages={8}
        ref={ref}
        style={{top: "0", left: "0", marginTop: "75px"}}
      >
        <ParallaxLayer offset={0} speed={0.25}>
          <HeroPage onVisible={() => setCurrentPage(0)} scroll={scroll}/>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.25}>
          <StandOut onVisible={() => setCurrentPage(1)}/>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.25}>
          <WhyUs onVisible={() => setCurrentPage(2)}/>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.25}>
          <SelectedWorks onVisible={() => setCurrentPage(3)}/>
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={0.25}>
          <Services onVisible={() => setCurrentPage(4)}/>
        </ParallaxLayer>
        <ParallaxLayer offset={5} speed={0.25}>
          <BrandingPage onVisible={() => setCurrentPage(5)}/>
        </ParallaxLayer>
        <ParallaxLayer offset={6} speed={0.25}>
          <GetInTouch onVisible={() => setCurrentPage(6)}/>
        </ParallaxLayer>
        <ParallaxLayer offset={7} speed={0.25}>
          <Profile onVisible={() => setCurrentPage(7)} scroll={scroll}/>
        </ParallaxLayer>
      </Parallax>
    </Root>

  );
}

export default App;
