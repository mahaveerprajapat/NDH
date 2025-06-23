'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Stats = () => {
  const [counters, setCounters] = useState({
    shipments: 0,
    countries: 0,
    satisfaction: 0,
    experience: 0
  });

  const finalValues = {
    shipments: 50000,
    countries: 150,
    satisfaction: 99,
    experience: 25
  };

useEffect(() => {
  const duration = 2000; // 2 seconds
  const steps = 60;
  const stepTime = duration / steps;

  const timers: NodeJS.Timeout[] = [];

  Object.keys(finalValues).forEach((key) => {
    const finalValue = finalValues[key as keyof typeof finalValues];
    const increment = finalValue / steps;
    let currentValue = 0;

    const timer = setInterval(() => {
      currentValue += increment;
      if (currentValue >= finalValue) {
        currentValue = finalValue;
        clearInterval(timer); // Safely clears the interval
      }
      setCounters((prev) => ({
        ...prev,
        [key]: Math.floor(currentValue),
      }));
    }, stepTime);

    timers.push(timer);
  });

  return () => {
    timers.forEach((timer) => clearInterval(timer));
  };
}, []);


  const stats = [
    {
      value: counters.shipments.toLocaleString() + '+',
      label: 'Successful Shipments',
      description: 'Delivered worldwide with precision',
      color: 'text-blue-600'
    },
    {
      value: counters.countries + '+',
      label: 'Countries Served',
      description: 'Global network coverage',
      color: 'text-green-600'
    },
    {
      value: counters.satisfaction + '%',
      label: 'Customer Satisfaction',
      description: 'Consistently high ratings',
      color: 'text-orange-600'
    },
    {
      value: counters.experience + '+',
      label: 'Years of Experience',
      description: 'Industry expertise and trust',
      color: 'text-purple-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Thousands Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our commitment to excellence is reflected in our performance metrics and the trust 
            our clients place in our logistics solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group-hover:bg-white">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  className={`text-5xl lg:text-6xl font-bold ${stat.color} mb-4`}
                >
                  {stat.value}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-600">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Industry Certifications & Awards
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                'ISO 9001:2015',
                'C-TPAT Certified',
                'IATA Certified',
                'Green Logistics Award'
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-sm font-semibold text-gray-800">{cert}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;