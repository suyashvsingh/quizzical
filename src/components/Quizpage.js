import React, { useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Question from "./Question";
import Footer from "./Footer";
import QuestionOver from "./QuestionOver";
import { useContext } from "react";
import AppContext from "./context";

function Quizpage() {
  const { loading, currSetup, over, onClickOption, fetchData } =
    useContext(AppContext);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

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
      {loading === false && over === false && questionList}
      {loading === false && over === true && questionListAfterOver}
      {loading === false && <Footer />}
    </section>
  );
}

export default Quizpage;
