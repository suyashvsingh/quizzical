import React from 'react'

function Question({ quesTitle, optionsArray, queId, onClickOption, selected }) {

    let options = optionsArray.map((option, idx) => {
        return <div className={`opt ${selected === idx ? 'opt--selected' : ''}`} onClick={() => onClickOption(queId, idx)} key={idx}>{option}</div>
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

export default Question