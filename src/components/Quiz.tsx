"use client";

import {
    Box,
    Button,
    Card,
    CardContent,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    Typography,
} from "@mui/material";
import React, { useState } from "react";

import { toast } from "react-toastify";
import { getMockQuizData } from "./quizData";

const Quiz: React.FC = () => {
    const [questions, setQuestions] = useState<QuizQuestion[]>(
        getMockQuizData(),
    );
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState("");
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
    const [showStats, setShowStats] = useState(false);

    const handleFileUpload = (file: File) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const jsonData = JSON.parse(event.target?.result as string);
                setQuestions(jsonData);
                setCurrentQuestionIndex(0); // Reset to the first question
                setCorrectAnswersCount(0); // Reset correct answers count
                setSelectedOption(""); // Reset selected option
            } catch (error) {
                console.error("Error parsing JSON file:", error);
                toast.error(
                    "Error parsing JSON file. Please upload a valid JSON file.",
                );
            }
        };
        reader.readAsText(file);
    };

    const handleRestart = () => {
        setQuestions(getMockQuizData());
        setCurrentQuestionIndex(0);
        setSelectedOption("");
        setCorrectAnswersCount(0);
        setShowStats(false);
    };

    const handleAnswerSelection = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setSelectedOption(event.target.value);
    };

    const handleSubmit = () => {
        if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
            setCorrectAnswersCount((prevCount) => prevCount + 1);
            toast.success("Correct answer!");
        } else {
            toast.error("Wrong answer. Try again!");
        }

        // Move to the next question
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            setSelectedOption("");
        } else {
            // If there are no more questions, display quiz stats
            setShowStats(true);
        }
    };

    const handleNextQuestion = () => {
        if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
            setCorrectAnswersCount((prevCount) => prevCount + 1);
        }

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            setSelectedOption("");
        } else {
            // If there are no more questions, display quiz stats
            setShowStats(true);
        }
    };

    const handlePreviousQuestion = () => {
        if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
            setCorrectAnswersCount((prevCount) => prevCount - 1);
        }

        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
            setSelectedOption("");
        }
    };

    const wrongAnswersCount = correctAnswersCount;

    return (
        <div className="">
            {!showStats ? (
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="div" gutterBottom>
                            {questions[currentQuestionIndex].question}
                        </Typography>
                        <FormControl component="fieldset">
                            <RadioGroup
                                aria-label="quiz-options"
                                name="quiz-options"
                                value={selectedOption}
                                onChange={handleAnswerSelection}
                            >
                                {questions[currentQuestionIndex].options.map(
                                    (option, optionIndex) => (
                                        <FormControlLabel
                                            key={optionIndex}
                                            value={option}
                                            control={<Radio />}
                                            label={option}
                                        />
                                    ),
                                )}
                            </RadioGroup>
                        </FormControl>
                        <Box mt={2} gap={3}>
                            <div className="flex gap-3">
                                <div>
                                    <Button
                                        variant="contained"
                                        color="success"
                                        onClick={handleSubmit}
                                    >
                                        Submit
                                    </Button>
                                </div>
                                <div>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={handlePreviousQuestion}
                                        disabled={
                                            !selectedOption ||
                                            currentQuestionIndex === 0
                                        }
                                    >
                                        Prev
                                    </Button>
                                </div>
                                <div>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNextQuestion}
                                        disabled={!selectedOption}
                                    >
                                        {currentQuestionIndex ===
                                        questions.length - 1
                                            ? "Show Stats"
                                            : "Next"}
                                    </Button>
                                </div>
                            </div>
                        </Box>
                    </CardContent>
                </Card>
            ) : (
                <div className="text-white text-center">
                    <h2>End of Quiz</h2>
                    <p>There are no more questions.</p>
                    <p>Quiz Stats:</p>
                    <p>Total Questions: {questions.length}</p>
                    <p>
                        Correct Answers:{" "}
                        <span className="text-green-600">
                            {correctAnswersCount}
                        </span>{" "}
                        <span className="text-gray-900">{"|"} </span>
                    </p>
                    <p>
                        Wrong Answer:{" "}
                        <span className="text-red-600">
                            {wrongAnswersCount}
                        </span>{" "}
                        <span className="text-gray-900">{"|"} </span>
                    </p>
                    <div>
                        <button onClick={handleRestart}> Restart</button>
                    </div>
                </div>
            )}
            {/* only one at a time */}
            {!showStats && (
                <div className="flex-end justify-end flex gap-3">
                    <p>
                        Wrong Answer:{" "}
                        <span className="text-red-600">
                            {wrongAnswersCount}
                        </span>{" "}
                        <span className="text-gray-900">{"|"} </span>
                    </p>
                    <p>
                        Correct Answers:{" "}
                        <span className="text-green-600">
                            {correctAnswersCount}
                        </span>{" "}
                        <span className="text-gray-900">{"|"} </span>
                    </p>
                    <p>
                        Total Questions:{" "}
                        <span className="text-slate-200">
                            {questions.length}
                        </span>
                    </p>
                </div>
            )}
        </div>
    );
};

export default Quiz;
