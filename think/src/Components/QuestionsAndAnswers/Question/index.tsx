import { formatEntity } from "@/utils/formatEntity";
import React from "react";

interface QuestionProps {
  question: string;
}

const index = ({ question }: QuestionProps) => {
  const ammendedQ = formatEntity(question);
  return (
    <>
      <p>{ammendedQ}</p>
    </>
  );
};

export default index;
