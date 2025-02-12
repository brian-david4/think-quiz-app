import styles from "./Answers.module.css";

interface AnswersProps {
  correctAnswer: string;
  incorrectAnswers: string[];
}

const index = ({ correctAnswer, incorrectAnswers }: AnswersProps) => {
  const answers: string[] = [...incorrectAnswers, correctAnswer];
  return (
    <>
      {
        <div className={styles.answerContainer}>
          {answers.map((ans, key) => {
            return <div key={key}>{ans}</div>;
          })}
        </div>
      }
    </>
  );
};

export default index;
