import React, { useState, useRef } from 'react';
import './App.css';
import { Button } from '@chakra-ui/react'
import Question from './components/Question';
import Slider from 'react-slick'


interface Questions {
  id: number,
  question: string,
  correctAnswer: string,
  answers: string[]
}




function App() {
  const questions: Questions[] = [
    {
      id: 1,
      question: "Хамгийн анхны блокчэйн гэрлэлт Америкийн аль мужид болсон бэ? ",
      correctAnswer: "Калифорн",
      answers: ['Калифорн', 'Нью Юорк', 'Вашингтон', 'Улаанбаатар']

    },
    {
      id: 2,
      question: "Хамгийн анхны блокчэйн гэрлэлт Америкийн аль мужид болсон бэ? ",
      correctAnswer: "Калифорн",
      answers: ['Калифорн', 'Нью Юорк', 'Вашингтон', 'Улаанбаатар']

    },
    {
      id: 3,
      question: "Хамгийн анхны блокчэйн гэрлэлт Америкийн аль мужид болсон бэ? ",
      correctAnswer: "Калифорн",
      answers: ['Калифорн', 'Нью Юорк', 'Вашингтон', 'Улаанбаатар']

    },
    {
      id: 4,
      question: "Хамгийн анхны блокчэйн гэрлэлт Америкийн аль мужид болсон бэ? ",
      correctAnswer: "Калифорн",
      answers: ['Калифорн', 'Нью Юорк', 'Вашингтон', 'Улаанбаатар']

    },
    {
      id: 5,
      question: "Хамгийн анхны блокчэйн гэрлэлт Америкийн аль мужид болсон бэ? ",
      correctAnswer: "Калифорн",
      answers: ['Калифорн', 'Нью Юорк', 'Вашингтон', 'Улаанбаатар']

    },
    {
      id: 6,
      question: "Хамгийн анхны блокчэйн гэрлэлт Америкийн аль мужид болсон бэ? ",
      correctAnswer: "Калифорн",
      answers: ['Калифорн', 'Нью Юорк', 'Вашингтон', 'Улаанбаатар']

    },
    {
      id: 7,
      question: "Хамгийн анхны блокчэйн гэрлэлт Америкийн аль мужид болсон бэ? ",
      correctAnswer: "Калифорн",
      answers: ['Калифорн', 'Нью Юорк', 'Вашингтон', 'Улаанбаатар']

    },


  ]


  const [start, setStart] = useState(false)
  const [totalScore, setTotalScore] = useState(0)

  return (
    <div className="App align-middle">
      <div className="flex justify-center items-center min-h-[100vh]">
        {
          start ? (
            <div className="">
              <Question questions={questions} setStart={setStart} setTotalScore={setTotalScore} totalScore={totalScore} />
            </div>) :
            <Button
              size={'lg'}
              onClick={() => setStart(true)}
            >
              Start
            </Button>
        }

      </div>
    </div>
  );
}

export default App;
