import { useState } from "react";
import "./Examples.css";
import { Tabs } from "../";

// Define ExampleKey type
type ExampleKey = "components" | "jsx" | "props" | "state";
import { Section, TabButton, TopicContent } from "../";
import { EXAMPLES } from "../../data";

export const Examples = () => {
  let tabContent = <p>Please select a topic</p>;
  const [selectedTopic, setSelectedTopic] = useState<ExampleKey | "">("");

  function handleSelectTabButton(selectedButton: string) {
    setSelectedTopic(selectedButton as ExampleKey);
  }

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
  return (
    <Section title="EXAMPLES" id="examples" className="examples">
      <Tabs
        className="custom-menu"
        buttons={
          <>
            <TabButton
              onClick={() => handleSelectTabButton("components")}
              isSelected={selectedTopic === "components"}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleSelectTabButton("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleSelectTabButton("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleSelectTabButton("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
      <menu className="custom-menu"></menu>
    </Section>
  );
};
