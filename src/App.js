import Quizpage from './components/Quizpage';
import Entrypage from "./components/Entrypage"
import { useState } from 'react';

function App() {

  const [displayQuestionsPge, setDisplayQuestionsPage] = useState(false)

  function onClickStart() {
    setDisplayQuestionsPage(true)
  }

  return (
    <div className="App">
      {displayQuestionsPge || <Entrypage onClickStart={onClickStart} />}
      {displayQuestionsPge && <Quizpage setDisplayQuestionsPage={setDisplayQuestionsPage} />}
    </div>
  );
}

export default App;