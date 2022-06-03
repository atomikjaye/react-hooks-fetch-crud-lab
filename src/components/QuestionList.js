import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem"

function QuestionList() {
  const [questionsArr, setQuestionsArr] = useState([])

  // Fetch using useEFFECT because user isn't starting the request
  useEffect(() => {
    fetch(`http://localhost:4000/questions`)
      .then(r => r.json())
      .then(questions => setQuestionsArr(questions))
  }, [])

  const displayQuestions = questionsArr.map((question) => {
    return (
      <QuestionItem
        key={question.id}
        question={question}
      />
    )
  })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{displayQuestions}</ul>
    </section>
  );
}

export default QuestionList;
