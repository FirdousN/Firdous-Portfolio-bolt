"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ProjectCarousel from "@/components/ProjectCarousel";
import ServicesAccordion from "@/components/ServicesAccordion";

export default function Home() {
    return (
        <>
            <section className="relative min-h-screen w-full flex items-center justify-center px-8 gap-x-6">
                {/* Hero Text */}
                <div className="relative z-10 max-w-xl text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
                    >
                        <span className="heading-gradient">Hi, I'm Firdous —</span>
                        <br />
                        <span className="heading-gradient">MERN Stack Developer</span>
                    </motion.h1>
                    <p className="text-lg md:text-xl text-muted-foreground mb-8">
                        Passionate about building scalable web applications with Next.js, React, Node.js, Express, and
                        MongoDB.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button asChild size="lg">
                            <Link href="/projects">
                                View Projects <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" asChild>
                            <a href="/FirdousN_Resume_MERN.pdf" download>
                                <Download className="mr-2 h-4 w-4" /> Download CV
                            </a>
                        </Button>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="w-90 md:w-98 h-auto flex justify-center items-center">
                    <Image
                        src="/image/pro-pic.png"
                        alt="Firdous"
                        width={500}
                        height={500}
                        className="object-cover rounded-xl"
                    />
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 w-full">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">Featured Projects</h2>
                        <p className="text-muted-foreground">Some of my recent work</p>
                    </motion.div>
                    <ProjectCarousel />
                </div>
            </section>
            {/* Services Section */}
            <section id="services" className="py-8 w-full">
                <div className="container">
                    <div className="max-w-3xl mx-auto">
                        <ServicesAccordion />
                    </div>
                </div>
            </section>
            {/* Contact Section */}
            <section className="py-20 w-full">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">Get in Touch</h2>
                        <p className="text-muted-foreground">Let's work together</p>
                    </motion.div>
                    <div className="max-w-xl mx-auto">
                        <Link href="/contact">
                            <Button className="w-full" size="lg">
                                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
