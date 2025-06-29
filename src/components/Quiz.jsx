import { useState, useEffect, useCallback } from 'react';
import Question from './Question';
import { generateQuizPart } from '../utils/quizUtils';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quizComplete, setQuizComplete] = useState(false);

  const loadNewQuizPart = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      setCurrentQuestionIndex(0);
      setScore(0);
      setQuizComplete(false);
      
      const newQuestions = await generateQuizPart();
      if (!newQuestions || !Array.isArray(newQuestions) || newQuestions.length === 0) {
        throw new Error('No questions were generated');
      }
      
      setQuestions(newQuestions);
    } catch (err) {
      console.error('Error loading questions:', err);
      setError('Failed to load questions. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadNewQuizPart();
  }, [loadNewQuizPart]);

  const handleAnswer = useCallback((isCorrect) => {
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }

    // Use setTimeout to ensure state updates have completed
    setTimeout(() => {
      setCurrentQuestionIndex(prevIndex => {
        const nextIndex = prevIndex + 1;
        if (nextIndex >= questions.length) {
          setQuizComplete(true);
          return prevIndex;
        }
        return nextIndex;
      });
    }, 1000); // Give time to see the answer
  }, [questions.length]);

  const getRating = (score, totalQuestions) => {
    const percentage = (score / totalQuestions) * 15; // Convert to 15-point scale
    if (percentage === 15) return "You have unbelievable information! 🌟";
    if (percentage >= 12) return "GREAT! 🎉";
    if (percentage >= 8) return "Good job! 👍";
    if (percentage >= 4) return "OK 👌";
    return "You must read geography again! 📚";
  };

  if (isLoading) {
    return (
      <div className="quiz-container centered">
        <div className="loading">Loading questions...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="quiz-container centered">
        <div className="error">
          <p>{error}</p>
          <button onClick={loadNewQuizPart}>Try Again</button>
        </div>
      </div>
    );
  }

  if (quizComplete) {
    return (
      <div className="quiz-container centered">
        <div className="quiz-complete">
          <h2>Quiz Complete!</h2>
          <p>Your score: {score} out of {questions.length}</p>
          <div className="rating">
            <h3>{getRating(score, questions.length)}</h3>
          </div>
          <button onClick={loadNewQuizPart}>Start New Quiz Part</button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  if (!currentQuestion) {
    return (
      <div className="quiz-container centered">
        <div className="error">
          <p>Question not found. Please try again.</p>
          <button onClick={loadNewQuizPart}>Restart Quiz</button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container centered">
      <div className="quiz-header">
        <h1>Endless Countries Questions</h1>
        <p>Question {currentQuestionIndex + 1} of {questions.length}</p>
        <p>Score: {score}</p>
      </div>
      <Question
        key={currentQuestionIndex} // Add key to force re-render
        question={currentQuestion.question}
        options={currentQuestion.options}
        correctAnswer={currentQuestion.correctAnswer}
        onAnswer={handleAnswer}
      />
    </div>
  );
};

export default Quiz; 