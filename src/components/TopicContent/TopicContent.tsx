import { TopicContentProps } from "../../utils/interfaces";
import "./TopicContent.css";
export const TopicContent = ({
  title,
  description,
  code,
}: TopicContentProps) => {
  return (
    <>
      <h3 className="topic-content-title">{title}</h3>
      <p className="topic-content-description">{description}</p>
      <pre>
        <code className="topic-content-code">{code}</code>
      </pre>
    </>
  );
};
