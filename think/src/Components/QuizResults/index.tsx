import { motion } from "motion/react";
import styles from "./quiz-results.module.css";
import { results } from "./quizResultsAnims";
import { ResultMessages } from "@/types";

interface QuizResultsProps {
  score: number;
}

const index = ({ score }: QuizResultsProps) => {
  const scoreMessages: ResultMessages[] = [
    {
      result: 0,
      message:
        "That's really embarrasing... I mean I am quite literally lost for words...",
    },
    {
      result: 1,
      message: "You could hardly be worse... try again maybe you can!",
    },
    {
      result: 2,
      message:
        "Keep your head up - should be easy really, clearly it isn't weighed down by the burden of knowledge.",
    },
    {
      result: 3,
      message:
        "Was this you at your best? No, no, no, not implying anything mate, just... uh... wondering...",
    },
    { result: 4, message: "17 years of education paying off there... " },
    {
      result: 5,
      message:
        "5 - 50% - half. Average, right down the middle - unspectacular some might say. Not me mate, just some others might...",
    },
    {
      result: 6,
      message:
        "You know more than you don't. Albeit about utter s***e - but y'know... congrats.",
    },
    {
      result: 7,
      message:
        "You could be outside in awe of nature's majesty. Yet here you are getting a 7. Heartfelt congratulations.",
    },
    {
      result: 8,
      message:
        "Years and years built up to this moment. It's a shame how ordinary it ended up being...",
    },
    {
      result: 9,
      message:
        "You know a lot of trivia - that's bound to come in handy. Any day now...",
    },
    {
      result: 10,
      message:
        "No one likes a know it all, but then again I bet you knew that already.",
      extra_message: "stop playing now...",
    },
  ];

  return (
    <>
      <div className={styles.filter}>
        <motion.div
          variants={results}
          initial="initial"
          animate="enter"
          className={styles.container}
        >
          <div className={styles.message}>{scoreMessages[score].message}</div>
          <div className={styles.result}>
            <div className={styles.resultInner}>{score}</div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default index;
