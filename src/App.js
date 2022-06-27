import Quizpage from "./components/Quizpage";
import Entrypage from "./components/Entrypage";
import { useState } from "react";
import AppContext from "./components/context";
import axios from "axios";

function App() {
  const [displayQuestionsPge, setDisplayQuestionsPage] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currSetup, setCurrSetup] = useState([]);
  const [over, setOver] = useState(false);
  const [points, setPoints] = useState(0);

  async function fetchData() {
    const url = `${process.env.REACT_APP_URL}`;
    let response = await axios.get(url, {
      params: {
        limit: process.env.REACT_APP_LIMIT,
      },
    });
    let data = await response.data;
    setData(data);
  }

  function setData(data) {
    let newData = [];
    data.forEach((que) => {
      let correctAnsPosition = Math.floor(Math.random() * 4);
      let newObj = {
        selected: -1,
        question: que.question,
        correct: correctAnsPosition,
        options: [...que.incorrectAnswers],
      };
      newObj.options.splice(correctAnsPosition, 0, que.correctAnswer);
      newData.push(newObj);
    });
    setCurrSetup(newData);
    setLoading(false);
  }

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

  function onClickStart() {
    setDisplayQuestionsPage(true);
    setLoading(true);
    setOver(false);
  }

  return (
    <AppContext.Provider
      value={{
        onClickStart,
        setDisplayQuestionsPage,
        loading,
        setLoading,
        currSetup,
        setCurrSetup,
        over,
        setOver,
        points,
        setPoints,
        onClickOption,
        onClickCheckAnswers,
        fetchData,
        setData,
      }}
    >
      <div className="App">
        {displayQuestionsPge || <Entrypage />}
        {displayQuestionsPge && <Quizpage />}
      </div>
    </AppContext.Provider>
  );
}

export default App;
