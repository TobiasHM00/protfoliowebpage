import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { X, Menu } from 'lucide-react';
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";

const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Projects", href: "#projects"},
    {name: "Skills", href: "#skills"},
    {name: "Contact", href: "#contact"},
]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    return (
        <nav 
            className={cn(
                "fixed w-full z-40 transition-all duration-300",
                isScrolled
                    ? "py-3 bg-background/80 backdrop-filter shadow-xs"
                    : "py-5 bg-transparent"
            )}
        >
            <div className="container flex items-center justify-between">
                <a 
                    className="text-xl font-bold text-primary flex items-center"
                    href="#hero"
                >
                    <span className="relative z-10">
                        <span className="text-glow text-foreground"> Tobias</span> Portfolio
                    </span>
                </a>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center space-x-6">
                    {navItems.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                            {item.name}
                        </a>
                    ))}
                    <ThemeToggle />
                </div>

                {/* Mobile controls: theme toggle + menu icon */}
                <div className="md:hidden flex items-center space-x-3 z-50">
                    <button
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        className="p-2 text-foreground"
                        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                    <ThemeToggle />
                </div>

                <MobileMenu
                    isOpen={isMenuOpen}
                    navItems={navItems}
                    onClose={() => setIsMenuOpen(false)}
                />
            </div>
        </nav>
    );
}