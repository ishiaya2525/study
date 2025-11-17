import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../const";
import Result from "../components/Result/Result";
import Loading from "../components/Loading/Loading";
import { useState, useEffect } from "react";

export default function ResultPage() {
  const [active, setActive] = useState(false);
  const location = useLocation();
  const MAX_QUIZ_Len = location.state.MAX_QUIZ_Len;
  const correctNUMLen = location.state.correctNUMLen;
  
  useEffect(() => {
    setTimeout(() => setActive(true), 3000);
  }, []);

  return (
    <>
      <Loading active={active} />
      <h1>Result</h1> 
      <Result MAX_QUIZ_Len={MAX_QUIZ_Len} correctNUMLen={correctNUMLen} />
      <br />
      <Link to={ROUTES.QUIZ}>もう1度チャレンジ！</Link>
    </>
  )
}
