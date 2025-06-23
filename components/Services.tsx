'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Truck, 
  Ship, 
  Plane, 
  Warehouse, 
  Package, 
  BarChart3,
  ArrowRight,
  Clock,
  Shield,
  Zap
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: 'Ground Transportation',
      description: 'Comprehensive trucking solutions for domestic and cross-border deliveries with real-time tracking.',
      features: ['Full Truckload (FTL)', 'Less Than Truckload (LTL)', 'Express Delivery', 'Temperature Controlled'],
      color: 'bg-blue-500'
    },
    {
      icon: Ship,
      title: 'Ocean Freight',
      description: 'Cost-effective sea shipping solutions for international cargo with full container load services.',
      features: ['FCL & LCL Options', 'Port-to-Port Service', 'Customs Clearance', 'Documentation Support'],
      color: 'bg-teal-500'
    },
    {
      icon: Plane,
      title: 'Air Cargo',
      description: 'Fast and reliable air freight services for time-sensitive shipments worldwide.',
      features: ['Express Air Service', 'Charter Services', 'Dangerous Goods', 'Perishable Cargo'],
      color: 'bg-orange-500'
    },
    {
      icon: Warehouse,
      title: 'Warehousing & Distribution',
      description: 'Modern warehouse facilities with advanced inventory management and distribution services.',
      features: ['Climate Controlled', 'Inventory Management', 'Pick & Pack', 'Cross Docking'],
      color: 'bg-green-500'
    },
    {
      icon: Package,
      title: 'Supply Chain Management',
      description: 'End-to-end supply chain optimization and management solutions for businesses.',
      features: ['Supply Chain Design', 'Vendor Management', 'Risk Assessment', 'Cost Optimization'],
      color: 'bg-purple-500'
    },
    {
      icon: BarChart3,
      title: 'Logistics Analytics',
      description: 'Data-driven insights and analytics to optimize your logistics operations and reduce costs.',
      features: ['Performance Metrics', 'Cost Analysis', 'Route Optimization', 'Predictive Analytics'],
      color: 'bg-indigo-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Logistics Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From local deliveries to global supply chain management, we provide integrated logistics solutions 
            that drive efficiency and growth for your business.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 group border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className={`${service.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-blue-600 group-hover:text-white transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 bg-blue-900 rounded-2xl p-8 lg:p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Our logistics experts can design a tailored solution that meets your specific business requirements 
            and helps you achieve your operational goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            {[
              { icon: Clock, text: 'Quick Response' },
              { icon: Shield, text: 'Secure Operations' },
              { icon: Zap, text: 'Fast Implementation' }
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <feature.icon className="h-5 w-5 text-orange-400" />
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
          
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
            Contact Our Experts
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;