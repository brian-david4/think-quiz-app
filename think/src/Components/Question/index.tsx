import React from "react";

interface QuestionProps {
  question: string;
}

const index = ({ question }: QuestionProps) => {
  const entities = {
    "&#039;": "'",
    "&quot;": '"',
  };

  const ammendedQ: string = question.replaceAll(
    /&#?\w+?;/g,
    (match) => entities[match as keyof typeof entities]
  );
  return (
    <>
      <p>{ammendedQ}</p>
    </>
  );
};

export default index;
