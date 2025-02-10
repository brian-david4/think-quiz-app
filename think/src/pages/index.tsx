"use client";
import { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";
import styles from "@/styles/Home.module.css";
import { QuizQuestion } from "@/types";

export default function Home() {
  const [res, setRes] = useState<QuizQuestion[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=10&category=9")
      .then((resp) => {
        setRes(resp.data.results);
        console.log(resp);
        console.log(resp.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
  }, []);

  return (
    <>
      <main className={styles.main}>
        <h1>think!</h1>
        <p>
          {res.map((q, i) => {
            return <span key={i}>{q.question}</span>;
          })}
        </p>
      </main>
    </>
  );
}
