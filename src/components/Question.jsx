import { useState, useEffect } from 'react';

const Question = ({ question, options, correctAnswer, onAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  // Reset state when question changes
  useEffect(() => {
    setSelectedAnswer(null);
    setIsAnswered(false);
  }, [question]); // Reset when question changes

  const handleAnswer = (answer) => {
    if (isAnswered) return;
    
    setSelectedAnswer(answer);
    setIsAnswered(true);
    onAnswer(answer === correctAnswer);
  };

  const getButtonClass = (option) => {
    if (!isAnswered) return 'option-button';
    if (option === correctAnswer) return 'option-button correct';
    if (option === selectedAnswer && option !== correctAnswer) return 'option-button incorrect';
    return 'option-button';
  };

  return (
    <div className="question-container">
      <h2 className="question-text">{question}</h2>
      <div className="options-container">
        {options.map((option, index) => (
          <button
            key={`${question}-${index}`}
            className={getButtonClass(option)}
            onClick={() => handleAnswer(option)}
            disabled={isAnswered}
          >
            {option || 'No answer available'}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question; 