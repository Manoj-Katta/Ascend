import React from 'react';

const LessonContainer = ({ lesson }) => {
  return (
    <section className="mb-8 banner-container-style text-white text-shadow bg-gradient-to-r from-purple-600 to-pink">
      <div className="relative p-4 z-10">
        <div className="mb-4">
          <p className="font-bold opacity-80 uppercase tracking-wider text-shadow">
            Question
          </p>
          <h4 className="font-bold text-2xl sm:text-3xl md:text-4xl text-shadow">{lesson.question}</h4>
        </div>

        <ul className="sm:text-xl flex flex-col gap-2">
          {lesson.options.map((option, index) => (
            <li key={index} className="exercise-style">
              {option}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LessonContainer;
