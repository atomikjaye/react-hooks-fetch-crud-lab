import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questionsArr, setQuestionsArr] = useState([])

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ?
        <QuestionForm setQuestionsArr={setQuestionsArr} /> :
        <QuestionList
          questionsArr={questionsArr}
          setQuestionsArr={setQuestionsArr} />}
    </main>
  );
}

export default App;
