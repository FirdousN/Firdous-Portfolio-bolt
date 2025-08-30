"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/#projects", label: "Projects" },
        { href: "/#services", label: "Services" },
        { href: "/services", label: "ServicesPg" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ];

    if (!mounted) return null;

    return (
        <nav
            className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3 w-[90%] max-w-5xl transition-all duration-300 rounded-full glass-effect shadow-lg hover:shadow-2xl ${
                isScrolled ? "backdrop-blur-md bg-white/10 border border-white/10" : "bg-white/5"
            }`}
        >
            <div className="section-padding">
                <div className="flex items-center justify-between">
                    <Link href="/" className="text-2xl font-bold heading-gradient px-4 py-2 rounded-lg">
                        Firdous
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                        </Button>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="md:hidden flex items-center gap-4">
                        <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full glass-effect">
                        <div className="flex flex-col p-4 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
