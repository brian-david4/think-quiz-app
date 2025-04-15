const entities = {
  "&#039;": "'",
  "&quot;": '"',
  "&hellip": "...",
  "&#38;": "&",
};

export const formatEntity = (s: string) => {
  const formattedWord: string = s.replaceAll(
    /&#?\w+?;/g,
    (match) => entities[match as keyof typeof entities]
  );

  return formattedWord;
};
