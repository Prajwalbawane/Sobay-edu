import React, { useState, useEffect } from 'react';
import { FaRegClock } from 'react-icons/fa';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';

const questions = [
  {
    question: "Which film received the Best Film on Social Issues award at the 67th National Film Awards?",
    options: ["ANANDI GOPAL (Marathi)", "Gulmohar", "Lapata Ladies", "Sky is Pink"],
    answer: "ANANDI GOPAL (Marathi)",
  },
  {
    question: "बळी तो ______ पिळी.",
    options: ["कान", "नाक", "घसा", "कपडे"],
    answer: "घसा",
  },
  {
    question: "“पेरसापेन” हे गडचिरोलीतील आदिवासींचे ______ आहे.",
    options: ["दैवत", "खाद्यपदार्थ", "लोकनाट्य", "नृत्य"],
    answer: "दैवत",
  },
  {
    question: "गडचिरोली जिल्ह्यातील उत्तरेकडून – दक्षिणेकडे जातांना लागणाऱ्या नद्यांचा योग्य क्रम ओळखा?",
    options: ["खोब्रागडी - दिना - कठनी - पोहार", "खोब्रागडी - कठनी - पोहार - दिना", "कठनी - खोब्रागडी - पोहार - दिना", "कठनी - खोब्रागडी - दिना - पोहार"],
    answer: "कठनी - खोब्रागडी - दिना - पोहार",
  },
  {
    question: "लेखामेंढा हे Forest Rights Act अन्वये, सामुदायिक वन हक्क मिळवणारे देशातील पहिले गाव ______ तालुक्यात आहे.",
    options: ["भामरागड", "एटापल्ली", "धानोरा", "कोरची"],
    answer: "एटापल्ली",
  },
  {
    question: "खालीलपैकी ______ येथे उपविभागीय पोलीस अधिकारी कार्यालय नाही.",
    options: ["धानोरा", "कोरची", "एटापल्ली", "जिमलगट्टा"],
    answer: "जिमलगट्टा",
  },
  {
    question: "________ हे पोलीस मदत केंद्र इंद्रावती नदीवरील पुलाच्या संरक्षणासाठी करण्यात आले.",
    options: ["पातागुडम", "देचलीपेठा", "असरअल्ली", "बामणी"],
    answer: "पातागुडम",
  },
  {
    question: "गडचिरोली जिल्ह्यामध्ये _________ फोर्स तैनात नाही.",
    options: ["SRPF", "DRG", "CRPF", "SAG"],
    answer: "SAG",
  },
  {
    question: "“पंडुम” हा कशाचा प्रकार आहे?",
    options: ["नृत्य", "गीत", "वाद्य", "सण"],
    answer: "सण",
  },
  {
    question: "चित्रकुट धबधबा कोणत्या नदीवर आहे?",
    options: ["इंद्रावती", "गोदावरी", "प्राणहीता", "महानदी"],
    answer: "इंद्रावती",
  },
];

const MCQPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [skipped, setSkipped] = useState([]);
  const [timeLeft, setTimeLeft] = useState(366);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const { width, height } = useWindowSize();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = secs % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleAnswer = (option) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = option;
    setAnswers(updatedAnswers);
    setSkipped(skipped.filter((index) => index !== currentQuestion));
  };

  const handleSkip = () => {
    if (!skipped.includes(currentQuestion)) {
      setSkipped([...skipped, currentQuestion]);
    }
    setCurrentQuestion((prev) => Math.min(prev + 1, questions.length - 1));
  };

  const handleSubmit = () => {
    let correct = 0;
    answers.forEach((ans, index) => {
      if (ans === questions[index].answer) correct++;
    });
    setScore(correct);
    setSubmitted(true);
  };

  const goToQuestion = (index) => setCurrentQuestion(index);

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#f3f9ff] px-4">
        <Confetti width={width} height={height} />
        <h1 className="text-4xl font-bold text-green-600 mb-4">🎉 Quiz Submitted!</h1>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <p className="text-xl font-semibold mb-2">You scored</p>
          <p className="text-5xl font-bold text-blue-600">{score} / {questions.length}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f3f9ff] flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-6">Police Bharti Quiz</h1>

      <div className="w-full max-w-6xl bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-4">
        {/* Sidebar */}
        <div className="md:w-1/3 space-y-4">
          <p className="font-semibold text-lg mb-2">Total Questions: {questions.length}</p>
          <div className="grid grid-cols-5 gap-2">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => goToQuestion(index)}
                className={`w-10 h-10 rounded text-white font-semibold text-sm ${
                  answers[index] !== null ? 'bg-blue-500' : skipped.includes(index) ? 'bg-yellow-400' : 'bg-gray-300'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <div className="text-sm">
            <div className="flex items-center gap-2 mt-2">
              <span className="w-4 h-4 bg-blue-500 inline-block"></span> ANSWERED
              <span className="w-4 h-4 bg-yellow-400 inline-block ml-4"></span> SKIPPED
            </div>
          </div>
          <div className="bg-yellow-100 p-4 rounded text-sm mt-4">
            <p className="font-bold">DISCLAIMER</p>
            <p>Please do not Close or Refresh this page, otherwise you cannot attempt the quiz again with this ID.</p>
          </div>
        </div>

        {/* Question Panel */}
        <div className="md:w-2/3 space-y-6 relative">
          <div className="absolute top-0 right-0 flex items-center text-red-600 font-semibold">
            <FaRegClock className="mr-1" /> {formatTime(timeLeft)}
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">{currentQuestion + 1}. Question</h2>
            <p className="mb-4">{questions[currentQuestion].question}</p>
            <div className="space-y-2">
              {questions[currentQuestion].options.map((option, i) => (
                <label key={i} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name={`q-${currentQuestion}`}
                    value={option}
                    checked={answers[currentQuestion] === option}
                    onChange={() => handleAnswer(option)}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <button
              className="bg-gray-600 text-white px-4 py-2 rounded"
              onClick={() => setCurrentQuestion((prev) => Math.max(prev - 1, 0))}
            >
              Back
            </button>
            <div className="flex gap-2">
              {currentQuestion === questions.length - 1 ? (
                <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={handleSubmit}>
                  Submit
                </button>
              ) : (
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                  onClick={() => setCurrentQuestion((prev) => Math.min(prev + 1, questions.length - 1))}
                >
                  Next
                </button>
              )}
              <button className="bg-cyan-400 text-white px-4 py-2 rounded" onClick={handleSkip}>
                Skip
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MCQPage;
