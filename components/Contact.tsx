'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle,
  Send,
  Headphones
} from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our logistics experts',
      contact: '+1 (555) 123-4567',
      subtext: 'Available 24/7',
      color: 'bg-blue-500'
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us your logistics requirements',
      contact: 'contact@NDH Logistic.com',
      subtext: 'Response within 2 hours',
      color: 'bg-green-500'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Our headquarters and main facility',
      contact: '123 Logistics Avenue, Business District',
      subtext: 'New York, NY 10001',
      color: 'bg-orange-500'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Instant support for urgent queries',
      contact: 'Available on our website',
      subtext: 'Average response: 30 seconds',
      color: 'bg-purple-500'
    }
  ];

  const offices = [
    {
      city: 'New York',
      address: '123 Logistics Ave, NY 10001',
      phone: '+1 (555) 123-4567',
      type: 'Headquarters'
    },
    {
      city: 'Los Angeles',
      address: '456 Port Blvd, LA 90001',
      phone: '+1 (555) 234-5678',
      type: 'West Coast Hub'
    },
    {
      city: 'Miami',
      address: '789 Trade Center, FL 33101',
      phone: '+1 (555) 345-6789',
      type: 'Latin America Gateway'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to optimize your logistics operations? Our team of experts is here to help you 
            find the perfect solution for your business needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Methods</h3>
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-all duration-300 group border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`${method.color} w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <method.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                            {method.title}
                          </h4>
                          <p className="text-sm text-gray-600 mb-2">{method.description}</p>
                          <p className="font-medium text-gray-900">{method.contact}</p>
                          <p className="text-xs text-gray-500">{method.subtext}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Quick Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 bg-blue-900 rounded-xl p-6 text-white"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Headphones className="h-6 w-6 text-orange-400" />
                <h4 className="text-lg font-semibold">24/7 Emergency Support</h4>
              </div>
              <p className="text-blue-100 mb-4 text-sm">
                Need immediate assistance with a shipment? Our emergency support team is available around the clock.
              </p>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                Emergency Hotline: +1 (555) 911-SHIP
              </Button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Request a Quote
                </CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 2 hours with a customized solution.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input placeholder="Enter your full name" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <Input placeholder="Enter your company name" className="h-12" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input type="email" placeholder="Enter your email" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <Input type="tel" placeholder="Enter your phone number" className="h-12" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Type
                    </label>
                    <select className="w-full h-12 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="">Select a service</option>
                      <option value="ground">Ground Transportation</option>
                      <option value="ocean">Ocean Freight</option>
                      <option value="air">Air Cargo</option>
                      <option value="warehouse">Warehousing</option>
                      <option value="supply-chain">Supply Chain Management</option>
                      <option value="analytics">Logistics Analytics</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Estimated Budget
                    </label>
                    <select className="w-full h-12 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under $10,000</option>
                      <option value="10k-50k">$10,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="over-100k">Over $100,000</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <Textarea 
                    placeholder="Please describe your logistics requirements, timeline, and any specific needs..."
                    className="min-h-[120px] resize-none"
                  />
                </div>

                <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white group">
                  Send Message
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our Privacy Policy and Terms of Service.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Office Locations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Office Locations
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visit us at any of our strategically located offices across the United States.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="bg-blue-600 w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{office.city}</h4>
                    <p className="text-sm text-blue-600 font-medium mb-3">{office.type}</p>
                    <p className="text-sm text-gray-600 mb-2">{office.address}</p>
                    <p className="text-sm font-medium text-gray-900">{office.phone}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;