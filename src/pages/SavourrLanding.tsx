import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import BentoCard from '@/components/BentoCard';
import { 
  Play, 
  Users, 
  Calendar, 
  Trophy, 
  Star, 
  ChefHat, 
  Clock, 
  Globe,
  Utensils,
  BookOpen,
  Camera,
  MessageSquare,
  Check,
  ArrowRight,
  PlayCircle,
  Sparkles,
  Target,
  Award,
  Heart,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

// Import generated images
import heroCooking from '@/assets/hero-cooking.jpg';
import ingredients from '@/assets/ingredients.jpg';
import chefTeaching from '@/assets/chef-teaching.jpg';

const SavourrLanding = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroCooking} 
            alt="Professional cooking scene" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-text bg-clip-text text-transparent">
              Master Culinary Arts
            </span>
            <br />
            <span className="text-foreground">with Savourr</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 animate-fade-in">
            Transform your cooking skills through interactive tutorials, live classes, 
            and personalized guidance from world-class chefs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button variant="default" size="lg" className="group">
              Start Cooking Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="group">
              <PlayCircle className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* About Savourr Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Why <span className="bg-gradient-text bg-clip-text text-transparent">Savourr?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're revolutionizing culinary education with immersive, interactive experiences 
              tailored to your skill level and preferences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-bento auto-rows-fr">
            <BentoCard size="medium" variant="highlight">
              <ChefHat className="h-12 w-12 text-neon-purple mb-4" />
              <h3 className="text-2xl font-bold mb-3">Expert Instructors</h3>
              <p className="text-muted-foreground">Learn from Michelin-starred chefs and culinary experts from around the world.</p>
            </BentoCard>
            
            <BentoCard size="small">
              <Target className="h-10 w-10 text-neon-pink mb-4" />
              <h3 className="text-xl font-bold mb-2">Personalized Learning</h3>
              <p className="text-muted-foreground text-sm">AI-powered recommendations based on your skill level and preferences.</p>
            </BentoCard>
            
            <BentoCard size="tall" variant="feature">
              <div className="relative h-full">
                <img 
                  src={chefTeaching} 
                  alt="Chef teaching" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <Globe className="h-10 w-10 text-neon-blue mb-4" />
                <h3 className="text-xl font-bold mb-3">Global Cuisines</h3>
                <p className="text-muted-foreground">Master dishes from Italian, Chinese, Indian, Mexican, and 50+ other cuisines.</p>
              </div>
            </BentoCard>
            
            <BentoCard size="small">
              <Clock className="h-10 w-10 text-neon-green mb-4" />
              <h3 className="text-xl font-bold mb-2">Flexible Schedule</h3>
              <p className="text-muted-foreground text-sm">Learn at your own pace with 24/7 access to content.</p>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* Video Library Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Comprehensive <span className="bg-gradient-text bg-clip-text text-transparent">Video Library</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Step-by-step tutorials with adjustable playback, hands-free mode, and closed captions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-bento">
            <BentoCard size="wide" variant="highlight">
              <div className="flex items-center gap-4 mb-4">
                <PlayCircle className="h-16 w-16 text-neon-purple" />
                <div>
                  <h3 className="text-2xl font-bold">4,000+ Recipes</h3>
                  <p className="text-muted-foreground">From basic techniques to advanced culinary arts</p>
                </div>
              </div>
            </BentoCard>
            
            <BentoCard size="medium">
              <Camera className="h-12 w-12 text-neon-pink mb-4" />
              <h3 className="text-xl font-bold mb-3">Multiple Angles</h3>
              <p className="text-muted-foreground">Professional camera work showing every detail of the cooking process.</p>
            </BentoCard>
            
            <BentoCard size="medium">
              <Utensils className="h-12 w-12 text-neon-blue mb-4" />
              <h3 className="text-xl font-bold mb-3">Hands-Free Mode</h3>
              <p className="text-muted-foreground">Voice-controlled playback so your hands stay clean while cooking.</p>
            </BentoCard>
            
            <BentoCard size="small">
              <BookOpen className="h-10 w-10 text-neon-green mb-4" />
              <h3 className="text-lg font-bold mb-2">Closed Captions</h3>
              <p className="text-muted-foreground text-sm">Available in 12 languages</p>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* Live Cook-Along Classes */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Live <span className="bg-gradient-text bg-clip-text text-transparent">Cook-Along</span> Classes
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join live sessions with expert chefs and cook together with students from around the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-bento">
            <BentoCard size="large" variant="feature">
              <div className="relative h-full flex flex-col">
                <Users className="h-12 w-12 text-neon-purple mb-4" />
                <h3 className="text-2xl font-bold mb-4">Interactive Sessions</h3>
                <ul className="space-y-3 flex-1">
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-neon-green" />
                    <span>Real-time chat with instructors</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-neon-green" />
                    <span>Screen sharing for close-ups</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-neon-green" />
                    <span>Virtual kitchen tools</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-neon-green" />
                    <span>Q&A sessions</span>
                  </li>
                </ul>
                <Button className="mt-6 w-full">View Schedule</Button>
              </div>
            </BentoCard>
            
            <BentoCard size="medium">
              <Calendar className="h-12 w-12 text-neon-pink mb-4" />
              <h3 className="text-xl font-bold mb-3">Schedule & RSVP</h3>
              <p className="text-muted-foreground mb-4">Reserve your spot in upcoming sessions and get calendar reminders.</p>
              <div className="space-y-2">
                <div className="text-sm">
                  <span className="font-semibold">Next Session:</span>
                  <br />Italian Pasta Masterclass
                  <br />Tomorrow, 7:00 PM EST
                </div>
              </div>
            </BentoCard>
            
            <BentoCard size="medium">
              <MessageSquare className="h-12 w-12 text-neon-blue mb-4" />
              <h3 className="text-xl font-bold mb-3">Community Chat</h3>
              <p className="text-muted-foreground">Connect with fellow cooking enthusiasts and share your creations.</p>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* Ingredient Substitutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Smart <span className="bg-gradient-text bg-clip-text text-transparent">Substitutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Never let missing ingredients stop your culinary creativity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-bento">
            <BentoCard size="wide" variant="highlight">
              <div className="flex items-center gap-6">
                <img 
                  src={ingredients} 
                  alt="Cooking ingredients" 
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-2xl font-bold mb-2">AI-Powered Suggestions</h3>
                  <p className="text-muted-foreground">Get smart alternatives based on dietary restrictions and availability.</p>
                </div>
              </div>
            </BentoCard>
            
            <BentoCard size="small">
              <Heart className="h-10 w-10 text-neon-pink mb-4" />
              <h3 className="text-lg font-bold mb-2">Dietary Friendly</h3>
              <p className="text-muted-foreground text-sm">Vegan, gluten-free, keto options</p>
            </BentoCard>
            
            <BentoCard size="small">
              <Sparkles className="h-10 w-10 text-neon-purple mb-4" />
              <h3 className="text-lg font-bold mb-2">Flavor Matching</h3>
              <p className="text-muted-foreground text-sm">Maintain taste profiles</p>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* Skill Progress Tracking */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Track Your <span className="bg-gradient-text bg-clip-text text-transparent">Progress</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Monitor your culinary journey with detailed analytics and achievements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-bento">
            <BentoCard size="medium" variant="feature">
              <Trophy className="h-12 w-12 text-neon-purple mb-4" />
              <h3 className="text-xl font-bold mb-3">Achievements</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Knife Skills Master</span>
                  <Award className="h-4 w-4 text-neon-green" />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Pasta Perfectionist</span>
                  <Award className="h-4 w-4 text-neon-green" />
                </div>
                <div className="flex justify-between items-center text-muted-foreground">
                  <span className="text-sm">Dessert Dynamo</span>
                  <div className="w-4 h-4 border border-muted rounded" />
                </div>
              </div>
            </BentoCard>
            
            <BentoCard size="medium">
              <Target className="h-12 w-12 text-neon-pink mb-4" />
              <h3 className="text-xl font-bold mb-3">Skill Level</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Knife Skills</span>
                    <span>Advanced</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-neon-purple h-2 rounded-full w-4/5"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Baking</span>
                    <span>Intermediate</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-neon-blue h-2 rounded-full w-3/5"></div>
                  </div>
                </div>
              </div>
            </BentoCard>
            
            <BentoCard size="medium">
              <Star className="h-12 w-12 text-neon-blue mb-4" />
              <h3 className="text-xl font-bold mb-3">Recommendations</h3>
              <p className="text-muted-foreground mb-4">Based on your progress, we recommend:</p>
              <ul className="space-y-2 text-sm">
                <li>• French Pastry Techniques</li>
                <li>• Advanced Sauce Making</li>
                <li>• Molecular Gastronomy</li>
              </ul>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              What Our <span className="bg-gradient-text bg-clip-text text-transparent">Chefs</span> Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-bento">
            <BentoCard size="medium">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-neon-purple rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div>
                  <h4 className="font-bold">Sarah Chen</h4>
                  <p className="text-sm text-muted-foreground">Home Cook</p>
                </div>
              </div>
              <p className="text-muted-foreground">"Savourr transformed my cooking completely. The live classes feel like having a personal chef in my kitchen!"</p>
              <div className="flex gap-1 mt-4">
                {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-neon-purple text-neon-purple" />)}
              </div>
            </BentoCard>
            
            <BentoCard size="medium" variant="highlight">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-neon-pink rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div>
                  <h4 className="font-bold">Marcus Johnson</h4>
                  <p className="text-sm text-muted-foreground">Professional Chef</p>
                </div>
              </div>
              <p className="text-muted-foreground">"Even as a professional chef, I learned new techniques. The quality of instruction is exceptional."</p>
              <div className="flex gap-1 mt-4">
                {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-neon-pink text-neon-pink" />)}
              </div>
            </BentoCard>
            
            <BentoCard size="medium">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-neon-blue rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div>
                  <h4 className="font-bold">Aisha Patel</h4>
                  <p className="text-sm text-muted-foreground">Culinary Student</p>
                </div>
              </div>
              <p className="text-muted-foreground">"The ingredient substitution feature saved me countless trips to the store. Brilliant technology!"</p>
              <div className="flex gap-1 mt-4">
                {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-neon-blue text-neon-blue" />)}
              </div>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Choose Your <span className="bg-gradient-text bg-clip-text text-transparent">Plan</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Start free and upgrade as your culinary skills grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-bento">
            <BentoCard size="medium">
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <div className="text-3xl font-bold mb-4">$0<span className="text-lg text-muted-foreground">/month</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-neon-green" /> 10 video tutorials</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-neon-green" /> Basic substitutions</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-neon-green" /> Community access</li>
              </ul>
              <Button variant="outline" className="w-full">Get Started</Button>
            </BentoCard>
            
            <BentoCard size="medium" variant="highlight">
              <div className="text-center mb-4">
                <span className="bg-neon-purple px-3 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <div className="text-3xl font-bold mb-4">$19<span className="text-lg text-muted-foreground">/month</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-neon-green" /> Unlimited videos</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-neon-green" /> Live cook-along classes</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-neon-green" /> Smart meal planning</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-neon-green" /> Progress tracking</li>
              </ul>
              <Button className="w-full">Start Pro Trial</Button>
            </BentoCard>
            
            <BentoCard size="medium">
              <h3 className="text-2xl font-bold mb-2">Premium</h3>
              <div className="text-3xl font-bold mb-4">$39<span className="text-lg text-muted-foreground">/month</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-neon-green" /> Everything in Pro</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-neon-green" /> 1-on-1 chef sessions</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-neon-green" /> Custom meal plans</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-neon-green" /> Priority support</li>
              </ul>
              <Button variant="outline" className="w-full">Go Premium</Button>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Frequently Asked <span className="bg-gradient-text bg-clip-text text-transparent">Questions</span>
            </h2>
          </div>
          
          <div className="space-y-4">
            {[
              {
                q: "Do I need professional cooking equipment to get started?",
                a: "Not at all! Our tutorials are designed for home kitchens with basic equipment. We'll suggest alternatives for any specialized tools."
              },
              {
                q: "Can I access classes on mobile devices?",
                a: "Yes! Savourr works perfectly on phones, tablets, and computers. Our hands-free mode is especially great for mobile cooking."
              },
              {
                q: "Are there vegetarian and vegan options?",
                a: "Absolutely! We have dedicated sections for vegetarian, vegan, gluten-free, and other dietary preferences."
              },
              {
                q: "How do live cook-along classes work?",
                a: "Join scheduled live sessions where you cook alongside expert chefs in real-time. Ask questions, get feedback, and learn with other students."
              },
              {
                q: "Can I cancel my subscription anytime?",
                a: "Yes, you can cancel anytime with no penalties. Your access continues until the end of your current billing period."
              }
            ].map((faq, index) => (
              <BentoCard key={index} size="wide" interactive={true}>
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full text-left flex justify-between items-center"
                >
                  <h3 className="text-lg font-bold pr-4">{faq.q}</h3>
                  {expandedFAQ === index ? 
                    <ChevronUp className="h-5 w-5 text-neon-purple flex-shrink-0" /> : 
                    <ChevronDown className="h-5 w-5 text-neon-purple flex-shrink-0" />
                  }
                </button>
                {expandedFAQ === index && (
                  <p className="mt-4 text-muted-foreground animate-fade-in">{faq.a}</p>
                )}
              </BentoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <BentoCard size="wide" variant="highlight" className="text-center">
            <ChefHat className="h-16 w-16 text-neon-purple mx-auto mb-6" />
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Transform Your Cooking?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of home cooks and professional chefs who are mastering culinary arts with Savourr.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                Start Your Culinary Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Browse Free Recipes
              </Button>
            </div>
          </BentoCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-surface border-t border-card-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2 bg-gradient-text bg-clip-text text-transparent">
              Savourr
            </h3>
            <p className="text-muted-foreground mb-8">
              Transforming culinary education through immersive experiences.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground mb-8">
              <a href="#" className="hover:text-neon-purple transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-neon-purple transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-neon-purple transition-colors">Contact</a>
              <a href="#" className="hover:text-neon-purple transition-colors">Support</a>
            </div>
            <p className="text-sm text-muted-foreground">
              Savourr by <span className="text-neon-purple font-semibold">Jash Maniar</span> © 2024. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SavourrLanding;