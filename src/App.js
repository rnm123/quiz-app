import './index.css';
import React, { useState } from 'react';

function App() {
  const questions = [
    {
      questionText: 'What is the capital of India?',
      answerOptions: [
        { answerText: 'New York', isCorrect: false },
        { answerText: 'Delhi', isCorrect: true },
        { answerText: 'Paris', isCorrect: false },
        { answerText: 'Dublin', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is CEO of Amazon?',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Elon Musk', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false },
      ],
    },
    {
      questionText: 'The iPhone was created by which company?',
      answerOptions: [
        { answerText: 'Apple', isCorrect: true },
        { answerText: 'Intel', isCorrect: false },
        { answerText: 'Amazon', isCorrect: false },
        { answerText: 'Microsoft', isCorrect: false },
      ],
    },
    {
      questionText: 'How many Harry Potter books are there?',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '7', isCorrect: true },
      ],
    },
  ];

  let [currentque, updatecurrentque] = useState(0);
  let [showscore, updateShowScore] = useState(false);
  let [score, updateScore] = useState(0);

  const quizzButton = (isCorrect) => {
    if (isCorrect) {
      updateScore(score + 1)
    }
    const newquestion = currentque + 1;
    if (newquestion < questions.length) {
      updatecurrentque(newquestion);
    } else {
      updateShowScore(true)
    }
  };
  return (
    <div className="app">

      {// condition showscore? (true) : (false)
        showscore ? (
          <div className="score-section">You score {score} out of {questions.length}</div>
        ) : (

          <>
            <div className="question-section">
              <div className="question-count">
                <span> Question {currentque + 1}/{questions.length}</span>
              </div>
              <div className="question-text">{questions[currentque].questionText}</div>
            </div>

            <div className="answer-section">
              {
                questions[currentque].answerOptions.map((answer, index) => {
                  return (
                    <button type="button" onClick={() => quizzButton(answer.isCorrect)}>{answer.answerText}</button>
                  )
                })
              }
            </div>
          </>
        )
      }
    </div>
  );
}

export default App;
