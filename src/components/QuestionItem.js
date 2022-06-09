import React from "react";

function QuestionItem({ question, onDelete, handleChangedAnswer }) {
  const { id, prompt, answers, correctIndex } = question;

  // console.log(answers)
  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));


  function changedAnswer(e) {
    handleChangedAnswer(id, parseInt(e.target.value))
  }


  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={changedAnswer} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={() => onDelete(id)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
