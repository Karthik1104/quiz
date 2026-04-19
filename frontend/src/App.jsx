import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Loader from "./components/Loader.jsx";
import Navbar from "./components/Navbar.jsx";
import { fetchQuizzes } from "./api/quizApi.js";
import HomePage from "./pages/HomePage.jsx";
import MockQuizPage from "./pages/MockQuizPage.jsx";
import QuizPage from "./pages/QuizPage.jsx";

const App = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const loadQuizzes = async () => {
    try {
      setIsLoading(true);
      setError("");
      const data = await fetchQuizzes();
      setQuizzes(data);
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadQuizzes();
  }, []);

  return (
    <div className="app-shell">
      <Navbar />
      <main className="main-content">
        {isLoading ? (
          <Loader label="Loading quiz dashboard..." />
        ) : error ? (
          <section className="error-state">
            <h2>Unable to connect to the quiz backend.</h2>
            <p>{error}</p>
            <button className="button" onClick={loadQuizzes}>
              Retry
            </button>
          </section>
        ) : (
          <Routes>
            <Route path="/" element={<HomePage quizzes={quizzes} />} />
            <Route path="/mock" element={<MockQuizPage quizzes={quizzes} />} />
            <Route path="/quiz/:quizId" element={<QuizPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
