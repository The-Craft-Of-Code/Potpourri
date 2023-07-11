import React, {useRef} from 'react';
import {NavBar} from "./components/navbar/NavBar";
import {Root, ScrollSpace} from "./components/root";
import {HeroPage} from "./pages/HeroPage";
import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import {StandOut} from "./pages/StandOut";
import {WhyUs} from "./pages/WhyUs";
import {SelectedWorks} from "./pages/SelectedWorks";
import {Services} from "./pages/Services";
import {BrandingPage} from "./pages/BrandingPage";
import {GetInTouch} from "./pages/GetInTouch";
import {Profile} from "./pages/Profile";
import {BottomBar} from "./pages/BottomBar";

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
      <ScrollSpace>
        <HeroPage onVisible={() => setCurrentPage(0)} scroll={scroll}/>
        <StandOut onVisible={() => setCurrentPage(1)}/>
        <WhyUs onVisible={() => setCurrentPage(2)}/>
        <SelectedWorks onVisible={() => setCurrentPage(3)}/>
        <Services onVisible={() => setCurrentPage(4)}/>
        <BrandingPage onVisible={() => setCurrentPage(5)}/>
        <GetInTouch onVisible={() => setCurrentPage(6)}/>
        <Profile onVisible={() => setCurrentPage(7)} scroll={scroll}/>
        <BottomBar/>
      </ScrollSpace>
    </Root>

  );
}

export default App;
