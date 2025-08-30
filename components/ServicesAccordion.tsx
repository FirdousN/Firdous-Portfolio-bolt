'use client';

import { motion } from 'framer-motion';
import { Code, Server, Cloud, Layout } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Full-Stack Web Development',
    description:
      'Building scalable, secure web applications using Next.js, React, Node.js, Express and MongoDB. My work covers robust API design, authentication, and real-time data handling.',
    icon: Code,
  },
  {
    id: 2,
    title: 'API Development & Integration',
    description:
      'Designing and implementing RESTful APIs and integrating third-party services for secure data exchange and real-time communication via tools like Socket.io and JWT.',
    icon: Server,
  },
  {
    id: 3,
    title: 'Cloud & DevOps',
    description:
      'Deploying and managing applications on AWS and other cloud platforms with CI/CD pipelines, performance optimization, and scalable infrastructure.',
    icon: Cloud,
  },
  {
    id: 4,
    title: 'UI/UX & Responsive Design',
    description:
      'Crafting visually engaging, interactive user interfaces with Tailwind CSS and modern design trends to deliver a seamless experience across all devices.',
    icon: Layout,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 w-full">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold uppercase">
            Services
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-4">
            What I can do for you using cutting-edge web technologies.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={service.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg cursor-pointer transition transform duration-200"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Icon className="text-blue-500" size={32} />
                  <h3 className="text-2xl font-semibold">
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
