"use client";
import { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";

// components
import Question from "../Components/Question/index";

import styles from "@/styles/Home.module.css";
import { QuizQuestion } from "@/types";

export default function Home() {
  const [res, setRes] = useState<QuizQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
          <div className={styles.questionLayout}>
            <Question question={res[0].question} />
          </div>
        )}
      </main>
    </>
  );
}
