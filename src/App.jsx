import Start from "./components/Start";
import { useEffect, useState } from "react";
import QuizPage from "./components/QuizPage";
import Report from "./components/Report";

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [questions, setQuestions] = useState();
  const [userResponse, setUserResponse] = useState([]);
  useEffect(() => {
    const url = "https://opentdb.com/api.php?amount=15";
    if (isStarted) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setQuestions(data.results))
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isStarted]);

  return (
    <div className="flex my-10 md:my-20 items-center justify-center">
      <div
        className={`bg-[#fff] py-2 px-6 rounded-md shadow-lg shadow-black ${
          isStarted && "w-full md:w-2/3 lg:w-1/2 xl:w-1/3"
        }`}
      >
        {showReport ? (
          <Report name={name} userResponse={userResponse} />
        ) : isStarted ? (
          <QuizPage
            questions={questions}
            userResponse={userResponse}
            setUserResponse={setUserResponse}
            setShowReport={setShowReport}
          />
        ) : (
          <Start
            setIsStarted={setIsStarted}
            email={email}
            setEmail={setEmail}
            name={name}
            setName={setName}
          />
        )}
      </div>
    </div>
  );
}

export default App;
