"use client";
import { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";

// components
import Question from "../Components/Question/index";

import styles from "@/styles/Home.module.css";
import { QuizQuestion } from "@/types";
import Answers from "../Components/Answers";

export default function Home() {
  const [res, setRes] = useState<QuizQuestion[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const handleClick = () => {
    if (activeIdx <= 9) {
      setActiveIdx(activeIdx + 1);
    } else {
      setActiveIdx(0);
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
        setError(err.message);
      });
  }, []);

  return (
    <>
      <main className={styles.main}>
        {!loading && (
          <>
            <div className={styles.questionLayout}>
              <Question question={res[activeIdx].question} />
            </div>

            <div className={styles.answerLayout}>
              <Answers
                correctAnswer={res[activeIdx].correct_answer}
                incorrectAnswers={res[activeIdx].incorrect_answers}
              />
            </div>
          </>
        )}
        <button onClick={handleClick}>next question</button>
      </main>
    </>
  );
}
