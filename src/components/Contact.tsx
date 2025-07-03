
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageSquare, Calendar, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to transform your data into intelligent solutions? Let's discuss how AI can accelerate your business goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 border-blue-700/30 backdrop-blur-sm hover:scale-105 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Email Me</h3>
              <p className="text-gray-300 text-sm">hello@datascientist.ai</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-teal-900/20 to-teal-800/20 border-teal-700/30 backdrop-blur-sm hover:scale-105 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-teal-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Let's Chat</h3>
              <p className="text-gray-300 text-sm">Quick response guaranteed</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-purple-900/20 to-purple-800/20 border-purple-700/30 backdrop-blur-sm hover:scale-105 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Schedule Call</h3>
              <p className="text-gray-300 text-sm">Free consultation</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Twitter className="w-5 h-5" />
            </Button>
          </div>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Start Your AI Journey
          </Button>
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-gray-800 text-center">
        <p className="text-gray-400">
          © 2024 Your Name. Transforming data into intelligent solutions.
        </p>
      </div>
    </section>
  );
};

export default Contact;
