import { motion } from "motion/react";

// styles
import { layoutAnims } from "./Q&Aanims";
import styles from "./QandA.module.css";
import Question from "./Question";
import Answers from "./Answers";
import Score from "./Score";
import { QuizQuestion } from "@/types";

interface QuestionsAndAnswersProps {
  res: QuizQuestion[];
  handleAnswerClick: (ans: string) => void;
  debouncedScore: number;
  activeIdx: number;
}

const index = ({
  handleAnswerClick,
  res,
  activeIdx,
  debouncedScore,
}: QuestionsAndAnswersProps) => {
  return (
    <>
      <motion.div
        variants={layoutAnims}
        initial="initial"
        animate="enter"
        className={styles.questionLayout}
      >
        <Question question={res[activeIdx].question} />
      </motion.div>

      <motion.div
        variants={layoutAnims}
        initial="initial"
        animate="enter"
        className={styles.answerLayout}
      >
        <Answers
          correctAnswer={res[activeIdx].correct_answer}
          incorrectAnswers={res[activeIdx].incorrect_answers}
          handleClick={handleAnswerClick}
        />
      </motion.div>

      <Score score={debouncedScore} />
    </>
  );
};

export default index;

//refactored into component

//TODO: exit anims
