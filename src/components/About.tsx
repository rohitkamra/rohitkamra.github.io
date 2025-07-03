
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Zap, Target } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Expertise in <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">AI Innovation</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Bridging the gap between complex data science and practical AI solutions that drive real business impact
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 border-blue-700/30 backdrop-blur-sm hover:scale-105 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Data Science</h3>
              <p className="text-gray-300 leading-relaxed">
                Advanced statistical modeling, machine learning algorithms, and predictive analytics to extract meaningful insights from complex datasets
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-teal-900/20 to-teal-800/20 border-teal-700/30 backdrop-blur-sm hover:scale-105 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-teal-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Generative AI</h3>
              <p className="text-gray-300 leading-relaxed">
                Creating intelligent systems that generate content, automate processes, and enhance human creativity through cutting-edge AI models
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-purple-900/20 to-purple-800/20 border-purple-700/30 backdrop-blur-sm hover:scale-105 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Agentic AI</h3>
              <p className="text-gray-300 leading-relaxed">
                Building autonomous AI agents that can reason, plan, and execute complex tasks with minimal human intervention
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
