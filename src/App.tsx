import { useState } from "react";
import "./App.css";
import headerImg from "./assets/react-core-concepts.png";
import { CoreConcept, Header, TabButton, TopicContent } from "./components";
import { CORE_CONCEPTS, EXAMPLES } from "./data";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("");
  let tabContent = <p>Please select a topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content" className="tab-content">
        <TopicContent
          title={EXAMPLES[selectedTopic].title}
          description={EXAMPLES[selectedTopic].description}
          code={EXAMPLES[selectedTopic].code}
        ></TopicContent>
      </div>
    );
  }

  function handleSelectTabButton(selectedButton: string) {
    setSelectedTopic((selectedTopic) => (selectedTopic = selectedButton));
  }

  return (
    <>
      <div className="main-container">
        <Header
          headerTitle="Custom Title"
          headerParagraph="Sample text"
          headerImage={headerImg}
          headerAltText="Image of an atom"
        ></Header>
        <main>
          <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
              {CORE_CONCEPTS.map(({ title, description, image }, index) => (
                <CoreConcept
                  title={title}
                  description={description}
                  image={image}
                  key={title}
                ></CoreConcept>
              ))}
            </ul>
          </section>
          <section id="examples" className="examples">
            <h2 className="custom-menu-title">EXAMPLES</h2>
            <menu className="custom-menu">
              <TabButton
                onSelect={() => handleSelectTabButton("components")}
                isSelected={selectedTopic === "components"}
              >
                Components
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "jsx"}
                onSelect={() => handleSelectTabButton("jsx")}
              >
                JSX
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "props"}
                onSelect={() => handleSelectTabButton("props")}
              >
                Props
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "state"}
                onSelect={() => handleSelectTabButton("state")}
              >
                State
              </TabButton>
            </menu>
            {tabContent}
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
