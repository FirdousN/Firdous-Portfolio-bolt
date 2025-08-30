'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GithubIcon, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Project One",
    description: "A full-stack web application built with Next.js and TypeScript",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/username/project-one",
    live: "https://project-one.com",
  },
  {
    title: "Project Two",
    description: "An e-commerce platform with real-time updates",
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/username/project-two",
    live: "https://project-two.com",
  },
  {
    title: "Project Three",
    description: "A mobile application for tracking fitness activities",
    tags: ["React Native", "Expo", "Firebase"],
    github: "https://github.com/username/project-three",
    live: "https://project-three.com",
  },
];

export default function ProjectsPage() {
  return (
    <main className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="cursor-pointer"
          >
            <Card className="rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <CardHeader className="p-6">
                <CardTitle className="text-2xl font-bold">
                  {project.title}
                </CardTitle>
                <CardDescription className="mt-2 text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <GithubIcon className="w-4 h-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <Globe className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
