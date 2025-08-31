import { notFound } from 'next/navigation';
import ClientProjectDetail from '@/app/projects/ClientProjectDetail';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Detail',
};

// Define your project data
const projects = {
  'project-1': {
    title: 'E-Commerce Platform',
    description:
      'A full-featured online store with cart and payment integration. Built with Next.js and Stripe for secure payments.',
    image:
      'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'TailwindCSS', 'PostgreSQL'],
    github: 'https://github.com/username/project-1',
    demo: 'https://project-1.demo',
    features: [
      'User authentication and authorization',
      'Product catalog with search and filtering',
      'Shopping cart with local storage',
      'Secure payment processing with Stripe',
      'Order management and tracking',
    ],
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
    features: [],
  },
  'project-3': {
    title: 'Task Management App',
    description: 'Collaborative task management with real-time updates',
    image:
      'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg',
    tags: ['Vue.js', 'Firebase', 'Sass'],
    github: 'https://github.com/username/project-3',
    demo: 'https://project-3.demo',
    features: [],
  },
};

// ✅ Tell Next.js which params to pre-render
export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

// ✅ Correct type for Next.js 15 dynamic route
interface PageProps {
  params: {
    slug: string;
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const project = projects[params.slug as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return (
    <main className="container mx-auto py-12 px-4">
      <ClientProjectDetail project={project} />
    </main>
  );
}
