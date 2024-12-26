import React from 'react';
import { motion } from 'framer-motion';

interface StatsCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  delay?: number;
}

function StatsCard({ icon, label, value, delay = 0 }: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-white dark:bg-nord-polar-2 rounded-xl p-4 shadow-lg flex items-center gap-4 border border-gray-100 dark:border-nord-polar-3"
    >
      <div className="p-3 bg-primary-100 dark:bg-nord-polar-3 rounded-lg">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-600 dark:text-gray-400">{label}</p>
        <p className="text-xl font-semibold text-gray-900 dark:text-white">{value}</p>
      </div>
    </motion.div>
  );
}

export default StatsCard;