import React from "react";
import { useContext } from "react";
import AppContext from "./context";

function Footer() {
  const { onClickCheckAnswers, over, points } = useContext(AppContext);

  return (
    <div className="footer">
      <button className="checkans" onClick={onClickCheckAnswers}>{`${
        over ? "Play again" : "Check answers"
      }`}</button>
      {over && <div className="points">{`You scored ${points} points 😉`}</div>}
    </div>
  );
}

export default Footer;
