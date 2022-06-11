import React, { useEffect } from "react";
import QuestionItem from "./QuestionItem"

function QuestionList({ questionsArr, setQuestionsArr }) {


  // Fetch using useEFFECT because user isn't starting the request
  useEffect(() => {
    fetch(`http://localhost:4000/questions`)
      .then(r => r.json())
      .then(questions => setQuestionsArr(questions))
  }, [])

  function handleDelete(id) {
    let newArr = [...questionsArr]
    console.log(id)
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'DELETE',
    }).then(r => r.json())
      .then(() => setQuestionsArr(newArr.filter((question) => question.id !== id)))
  }

  // function handleChangeAnswer(id, index){
  //   let changeData = {
  //     id
  //   }
  //   fetch(`http://localhost:4000/questions${id}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({correctIndex: {index}})
  //   })
  // }

  function handleChangedAnswer(id, correctIndex) {
    let dropdownChange = {
      correctIndex: correctIndex
    }
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dropdownChange)
    })
      .then(r => r.json())
      .then(data => {
        console.log("Original", questionsArr)
        let updatedArr = questionsArr.map((question) => {
          if (question.id === id) {
            console.log(id)
            question.correctIndex = correctIndex
            return question
          } else {
            return question
          }
        })

        setQuestionsArr(updatedArr)

      })
  }



  const displayQuestions = questionsArr.map((question) => {
    return (
      <QuestionItem
        key={question.id}
        question={question}
        handleChangedAnswer={handleChangedAnswer}
        onDelete={handleDelete}
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
