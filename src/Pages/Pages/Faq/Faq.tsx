import React, { useState } from "react";
import "./Faq.css";

interface Question {
  question: string;
  answer: string;
}

interface Topic {
  name: string;
  questions: Question[];
}

const topics: Topic[] = [
  {
    name: "Getting started",
    questions: [
      {
        question: "What is digital payment?",
        answer:
          "TanahAir offers a service for creating a website design, illustration, icon set, website development, animation, and digital marketing.",
      },
      {
        question: "What’s advantages that I will get by using this app?",
        answer:
          "TanahAir offers a service for creating a website design, illustration, icon set, website development, animation, and digital marketing.",
      },
      {
        question: "What’s advantages that I will get by using this app?",
        answer:
          "TanahAir offers a service for creating a website design, illustration, icon set, website development, animation, and digital marketing.",
      },
      {
        question: "What’s advantages that I will get by using this app?",
        answer:
          "TanahAir offers a service for creating a website design, illustration, icon set, website development, animation, and digital marketing.",
      },
      {
        question: "What’s advantages that I will get by using this app?",
        answer:
          "TanahAir offers a service for creating a website design, illustration, icon set, website development, animation, and digital marketing.",
      },
    ],
  },
  {
    name: "Security",
    questions: [
      {
        question: "Is my information secure?",
        answer:
          "TanahAir offers a service for creating a website design, illustration, icon set, website development, animation, and digital marketing.",
      },
    ],
  },
  {
    name: "Payment",
    questions: [
      {
        question: "How can I make a payment?",
        answer:
          "You can pay using credit/debit cards, e-wallets, or bank transfers.",
      },
    ],
  },
  {
    name: "Join Merchant",
    questions: [
      {
        question: "How can I make a payment?",
        answer:
          "You can pay using credit/debit cards, e-wallets, or bank transfers.",
      },
    ],
  },
  {
    name: "Other",
    questions: [
      {
        question: "How can I make a payment?",
        answer:
          "You can pay using credit/debit cards, e-wallets, or bank transfers.",
      },
    ],
  },
];
const Faq: React.FC = () => {
  const [activeTopicIndex, setActiveTopicIndex] = useState(0); 
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(
    null
  );

  const toggleQuestion = (index: number) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  return (
    <section className="section">
      <h3>Topic</h3>
      <div className="topic">
        <div className="links">
          {topics.map((topic, index) => (
            <a
              href="#"
              className={`link ${index === activeTopicIndex ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveTopicIndex(index);
                setOpenQuestionIndex(null); 
              }}
              key={index}
            >
              {topic.name}
            </a>
          ))}
        </div>
        <div className="questions">
          {topics[activeTopicIndex].questions.map((question, index) => (
            <div key={index} className="question">
              <button
                className="question-toggle"
                onClick={() => toggleQuestion(index)}
              >
                {question.question}
              </button>
              {openQuestionIndex === index && (
                <p className="answer">{question.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
