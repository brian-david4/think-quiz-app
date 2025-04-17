"use client";
import { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";
import { AnimatePresence, motion } from "motion/react";
import { useDebounce } from "@uidotdev/usehooks";

import { QuizQuestion } from "@/types";
// components
import QuestionsAndAnswers from "@/Components/QuestionsAndAnswers";

// styles
import styles from "@/styles/Home.module.css";
import QuizResults from "@/Components/QuizResults";
import { api } from "@/api/api";
import WelcomeScreen from "@/Components/WelcomeScreen";

export default function Home() {
  const [res, setRes] = useState<QuizQuestion[]>([]);

  const [activeIdx, setActiveIdx] = useState(0);
  const [finishQuiz, setFinishQuiz] = useState(false);
  const [loading, setLoading] = useState(true);

  const [score, setScore] = useState(0);
  const debouncedScore = useDebounce(score, 2000);

  const handleAnswerClick = (ans: string) => {
    if (ans === res[activeIdx].correct_answer) {
      setScore(score + 1);
    }

    if (activeIdx === 9) {
      setFinishQuiz(true);
    } else {
      setActiveIdx(activeIdx + 1);
    }
  };

  useEffect(() => {
    api
      .get("?amount=10&category=9")
      .then((resp) => {
        setRes(resp.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
      });
  }, []);

  return (
    <>
      <main className={styles.main}>
        <AnimatePresence mode="wait">
          {loading && <WelcomeScreen onClick={() => setLoading(false)} />}
        </AnimatePresence>

        <AnimatePresence>
          {!loading && !finishQuiz && (
            <QuestionsAndAnswers
              res={res}
              debouncedScore={debouncedScore}
              activeIdx={activeIdx}
              handleAnswerClick={(ans: string) => handleAnswerClick(ans)}
            />
          )}
        </AnimatePresence>

        {finishQuiz && <QuizResults score={score} />}
      </main>
    </>
  );
}
