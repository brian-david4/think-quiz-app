export interface QuizQuestion {
  type: "boolean" | "multiple";
  difficulty: "easy" | "medium" | "hard";
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}
export interface ResultMessages {
  result: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  message: string;
  extra_message?: string;
}
