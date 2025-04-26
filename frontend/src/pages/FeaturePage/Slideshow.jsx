import React, { useState, useEffect } from 'react';

const Slideshow = () => {
  const quotes = [
    {
      text: "Education is the most powerful weapon which you can use to change the world.",
      author: "Nelson Mandela"
    },
    {
      text: "The roots of education are bitter, but the fruit is sweet.",
      author: "Aristotle"
    },
    {
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    },
    {
      text: "Education is not the learning of facts, but the training of the mind to think.",
      author: "Albert Einstein"
    },
    {
      text: "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <div className="py-12 h-[25vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <blockquote className="text-2xl font-medium text-gray-900 mb-4">
            "{quotes[currentIndex].text}"
          </blockquote>
          <p className="text-gray-500 font-medium">- {quotes[currentIndex].author}</p>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;