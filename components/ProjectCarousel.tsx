'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Github, Globe } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Define your projects as an object…
const projects = {
  'project-1': {
    title: 'E-Commerce Platform',
    description:
      'A full-featured online store with cart and payment integration',
    image:
      'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg',
    tags: ['Next.js', 'TypeScript', 'Stripe'],
    github: 'https://github.com/username/project-1',
    demo: 'https://project-1.demo',
  },
  'project-2': {
    title: 'Social Media Dashboard',
    description:
      'Analytics and management platform for social media accounts',
    image:
      'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
    tags: ['React', 'Redux', 'TailwindCSS'],
    github: 'https://github.com/username/project-2',
    demo: 'https://project-2.demo',
  },
  'project-3': {
    title: 'Task Management App',
    description: 'Collaborative task management with real-time updates',
    image:
      'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg',
    tags: ['Vue.js', 'Firebase', 'Sass'],
    github: 'https://github.com/username/project-3',
    demo: 'https://project-3.demo',
  },
};

// Convert the projects object into an array, preserving each key as id.
const projectsArr = Object.entries(projects).map(([key, project]) => ({
  id: key,
  ...project,
}));

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const previousIndex = (currentIndex - 1 + projectsArr.length) % projectsArr.length;
  const nextIndex = (currentIndex + 1) % projectsArr.length;

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projectsArr.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projectsArr.length) % projectsArr.length);
  };

  return (
<div className="relative w-full mt-16">
      <div className="relative flex items-center justify-center">
        {/* Previous Preview Card */}
        <div className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-10">
          <div className="w-72">
            <Card className="rounded-3xl shadow-xl filter blur-sm opacity-60">
              <div className="relative h-[200px] w-full overflow-hidden rounded-t-3xl">
                <Image
                  src={projectsArr[previousIndex].image}
                  alt={projectsArr[previousIndex].title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="p-3">
                <CardTitle className="text-sm">
                  {projectsArr[previousIndex].title}
                </CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Next Preview Card */}
        <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-10">
          <div className="w-72">
            <Card className="rounded-3xl shadow-xl filter blur-sm opacity-60">
              <div className="relative h-[200px] w-full overflow-hidden rounded-t-3xl">
                <Image
                  src={projectsArr[nextIndex].image}
                  alt={projectsArr[nextIndex].title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="p-3">
                <CardTitle className="text-sm">
                  {projectsArr[nextIndex].title}
                </CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Navigation Arrows and Main Card */}
        <div className="flex items-center justify-between w-full relative z-20">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevProject}
            className="z-30 hover:scale-110 transition-transform"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <div className="w-full mx-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="group max-w-4xl mx-auto"
              >
                <Card className="rounded-3xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                  {/* Image container with rounded top */}
                  <div className="relative h-[300px] w-full overflow-hidden rounded-t-3xl">
                    <Image
                      src={projectsArr[currentIndex].image}
                      alt={projectsArr[currentIndex].title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardHeader className="p-6">
                    <CardTitle className="text-2xl font-bold">
                      {projectsArr[currentIndex].title}
                    </CardTitle>
                    <CardDescription className="mt-2 text-muted-foreground">
                      {projectsArr[currentIndex].description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-6">
                    <div className="flex flex-wrap gap-2">
                      {projectsArr[currentIndex].tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 flex justify-between items-center">
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={projectsArr[currentIndex].github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          <Github className="h-4 w-4" /> GitHub
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={projectsArr[currentIndex].demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          <Globe className="h-4 w-4" /> Demo
                        </a>
                      </Button>
                    </div>
                    <Button asChild variant="default" size="sm">
                      <Link href={`/projects/${projectsArr[currentIndex].id}`}>
                        View Details
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={nextProject}
            className="z-30 hover:scale-110 transition-transform"
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="flex justify-center mt-6">
        {projectsArr.map((project, index) => (
          <div
            key={project.id}
            className={`mx-1 w-3 h-3 rounded-full cursor-pointer transition-transform duration-200 ${
              index === currentIndex ? 'bg-blue-500 scale-125' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
