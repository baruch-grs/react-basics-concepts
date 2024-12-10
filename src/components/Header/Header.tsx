import { HeaderProps } from "../../utils/interfaces";
import "./Header.css";

export const Header = ({
  headerTitle = "React Essentials",
  headerParagraph = "Fundamental React concepts you will need for almost any app you are going to build!",
  headerImage,
  headerAltText,
}: HeaderProps) => {
  return (
    <>
      <header className="custom-header">
        <img
          className="custom-header-image"
          src={headerImage}
          alt={headerAltText}
        />
        <h1 className="custom-header-h1">{headerTitle}</h1>
        <p className="custom-header-paragraph">{headerParagraph}</p>
      </header>
    </>
  );
};
