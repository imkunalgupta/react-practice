import React, { Component } from 'react';
import _ from 'lodash';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
      answers: null,
      correctAnswer: null,
    };
  }

  componentDidMount() {
    let arrOfIncorrectAns = [
      ...this.props.questions[this.state.currentQuestion].incorrect_answers,
    ];
    let correctAns =
      this.props.questions[this.state.currentQuestion].correct_answer;

    let arrOfAllAns = _.uniq(_.concat(arrOfIncorrectAns, correctAns));
    this.setState({
      answers: arrOfAllAns,
      correctAnswer: correctAns,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentQuestion !== this.state.currentQuestion) {
      let arrOfIncorrectAns = [
        ...this.props.questions[this.state.currentQuestion].incorrect_answers,
      ];

      let correctAns =
        this.props.questions[this.state.currentQuestion].correct_answer;

      let arrOfAllAns = _.uniq(_.concat(arrOfIncorrectAns, correctAns));

      this.setState({
        answers: arrOfAllAns,
        correctAnswer: correctAns,
      });
    }
  }

  handleNextQuestion = () => {
    if (!this.props.allAnswers[this.state.currentQuestion]) {
      alert('You must select answer of current question.');
    } else {
      this.setState((prevState) => {
        return {
          currentQuestion: prevState.currentQuestion + 1,
        };
      });
    }
  };

  render() {
    let questionToDisplay = this.props.questions[this.state.currentQuestion];
    return (
      <div className="question-div">
        <h2 className="sec-heading">
          Question No. :- <span>{this.state.currentQuestion + 1}</span>
        </h2>
        <div className="flex center">
          {''}
          <span className="btn btn-ter">
            Difficulty:- {questionToDisplay.difficulty}
          </span>
        </div>
        <h3>
          Question:- <span>{questionToDisplay.question}</span>
        </h3>
        {this.state.answers ? (
          <>
            <ul>
              {this.state.answers.map((answer, i) => {
                return (
                  <li
                    onClick={(event) => {
                      this.props.handleAnswerSelect(
                        answer,
                        this.state.currentQuestion
                      );
                    }}
                    key={i}
                    className={
                      this.props.allAnswers[this.state.currentQuestion] ===
                      answer
                        ? 'active'
                        : ''
                    }
                  >
                    {i + 1}:-{answer}
                  </li>
                );
              })}
            </ul>
          </>
        ) : (
          ''
        )}
        {this.state.currentQuestion > 8 ? (
          <div className="flex center">
            <button
              className="btn btn-sec"
              onClick={(event) => {
                this.props.handleSubmit(
                  this.props.questions,
                  this.props.allAnswers
                );
              }}
            >
              Submit
            </button>
          </div>
        ) : (
          <div className="flex center">
            <button
              className="btn btn-sec"
              onClick={(event) => {
                this.handleNextQuestion();
              }}
            >
              Next
            </button>
          </div>
        )}
      </div>
    );
  }
}
export default Quiz;
