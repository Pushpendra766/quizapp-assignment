import React from "react";
import { useState, useEffect } from "react";
import Navigate from "./Navigate";
import Question from "./Question";
import Timer from "./Timer";

const QuizPage = ({
  questions,
  userResponse,
  setUserResponse,
  setShowReport,
}) => {
  const [currQueIdx, setCurrQueIdx] = useState(0);
  const totalQuestions = questions && questions.length;

  const handleNext = () => {
    setCurrQueIdx(currQueIdx + 1);
  };
  const handlePrev = () => {
    setCurrQueIdx(currQueIdx - 1);
  };
  const handleSubmit = () => {
    setShowReport(true);
  };

  return (
    <div className="flex flex-col gap-3 py-2">
      <div className="flex justify-between">
        <p className="text-lg font-bold">General Quiz</p>
        <Timer setShowReport={setShowReport} />
      </div>

      <hr />
      {questions ? (
        <Question
          questions={questions}
          currQueIdx={currQueIdx}
          userResponse={userResponse}
          setUserResponse={setUserResponse}
        />
      ) : (
        <p>Loading...</p>
      )}
      <hr />
      <div className="flex justify-end gap-4">
        {currQueIdx != 0 && (
          <button
            className="border py-1.5 px-4 rounded text-[#279EFF] border-[#279EFF]"
            onClick={handlePrev}
          >
            Prev
          </button>
        )}

        {currQueIdx === totalQuestions - 1 ? (
          <button
            className="border py-1.5 px-4 rounded border-[#279EFF] bg-[#279EFF] text-white"
            onClick={handleSubmit}
          >
            Submit
          </button>
        ) : (
          <button
            className="border py-1.5 px-4 rounded border-[#279EFF] bg-[#279EFF] text-white"
            onClick={handleNext}
          >
            Next
          </button>
        )}
      </div>
      <hr />
      <Navigate
        totalQuestions={totalQuestions}
        currQueIdx={currQueIdx}
        setCurrQueIdx={setCurrQueIdx}
        userResponse={userResponse}
      />
    </div>
  );
};

export default QuizPage;
