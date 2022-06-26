import React from "react";

function Entrypage({ onClickStart }) {
  return (
    <section className="entrypage">
      <div className="entrypage--content">
        <h2 className="heading">Quizzical</h2>
        <p className="desc">Best game on the planet</p>
        <button className="startbtn" onClick={onClickStart}>
          Start Quiz
        </button>
      </div>
    </section>
  );
}

export default Entrypage;
