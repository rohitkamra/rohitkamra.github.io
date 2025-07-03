
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, Database, LineChart, Cpu, Globe, Workflow } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "AI Model Development",
      description: "Custom machine learning models tailored to your specific business needs",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Transformers"],
      color: "blue"
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Building robust data pipelines and infrastructure for AI applications",
      skills: ["Python", "SQL", "Apache Spark", "AWS/GCP"],
      color: "teal"
    },
    {
      icon: LineChart,
      title: "Predictive Analytics",
      description: "Advanced forecasting and trend analysis for strategic decision making",
      skills: ["Statistical Modeling", "Time Series", "A/B Testing", "R"],
      color: "purple"
    },
    {
      icon: Cpu,
      title: "LLM Integration",
      description: "Implementing and fine-tuning large language models for enterprise use",
      skills: ["OpenAI API", "Anthropic", "Fine-tuning", "RAG"],
      color: "green"
    },
    {
      icon: Globe,
      title: "AI Consulting",
      description: "Strategic guidance on AI adoption and implementation roadmaps",
      skills: ["Strategy", "ROI Analysis", "Team Training", "Best Practices"],
      color: "orange"
    },
    {
      icon: Workflow,
      title: "Agent Systems",
      description: "Multi-agent systems for complex task automation and orchestration",
      skills: ["LangChain", "AutoGen", "Multi-Agent", "Task Planning"],
      color: "pink"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-900/20 to-blue-800/20 border-blue-700/30 text-blue-400",
      teal: "from-teal-900/20 to-teal-800/20 border-teal-700/30 text-teal-400",
      purple: "from-purple-900/20 to-purple-800/20 border-purple-700/30 text-purple-400",
      green: "from-green-900/20 to-green-800/20 border-green-700/30 text-green-400",
      orange: "from-orange-900/20 to-orange-800/20 border-orange-700/30 text-orange-400",
      pink: "from-pink-900/20 to-pink-800/20 border-pink-700/30 text-pink-400"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Services & Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI solutions from concept to deployment, powered by cutting-edge technology and deep domain expertise
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`bg-gradient-to-br ${getColorClasses(service.color)} backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-2xl`}
            >
              <CardHeader>
                <div className={`w-12 h-12 bg-${service.color}-600/20 rounded-lg flex items-center justify-center mb-4`}>
                  <service.icon className={`w-6 h-6 ${getColorClasses(service.color).split(' ')[2]}`} />
                </div>
                <CardTitle className="text-white text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-white/10 text-gray-300 hover:bg-white/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
