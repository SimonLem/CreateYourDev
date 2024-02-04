import CharacterEditor from "./CharacterEditor/CharacterEditor";
import "./App.css";

function App() {
  return (
    <div className="AppContainer">
      <div className="AppContent">
        <h1 className="AppTitle">Build your perfect dev</h1>
        <CharacterEditor />
      </div>
    </div>
  );
}

export default App;
