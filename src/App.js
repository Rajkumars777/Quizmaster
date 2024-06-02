import React, { useState } from 'react';
import MainMenu from './components/MainMenu';
import QuizCustomization from './components/QuizCustomization';
import Quiz from './components/Quiz';
import './index.css'; // Ensure Tailwind CSS is imported

function App() {
  const [step, setStep] = useState('menu');
  const [quizConfig, setQuizConfig] = useState({ subject: '', difficulty: '', numberOfQuestions: 5 });

  const handleStartQuiz = (config) => {
    setQuizConfig(config);
    setStep('quiz');
  };

  return (
    <div className="App min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800">
      {step === 'menu' && <MainMenu onNext={() => setStep('customize')} />}
      {step === 'customize' && <QuizCustomization onStartQuiz={handleStartQuiz} />}
      {step === 'quiz' && <Quiz config={quizConfig} />}
    </div>
  );
}

export default App;
