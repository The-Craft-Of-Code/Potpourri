import React from 'react';
import {NavBar} from "./components/navbar/NavBar";
import {Root, ScrollSpace} from "./components/root";
import {HeroPage} from "./pages/HeroPage";

function App() {
  return (
    <Root>
      <NavBar/>
      <ScrollSpace>
        <HeroPage/>
      </ScrollSpace>
    </Root>
  );
}

export default App;
