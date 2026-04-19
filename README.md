# NPTEL Quiz App

A full-stack quiz platform for NPTEL preparation built with:

- `frontend/`: React + Vite
- `backend/`: Node.js + Express

## Project Structure

```text
quiz/
  backend/
    package.json
    src/
      app.js
      server.js
      data/
        quizzes.js
      routes/
        quizRoutes.js
      services/
        quizService.js
  frontend/
    package.json
    vite.config.js
    index.html
    src/
      App.jsx
      main.jsx
      styles.css
      api/
        quizApi.js
      components/
        Footer.jsx
        Loader.jsx
        Navbar.jsx
        QuestionItem.jsx
        QuizCard.jsx
        QuizTabs.jsx
        ScoreBoard.jsx
      pages/
        HomePage.jsx
        MockQuizPage.jsx
        QuizPage.jsx
```

## Setup

Open two terminals from the project root.

### Backend

```bash
cd backend
npm install
npm run dev
```

Backend runs on `http://localhost:5000`

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`

## API Endpoints

- `GET /api/quizzes`
- `GET /api/quizzes/:id`
- `POST /api/quizzes/:id/submit`

## How To Add Real Questions Later

Edit [backend/src/data/quizzes.js](backend/src/data/quizzes.js) and replace the placeholder question text, options, and `correctAnswer` values.

Each question uses this shape:

```js
{
  id: "week1-q1",
  question: "Your real question goes here",
  options: [
    "Option A",
    "Option B",
    "Option C",
    "Option D"
  ],
  correctAnswer: "Option B"
}
```

If you later move to a database, the route and service layers are already separated so you can swap the in-memory data source with DB queries more easily.
