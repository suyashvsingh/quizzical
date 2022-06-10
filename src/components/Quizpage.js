import React, { useState } from 'react'
import Question from './Question'
import Footer from './Footer'

import data from "../data/data" //fetchURL
import Question_Over from './Question_Over'

function Quizpage({ setDisplayQuestionsPage }) {

    const [currSetup, setCurrSetup] = useState([...data])
    const [over, setOver] = useState(false)
    const [points, setPoints] = useState(0)

    function onClickOption(queId, optId) {
        setCurrSetup((prevState) => {
            let newState = [...prevState]
            newState[queId].selected = optId
            return newState
        })
    }

    function onClickCheckAnswers() {
        if (over) {
            setDisplayQuestionsPage(false)
        }
        else {
            let correctCount = 0;
            currSetup.forEach((question) => {
                if (question.selected === question.correct) correctCount++
                setPoints(correctCount)
            })
            setOver(true)
        }
    }

    let questionList = currSetup.map((question, idx) => {
        return <Question quesTitle={question.question} optionsArray={question.options} queId={idx} onClickOption={onClickOption} selected={question.selected} key={idx} />

    })

    let questionListAfterOver = currSetup.map((question, idx) => {
        return <Question_Over quesTitle={question.question} optionsArray={question.options} queId={idx} onClickOption={onClickOption} selected={question.selected} key={idx} correctAns={question.correct} />
    })

    return (
        <section className="quizpage">
            <h2 className='heading'>Questions</h2>
            {over || questionList}
            {over && questionListAfterOver}
            <Footer onClickCheckAnswers={onClickCheckAnswers} over={over} points={points} />
        </section>
    )
}

export default Quizpage