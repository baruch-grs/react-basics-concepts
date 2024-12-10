import "./TabButton.css";
import { TabButtonProps } from "../../utils/interfaces";

export const TabButton = ({
  children,
  onSelect,
  isSelected,
}: TabButtonProps) => {
  return (
    <li>
      <button
        onClick={onSelect}
        className={`custom-menu-button ${isSelected ? "active" : ""}`}
      >
        {children}
      </button>
    </li>
  );
};
