import { formatEntity } from "@/utils/formatEntity";
import styles from "./Answers.module.css";
import { randomiseArray } from "@/utils/randomiseArray";

interface AnswersProps {
  correctAnswer: string;
  incorrectAnswers: string[];
  handleClick: (s: string) => void;
}

const index = ({
  correctAnswer,
  incorrectAnswers,
  handleClick,
}: AnswersProps) => {
  const answers: string[] = randomiseArray([
    ...incorrectAnswers,
    correctAnswer,
  ]);
  return (
    <>
      {
        <div className={styles.answerContainer}>
          {answers.map((ans, key) => {
            return (
              <span
                className={styles.answer}
                onClick={() => handleClick(ans)}
                key={`ans_${key}`}
              >
                {formatEntity(ans)}
              </span>
            );
          })}
        </div>
      }
    </>
  );
};

export default index;
