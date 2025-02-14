import { motion } from "motion/react";
import styles from "./Score.module.css";

interface ScoreProps {
  score: number;
}

const index = ({ score }: ScoreProps) => {
  return (
    <>
      <motion.div className={styles.score}>
        <div style={{ marginRight: "0.2ch" }}>{score}</div>
        <div style={{ opacity: 1 }}>|</div>
        <div>10</div>
      </motion.div>
    </>
  );
};

export default index;
