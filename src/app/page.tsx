"use client";

import React, { useState, useEffect } from 'react';
import { 
  Camera, 
  MessageSquare, 
  Mail, 
  ShoppingBag, 
  TrendingUp, 
  Users, 
  Zap, 
  Eye, 
  PlusCircle,
  BarChart3,
  Bell,
  CreditCard,
  Smartphone,
  Brain,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

export default function ExpenseTrackerLanding() {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id^="section-"]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Camera,
      title: "Receipt Data Extraction",
      description: "Intelligently extract amount, date, and category from any receipt photo using advanced OCR and parsing",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: MessageSquare,
      title: "SMS Expense Detection",
      description: "Automatically detect and extract expense information from SMS messages and transaction alerts",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Mail,
      title: "Email Expense Mining",
      description: "Parse and extract expense data from email receipts and digital transaction confirmations",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: ShoppingBag,
      title: "Swiggy Receipt Processing",
      description: "Specialized extraction for Swiggy food delivery receipts with order details and pricing",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Users,
      title: "Friends Due Management",
      description: "Track amounts owed by friends, send reminders, and record payment details with communication tools",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: BarChart3,
      title: "Visual Spending Patterns",
      description: "Interactive charts and graphs showing spending trends, categories, and financial insights",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: PlusCircle,
      title: "Manual Cash Entry",
      description: "Feature for manually adding cash expenses with intuitive interface and smart categorization",
      color: "from-teal-500 to-green-500"
    },
    {
      icon: Eye,
      title: "Intuitive User Interface",
      description: "Clean, user-friendly interface for reviewing, editing, and managing all detected expenses",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const benefits = [
    "Automated detection from receipts, SMS, emails, and Swiggy orders",
    "Intelligent extraction of amount, date, and category information",
    "Comprehensive Friends Due module with communication features",
    "Visual representations of spending patterns and trends",
    "Manual adjustment capabilities for detected expenses",
    "Intuitive user interface for expense review and management",
    "Cash expense entry feature for complete expense tracking",
    "Payment recording and debt management for friend transactions"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-50">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4 backdrop-blur-lg bg-white/10 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              ExpenseTracker
            </h1>
          </div>
          <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="section-hero" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8 inline-flex items-center px-4 py-2 bg-white/10 rounded-full backdrop-blur-lg border border-white/20">
            <Star className="w-4 h-4 text-yellow-400 mr-2" />
            
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
            Automated Expense
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Detection & Tracking
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive workflow for automating expense detection from receipts, SMS, emails, 
            and Swiggy orders with intelligent extraction and visual spending insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              Try Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="px-8 py-4 border-2 border-purple-400 rounded-full text-lg font-semibold hover:bg-purple-400/10 transition-all duration-300 flex items-center justify-center">
              <Eye className="w-5 h-5 mr-2" />
              Watch Demo
            </button>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">99%</div>
              <div className="text-gray-400">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400">5+</div>
              <div className="text-gray-400">Data Sources</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">Real-time</div>
              <div className="text-gray-400">Processing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="section-features" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to automate and optimize your expense tracking workflow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-xl ${
                  isVisible['section-features'] ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="section-workflow" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Simple, automated workflow that saves you time and increases accuracy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Camera className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">1. Multi-Source Detection</h3>
              <p className="text-gray-400">
                Automatically detect expenses from receipts, SMS messages, emails, and Swiggy orders using intelligent parsing
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">2. Data Extraction</h3>
              <p className="text-gray-400">
                Extract key information including amount, date, and category with manual adjustment capabilities
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">3. Visual Insights</h3>
              <p className="text-gray-400">
                Present spending patterns through intuitive interface with Friends Due tracking and payment management
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="section-benefits" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Comprehensive Expense Workflow
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Complete automation solution for expense detection, tracking, and management with specialized Friends Due module
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 ${
                      isVisible['section-benefits'] ? 'animate-fade-in-left' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <Camera className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                    <h4 className="font-semibold text-lg mb-2">Multi-Source</h4>
                    <p className="text-gray-400 text-sm">Receipt, SMS, Email & Swiggy detection</p>
                  </div>
                  <div className="text-center">
                    <Brain className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                    <h4 className="font-semibold text-lg mb-2">Smart Extraction</h4>
                    <p className="text-gray-400 text-sm">Amount, date, and category parsing</p>
                  </div>
                  <div className="text-center">
                    <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <h4 className="font-semibold text-lg mb-2">Friends Due</h4>
                    <p className="text-gray-400 text-sm">Complete debt tracking & communication</p>
                  </div>
                  <div className="text-center">
                    <BarChart3 className="w-12 h-12 text-green-400 mx-auto mb-4" />
                    <h4 className="font-semibold text-lg mb-2">Visual Patterns</h4>
                    <p className="text-gray-400 text-sm">Spending insights and trend analysis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="section-cta" className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Automate Your Expense Workflow
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Complete solution for expense detection, Friends Due management, and visual spending insights
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="px-8 py-4 border-2 border-purple-400 rounded-full text-lg font-semibold hover:bg-purple-400/10 transition-all duration-300">
                  View GitHub
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-white/10 backdrop-blur-lg bg-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <CreditCard className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
             Expensify
            </h3>
          </div>
          <p className="text-gray-400">
            Built with ❤️ team  Expensify  • Revolutionizing expense management with AI 
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .animate-fade-in-left {
          animation: fade-in-left 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
