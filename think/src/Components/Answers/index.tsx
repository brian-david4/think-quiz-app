import { formatEntity } from "@/utils/formatEntity";
import styles from "./Answers.module.css";
import { randomiseArray } from "@/utils/randomiseArray";

interface AnswersProps {
  correctAnswer: string;
  incorrectAnswers: string[];
}

const index = ({ correctAnswer, incorrectAnswers }: AnswersProps) => {
  const answers: string[] = randomiseArray([
    ...incorrectAnswers,
    correctAnswer,
  ]);
  return (
    <>
      {
        <div className={styles.answerContainer}>
          {answers.map((ans, key) => {
            return <div key={key}>{formatEntity(ans)}</div>;
          })}
        </div>
      }
    </>
  );
};

export default index;
