import React, { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Question from "./Question";
import Footer from "./Footer";
import QuestionOver from "./QuestionOver";

function Quizpage({ setDisplayQuestionsPage }) {
  const [loading, setLoading] = useState(true);
  const [currSetup, setCurrSetup] = useState([]);

  useEffect(() => {
    const url = `${process.env.REACT_APP_URL}?limit=${process.env.REACT_APP_LIMIT}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        //transform to use it
        let newData = [];
        data.forEach((que) => {
          let newObj = {};
          newObj.selected = -1;
          newObj.question = que.question;
          let correctAnsPosition = Math.floor(Math.random() * 4);
          newObj.correct = correctAnsPosition;
          newObj.options = [...que.incorrectAnswers];
          newObj.options.splice(correctAnsPosition, 0, que.correctAnswer);
          newData.push(newObj);
        });
        setCurrSetup(newData);
        setLoading(false);
      });
  }, []);

  const [over, setOver] = useState(false);
  const [points, setPoints] = useState(0);

  function onClickOption(queId, optId) {
    setCurrSetup((prevState) => {
      let newState = [...prevState];
      newState[queId].selected = optId;
      return newState;
    });
  }

  function onClickCheckAnswers() {
    if (over) {
      setDisplayQuestionsPage(false);
    } else {
      let correctCount = 0;
      currSetup.forEach((question) => {
        if (question.selected === question.correct) correctCount++;
        setPoints(correctCount);
      });
      setOver(true);
    }
  }

  let questionList = currSetup.map((question, idx) => {
    return (
      <Question
        quesTitle={question.question}
        optionsArray={question.options}
        queId={idx}
        onClickOption={onClickOption}
        selected={question.selected}
        key={idx}
      />
    );
  });

  let questionListAfterOver = currSetup.map((question, idx) => {
    return (
      <QuestionOver
        quesTitle={question.question}
        optionsArray={question.options}
        queId={idx}
        onClickOption={onClickOption}
        selected={question.selected}
        key={idx}
        correctAns={question.correct}
      />
    );
  });

  return (
    <section className="quizpage">
      <h2 className="heading">Questions</h2>
      <ClipLoader color="#4d5b9e" loading={loading} />
      {over || questionList}
      {over && questionListAfterOver}
      {loading || (
        <Footer
          onClickCheckAnswers={onClickCheckAnswers}
          over={over}
          points={points}
        />
      )}
    </section>
  );
}

export default Quizpage;
