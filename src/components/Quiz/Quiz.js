import React from 'react';
import './Quiz.css'

export default class Quiz extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            questions: [
                {
                    questionText: 'What is the capital of France ?',
                    answerOptions: [
                        { answerText: 'New York', isCorrect: false },
                        { answerText: 'London', isCorrect: false },
                        { answerText: 'Paris', isCorrect: true },
                        { answerText: 'Dublin', isCorrect: false },
                    ],
                },
                {
                    questionText: 'Who is CEO of Tesla ?',
                    answerOptions: [
                        { answerText: 'Jeff Bezos', isCorrect: false },
                        { answerText: 'Elon Musk', isCorrect: true },
                        { answerText: 'Bill Gates', isCorrect: false },
                        { answerText: 'Tony Stark', isCorrect: false },
                    ],
                },
                {
                    questionText: 'The iPhone was created by which company ?',
                    answerOptions: [
                        { answerText: 'Apple', isCorrect: true },
                        { answerText: 'Intel', isCorrect: false },
                        { answerText: 'Amazon', isCorrect: false },
                        { answerText: 'Microsoft', isCorrect: false },
                    ],
                },
                {
                    questionText: 'What is the capital of U.K ?',
                    answerOptions: [
                        { answerText: 'Manchester', isCorrect: false },
                        { answerText: 'London', isCorrect: true },
                        { answerText: 'Liverpool', isCorrect: false },
                        { answerText: 'Bristol', isCorrect: false },
                    ],
                },
                {
                    questionText: "Which football team doesn't play in Spain ?",
                    answerOptions: [
                        { answerText: 'Barcelona', isCorrect: false },
                        { answerText: 'Real Madrid', isCorrect: false },
                        { answerText: 'Valencia', isCorrect: false },
                        { answerText: 'Arsenal', isCorrect: true },
                    ],
                },
                {
                    questionText: 'Which stadium is the greatest one in Europe ?',
                    answerOptions: [
                        { answerText: 'S-Bernabeo', isCorrect: false },
                        { answerText: 'Camp nou', isCorrect: true },
                        { answerText: 'Vanda Politano', isCorrect: false },
                        { answerText: 'Wembley', isCorrect: false },
                    ],
                },
            ],
            currentQuestion: 0,
            showScore: false,
            score: 0
        }
        // this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler(isCorrect) {
        if (isCorrect) {
            this.setState((prevState) => {
                return {
                    score: prevState.score + 1
                }
            })
        }
        if (this.state.currentQuestion === 5) {
            this.setState(
                { showScore: true }
            )
        } else {
            this.setState((prevState) => {
                return {
                    currentQuestion: prevState.currentQuestion + 1
                }
            })
        }
    }

    render() {
        return (
            <div className='app'>
                {/* next div is for showing user score */}
                {this.state.showScore && (
                    <div className='score-section'>
                        You scored {this.state.score} out of 6
                    </div>
                )
                }
                {this.state.showScore === false && (

                <div className='app-container'>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question {this.state.currentQuestion + 1}</span>/ {this.state.questions.length}
                        </div>
                        <div className='question-text'>{this.state.questions[this.state.currentQuestion].questionText}</div>
                    </div>
                    <div className='answer-section'>
                        {this.state.questions[this.state.currentQuestion].answerOptions.map((answer) => (
                            <button className='btn7' onClick={this.clickHandler.bind(this, answer.isCorrect)}>{answer.answerText}</button>
                        ))}
                    </div>
                </div>
                )}
            </div>
        )
    }
}
