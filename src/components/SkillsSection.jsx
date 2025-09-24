import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
    // TODO: legge til en tekst som forklarer mer hver skill?
    //backend
    {name: "Java", level: 80, category: "backend", usedIn: "University, Personal projects"},
    {name: "Python", level: 80, category: "backend", usedIn: "University, Advent of Code"},
    {name: "PostgreSQL", level: 50, category: "backend", usedIn: "University"},
    {name: "C", level: 45, category: "backend", usedIn: "University, Group project"},
    {name: "Kotlin", level: 60, category: "backend", usedIn: "University"},
    {name: "Node.js", level: 45, category: "backend", usedIn: "Personal projects"},
    {name: "Scheme", level: 25, category: "backend", usedIn: "University"},

    //frontend
    {name: "JavaScript", level: 35, category: "frontend", usedIn: "Personal projects"},
    {name: "HTML/CSS", level: 30, category: "frontend", usedIn: "Personal projects"},
    {name: "TailWindCSS", level: 35, category: "frontend", usedIn: "Personal projects"},

    //development
    {name: "Android development", level: 50, category: "development", usedIn: "University"},

    //Tools
    {name: "Git/Github", level: 70, category: "tools", usedIn: "University, Personal projects"},
    {name: "Postman API", level: 85, category: "tools", usedIn: "University"},
    {name: "VS Code", level: 80, category: "tools", usedIn: "University, Personal projects"},
    {name: "Teamplayer", level: 95, category: "tools", usedIn: "University, Group projects"},
]

const categories = ["all", "backend", "frontend", "tools", "development"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My<span className="text-primary"> Skills</span>
                </h2>
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button 
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div 
                                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                    style={{width: skill.level + "%"}}
                                >
                                </div>
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                            <div>
                                <span className="text-sm text-muted-foreground">Where did I use this skill: <br /> {skill.usedIn}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}