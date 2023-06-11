import React, {useRef} from 'react';
import {NavBar} from "./components/navbar/NavBar";
import {Root, ScrollSpace} from "./components/root";
import {HeroPage} from "./pages/HeroPage";
import useScrollSnap from "react-use-scroll-snap";

function App() {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 50, delay: 20});

  return (
    <Root ref={scrollRef}>
      <NavBar/>
      <ScrollSpace>
        <HeroPage/>
        <HeroPage/>
      </ScrollSpace>
    </Root>

  );
}

export default App;
