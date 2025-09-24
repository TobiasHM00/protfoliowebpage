import { ArrowRight, ExternalLink, Github } from "lucide-react";

// TODO: putte bilder av prosjekter i mappen projects under public mappen
// TODO: legge til alle prosjektene mine
const projects = [
    {
        id: 1,
        title: "React + Vite portfolio",
        description: "A portfoliowebpage presenting me as a developer. This page is made using React and Vite",
        image: "/projects/portfolio.png",
        tags: ["React", "TypeScript", "TailwindCSS",],
        demoUrl: "#",
        githubUrl: "https://github.com/TobiasHM00/protfoliowebpage",
    },
    {
        id: 2,
        title: "Sudoku",
        description: "A work in progress. For now it solves an input and print the result to the terminal",
        image: "/projects/sudoku.png",
        tags: ["Java"],
        demoUrl: "#",
        githubUrl: "https://github.com/TobiasHM00/Sudoku",
    },
    {
        id: 3,
        title: "Gemstone interpret",
        description: "A work in progress project between me and two friends from the university. We are making a programming language and an interpret for the language Gemstone",
        image: "#",
        tags: ["C"],
        githubUrl: "#"
    },
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    <span className="text-primary"> Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    {/**TODO: skriv om */}
                    Here are some of my projects. Each project is a step in my journey of learning, 
                    experimenting, and creating with technology. The journey so far has been filled with joy, 
                    some struggles and lots of chai tea.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-semibold mb-1">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a 
                                            href={project.demoUrl} 
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <ExternalLink size={20}/>
                                        </a>
                                        <a 
                                            href={project.githubUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={20}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a 
                        href="https://github.com/TobiasHM00"
                        target="_blank"
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    >
                        Check My Github <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    );
};
