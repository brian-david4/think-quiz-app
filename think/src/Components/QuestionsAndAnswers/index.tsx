import { AnimatePresence, motion } from "motion/react";

import { QuizQuestion } from "@/types";

// styles
import { clipBorder, exit, layoutAnims } from "./Q&Aanims";
import styles from "./QandA.module.css";
//components
import Question from "./Question";
import Answers from "./Answers";
import Score from "./Score";

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
        variants={exit}
        initial="initial"
        exit="exit"
        className={styles.filter}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            variants={clipBorder}
            initial="initial"
            animate="enter"
            exit="exit"
            className={styles.QnAwrapper}
          >
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
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default index;

//refactored into component

//TODO: exit anims
