const skills = [
    //backend
    {name: "Java", level: 80, category: "backend"},
    {name: "Python", level: 80, category: "backend"},
    {name: "PostgreSQL", level: 60, category: "backend"},
    {name: "C", level: 45, category: "backend"},
    {name: "Kotlin", level: 55, category: "backend"},
    {name: "Node.js", level: 45, category: "backend"},

    //frontend
    {name: "JavaScript", level: 20, category: "frontend"},
    {name: "HTML/CSS", level: 35, category: "frontend"},

    //development
    {name: "Android development", level: 50, category: "develompent"},
    
    //Tools
    {name: "Git/Github", level: 70, category: "tools"},
    {name: "Postman API", level: 85, category: "tools"},
    {name: "VS Code", level: 80, category: "tools"},
    {name: "Teamplayer", level: 100, category: "tools"},
]

export const SkillsSection = () => {
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My<span className="text-primary"> Skills</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div>
                                <h3>{skill.name}</h3>
                            </div>
                        </div>
                    ))};
                </div>
            </div>
        </section>
    );
}