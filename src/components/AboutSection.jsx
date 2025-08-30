import { Briefcase, Code, User } from "lucide-react";


export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate developer wanting to learn and experience</h3>
                        <p className="text-muted-foreground">
                            I'm a curious person and like to gather and explore information. Born just after turning into this millenium, 
                            technology has been there from day one, so becoming a developer and working with tech was the natural path for me.
                        </p>
                        {/* <p className="text-muted-foreground">
                            I'm naturally curious and enjoy gathering and exploring information. Beeing born at the turn of the millennium, 
                            I've grown up with technology from day one, making a career in development and tech a natural path for me.
                        </p> */}
                        <p className="text-muted-foreground">
                            I'm calm, versatile by nature, and constantly working on improving my technical skill set and acquiring knowledge, 
                            either for professional use or personal gratification.
                        </p>
                        <p className="text-muted-foreground">
                            If I were to describe myself, I'd say that I'm a positive and social person who enjoys spending time with friends (either online or in person).
                            I enjoy climbing with my brother, love a good game night with my girlfriend, and also appreciate the occasional lazy evening.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Contact me
                            </a>
                            <a 
                                href="/cv-english.pdf" 
                                download="Tobias-CV.pdf" 
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                Download my CV
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">My programming characteristics</h4>
                                    <p className="text-muted-forground">I'm precise, efficient and has an eye for details.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Me as a teamplayer</h4>
                                    <p className="text-muted-forground">Love different opinions, good at communicating and adapts to what the team needs</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Me as an employee</h4>
                                    <p className="text-muted-forground">I'm reliable, trustworthy, loyal and hardworking.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}