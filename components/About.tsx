'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Award, 
  Globe, 
  Zap,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Users,
      title: 'Customer-Centric',
      description: 'We put our clients at the heart of everything we do, ensuring personalized service and solutions.',
      color: 'bg-blue-500'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest standards in service delivery and operational performance.',
      color: 'bg-green-500'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Our extensive network enables us to serve clients across all continents effectively.',
      color: 'bg-orange-500'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We continuously invest in technology and processes to stay ahead of industry trends.',
      color: 'bg-purple-500'
    }
  ];

  const achievements = [
    '25+ years of industry leadership',
    '500+ global partnerships',
    '99.9% on-time delivery rate',
    '150+ countries served',
    '24/7 customer support',
    'ISO 9001:2015 certified'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Leading the Future of
              <span className="text-blue-600"> Global Logistics</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              For over two decades, NDH Logistic Pro has been at the forefront of the logistics industry, 
              providing innovative solutions that connect businesses to global markets. Our commitment to 
              excellence and customer satisfaction has made us a trusted partner for companies worldwide.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{achievement}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white group">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                Download Company Profile
              </Button>
            </motion.div>
          </motion.div>

          {/* Values Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className={`${value.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Leadership Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our experienced leadership team brings decades of industry expertise and 
              strategic vision to drive our company's continued growth and success.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 lg:p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                {
                  name: 'Sarah Johnson',
                  title: 'Chief Executive Officer',
                  experience: '20+ years in logistics',
                  specialization: 'Strategic Leadership & Operations'
                },
                {
                  name: 'Michael Chen',
                  title: 'Chief Operations Officer',
                  experience: '18+ years in supply chain',
                  specialization: 'Global Operations & Technology'
                },
                {
                  name: 'Emily Rodriguez',
                  title: 'Chief Customer Officer',
                  experience: '15+ years in client relations',
                  specialization: 'Customer Success & Growth'
                }
              ].map((leader, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">{leader.name}</h4>
                  <p className="text-blue-600 font-medium mb-2">{leader.title}</p>
                  <p className="text-sm text-gray-600 mb-1">{leader.experience}</p>
                  <p className="text-xs text-gray-500">{leader.specialization}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;