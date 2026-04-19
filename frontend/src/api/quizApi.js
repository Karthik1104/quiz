const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

const request = async (path, options = {}) => {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json"
    },
    ...options
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong while fetching data.");
  }

  return data.data;
};

export const fetchQuizzes = () => request("/api/quizzes");

export const fetchQuizById = (quizId) => request(`/api/quizzes/${quizId}`);

export const checkQuizAnswer = (quizId, questionId, answer) =>
  request(`/api/quizzes/${quizId}/check-answer`, {
    method: "POST",
    body: JSON.stringify({ questionId, answer })
  });

export const submitQuizAnswers = (quizId, answers) =>
  request(`/api/quizzes/${quizId}/submit`, {
    method: "POST",
    body: JSON.stringify({ answers })
  });
