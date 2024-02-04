import { useState, useEffect, createContext } from "react";

import CharacterEditor from "./CharacterEditor/CharacterEditor";
import "./App.css";

export const isMobileContext = createContext<boolean>(false);

function App() {
  const [isMobile, setIsMobile] = useState<boolean>(window.outerWidth <= 768);

  function handleWindowSizeChange() {
    setIsMobile(window.outerWidth <= 768);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <isMobileContext.Provider value={isMobile}>
      <div className="AppContainer">
        <div className="AppContent">
          <h1 className="AppTitle">Build your perfect dev</h1>
          <CharacterEditor />
          <div className="LinksRow">
            <p>
              Repo du projet :{" "}
              <a
                className="Links"
                href="https://github.com/SimonLem/CreateYourDev"
              >
                github.com/SimonLem/CreateYourDev
              </a>
            </p>
            <p>
              Merci CMJ Blue :{" "}
              <a className="Links" href="https://www.instagram.com/cmj.blue">
                instagram.com/cmj.blue
              </a>
            </p>
          </div>
        </div>
      </div>
    </isMobileContext.Provider>
  );
}

export default App;
