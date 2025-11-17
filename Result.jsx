import styles from './Result.module.css';
import Confetti from 'react-confetti'

export default function Result({ MAX_QUIZ_Len, correctNUMLen }) {
  return (
    <>
    <div className={styles.result}>
        あなたの正解数は・・・
        <span className={styles.resultHighlight}>
            {`全${MAX_QUIZ_Len}問中、${correctNUMLen}問`}
        </span>
        でした！
    </div>
    <Confetti />
    </>
  )
}
