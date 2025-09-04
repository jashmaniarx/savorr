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
  ChevronUp,
  Timer,
  Shield,
  Smartphone,
  Video,
  Mic,
  Share2,
  TrendingUp,
  Zap,
  Users2,
  MapPin,
  Gift,
  Headphones
} from 'lucide-react';

// Import generated images
import heroCooking from '@/assets/hero-cooking.jpg';
import ingredients from '@/assets/ingredients.jpg';
import chefTeaching from '@/assets/chef-teaching.jpg';

const SavourrLanding = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const handleGetStarted = () => {
    alert("Welcome to Savourr! Sign up functionality coming soon.");
  };

  const handleWatchDemo = () => {
    alert("Demo video would play here!");
  };

  const handlePricingClick = (plan: string) => {
    alert(`You selected the ${plan} plan! Checkout coming soon.`);
  };

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
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-poppins mb-6 animate-slide-up">
            <span className="bg-gradient-text bg-clip-text text-transparent">
              Master Culinary Arts
            </span>
            <br />
            <span className="text-foreground">with Savourr</span>
          </h1>
          
          <p className="text-xl sm:text-2xl font-quicksand text-muted-foreground mb-8 animate-fade-in">
            Transform your cooking skills through interactive tutorials, live classes, 
            and personalized guidance from world-class chefs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button variant="hero" size="lg" className="group" onClick={handleGetStarted}>
              Start Cooking Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="group" onClick={handleWatchDemo}>
              <PlayCircle className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* About Savourr Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold font-poppins mb-6">
              Why <span className="bg-gradient-text bg-clip-text text-transparent">Savourr?</span>
            </h2>
            <p className="text-xl font-quicksand text-muted-foreground max-w-3xl">
              We're revolutionizing culinary education with immersive, interactive experiences 
              tailored to your skill level and preferences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-bento auto-rows-fr">
            <BentoCard size="medium" variant="highlight">
              <ChefHat className="h-12 w-12 text-bright-orange mb-4" />
              <h3 className="text-2xl font-bold font-poppins mb-3">Expert Instructors</h3>
              <p className="text-muted-foreground font-nunito">Learn from Michelin-starred chefs and culinary experts from around the world.</p>
            </BentoCard>
            
            <BentoCard size="small">
              <Target className="h-10 w-10 text-warm-yellow mb-4" />
              <h3 className="text-xl font-bold font-poppins mb-2">Personalized Learning</h3>
              <p className="text-muted-foreground text-sm font-nunito">AI-powered recommendations based on your skill level and preferences.</p>
            </BentoCard>
            
            <BentoCard size="tall" variant="feature">
              <div className="relative h-full">
                <img 
                  src={chefTeaching} 
                  alt="Chef teaching" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <Globe className="h-10 w-10 text-mint-green mb-4" />
                <h3 className="text-xl font-bold font-poppins mb-3">Global Cuisines</h3>
                <p className="text-muted-foreground font-nunito">Master dishes from Italian, Chinese, Indian, Mexican, and 50+ other cuisines.</p>
              </div>
            </BentoCard>
            
            <BentoCard size="small">
              <Clock className="h-10 w-10 text-burnt-orange mb-4" />
              <h3 className="text-xl font-bold font-poppins mb-2">Flexible Schedule</h3>
              <p className="text-muted-foreground text-sm font-nunito">Learn at your own pace with 24/7 access to content.</p>
            </BentoCard>

            <BentoCard size="small">
              <Smartphone className="h-10 w-10 text-bright-orange mb-4" />
              <h3 className="text-lg font-bold font-poppins mb-2">Mobile First</h3>
              <p className="text-muted-foreground text-sm font-nunito">Cook anywhere with our mobile-optimized platform.</p>
            </BentoCard>

            <BentoCard size="small">
              <Shield className="h-10 w-10 text-mint-green mb-4" />
              <h3 className="text-lg font-bold font-poppins mb-2">Food Safety</h3>
              <p className="text-muted-foreground text-sm font-nunito">Learn proper hygiene and safety techniques.</p>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* Video Library Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold font-poppins mb-6">
              Comprehensive <span className="bg-gradient-text bg-clip-text text-transparent">Video Library</span>
            </h2>
            <p className="text-xl font-quicksand text-muted-foreground max-w-3xl">
              Step-by-step tutorials with adjustable playback, hands-free mode, and closed captions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-bento">
            <BentoCard size="wide" variant="highlight">
              <div className="flex items-center gap-4 mb-4">
                <PlayCircle className="h-16 w-16 text-bright-orange" />
                <div>
                  <h3 className="text-2xl font-bold font-poppins">4,000+ Recipes</h3>
                  <p className="text-muted-foreground font-quicksand">From basic techniques to advanced culinary arts</p>
                </div>
              </div>
            </BentoCard>
            
            <BentoCard size="medium">
              <Camera className="h-12 w-12 text-warm-yellow mb-4" />
              <h3 className="text-xl font-bold font-poppins mb-3">Multiple Angles</h3>
              <p className="text-muted-foreground font-nunito">Professional camera work showing every detail of the cooking process.</p>
            </BentoCard>
            
            <BentoCard size="medium">
              <Mic className="h-12 w-12 text-mint-green mb-4" />
              <h3 className="text-xl font-bold font-poppins mb-3">Hands-Free Mode</h3>
              <p className="text-muted-foreground font-nunito">Voice-controlled playback so your hands stay clean while cooking.</p>
            </BentoCard>
            
            <BentoCard size="small">
              <BookOpen className="h-10 w-10 text-burnt-orange mb-4" />
              <h3 className="text-lg font-bold font-poppins mb-2">Closed Captions</h3>
              <p className="text-muted-foreground text-sm font-nunito">Available in 12 languages</p>
            </BentoCard>

            <BentoCard size="small">
              <Video className="h-10 w-10 text-bright-orange mb-4" />
              <h3 className="text-lg font-bold font-poppins mb-2">HD Quality</h3>
              <p className="text-muted-foreground text-sm font-nunito">Crystal clear 4K video content</p>
            </BentoCard>

            <BentoCard size="small">
              <Timer className="h-10 w-10 text-warm-yellow mb-4" />
              <h3 className="text-lg font-bold font-poppins mb-2">Smart Timing</h3>
              <p className="text-muted-foreground text-sm font-nunito">Built-in timers and alerts</p>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* Live Cook-Along Classes */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold font-poppins mb-6">
              Live <span className="bg-gradient-text bg-clip-text text-transparent">Cook-Along</span> Classes
            </h2>
            <p className="text-xl font-quicksand text-muted-foreground max-w-3xl">
              Join live sessions with expert chefs and cook together with students from around the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-bento">
            <BentoCard size="large" variant="feature">
              <div className="relative h-full flex flex-col">
                <Users className="h-12 w-12 text-bright-orange mb-4" />
                <h3 className="text-2xl font-bold font-poppins mb-4">Interactive Sessions</h3>
                <ul className="space-y-3 flex-1 font-nunito">
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-mint-green" />
                    <span>Real-time chat with instructors</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-mint-green" />
                    <span>Screen sharing for close-ups</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-mint-green" />
                    <span>Virtual kitchen tools</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-mint-green" />
                    <span>Q&A sessions</span>
                  </li>
                </ul>
                <Button className="mt-6 w-full" onClick={() => alert("Schedule view coming soon!")}>View Schedule</Button>
              </div>
            </BentoCard>
            
            <BentoCard size="medium">
              <Calendar className="h-12 w-12 text-warm-yellow mb-4" />
              <h3 className="text-xl font-bold font-poppins mb-3">Schedule & RSVP</h3>
              <p className="text-muted-foreground font-nunito mb-4">Reserve your spot in upcoming sessions and get calendar reminders.</p>
              <div className="space-y-2">
                <div className="text-sm font-nunito">
                  <span className="font-semibold">Next Session:</span>
                  <br />Italian Pasta Masterclass
                  <br />Tomorrow, 7:00 PM EST
                </div>
              </div>
            </BentoCard>
            
            <BentoCard size="medium">
              <MessageSquare className="h-12 w-12 text-mint-green mb-4" />
              <h3 className="text-xl font-bold font-poppins mb-3">Community Chat</h3>
              <p className="text-muted-foreground font-nunito">Connect with fellow cooking enthusiasts and share your creations.</p>
            </BentoCard>

            <BentoCard size="small">
              <Users2 className="h-10 w-10 text-burnt-orange mb-4" />
              <h3 className="text-lg font-bold font-poppins mb-2">Small Groups</h3>
              <p className="text-muted-foreground text-sm font-nunito">Max 15 students per class</p>
            </BentoCard>

            <BentoCard size="small">
              <Share2 className="h-10 w-10 text-bright-orange mb-4" />
              <h3 className="text-lg font-bold font-poppins mb-2">Recipe Sharing</h3>
              <p className="text-muted-foreground text-sm font-nunito">Share your creations with the community</p>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* Ingredient Substitutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold font-poppins mb-6">
              Smart <span className="bg-gradient-text bg-clip-text text-transparent">Substitutions</span>
            </h2>
            <p className="text-xl font-quicksand text-muted-foreground max-w-3xl">
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
                  <h3 className="text-2xl font-bold font-poppins mb-2">AI-Powered Suggestions</h3>
                  <p className="text-muted-foreground font-quicksand">Get smart alternatives based on dietary restrictions and availability.</p>
                </div>
              </div>
            </BentoCard>
            
            <BentoCard size="small">
              <Heart className="h-10 w-10 text-warm-yellow mb-4" />
              <h3 className="text-lg font-bold font-poppins mb-2">Dietary Friendly</h3>
              <p className="text-muted-foreground text-sm font-nunito">Vegan, gluten-free, keto options</p>
            </BentoCard>
            
            <BentoCard size="small">
              <Sparkles className="h-10 w-10 text-bright-orange mb-4" />
              <h3 className="text-lg font-bold font-poppins mb-2">Flavor Matching</h3>
              <p className="text-muted-foreground text-sm font-nunito">Maintain taste profiles</p>
            </BentoCard>

            <BentoCard size="small">
              <MapPin className="h-10 w-10 text-mint-green mb-4" />
              <h3 className="text-lg font-bold font-poppins mb-2">Local Sourcing</h3>
              <p className="text-muted-foreground text-sm font-nunito">Find ingredients nearby</p>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* Skill Progress Tracking */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold font-poppins mb-6">
              Track Your <span className="bg-gradient-text bg-clip-text text-transparent">Progress</span>
            </h2>
            <p className="text-xl font-quicksand text-muted-foreground max-w-3xl">
              Monitor your culinary journey with detailed analytics and achievements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-bento">
            <BentoCard size="medium" variant="feature">
              <Trophy className="h-12 w-12 text-bright-orange mb-4" />
              <h3 className="text-xl font-bold font-poppins mb-3">Achievements</h3>
              <div className="space-y-2 font-nunito">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Knife Skills Master</span>
                  <Award className="h-4 w-4 text-mint-green" />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Pasta Perfectionist</span>
                  <Award className="h-4 w-4 text-mint-green" />
                </div>
                <div className="flex justify-between items-center text-muted-foreground">
                  <span className="text-sm">Dessert Dynamo</span>
                  <div className="w-4 h-4 border border-muted rounded" />
                </div>
              </div>
            </BentoCard>
            
            <BentoCard size="medium">
              <Target className="h-12 w-12 text-warm-yellow mb-4" />
              <h3 className="text-xl font-bold font-poppins mb-3">Skill Level</h3>
              <div className="space-y-4 font-nunito">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Knife Skills</span>
                    <span>Advanced</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-bright-orange h-2 rounded-full w-4/5"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Baking</span>
                    <span>Intermediate</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-mint-green h-2 rounded-full w-3/5"></div>
                  </div>
                </div>
              </div>
            </BentoCard>
            
            <BentoCard size="medium">
              <Star className="h-12 w-12 text-mint-green mb-4" />
              <h3 className="text-xl font-bold font-poppins mb-3">Recommendations</h3>
              <p className="text-muted-foreground font-nunito mb-4">Based on your progress, we recommend:</p>
              <ul className="space-y-2 text-sm font-nunito">
                <li>• French Pastry Techniques</li>
                <li>• Advanced Sauce Making</li>
                <li>• Molecular Gastronomy</li>
              </ul>
            </BentoCard>

            <BentoCard size="small">
              <TrendingUp className="h-10 w-10 text-burnt-orange mb-4" />
              <h3 className="text-lg font-bold font-poppins mb-2">Weekly Stats</h3>
              <p className="text-muted-foreground text-sm font-nunito">3 recipes completed this week</p>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold font-poppins mb-6">
              What Our <span className="bg-gradient-text bg-clip-text text-transparent">Chefs</span> Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-bento">
            <BentoCard size="medium">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-bright-orange rounded-full flex items-center justify-center text-dark-burgundy font-bold font-poppins">
                  S
                </div>
                <div>
                  <h4 className="font-bold font-poppins">Sarah Chen</h4>
                  <p className="text-sm text-muted-foreground font-nunito">Home Cook</p>
                </div>
              </div>
              <p className="text-muted-foreground font-nunito">"Savourr transformed my cooking completely. The live classes feel like having a personal chef in my kitchen!"</p>
              <div className="flex gap-1 mt-4">
                {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-bright-orange text-bright-orange" />)}
              </div>
            </BentoCard>
            
            <BentoCard size="medium" variant="highlight">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-warm-yellow rounded-full flex items-center justify-center text-dark-burgundy font-bold font-poppins">
                  M
                </div>
                <div>
                  <h4 className="font-bold font-poppins">Marcus Johnson</h4>
                  <p className="text-sm text-muted-foreground font-nunito">Professional Chef</p>
                </div>
              </div>
              <p className="text-muted-foreground font-nunito">"Even as a professional chef, I learned new techniques. The quality of instruction is exceptional."</p>
              <div className="flex gap-1 mt-4">
                {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-warm-yellow text-warm-yellow" />)}
              </div>
            </BentoCard>
            
            <BentoCard size="medium">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-mint-green rounded-full flex items-center justify-center text-dark-burgundy font-bold font-poppins">
                  A
                </div>
                <div>
                  <h4 className="font-bold font-poppins">Aisha Patel</h4>
                  <p className="text-sm text-muted-foreground font-nunito">Culinary Student</p>
                </div>
              </div>
              <p className="text-muted-foreground font-nunito">"The ingredient substitution feature saved me countless trips to the store. Brilliant technology!"</p>
              <div className="flex gap-1 mt-4">
                {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-mint-green text-mint-green" />)}
              </div>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold font-poppins mb-6">
              Choose Your <span className="bg-gradient-text bg-clip-text text-transparent">Plan</span>
            </h2>
            <p className="text-xl font-quicksand text-muted-foreground max-w-3xl">
              Start free and upgrade as your culinary skills grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-bento">
            <BentoCard size="medium">
              <h3 className="text-2xl font-bold font-poppins mb-2">Free</h3>
              <div className="text-3xl font-bold font-poppins mb-4">$0<span className="text-lg text-muted-foreground font-nunito">/month</span></div>
              <ul className="space-y-3 mb-6 font-nunito">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-mint-green" /> 10 video tutorials</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-mint-green" /> Basic substitutions</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-mint-green" /> Community access</li>
              </ul>
              <Button variant="outline" className="w-full" onClick={() => handlePricingClick('Free')}>Get Started</Button>
            </BentoCard>
            
            <BentoCard size="medium" variant="highlight">
              <div className="text-center mb-4">
                <span className="bg-bright-orange text-dark-burgundy px-3 py-1 rounded-full text-sm font-medium font-poppins">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold font-poppins mb-2">Pro</h3>
              <div className="text-3xl font-bold font-poppins mb-4">$19<span className="text-lg text-muted-foreground font-nunito">/month</span></div>
              <ul className="space-y-3 mb-6 font-nunito">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-mint-green" /> Unlimited videos</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-mint-green" /> Live cook-along classes</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-mint-green" /> Smart meal planning</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-mint-green" /> Progress tracking</li>
              </ul>
              <Button className="w-full" onClick={() => handlePricingClick('Pro')}>Start Pro Trial</Button>
            </BentoCard>
            
            <BentoCard size="medium">
              <h3 className="text-2xl font-bold font-poppins mb-2">Premium</h3>
              <div className="text-3xl font-bold font-poppins mb-4">$39<span className="text-lg text-muted-foreground font-nunito">/month</span></div>
              <ul className="space-y-3 mb-6 font-nunito">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-mint-green" /> Everything in Pro</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-mint-green" /> 1-on-1 chef sessions</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-mint-green" /> Custom meal plans</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-mint-green" /> Priority support</li>
              </ul>
              <Button variant="outline" className="w-full" onClick={() => handlePricingClick('Premium')}>Go Premium</Button>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold font-poppins mb-6">
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
                  <h3 className="text-lg font-bold font-poppins pr-4">{faq.q}</h3>
                  {expandedFAQ === index ? 
                    <ChevronUp className="h-5 w-5 text-bright-orange flex-shrink-0" /> : 
                    <ChevronDown className="h-5 w-5 text-bright-orange flex-shrink-0" />
                  }
                </button>
                {expandedFAQ === index && (
                  <p className="mt-4 text-muted-foreground font-nunito animate-fade-in">{faq.a}</p>
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
            <ChefHat className="h-16 w-16 text-bright-orange mx-auto mb-6" />
            <h2 className="text-4xl sm:text-5xl font-bold font-poppins mb-6">
              Ready to Transform Your Cooking?
            </h2>
            <p className="text-xl font-quicksand text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of home cooks and professional chefs who are mastering culinary arts with Savourr.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group" onClick={handleGetStarted}>
                Start Your Culinary Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => alert("Free recipes coming soon!")}>
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
            <h3 className="text-2xl font-bold font-poppins mb-2 bg-gradient-text bg-clip-text text-transparent">
              Savourr
            </h3>
            <p className="text-muted-foreground font-quicksand mb-8">
              Transforming culinary education through immersive experiences.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground mb-8 font-nunito">
              <a href="#" className="hover:text-bright-orange transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-bright-orange transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-bright-orange transition-colors">Contact</a>
              <a href="#" className="hover:text-bright-orange transition-colors">Support</a>
            </div>
            <p className="text-sm text-muted-foreground font-nunito">
              Savourr by <span className="text-bright-orange font-semibold">Jash Maniar</span> © 2024. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SavourrLanding;