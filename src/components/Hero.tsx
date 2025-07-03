
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Code, Database } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-8 flex justify-center space-x-4">
          <div className="p-3 bg-blue-600/20 rounded-lg backdrop-blur-sm animate-fade-in">
            <Brain className="w-8 h-8 text-blue-400" />
          </div>
          <div className="p-3 bg-teal-600/20 rounded-lg backdrop-blur-sm animate-fade-in delay-100">
            <Code className="w-8 h-8 text-teal-400" />
          </div>
          <div className="p-3 bg-purple-600/20 rounded-lg backdrop-blur-sm animate-fade-in delay-200">
            <Database className="w-8 h-8 text-purple-400" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in delay-300">
          <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400 bg-clip-text text-transparent">
            Data Scientist
          </span>
          <br />
          <span className="text-white">& AI Innovator</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-500">
          Transforming complex data into intelligent solutions through 
          <span className="text-blue-400 font-semibold"> Generative AI</span> and 
          <span className="text-teal-400 font-semibold"> Agentic AI</span> systems
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-700">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 text-lg group transition-all duration-300 hover:scale-105"
          >
            View My Work
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </Button>
        </div>
        
        <div className="mt-16 flex justify-center space-x-8 text-sm text-gray-400 animate-fade-in delay-1000">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">5+</div>
            <div>Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-teal-400">50+</div>
            <div>AI Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">100+</div>
            <div>Models Deployed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
