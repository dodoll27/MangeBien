import { useState } from "react";

export const Navbar = ({ onUserClick }) => {
  const [isClicked, setIsClicked] = useState(null);

  const click = (type) => {
    onUserClick(type);
    setIsClicked(type);
  };
  return (
    <nav className="nav">
      <ul>
        <li>
          <button
            className={isClicked === "saved" ? "selected" : ""}
            onClick={() => click("saved")}
          >
            Saved
          </button>
        </li>
        <li>
          <button
            className={isClicked === "tried" ? "selected" : ""}
            onClick={() => click("tried")}
          >
            Tried
          </button>
        </li>
        <li>
          <button
            className={isClicked === "made" ? "selected" : ""}
            onClick={() => click("made")}
          >
            Made
          </button>
        </li>
        {isClicked && (
          <li className="close">
            <button onClick={() => click(null)}>X</button>
          </li>
        )}
      </ul>
    </nav>
  );
};
