import React from 'react'

function QuestionOver({ quesTitle, optionsArray, queId, selected, correctAns }) {

    let options = optionsArray.map((option, optionId) => {
        return <div className={`opt ${optionId === correctAns ? 'opt--correct' : ''} ${optionId === selected && selected !== correctAns ? 'opt--incorrect' : ''}`} key={optionId}>{option}</div>
    })

    return (
        <div className="ques">
            <div className="ques--heading">{quesTitle}</div>
            <div className="opts">
                {options}
            </div>
        </div>
    )
}

export default QuestionOver