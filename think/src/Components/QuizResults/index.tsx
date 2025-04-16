import { motion } from "motion/react";
import styles from "./quiz-results.module.css";
import { results } from "./quizResultsAnims";

interface QuizResultsProps {
  score: number;
}

const index = ({ score }: QuizResultsProps) => {
  return (
    <>
      <div className={styles.filter}>
        <motion.div
          variants={results}
          initial="initial"
          animate="enter"
          className={styles.container}
        >
          results: {score} / 10
        </motion.div>
      </div>
    </>
  );
};

export default index;
