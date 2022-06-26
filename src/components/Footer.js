import React from "react";

function Footer({ onClickCheckAnswers, over, points }) {
  return (
    <div className="footer">
      <button className="checkans" onClick={onClickCheckAnswers}>{`${
        over ? "Play again" : "Check answers"
      }`}</button>
      {over && <div className="points">{`You scored ${points} points`}</div>}
    </div>
  );
}

export default Footer;
