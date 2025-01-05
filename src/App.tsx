import "./App.css";
import headerImg from "./assets/react-core-concepts.png";
import { CoreConcepts, Examples, Header } from "./components";

function App() {
  return (
    <>
      <div className="main-container">
        <Header
          headerTitle="React Core Concepts"
          headerImage={headerImg}
          headerAltText="Image of an atom"
        ></Header>
        <main>
          <CoreConcepts />
          <Examples />
        </main>
      </div>
    </>
  );
}

export default App;
