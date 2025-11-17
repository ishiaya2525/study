import Display from "../components/Display/Display";
import quizData from "../data/quiz";  
import Button from "../components/Button/Button"; 
import { useEffect, useState,} from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../const";


export default function QuizPage() {
  const [quizIndex, setQuizIndex] = useState(0);
  const [answerLogs, setAnswerLogs] = useState([]);
  const navigation = useNavigate();
  const MAX_QUIZ_Len = quizData.length;

  const handleClick = (clickedIndex) => {
    if(clickedIndex === quizData[quizIndex].answerIndex) {
      setAnswerLogs(prev=> [...prev, true]);
    } else {
      setAnswerLogs(prev => [...prev, false]);
    }
    setQuizIndex(prev =>  prev + 1);
  }

  useEffect(() => {
    if(answerLogs.length === MAX_QUIZ_Len) {
      const collectNum = answerLogs.filter(answer => answer === true)
      navigation(ROUTES.RESULT,
        { state: { 
          MAX_QUIZ_Len: MAX_QUIZ_Len,
          correctNUMLen: collectNum.length  
         } }
      );
    }
  }, [answerLogs, MAX_QUIZ_Len, navigation]);

  return (
    <>
      {quizData[quizIndex] && <Display>{`0${quizIndex + 1}. ${quizData[quizIndex].question}`}</Display>}
      <br />
      {(quizIndex < quizData.length && quizData[quizIndex]) && quizData[quizIndex].options.map((option, index) => 
          <Button key={`option-${index}`} onClick={() => handleClick(index)}>{option}</Button>
        )}
    </>
  );
}