import React, { useEffect, useState, useRef } from 'react'
import {
    Button, Stack
} from '@chakra-ui/react'
import Slider from 'react-slick'

interface Props {
    setStart: React.Dispatch<React.SetStateAction<any>>
    setTotalScore: React.Dispatch<React.SetStateAction<any>>
    totalScore: number,
    questions: {
        id: number,
        question: string,
        correctAnswer: string,
        answers: string[]
    }[]
}

export default function Question({ questions, setStart, setTotalScore, totalScore }: Props) {


    const [isCorrect, setIsCorrect] = useState(false)
    const [questionCounter, setQuestionCounter] = useState(0)
    const slickRef = useRef<any>()
    const settings = {
        className: 'center',
        dots: false,
        infinite: false,
        speed: 500,
        delay: 5500,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        arrows: false,

    };

    //Score updates here
    useEffect(() => {
        if (isCorrect === true) {

            console.log(totalScore)
        }
    }, [totalScore])

    const handleChoice = (way: string) => {
        if (slickRef.current && way === 'next') {
            slickRef.current.slickNext();
        }
    }

    const questionComponents = (
        questions.map((question, index) => {
            //answer checking function
            const checkAnswer = (answer: string): void => {
                if (answer === question.correctAnswer) {
                    console.log('your answer is correct')
                    setTotalScore((prevScore: number): number => prevScore + 1)
                    setIsCorrect(true)
                    setQuestionCounter(counter => counter + 1)


                }
                else {
                    console.log('your answer is incorrect')
                    setIsCorrect(false)
                    setQuestionCounter(counter => counter + 1)
                }
            }

            return (
                <div key={index} className="space-y-4">
                    <p className="font-bold">{questionCounter}/{questions.length}</p>
                    <h1 className="bg-yellow-200 text-xl font-bold p-10 rounded-lg">{question.question}</h1>
                    <Stack className=" flex items-center justify-between p-10" >
                        {question.answers.map((answer, index) => {
                            return (
                                <div key={index}>
                                    <Button width={500} onClick={() => { checkAnswer(answer); handleChoice('next'); }}>{answer}</Button>
                                </div>
                            )
                        })}
                    </Stack>
                </div>

            )
        })
    )
    return (
        <div>
            <Slider {...settings} ref={slickRef}>
                {questionComponents}
            </Slider>
            <div className="flex justify-center">

            </div>
        </div>
    )
}
