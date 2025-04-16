import styles from "./Answers.module.css";
import { randomiseArray } from "@/utils/randomiseArray";
import { decode } from "html-entities";

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
                {decode(ans)}
              </span>
            );
          })}
        </div>
      }
    </>
  );
};

export default index;
