import { DiscIcon, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import {cn} from "@/lib/utils";

export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Contact <span className="text-primary"> Me</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    TODO noe tekst som forklarer hva jeg er interessert i av muligheter.
                    However, if you have other requests or questions, don't hesitate to contact me the form bellow.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            Contact Infromation
                        </h3>
                        <div className="space-y-6 justify-center">
                            {/**Email */}
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>        
                                </div>
                                <div>
                                    <h4 className="font-medium"> Email</h4>
                                    <a 
                                        href="mailto:tobiashagnessmortensen@gmail.com" 
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        tobiashagnessmortensen@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/**Phone */}
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary"/>        
                                </div>
                                <div>
                                    <h4 className="font-medium"> Phone</h4>
                                    <a 
                                        href="tel:+4797433307" 
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +47 97433307
                                    </a>
                                </div>
                            </div>

                            {/**Location */}
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary"/>        
                                </div>
                                <div>
                                    <h4 className="font-medium"> Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">
                                        Oslo, Norway
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4"> Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/tobias-mortensen/" target="_blank">
                                    <Linkedin />
                                </a>
                                <a href="https://www.linkedin.com/in/tobias-mortensen/" target="_blank">
                                    <img src="/images/discord.png" className="w-5 h-5"/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2"> Your Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"  
                                    placeholder="Tobias Mortensen..." 
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2"> Your Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"  
                                    placeholder="tobiashagnessmortensen@gmail.com..." 
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2"> Your Message</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"  
                                    placeholder="Hello, I'd like to..." 
                                />
                            </div>
                            <button 
                                type="submit" 
                                className={cn(
                                    "cosmic-button w-full flex itmes-center justify-center gap-2",

                                )}
                            >
                                Send Message
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}