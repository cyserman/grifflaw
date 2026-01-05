'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  { text: "Steve saved my life", author: "Client Review" },
  { text: "Aggressive and prepared", author: "Client Review" },
  { text: "Best lawyer in Phoenixville", author: "Client Review" },
  { text: "He fights for his clients", author: "Client Review" },
  { text: "20+ years of experience shows", author: "Client Review" },
  { text: "Got the results I needed", author: "Client Review" },
];

export default function ReviewTicker() {
  // Duplicate reviews for seamless loop
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <div className="bg-[#1a1a1a] py-6 overflow-hidden border-y border-gray-800">
      <motion.div
        className="flex gap-8"
        animate={{
          x: [0, -50 * reviews.length + '%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {duplicatedReviews.map((review, index) => (
          <div
            key={index}
            className="flex items-center gap-4 whitespace-nowrap"
          >
            <div className="flex items-center gap-2">
              <Star className="text-[#FFD700] fill-[#FFD700]" size={20} />
              <Star className="text-[#FFD700] fill-[#FFD700]" size={20} />
              <Star className="text-[#FFD700] fill-[#FFD700]" size={20} />
              <Star className="text-[#FFD700] fill-[#FFD700]" size={20} />
              <Star className="text-[#FFD700] fill-[#FFD700]" size={20} />
            </div>
            <span className="text-[#F3F4F6] font-medium text-lg">
              "{review.text}"
            </span>
            <span className="text-gray-400">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
