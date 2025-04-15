"use client";
import { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";

// components
import Question from "../Components/Question/index";

import styles from "@/styles/Home.module.css";
import { QuizQuestion } from "@/types";
import Answers from "../Components/Answers";
import { motion } from "motion/react";
import { clipBorder, layoutAnims } from "@/styles/HomeAnims";
import Score from "@/Components/Score";
import { useDebounce } from "@uidotdev/usehooks";

export default function Home() {
  const [res, setRes] = useState<QuizQuestion[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [finishQuiz, setFinishQuiz] = useState(false);
  const debouncedScore = useDebounce(score, 2000);

  const handleAnswerClick = (ans: string) => {
    if (ans === res[activeIdx].correct_answer) {
      console.log("correct!");
      setScore(score + 1);
    } else {
      console.log("incorrect :(");
    }

    if (activeIdx === 9) {
      setFinishQuiz(true);
    } else {
      setActiveIdx(activeIdx + 1);
    }
  };

  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=10&category=9")
      .then((resp) => {
        setRes(resp.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
      });
  }, []);

  return (
    <>
      <motion.main
        key={activeIdx}
        variants={clipBorder}
        initial="initial"
        animate="enter"
        className={styles.main}
      >
        {!loading && !finishQuiz && (
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
        )}
        {finishQuiz && <div>quiz results: {score} / 10</div>}
      </motion.main>
    </>
  );
}
