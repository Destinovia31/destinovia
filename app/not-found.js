"use client";

// Dependencies
import Link from "next/link";
import { motion } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center h-screen p-4 bg-gray-50 text-[#023475]">
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={textVariant}
        className="text-4xl sm:text-6xl font-bold text-[#655dff] text-center"
      >
        404
      </motion.h1>
      <motion.p
        initial="hidden"
        animate="visible"
        variants={textVariant}
        className="text-lg sm:text-xl text-center mt-4"
      >
        Oops ! The page you're looking for doesn't exist.
      </motion.p>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={textVariant}
        className="mt-6"
      >
        <Link
          href="/"
          className="bg-[#655dff] text-white font-medium py-2 px-6 rounded-full transition-all ease-in-out duration-300 hover:opacity-90"
        >
          Return
        </Link>
      </motion.div>
    </main>
  );
}
