import React from "react";
import { useContext } from "react";
import AppContext from "./context";

function Entrypage() {
  const { onClickStart } = useContext(AppContext);

  return (
    <section className="entrypage">
      <div className="entrypage--content">
        <h2 className="heading">Quizzical</h2>
        <p className="desc">Test your GK 😀</p>
        <button className="startbtn" onClick={onClickStart}>
          Start Quiz
        </button>
        {/* display points in local storage */}
        <p className="points">
          MaxPoints:{" "}
          {localStorage.getItem("points") ? localStorage.getItem("points") : 0}
        </p>
      </div>
    </section>
  );
}

export default Entrypage;
