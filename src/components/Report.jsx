import React from "react";

const Report = ({ name, userResponse }) => {
  const score = userResponse.reduce((acc, el) => {
    if (el && el.correct_response === el.user_response) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);
  return (
    <div className="flex flex-col gap-4">
      <p className="text-lg font-bold">
        Congratulations {name} ! on completing the quiz.
      </p>
      <hr />
      <p>
        You got <span className="font-bold">{score}/15</span> marks
      </p>
      <hr />
      <table className="min-w-full bg-white ">
        <thead>
          <tr className="bg-[#279EFF]">
            <th className="pl-2 py-3 border-b-2 border-gray-300 text-left leading-4 font-semibold tracking-wider">
              Question
            </th>
            <th className="pl-2 py-3 border-b-2 border-gray-300 text-left leading-4 font-semibold tracking-wider">
              Correct Answer
            </th>
            <th className="pl-2 py-3 border-b-2 border-gray-300 text-left leading-4 font-semibold tracking-wider">
              Your Answer
            </th>
          </tr>
        </thead>
        <tbody>
          {userResponse &&
            userResponse.map((response) => {
              if (response) {
                return (
                  <tr key={response?.index}>
                    <td className="pl-2 py-4 whitespace-no-wrap border-b border-gray-300">
                      {response.index + 1}. {response.question}
                    </td>
                    <td className="pl-2 py-4 whitespace-no-wrap border-b border-gray-300">
                      {response.correct_response}
                    </td>
                    <td
                      className={`pl-2 py-4 whitespace-no-wrap border-b border-gray-300 font-bold ${
                        response.correct_response === response.user_response
                          ? "text-[#0BDA51]"
                          : "text-[#FF0000]"
                      }`}
                    >
                      {response.user_response}
                    </td>
                  </tr>
                );
              }
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Report;
