import React, { useEffect} from "react"
import { Outlet } from "react-router-dom"

import LandingNavBar from "components/Navbars/LandingNavBar"
import SimpleFooter from "components/Footers/SimpleFooter"

const Layout = () => {
    const mainPanel = React.createRef();

    const scrollToHash = () => {
      const id = window.location.hash.substr(1);

        if(id) {
            /* Find matching element by id */
            const anchor = document.getElementById(id);
            if(anchor) {
                /* Scroll to that element if present */
                anchor.scrollIntoView();
            }
        }
    }

    useEffect(() => {
            document.documentElement.scrollTop = 0;
            document.scrollingElement.scrollTop = 0;
            mainPanel.current.scrollTop = 0;       
    }, [mainPanel]);

    useEffect(() => {
      scrollToHash();
    },[]);
  return (
    <>
      <LandingNavBar />
      <main className={mainPanel} id="main" ref={mainPanel}>
            <Outlet />
      </main>
      <SimpleFooter />
    </>
  )
}
export default Layout