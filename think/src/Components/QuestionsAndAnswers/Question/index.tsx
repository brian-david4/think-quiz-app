import { decode } from "html-entities";
import React from "react";

interface QuestionProps {
  question: string;
}

const index = ({ question }: QuestionProps) => {
  const ammendedQ = decode(question);
  return (
    <>
      <p>{ammendedQ}</p>
    </>
  );
};

export default index;
