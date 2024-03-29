import React, {useEffect, useRef} from 'react';
import {NavBar} from "./components/navbar/NavBar";
import {Root, ScrollSpace} from "./components/root";
import {HeroPage} from "./pages/HeroPage";
import {StandOut} from "./pages/StandOut";
import {WhyUs} from "./pages/WhyUs";
import {SelectedWorks} from "./pages/SelectedWorks";
import {BrandingPage} from "./pages/BrandingPage";
import {GetInTouch} from "./pages/GetInTouch";
import {Profile} from "./pages/Profile";
import {BottomBar} from "./pages/BottomBar";

//Use imports when enabling Services page
//import {Services} from "./pages/Services";

function App() {

  let navBarRef = useRef(null);

  let pageRef = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];

  const scroll = (to) => {
    let ref = pageRef[to];
    if (ref && ref.current) {

      window.scrollTo({
        top: ref.current.offsetTop - 75,
        behavior: "smooth"
      });

    }
  };

  useEffect(() => {
    let timer = null;
    let prevScrollPage = -1;

    const handleScroll = () => {
      clearTimeout(timer);

      timer = setTimeout(() => {
        let currentScroll = window.scrollY;
        let closest = 0;
        let closestDistance = 100000
        for (let i = 0; i < pageRef.length; i++) {
          let ref = pageRef[i];
          if (ref && ref.current) {
            let distance = Math.abs(ref.current.offsetTop - currentScroll);
            if (distance < closestDistance) {
              closest = i;
              closestDistance = distance;
            }
          }
        }

        if (prevScrollPage === closest) {
          return;
        }

        scroll(closest)
        prevScrollPage = closest;

      }, 150);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const setCurrentPage = (page) => {
    if (navBarRef.current)
      navBarRef.current.setCurrentPage(page);
  }

  return (
    <Root>
      <NavBar scroll={scroll} ref={navBarRef}/>
      <ScrollSpace>
        <HeroPage onVisible={() => setCurrentPage(0)} scroll={scroll} propRef={pageRef[0]}/>
        <StandOut onVisible={() => setCurrentPage(1)} propRef={pageRef[1]}/>
        <WhyUs onVisible={() => setCurrentPage(2)} propRef={pageRef[2]}/>
        <SelectedWorks onVisible={() => setCurrentPage(3)} propRef={pageRef[3]}/>
        {/* <Services onVisible={() => setCurrentPage(4)} propRef={pageRef[4]}/> */}
        <BrandingPage onVisible={() => setCurrentPage(5)} propRef={pageRef[5]}/>
        <GetInTouch onVisible={() => setCurrentPage(6)} propRef={pageRef[6]}/>
        <Profile onVisible={() => setCurrentPage(7)} scroll={scroll} propRef={pageRef[7]}/>
        <BottomBar scroll={scroll}/>
      </ScrollSpace>
    </Root>

  );
}

export default App;
