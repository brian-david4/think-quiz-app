import { motion } from "motion/react";
import Image from "next/image";

import styles from "./welcome_screen.module.css";
import { welcomeExit } from "./welcomeScreenAnims";

import penguin from "../../../public/penguin.svg";

interface WelcomeScreenProps {
  onClick: () => void;
}

const index = ({ onClick }: WelcomeScreenProps) => {
  return (
    <>
      <motion.div
        variants={welcomeExit}
        initial="initial"
        exit="exit"
        animate="enter"
        className={styles.container}
        onClick={onClick}
      >
        <div className={styles.title}>Think!</div>
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className={styles.svgWrapper}
        >
          <Image fill src={penguin} alt="Penguin looking right svg" />
        </motion.div>
      </motion.div>
    </>
  );
};

export default index;
