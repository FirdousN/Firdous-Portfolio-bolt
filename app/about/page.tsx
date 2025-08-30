import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <main className="container mx-auto py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Professional Background</CardTitle>
            <CardDescription>Software Developer with a passion for building great user experiences</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I'm a full-stack developer with expertise in modern web technologies. 
              I specialize in building scalable applications using React, Next.js, and Node.js.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              When I'm not coding, you can find me contributing to open-source projects,
              writing technical blog posts, or learning new technologies.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Skills & Expertise</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <h3 className="font-semibold mb-2">Frontend</h3>
                <ul className="list-disc list-inside text-sm">
                  <li>React</li>
                  <li>Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <h3 className="font-semibold mb-2">Backend</h3>
                <ul className="list-disc list-inside text-sm">
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>PostgreSQL</li>
                  <li>MongoDB</li>
                </ul>
              </div>
              <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <h3 className="font-semibold mb-2">Tools</h3>
                <ul className="list-disc list-inside text-sm">
                  <li>Git</li>
                  <li>Docker</li>
                  <li>AWS</li>
                  <li>CI/CD</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}