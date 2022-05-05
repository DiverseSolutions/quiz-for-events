import React, { useState } from 'react'
import {
    Button, ButtonGroup, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, Stack, useDisclosure
} from '@chakra-ui/react'

export default function Question() {
    const questions = [
        {
            "№": 1,
            "question": "Хамгийн анхны блокчэйн гэрлэлт Америкийн аль мужид болсон бэ? ",
            "correctAnswer": "Калифорн",
            "answers": ['Калифорн', 'Нью Юорк', 'Вашингтон', 'Улаанбаатар']

        },
    ]

    const [isCorrect, setIsCorrect] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()

    const questionComponents = (
        questions.map((question, index) => {
            //answer checking function
            const checkAnswer = (answer: string): void => {
                if (answer === question.correctAnswer) {
                    console.log('your answer is correct')
                    setIsCorrect(true)
                }
                else {
                    console.log('your answer is incorrect')
                    setIsCorrect(false)
                }
            }

            return (
                <div key={index} className="space-y-4">
                    <h1 className="bg-yellow-200 text-xl font-bold p-10 rounded-lg">{question.question}</h1>
                    <Stack className=" flex items-center justify-between p-10" >
                        {question.answers.map((answer, index) => {
                            return (
                                <div key={index}>
                                    <Button width={500} onClick={() => { checkAnswer(answer) }}>{answer}</Button>
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
            {questionComponents}
            <div className="flex justify-center">
                <Button onClick={onOpen}>Open Modal</Button>

                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>{isCorrect ? 'Your Answer Is Correct' : 'Your Answer Is Incorrect :('}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            {/* put something here */}
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                                Close
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </div>
        </div>
    )
}
