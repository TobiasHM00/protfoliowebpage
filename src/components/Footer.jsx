import { ArrowUp } from "lucide-react"


export const Footer = () => {
    return (
        <footer
            className="h-20 py-2 px-8 bg-card relative border-t border-border flex flex-wrap justify-between items-center"    
        >
            <p
                className="text-sm text-muted-foreground"
            >
                &copy; {new Date().getFullYear()} TobiasHM.co. All right reserved.
            </p>
            <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 txt-primary transition-colors">
                <ArrowUp size={20}/>
            </a>
        </footer>
    )
}