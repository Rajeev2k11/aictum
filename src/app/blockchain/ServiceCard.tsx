import { motion } from "framer-motion";
import React from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  delay?: number;
  features?: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  className = "",
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
      whileHover={{
        y: -10,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      }}
      className={`bg-white rounded-xl p-6 shadow-md h-full ${className}`}
    >
      <div className="flex flex-col h-full">
        <div className="text-4xl mb-4 text-blue-600">{icon}</div>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 flex-grow">{description}</p>
        <button className="mt-4 text-blue-600 font-medium hover:text-blue-800 transition self-start">
          Learn more →
        </button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;