import React from "react";

const Navigate = ({
  totalQuestions,
  currQueIdx,
  setCurrQueIdx,
  userResponse,
}) => {
  const questionNumbers = Array.from(
    { length: totalQuestions },
    (_, idx) => idx
  );
  return (
    <div className="grid grid-cols-8 md:grid-cols-10 gap-2">
      {questionNumbers.map((number, idx) => {
        return (
          <p
            className={`p-1 border rounded-full w-9 text-center text-[#fff] cursor-pointer ${
              currQueIdx === number && "border-2 border-[#191d88]"
            } ${
              userResponse[idx] && userResponse[idx].optionIdx !== -1
                ? "bg-[#00FF7F]"
                : "bg-[#279EFF]"
            }`}
            onClick={() => {
              setCurrQueIdx(number);
            }}
            key={number}
          >
            {number + 1}
          </p>
        );
      })}
    </div>
  );
};

export default Navigate;
