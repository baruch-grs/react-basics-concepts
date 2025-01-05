import "./TabButton.css";
import { TabButtonProps } from "../../utils/interfaces";

export const TabButton = ({
  children,
  isSelected,
  ...props
}: TabButtonProps) => {
  return (
    <li>
      <button
        {...props}
        className={`custom-menu-button ${isSelected ? "active" : ""}`}
      >
        {children}
      </button>
    </li>
  );
};
