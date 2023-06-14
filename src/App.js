import React, {useRef} from 'react';
import {NavBar} from "./components/navbar/NavBar";
import {Root} from "./components/root";
import {HeroPage} from "./pages/HeroPage";
import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import {StandOut} from "./pages/StandOut";
import {WhyUs} from "./pages/WhyUs";

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
        <ParallaxLayer offset={0} speed={0.5}>
          <HeroPage onVisible={() => setCurrentPage(0)}/>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
          <StandOut onVisible={() => setCurrentPage(0)}/>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.5}>
          <WhyUs onVisible={() => setCurrentPage(2)}/>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.5}>
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={0.5}>
        </ParallaxLayer>
        <ParallaxLayer offset={5} speed={0.5}>
        </ParallaxLayer>
      </Parallax>
    </Root>

  );
}

export default App;
