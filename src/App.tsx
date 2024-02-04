import CharacterEditor from "./CharacterEditor/CharacterEditor";
import "./App.css";

function App() {
  return (
    <div className="AppContainer">
      <div className="AppContent">
        <h1 className="AppTitle">Build your perfect dev</h1>
        <CharacterEditor />
        <div className="LinksRow">
          <p>
            Project link :{" "}
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
  );
}

export default App;
