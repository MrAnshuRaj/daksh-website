import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Data = [
  { id: "1", title: "BAJA SAE INDIA", year: "2010:", description1: "Best Engineering Design Award.", description2: "1st Position In least Emission Category." },
  { id: "2", title: "BAJA SAE SOUTH AFRICA", year: "2010:", description1: "Safest Vehicle Award.", description2: "" },
  { id: "3", title: "BAJA SAE INDIA", year: "2011:", description1: "Go Green Award.", description2: "3rd Position In Endurance." },
  { id: "4", title: "BAJA STUDENT INDIA", year: "2016:", description1: "12th Overall.", description2: "5th Position In Design Event." },
  { id: "5", title: "BAJA STUDENT INDIA", year: "2015:", description1: "6th Overall.", description2: "2nd Position In Sales Report." },
  { id: "6", title: "BAJA SAE INDIA", year: "2016:", description1: "25th Overall.", description2: "3rd Position In Endurance Race." },
  { id: "7", title: "BAJA SAE INDIA", year: "2018:", description1: "1st In Baja Virtuals.", description2: "Runner Up In GO GREEN Event." },
  { id: "8", title: "BAJA SAE INDIA", year: "2019:", description1: "1st Position in GO GREEN.", description2: "12th In Baja Virtuals." },
  { id: "9", title: "BAJA SAE INDIA", year: "2021:", description1: "Overall 4th Position Among All NITS.", description2: "" },
  { id: "10", title: "BAJA SAE INDIA", year: "2023:", description1: "1st Position Among All NITS.", description2: "29th Overall." },
];
const variants = {
  initial: { y: 40, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.6, staggerChildren: 0.1 } },
};

const Achivement = () => {
  return (
    <section
      className="w-full min-h-screen bg-gradient-to-b from-green-900 to-black px-0 py-8"
      style={{
        backgroundImage: "url('/gogreen2.webp')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="bg-black/85 backdrop-blur-lg w-full mx-auto p-6 md:p-8 shadow-lg shadow-lime-900/80 rounded-t-none rounded-b-none">
        <motion.h2
          className="text-4xl md:text-5xl font-semibold text-white text-center mb-8 tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our <span className="text-lime-500">Achievements</span>
        </motion.h2>

        <motion.div
          className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full"
          variants={variants}
          initial="initial"
          animate="animate"
        >
          {Data.map(({ id, title, year, description1, description2 }) => (
            <motion.article
              key={id}
              className="bg-black/60 border border-lime-700 rounded-2xl w-full p-5 shadow-md hover:shadow-lime-600 transition-shadow"
              variants={variants}
            >
              <h3 className="font-bold text-base md:text-lg text-lime-400 mb-2">
                {title} <span className="text-gray-300">{year}</span>
              </h3>
              <p className="text-gray-200 mb-1">{description1}</p>
              {description2 && <p className="text-gray-300">{description2}</p>}
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-8 md:mt-12 flex justify-center">
          <Link
            to="/achivements"
            className="px-7 py-2 border-2 border-lime-600 text-lime-400 font-semibold rounded-full hover:bg-lime-600 hover:text-white transition"
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Achivement;
