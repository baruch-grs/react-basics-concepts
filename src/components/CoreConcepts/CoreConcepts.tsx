import { CoreConcept } from "../";
import { CORE_CONCEPTS } from "../../data";

export const CoreConcepts = () => {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map(({ title, description, image }) => (
          <CoreConcept
            title={title}
            description={description}
            image={image}
            key={title}
          ></CoreConcept>
        ))}
      </ul>
    </section>
  );
};
