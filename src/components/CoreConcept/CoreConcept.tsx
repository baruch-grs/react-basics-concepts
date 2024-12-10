import { CoreConceptProps } from "../../utils/interfaces";
import "./CoreConcept.css";
export const CoreConcept = ({
  title,
  description,
  image,
}: CoreConceptProps) => {
  return (
    <li>
      <img src={image} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};
