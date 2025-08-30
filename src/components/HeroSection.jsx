import { ArrowDown } from "lucide-react";


export const HeroSection = () => {
    return (
        <section 
            id="hero" 
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">Welcome, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Tobias</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Hagness Mortensen</span>
                    </h1>
                    <h2 className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        I create engaging projects that grow my expertise in backend development, with small touches of frontend to bring 
                        them to life. This is not just a portfolio. It is a collection of experiments, successes, and the occasional 
                        “how did I pull that off” moment. Step inside, explore, and you might walk away with an idea or two of your own.
                    </h2>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    );
}