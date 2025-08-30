'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  features: string[];
};

export default function ClientProjectDetail({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto mt-16"
    >
      {/* Project Image */}
      <div className="relative h-[400px] w-full rounded-lg overflow-hidden mb-8">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Project Title & Description */}
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-lg text-muted-foreground mb-6">{project.description}</p>

      {/* Project Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>

      {/* External Links */}
      <div className="flex gap-4 mb-12">
        <Button asChild variant="default">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            <Github className="mr-2 h-4 w-4" />
            View on GitHub
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            <Globe className="mr-2 h-4 w-4" />
            Live Demo
          </a>
        </Button>
      </div>

      {/* Key Features */}
      <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
      <motion.ul
        className="list-disc list-inside space-y-2 text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {project.features && project.features.length > 0 ? (
          project.features.map((feature, index) => <li key={index}>{feature}</li>)
        ) : (
          <li>No additional features provided.</li>
        )}
      </motion.ul>
    </motion.div>
  );
}
