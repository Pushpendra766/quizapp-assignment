import React, { useEffect, useState } from "react";

const Question = ({ questions, currQueIdx, userResponse, setUserResponse }) => {
  const [options, setOptions] = useState([]);
  const question = questions[currQueIdx];
  const [selectedOption, setSelectedOption] = useState(-1);
  const handleSetOption = (idx, option) => {
    setSelectedOption(idx);
    const newResponse = [...userResponse];
    newResponse[currQueIdx] = {
      ...newResponse[currQueIdx],
      index: currQueIdx,
      question: questions[currQueIdx].question,
      optionIdx: idx,
      user_response: option,
      correct_response: question.correct_answer,
    };
    setUserResponse(newResponse);
  };

  useEffect(() => {
    setOptions(question.incorrect_answers);
    setOptions((opts) => [...opts, question.correct_answer]);
    if (userResponse[currQueIdx]) {
      setSelectedOption(userResponse[currQueIdx].optionIdx);
    } else {
      setSelectedOption(-1);
    }
  }, [question]);

  return (
    <div className="flex flex-col gap-4">
      <p className="text-lg font-bold">{question.question}</p>
      {options.map((option, idx) => {
        return (
          <p
            className={`border border-[#279EFF] rounded px-4 py-2 hover:bg-[#279EFF] hover:text-white cursor-pointer ${
              selectedOption === idx && "bg-[#279EFF]"
            }`}
            key={idx}
            onClick={() => handleSetOption(idx, option)}
          >
            {option}
          </p>
        );
      })}
    </div>
  );
};

export default Question;
