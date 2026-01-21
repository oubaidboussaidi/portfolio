import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const [showUTripModal, setShowUTripModal] = useState(false);
  const [showGymCoreModal, setShowGymCoreModal] = useState(false);
  const [showRestaurantModal, setShowRestaurantModal] = useState(false);
  const [showEcommerceModal, setShowEcommerceModal] = useState(false);
  const [showSymBookModal, setShowSymBookModal] = useState(false);
  const [showEduConnectModal, setShowEduConnectModal] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [zoomImage, setZoomImage] = useState(null);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [showGithubModal, setShowGithubModal] = useState(false);
  const [showGymCoreGithubModal, setShowGymCoreGithubModal] = useState(false);
  const [showRestaurantGithubModal, setShowRestaurantGithubModal] = useState(false);
  const [showEcommerceGithubModal, setShowEcommerceGithubModal] = useState(false);
  const [showSymBookGithubModal, setShowSymBookGithubModal] = useState(false);
  const [showEduConnectGithubModal, setShowEduConnectGithubModal] = useState(false);

  useGSAP(() => {
    gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });

    gsap.fromTo(
      ".project-hero-card",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        scrollTrigger: {
          trigger: ".project-hero-card",
          start: "top bottom-=100",
        },
      }
    );
  }, []);

  const utripDetails = {
    overview: {
      title: "Platform Overview",
      description: "Utrip is a modern, full-stack tourism and event management platform designed to provide a seamless experience for tourists, event organizers, and administrators. It combines high-performance web components, AI-driven personalization, and a robust mobile experience.",
      techStack: [
        { category: "Frontend", tech: "React, Vite, Tailwind CSS, Syncfusion, Framer Motion" },
        { category: "Backend", tech: "Java 17, Spring Boot, Spring Security (JWT), MongoDB" },
        { category: "AI Module", tech: "Python 3.9, FastAPI, Scikit-learn, OpenAI API" },
        { category: "Mobile", tech: "Kotlin, Android SDK" },
      ],
      features: [
        "AI-Driven Event Recommendations",
        "Interactive Maps with Leaflet",
        "Stripe Payment Integration",
        "Role-Based Access Control (Tourist, Organizer, Admin)",
        "Real-time Event Management",
        "Mobile Android Application",
        "Event Approval Workflow",
        "Analytics Dashboards",
      ]
    },
    userFeatures: {
      title: "User Features",
      sections: [
        {
          name: "Home & Discovery",
          description: "The entry point to the Utrip experience. The homepage features a dynamic hero carousel showcasing featured events. Users don't have to be authenticated to view events.",
          features: [
            "Event Details & Payment: Click 'View Details' on any event to book tickets using integrated Stripe",
            "Mobile Integration: Download the Android APK directly for on-the-go access"
          ],
          image: "/projects/UTrip/home.png"
        },
        {
          name: "Event Exploration & Mapping",
          description: "The Events page provides a powerful discovery interface with smart filtering capabilities.",
          features: [
            "Interactive Map: Leaflet maps show event locations with real-time distance and travel time",
            "Smart Filtering: Filter by category, date, and price range",
            "Responsive Grid & Map Views"
          ],
          images: ["/projects/UTrip/events.png", "/projects/UTrip/events_map.png"]
        },
        {
          name: "AI Recommendations",
          description: "Powered by a Python/FastAPI backend, the recommendation engine analyzes user preferences and past interactions.",
          features: [
            "Personalized event suggestions based on user behavior",
            "Machine learning-powered recommendations",
            "Tailored 'For You' section"
          ],
          image: "/projects/UTrip/recommendations.png"
        }
      ]
    },
    organizerFeatures: {
      title: "Organizer Portal",
      sections: [
        {
          name: "Performance Dashboard",
          description: "Organizers get a dedicated dashboard with real-time analytics on revenue, total reservations, and user engagement.",
          features: [
            "Real-time revenue tracking",
            "Reservation analytics",
            "User engagement metrics (favorites, views)"
          ],
          image: "/projects/UTrip/organizer_stats.png"
        },
        {
          name: "Event Management",
          description: "Create and manage events with a comprehensive workflow system.",
          features: [
            "Event Creation: Add images, locations, pricing, and detailed descriptions",
            "Approval System: Events start as PENDING and notify admins for review",
            "Edit & Update: Full control over event lifecycle"
          ],
          image: "/projects/UTrip/organizer_events.png"
        }
      ]
    },
    adminFeatures: {
      title: "Admin Administration",
      sections: [
        {
          name: "Overview Dashboard",
          description: "The command center for platform management with high-level metrics.",
          features: [
            "Total revenue (commission-based) tracking",
            "User growth analytics",
            "Event distribution insights",
            "Platform health monitoring"
          ],
          image: "/projects/UTrip/admin_overview.png"
        },
        {
          name: "Event Management",
          description: "Admins receive notifications for new pending events and have full approval control.",
          features: [
            "Review event details before approval",
            "Approve or Reject events with feedback",
            "Monitor all platform events",
            "Quality control and content moderation"
          ],
          image: "/projects/UTrip/admin_events.png"
        },
        {
          name: "User Management",
          description: "Full control over user accounts and role management.",
          features: [
            "View all registered users",
            "Manage user roles (Tourist, Organizer, Admin)",
            "Account activation/deactivation",
            "User support and auditing"
          ],
          image: "/projects/UTrip/admin_users.png"
        },
        {
          name: "Reservation Management",
          description: "Inspect all reservation data for support and auditing purposes.",
          features: [
            "Complete reservation history",
            "Payment tracking and verification",
            "Refund management",
            "Financial reporting"
          ],
          image: "/projects/UTrip/admin_reservations.png"
        }
      ]
    }
  };

  const gymCoreDetails = {
    overview: {
      title: "GymCore Overview",
      description: "A comprehensive, role-based fitness management platform built with Next.js, TypeScript, and MongoDB. This application provides a complete ecosystem for gyms to manage clients, coaches, workout programs, nutrition tracking, and personal fitness analytics.",
      techStack: [
        { category: "Frontend", tech: "Next.js 15 (App Router), TypeScript, Tailwind CSS, Shadcn/ui" },
        { category: "Backend", tech: "MongoDB with Mongoose, Next.js API Routes, NextAuth.js" },
        { category: "Analytics", tech: "Recharts for progress tracking and system metrics" },
        { category: "Security", tech: "bcryptjs, JWT, Middleware Protection" },
      ],
      features: [
        "Role-Based Access Control (Client, Coach, Admin)",
        "Personalized Workout Programs",
        "Nutrition & Macro Tracking",
        "Progress Analytics with Charts",
        "Coach-Client Management Dashboard",
        "System-wide Admin Analytics",
        "Dark Mode Support",
        "Responsive Mobile-First Design"
      ]
    },
    clientFeatures: {
      title: "Client Experience",
      sections: [
        {
          name: "Client Dashboard & Stats",
          description: "The main overview displaying key fitness metrics and allowing custom stat tracking.",
          features: [
            "Pinned Personal Stats (weight, body fat %, muscle mass)",
            "Active Programs Summary",
            "Personal Records tracker",
            "Stat Management Modal for historical data"
          ],
          images: ["/projects/GymCore/screenshots/appercu page (client).png", "/projects/GymCore/screenshots/appercu page mes stats popup (client).png"]
        },
        {
          name: "Workout & Program Tracking",
          description: "Follow customized routines and log progress in real-time.",
          features: [
            "Browse & enroll in coach-created programs",
            "Personal Tracker for active workouts",
            "Log sets, reps, and weights",
            "Detailed exercise instructions and progression tracking"
          ],
          images: ["/projects/GymCore/screenshots/see programs page (client).png", "/projects/GymCore/screenshots/personal tracker page (client).png", "/projects/GymCore/screenshots/workout programs page personal customizable (client).png"]
        },
        {
          name: "Nutrition & Analytics",
          description: "Manage daily intake and visualize transformation progress.",
          features: [
            "Nutrition Tracker: Calorie and macro breakdown (proteins, carbs, fats)",
            "Meal logging with categorization",
            "Progress Analysis: Interactive charts for weight and measurements",
            "Time-range analytics and goal tracking"
          ],
          images: ["/projects/GymCore/screenshots/nutritions tracker (client).png", "/projects/GymCore/screenshots/nutrition page add log (client).png", "/projects/GymCore/screenshots/progress analysis (client).png"]
        }
      ]
    },
    coachFeatures: {
      title: "Coach Portal",
      sections: [
        {
          name: "Coach Dashboard",
          description: "Tools for managing multiple clients and monitoring their success.",
          features: [
            "Client Activity Feed",
            "Enrollment analytics for created programs",
            "Recent client updates and milestones"
          ],
          image: "/projects/GymCore/screenshots/appercu page  (coach).png"
        },
        {
          name: "Program Builder",
          description: "Intuitive interface for creating high-quality workout content.",
          features: [
            "My Programs: Manage all created routines",
            "Exercise Builder with sets/reps/rest periods",
            "Save programs as templates",
            "Exercise library search"
          ],
          images: ["/projects/GymCore/screenshots/my programs page (coach).png", "/projects/GymCore/screenshots/create program (coach).png"]
        },
        {
          name: "Client Management",
          description: "Directly assign programs and track individual progress.",
          features: [
            "Manage assigned students",
            "Program assignment workflow",
            "Monitor student workout completion rates"
          ],
          image: "/projects/GymCore/screenshots/manage my clients (coach).png"
        }
      ]
    },
    adminFeatures: {
      title: "Admin Control",
      sections: [
        {
          name: "Platform Analytics",
          description: "High-level overview of system growth and health.",
          features: [
            "Total users and program metrics",
            "Interactive system analytics dashboards",
            "User growth trends"
          ],
          images: ["/projects/GymCore/screenshots/appercu page (admin).png", "/projects/GymCore/screenshots/system analytics (admin).png"]
        },
        {
          name: "User & Program Governance",
          description: "Full administrative control over the community and content.",
          features: [
            "Comprehensive User Management table",
            "Create coaches and manage roles",
            "Platform-wide Program Management",
            "Data exporting capabilities"
          ],
          images: ["/projects/GymCore/screenshots/user management (admin).png", "/projects/GymCore/screenshots/prog management (admin).png"]
        }
      ]
    }
  };

  const restaurantDetails = {
    overview: {
      title: "Tunisian Restaurant Overview",
      description: "A specialized platform for discovering Tunisian culinary excellence. The app features a robust review system enhanced by AI sentiment analysis to help users find the best dining experiences based on authentic feedback.",
      techStack: [
        { category: "Frontend", tech: "React, Tailwind CSS, Framer Motion" },
        { category: "Backend", tech: "Spring Boot, Java 17, MySQL" },
        { category: "AI Module", tech: "FastAPI, Python, NLTK/TextBlob for Sentiment Analysis" },
      ],
      features: [
        "Interactive Restaurant Discovery",
        "AI-Powered Review Sentiment Analysis",
        "Dynamic Home Carousel",
        "Detailed Review System",
        "Visual Analytics for Restaurant Owners",
        "Responsive Web Experience"
      ]
    },
    features: {
      title: "Core Functionalities",
      sections: [
        {
          name: "Discovery & Home",
          description: "An inviting homepage showcasing featured restaurants and trending Tunisian dishes.",
          features: [
            "High-resolution carousel of featured venues",
            "Quick access to top-rated restaurants",
            "Category-based filtering for cuisine types"
          ],
          image: "/projects/Tunisian restaurants screenshots/home carousel.png"
        },
        {
          name: "Smart Review System",
          description: "AI-driven analysis of customer feedback to provide deeper insights.",
          features: [
            "Sentiment Analysis: Reviews are automatically categorized as Positive, Neutral, or Negative",
            "Real-time sentiment scoring",
            "Detailed feedback forms with rating scales"
          ],
          images: ["/projects/Tunisian restaurants screenshots/review.png", "/projects/Tunisian restaurants screenshots/sentiment analysis.png"]
        },
        {
          name: "Restaurant Management",
          description: "Tools for restaurant owners to monitor their online presence.",
          features: [
            "Manage restaurant profile and menu",
            "View aggregated sentiment scores",
            "Track customer engagement"
          ],
          images: ["/projects/Tunisian restaurants screenshots/Capture d'écran 2025-02-23 202449.png", "/projects/Tunisian restaurants screenshots/Capture d'écran 2025-02-23 191120.png"]
        }
      ]
    }
  };

  const ecommerceDetails = {
    overview: {
      title: "Lebsa+ Overview",
      description: "A high-end fashion e-commerce platform designed to provide a premium online shopping experience. Lebsa+ focuses on visual storytelling and seamless user interaction in the fashion industry.",
      techStack: [
        { category: "Frontend", tech: "React, Redux, Material-UI, CSS Modules" },
        { category: "Design", tech: "Modern Typography, Minimalist Aesthetics, High-Res Imagery" },
      ],
      features: [
        "Premium Product Showcase",
        "Advanced Category Filtering",
        "Centralized State Management (Redux)",
        "Smooth Shopping Cart Flow",
        "Responsive Product Detail Pages",
        "Secure Checkout Simulation"
      ]
    },
    features: {
      title: "Fashion Experience & Management",
      sections: [
        {
          name: "Modern Storefront",
          description: "A premium homepage designed with visual storytelling at its core, featuring immersive sections and smooth transitions.",
          features: [
            "Hero section with high-fashion aesthetics",
            "Gender-specific shop entry points (Men/Women)",
            "Trending products carousel with interactive hover effects"
          ],
          images: [
            "/projects/Lebsa+ (Ecommerce)/home page (1st section).png",
            "/projects/Lebsa+ (Ecommerce)/home page (2nd section (goes to the shop directly with man or woman filter)).png",
            "/projects/Lebsa+ (Ecommerce)/home page (3rd section trending products carousel).png"
          ]
        },
        {
          name: "Shopping Journey",
          description: "Seamless discovery and transaction flow for the high-end shopper.",
          features: [
            "Advanced catalog with smart filtering",
            "Real-time Redux-powered shopping cart",
            "Modern authentication flow with interactive UI"
          ],
          images: [
            "/projects/Lebsa+ (Ecommerce)/products page (shop).png",
            "/projects/Lebsa+ (Ecommerce)/cart.png",
            "/projects/Lebsa+ (Ecommerce)/login page unhovered button allows to choose if cliked in the right goes to sign up if hovered and clicked from the left do the login action).png",
            "/projects/Lebsa+ (Ecommerce)/Sign up.png"
          ]
        },
        {
          name: "Seller Ecosystem",
          description: "Powerful tools for vendors to manage their niche in the fashion world.",
          features: [
            "Personalized seller dashboard",
            "Streamlined product creation workflow",
            "Catalog and inventory management"
          ],
          image: "/projects/Lebsa+ (Ecommerce)/seller dashboard (create product).png"
        }
      ]
    }
  };

  const symBookDetails = {
    overview: {
      title: "SymBook Overview",
      description: "A professional Symfony-based e-commerce platform featuring a secure workflow and advanced administrative tools. SymBook provides a full-featured shopping experience with a focus on reliability and security.",
      techStack: [
        { category: "Backend", tech: "Symfony, Doctrine ORM, MySQL" },
        { category: "Frontend", tech: "Twig, Bootstrap, JavaScript" },
        { category: "Integrations", tech: "Stripe Payment Gateway, Google Charts API" },
      ],
      features: [
        "Email-Confirmation Authentication",
        "Integrated AI Chatbot for Support",
        "Comprehensive Shopping Cart & Order System",
        "Admin Dashboard with Real-time Analytics",
        "Secure Stripe Payment Integration",
        "Automated PDF Invoicing"
      ]
    },
    features: {
      title: "Platform Features",
      sections: [
        {
          name: "E-commerce Core",
          description: "A robust shopping platform from product discovery to secure checkout.",
          features: [
            "Advanced product catalog with search",
            "Persistent shopping cart and order history",
            "Secure email-confirmed account creation",
            "Real-time order status tracking"
          ],
          image: "/images/symbook.png"
        },
        {
          name: "Admin & Analytics",
          description: "Complete control over the business with data-driven insights.",
          features: [
            "Interactive dashboard using Google Charts",
            "Intelligent chatbot for customer inquiries",
            "Comprehensive order and user governance",
            "Financial reporting and inventory management"
          ],
          image: "/images/symbook.png"
        }
      ]
    }
  };

  const eduConnectDetails = {
    overview: {
      title: "EduConnect Overview",
      description: "A modern academic collaboration platform bridging the gap between students and professors. EduConnect leverages AI to streamline learning and document management in a real-time environment.",
      techStack: [
        { category: "Frontend", tech: "Next.js, Tailwind CSS" },
        { category: "Backend", tech: "Supabase (PostgreSQL, Auth, Storage, Realtime)" },
        { category: "AI Module", tech: "OpenAI/LangChain for PDF Summarization" },
      ],
      features: [
        "Teacher-Led Course Creation",
        "One-Click Student Enrollment",
        "Real-time Student-Professor Chat",
        "AI-Powered PDF Course Summarization",
        "Secure Document Upload & Sharing",
        "Role-Based Dashboard (Admin/Student/Professor)"
      ]
    },
    features: {
      title: "Academic Modules",
      sections: [
        {
          name: "Course Management",
          description: "Empowering educators and learners with streamlined tools.",
          features: [
            "Teachers: Create, manage and organize structured courses",
            "Students: Easy discovery and enrollment in academic programs",
            "Real-time progress tracking"
          ],
          image: "/images/educonnect.png"
        },
        {
          name: "AI & Collaboration",
          description: "Fostering real-time interaction and intelligent study aids.",
          features: [
            "Live Chat: Instant messaging for real-time academic support",
            "AI Summarizer: Student can summarize any PDF document posted by the teacher",
            "Key concepts extraction from high-volume academic material"
          ],
          image: "/images/educonnect.png"
        }
      ]
    }
  };

  const renderDetailContent = (data) => {
    const content = data[activeTab];

    if (activeTab === "overview") {
      return (
        <div className="space-y-8">
          <div>
            <p className="text-white-50 text-lg leading-relaxed mb-6">
              {content.description}
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-bold mb-4 text-white">Technology Stack</h4>
            <div className="grid md:grid-cols-2 gap-4">
              {content.techStack.map((item, idx) => (
                <div key={idx} className="bg-black-200/50 border border-white/10 rounded-lg p-4">
                  <div className="text-purple-400 font-semibold mb-1">{item.category}</div>
                  <div className="text-white-50 text-sm">{item.tech}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-bold mb-4 text-white">Key Features</h4>
            <div className="grid md:grid-cols-2 gap-3">
              {content.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                  <span className="text-white-50">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-10">
        <p className="text-white-50 text-lg font-medium">{content.title}</p>
        {content.sections.map((section, idx) => (
          <div key={idx} className="space-y-4">
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="text-2xl font-bold text-white mb-2">{section.name}</h4>
              <p className="text-white-50 mb-4">{section.description}</p>
              <ul className="space-y-2">
                {section.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2 text-white-50">
                    <span className="text-purple-400">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Screenshots */}
            {section.image && (
              <div
                className="rounded-xl overflow-hidden border border-white/10 shadow-lg cursor-zoom-in group/img"
                onClick={() => setZoomImage(section.image)}
              >
                <img
                  src={section.image}
                  alt={section.name}
                  className="w-full h-auto transition-transform duration-500 group-hover/img:scale-[1.02]"
                />
              </div>
            )}
            {section.images && (
              <div className={`grid ${section.images.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"} gap-4`}>
                {section.images.map((img, imgIdx) => (
                  <div
                    key={imgIdx}
                    className="rounded-xl overflow-hidden border border-white/10 shadow-lg group/img cursor-zoom-in"
                    onClick={() => setZoomImage(img)}
                  >
                    <img
                      src={img}
                      alt={`${section.name} ${imgIdx + 1}`}
                      className="w-full h-auto transition-transform duration-500 group-hover/img:scale-105"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div
      id="work"
      ref={sectionRef}
      className="w-full section-padding min-h-screen pb-32"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center mb-24 md:mb-32">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-white uppercase bg-white/10 rounded-full border border-white/10">
            Selected Work
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 text-center">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mt-6 rounded-full" />
        </div>

        {/* Featured Project 1: UTrip */}
        <div className="relative w-full h-[600px] rounded-3xl overflow-hidden group border border-white/10 mb-32">
          {/* Background Image */}
          <div className="absolute inset-0 cursor-zoom-in" onClick={() => setZoomImage("/utrip-hero.jpg")}>
            <img
              src="/utrip-hero.jpg"
              alt="UTrip Platform"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-50 group-hover:opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 pointer-events-none">
            <div className="max-w-2xl pointer-events-auto">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold uppercase tracking-wider border border-purple-500/20">
                  Tourism & Events
                </span>
              </div>

              <h3 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">UTrip</h3>

              <p className="text-white-50 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
                A comprehensive tourism platform connecting travelers with local experiences. Features sophisticated route planning, AI recommendations, and seamless booking flows.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {["React", "Spring Boot", "FastAPI", "MongoDB"].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 text-sm font-medium text-white-50">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => {
                    setActiveTab("overview");
                    setShowUTripModal(true);
                  }}
                  className="group flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-purple-50 transition-colors"
                >
                  View Case Study
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <button
                  onClick={() => setShowDemoModal(true)}
                  className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md text-white font-bold border border-white/10 hover:bg-white/20 transition-colors"
                >
                  Live Demo
                </button>
                <button
                  onClick={() => setShowGithubModal(true)}
                  className="flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 backdrop-blur-md text-white font-bold border border-white/10 hover:bg-white/20 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </button>
              </div>
            </div>

            {/* Floating Metric Card - Top Right */}
            <div className="absolute top-8 right-8 hidden md:block animate-float">
              <div className="bg-black/60 backdrop-blur-md border border-white/10 p-5 rounded-2xl flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/10">
                  <span className="text-3xl">🤖</span>
                </div>
                <div>
                  <div className="text-white font-bold text-lg">AI-Powered</div>
                  <div className="text-white-50 text-sm">Smart Recommendations</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Project 2: GymCore */}
        <div className="relative w-full h-[600px] rounded-3xl overflow-hidden group border border-white/10">
          {/* Background Image */}
          <div className="absolute inset-0 cursor-zoom-in" onClick={() => setZoomImage("/gymcore-hero.jpg")}>
            <img
              src="/gymcore-hero.jpg"
              alt="GymCore Platform"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-50 group-hover:opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 pointer-events-none">
            <div className="max-w-2xl pointer-events-auto">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-500/20">
                  Fitness Tech
                </span>
              </div>

              <h3 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">GymCore</h3>

              <p className="text-white-50 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
                An all-in-one fitness management ecosystem connecting coaches and clients. Delivers personalized workout plans, nutrition tracking, and detailed progress analytics.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {["Next.js 15", "TypeScript", "MongoDB", "Recharts"].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 text-sm font-medium text-white-50">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => {
                    setActiveTab("overview");
                    setShowGymCoreModal(true);
                  }}
                  className="group flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-blue-50 transition-colors"
                >
                  View Case Study
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <button
                  onClick={() => setShowGymCoreGithubModal(true)}
                  className="flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 backdrop-blur-md text-white font-bold border border-white/10 hover:bg-white/20 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </button>
              </div>
            </div>

            {/* Floating Metric Card - Top Right */}
            <div className="absolute top-8 right-8 hidden md:block animate-float-delayed">
              <div className="bg-black/60 backdrop-blur-md border border-white/10 p-5 rounded-2xl flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/10">
                  <span className="text-3xl">⚡</span>
                </div>
                <div>
                  <div className="text-white font-bold text-lg">Real-time</div>
                  <div className="text-white-50 text-sm">Progress Tracking</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
            <h3 className="text-3xl md:text-4xl font-bold">
              More Noteworthy Projects
            </h3>
            <div className="flex items-center gap-3 text-white-50/40 text-sm font-medium uppercase tracking-[0.2em]">
              <span>Scroll to Explore</span>
              <div className="w-12 h-[1px] bg-white/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/50 animate-shimmer-fast" />
              </div>
            </div>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar hover:no-scrollbar focus:no-scrollbar scrolling-touch">

            {[
              {
                title: "Tunisian Restaurant",
                subtitle: "Reviews & AI Sentiment",
                description: "Full-stack platform with Spring Boot and Python for intelligent culinary feedback.",
                image: "/projects/Tunisian restaurants screenshots/home carousel.png",
                tags: ["React", "Spring Boot", "AI"],
              },
              {
                title: "Lebsa+",
                subtitle: "Fashion E-commerce",
                description: "Modern fashion store featuring Redux state management and premium design.",
                image: "/projects/Lebsa+ (Ecommerce)/home page (1st section).png",
                tags: ["React", "Redux", "MUI"],
              },
              {
                title: "SymBook",
                subtitle: "Symfony Marketplace",
                description: "Secure e-commerce solution with advanced admin tools and Stripe payments.",
                image: "/images/symbook.png",
                tags: ["PHP", "Symfony", "Stripe"],
              },
              {
                title: "EduConnect",
                subtitle: "Academic Platform",
                description: "Next.js collaborative hub with real-time chat and AI PDF processing.",
                image: "/images/educonnect.png",
                tags: ["Next.js", "Supabase", "AI"],
              }
            ].map((p, i) => (
              <div
                key={i}
                className="group relative min-w-[300px] max-w-[340px] flex-shrink-0 rounded-2xl overflow-hidden bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 snap-center"
              >
                <div className="aspect-[4/3] relative overflow-hidden cursor-zoom-in" onClick={() => setZoomImage(p.image)}>
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black-100 via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-xl font-bold text-white mb-1">{p.title}</h4>
                    <p className="text-purple-400 text-xs font-semibold uppercase tracking-wider">{p.subtitle}</p>
                  </div>

                  <p className="text-white-50 text-sm line-clamp-2 mb-6 h-10">
                    {p.description}
                  </p>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => {
                        if (p.title === "SymBook") return;
                        setActiveTab("overview");
                        if (p.title === "Tunisian Restaurant") setShowRestaurantModal(true);
                        else if (p.title === "Lebsa+") setShowEcommerceModal(true);
                        else if (p.title === "EduConnect") setShowEduConnectModal(true);
                      }}
                      className={`flex-1 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap
                        ${p.title === "SymBook"
                          ? "bg-white/5 text-white/30 cursor-not-allowed border border-white/5"
                          : "bg-white/10 text-white hover:bg-white/20 border border-white/10 hover:border-white/20"}`}
                      disabled={p.title === "SymBook"}
                    >
                      {p.title === "SymBook" ? "Coming Soon" : "Details"}
                    </button>

                    <button
                      onClick={() => {
                        if (p.title === "Tunisian Restaurant") setShowRestaurantGithubModal(true);
                        else if (p.title === "Lebsa+") setShowEcommerceGithubModal(true);
                        else if (p.title === "SymBook") setShowSymBookGithubModal(true);
                        else if (p.title === "EduConnect") setShowEduConnectGithubModal(true);
                      }}
                      className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 border border-white/10 hover:border-white/20 transition-all"
                      title="View on GitHub"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-1 justify-end mt-3">
                    {p.tags.slice(0, 2).map(t => (
                      <span key={t} className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] uppercase font-bold text-white-50/60 border border-white/5">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Restaurant Details Modal */}
        {showRestaurantModal && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 animate-fadeIn">
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setShowRestaurantModal(false)} />
            <div className="relative w-full max-w-6xl max-h-[90vh] bg-black-100 border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
              <div className="sticky top-0 z-10 bg-gradient-to-r from-orange-600 to-red-600 p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-1">Tunisian Restaurant</h3>
                  <p className="text-orange-100">Reviews & AI Sentiment Analysis Platform</p>
                </div>
                <button onClick={() => setShowRestaurantModal(false)} className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="sticky top-[88px] z-10 bg-black-200 border-b border-white/10 px-6">
                <div className="flex gap-1">
                  {[
                    { id: "overview", label: "Overview", icon: "📊" },
                    { id: "features", label: "Analysis Tools", icon: "🧠" }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-6 py-4 font-semibold transition-all border-b-2 ${activeTab === tab.id ? "border-orange-500 text-white bg-black-50/50" : "border-transparent text-white-50 hover:text-white"}`}
                    >
                      <span className="mr-2">{tab.icon}</span>{tab.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="overflow-y-auto max-h-[calc(90vh-220px)] p-8">
                {renderDetailContent(restaurantDetails)}
              </div>
            </div>
          </div>
        )}

        {/* E-commerce Details Modal */}
        {showEcommerceModal && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 animate-fadeIn">
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setShowEcommerceModal(false)} />
            <div className="relative w-full max-w-6xl max-h-[90vh] bg-black-100 border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
              <div className="sticky top-0 z-10 bg-gradient-to-r from-pink-600 to-purple-600 p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-1">Lebsa+</h3>
                  <p className="text-pink-100">Modern Fashion E-commerce</p>
                </div>
                <button onClick={() => setShowEcommerceModal(false)} className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="sticky top-[88px] z-10 bg-black-200 border-b border-white/10 px-6">
                <div className="flex gap-1">
                  {[
                    { id: "overview", label: "Overview", icon: "📊" },
                    { id: "features", label: "Shopping Flow", icon: "🛍️" }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-6 py-4 font-semibold transition-all border-b-2 ${activeTab === tab.id ? "border-pink-500 text-white bg-black-50/50" : "border-transparent text-white-50 hover:text-white"}`}
                    >
                      <span className="mr-2">{tab.icon}</span>{tab.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="overflow-y-auto max-h-[calc(90vh-220px)] p-8">
                {renderDetailContent(ecommerceDetails)}
              </div>
            </div>
          </div>
        )}
        {/* SymBook Details Modal */}
        {showSymBookModal && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 animate-fadeIn">
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setShowSymBookModal(false)} />
            <div className="relative w-full max-w-6xl max-h-[90vh] bg-black-100 border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
              <div className="sticky top-0 z-10 bg-gradient-to-r from-amber-600 to-yellow-600 p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-1">SymBook E-commerce</h3>
                  <p className="text-amber-100">Symfony & Stripe Powered Platform</p>
                </div>
                <button onClick={() => setShowSymBookModal(false)} className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="sticky top-[88px] z-10 bg-black-200 border-b border-white/10 px-6">
                <div className="flex gap-1">
                  {[
                    { id: "overview", label: "Overview", icon: "📊" },
                    { id: "features", label: "Features", icon: "🛍️" }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-6 py-4 font-semibold transition-all border-b-2 ${activeTab === tab.id ? "border-amber-500 text-white bg-black-50/50" : "border-transparent text-white-50 hover:text-white"}`}
                    >
                      <span className="mr-2">{tab.icon}</span>{tab.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="overflow-y-auto max-h-[calc(90vh-220px)] p-8">
                {renderDetailContent(symBookDetails)}
              </div>
            </div>
          </div>
        )}

        {/* EduConnect Details Modal */}
        {showEduConnectModal && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 animate-fadeIn">
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setShowEduConnectModal(false)} />
            <div className="relative w-full max-w-6xl max-h-[90vh] bg-black-100 border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
              <div className="sticky top-0 z-10 bg-gradient-to-r from-emerald-600 to-green-600 p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-1">EduConnect</h3>
                  <p className="text-emerald-100">Next.js & Supabase Academic Hub</p>
                </div>
                <button onClick={() => setShowEduConnectModal(false)} className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="sticky top-[88px] z-10 bg-black-200 border-b border-white/10 px-6">
                <div className="flex gap-1">
                  {[
                    { id: "overview", label: "Overview", icon: "📊" },
                    { id: "features", label: "Core Modules", icon: "🛠️" }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-6 py-4 font-semibold transition-all border-b-2 ${activeTab === tab.id ? "border-emerald-500 text-white bg-black-50/50" : "border-transparent text-white-50 hover:text-white"}`}
                    >
                      <span className="mr-2">{tab.icon}</span>{tab.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="overflow-y-auto max-h-[calc(90vh-220px)] p-8">
                {renderDetailContent(eduConnectDetails)}
              </div>
            </div>
          </div>
        )}

        {/* UTrip Details Modal */}
        {showUTripModal && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 animate-fadeIn">
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setShowUTripModal(false)} />
            <div className="relative w-full max-w-6xl max-h-[90vh] bg-black-100 border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="sticky top-0 z-10 bg-gradient-to-r from-purple-900 to-indigo-900 p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-1">UTrip Platform</h3>
                  <p className="text-purple-200">Full-Stack Tourism Solution</p>
                  <div className="mt-2 text-sm text-purple-200/80 hover:text-white transition-colors">
                    <a href="#demo" className="underline">Live Demo Available</a>
                  </div>
                </div>
                <button
                  onClick={() => setShowUTripModal(false)}
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                >
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Tabs */}
              <div className="sticky top-[108px] z-10 bg-black-200 border-b border-white/10 px-6 overflow-x-auto">
                <div className="flex gap-1 min-w-max">
                  {[
                    { id: "overview", label: "Overview", icon: "📊" },
                    { id: "userFeatures", label: "Tourist Features", icon: "🌍" },
                    { id: "organizerFeatures", label: "Organizer Portal", icon: "📅" },
                    { id: "adminFeatures", label: "Admin Console", icon: "⚙️" }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-6 py-4 font-semibold transition-all border-b-2 flex items-center ${activeTab === tab.id
                        ? "border-purple-500 text-white bg-black-50/50"
                        : "border-transparent text-white-50 hover:text-white"
                        }`}
                    >
                      <span className="mr-2">{tab.icon}</span>{tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="overflow-y-auto max-h-[calc(90vh-240px)] p-8">
                {renderDetailContent(utripDetails)}
              </div>
            </div>
          </div>
        )}

        {/* GymCore Details Modal */}
        {showGymCoreModal && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 animate-fadeIn">
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setShowGymCoreModal(false)} />
            <div className="relative w-full max-w-6xl max-h-[90vh] bg-black-100 border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
              <div className="sticky top-0 z-10 bg-gradient-to-r from-blue-900 to-cyan-900 p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-1">GymCore System</h3>
                  <p className="text-blue-200">Use "admin@gymcore.com" / "admin123" to test Admin features</p>
                </div>
                <button
                  onClick={() => setShowGymCoreModal(false)}
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                >
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="sticky top-[88px] z-10 bg-black-200 border-b border-white/10 px-6 overflow-x-auto">
                <div className="flex gap-1 min-w-max">
                  {[
                    { id: "overview", label: "Overview", icon: "📊" },
                    { id: "clientFeatures", label: "Client App", icon: "💪" },
                    { id: "coachFeatures", label: "Coach Portal", icon: "📋" },
                    { id: "adminFeatures", label: "Admin Panel", icon: "🛡️" }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-6 py-4 font-semibold transition-all border-b-2 flex items-center ${activeTab === tab.id
                        ? "border-blue-500 text-white bg-black-50/50"
                        : "border-transparent text-white-50 hover:text-white"
                        }`}
                    >
                      <span className="mr-2">{tab.icon}</span>{tab.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="overflow-y-auto max-h-[calc(90vh-190px)] p-8">
                {renderDetailContent(gymCoreDetails)}
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Demo Info Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 animate-fadeIn">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setShowDemoModal(false)} />
          <div className="relative w-full max-w-md bg-black-100 border border-white/20 rounded-2xl overflow-hidden shadow-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">⚠️</span>
              <h3 className="text-2xl font-bold text-white">Live Demo Info</h3>
            </div>

            <div className="space-y-4 mb-8 text-white-50">
              <p>
                The backend is hosted on a free Render instance. It may spin down due to inactivity.
                <span className="text-purple-400 block mt-2">Please wait a moment for the initial request to process while the server wakes up.</span>
              </p>

              <div className="bg-white/5 p-5 rounded-xl border border-white/10">
                <h4 className="flex items-center gap-2 text-white font-bold mb-4 text-sm uppercase tracking-wider">
                  <span className="text-lg">🔑</span> Test Credentials
                </h4>

                <div className="space-y-4">
                  {/* Admin Account */}
                  <div className="p-3 rounded-lg bg-black-200 border border-white/5 group hover:border-purple-500/30 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                      <span className="text-white font-semibold text-sm">Admin Access</span>
                    </div>
                    <div className="grid grid-cols-[70px_1fr] gap-y-1 text-xs">
                      <span className="text-white-50">Email:</span>
                      <span className="font-mono text-purple-300 select-all">admin@Utrip.com</span>

                      <span className="text-white-50">Password:</span>
                      <span className="font-mono text-purple-300 select-all">Test123!</span>
                    </div>
                  </div>

                  {/* Organizer Account */}
                  <div className="p-3 rounded-lg bg-black-200 border border-white/5 group hover:border-blue-500/30 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      <span className="text-white font-semibold text-sm">Organizer Access</span>
                    </div>
                    <div className="grid grid-cols-[70px_1fr] gap-y-1 text-xs">
                      <span className="text-white-50">Email:</span>
                      <span className="font-mono text-blue-300 select-all">organizer@Utrip.com</span>

                      <span className="text-white-50">Password:</span>
                      <span className="font-mono text-blue-300 select-all">Test123!</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setShowDemoModal(false)}
                className="flex-1 px-4 py-3 rounded-xl border border-white/10 text-white hover:bg-white/10 transition-colors font-medium text-sm"
              >
                Cancel
              </button>
              <a
                href="https://u-trip-frontend-p9tp.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowDemoModal(false)}
                className="flex-1 px-4 py-3 rounded-xl bg-white text-black font-bold hover:bg-white/90 transition-colors text-center text-sm"
              >
                Proceed to Demo
              </a>
            </div>
          </div>
        </div>
      )}

      {/* GitHub Repositories Modal */}
      {showGithubModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 animate-fadeIn">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setShowGithubModal(false)} />
          <div className="relative w-full max-w-md bg-black-100 border border-white/20 rounded-2xl overflow-hidden shadow-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <h3 className="text-2xl font-bold text-white">GitHub Repositories</h3>
            </div>

            <div className="space-y-4 mb-8">
              {/* Frontend Repository */}
              <a
                href="https://github.com/oubaidboussaidi/UTrip-Frontend"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-bold text-sm group-hover:text-purple-300 transition-colors">Frontend</h4>
                  <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-300 text-xs font-bold border border-green-500/30">
                    Public
                  </span>
                </div>
                <p className="text-white-50 text-xs">React web application</p>
              </a>

              {/* Backend Repository */}
              <a
                href="https://github.com/oubaidboussaidi/UTrip-backend"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-bold text-sm group-hover:text-purple-300 transition-colors">Backend</h4>
                  <span className="px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 text-xs font-bold border border-red-500/30">
                    Private
                  </span>
                </div>
                <p className="text-white-50 text-xs">Spring Boot REST API</p>
              </a>

              {/* AI Module Repository */}
              <a
                href="https://github.com/oubaidboussaidi/UTrip-AI-Module"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-bold text-sm group-hover:text-purple-300 transition-colors">AI Module</h4>
                  <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-300 text-xs font-bold border border-green-500/30">
                    Public
                  </span>
                </div>
                <p className="text-white-50 text-xs">Python FastAPI recommendation engine</p>
              </a>
            </div>

            <button
              onClick={() => setShowGithubModal(false)}
              className="w-full px-4 py-3 rounded-xl border border-white/10 text-white hover:bg-white/10 transition-colors font-medium text-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* GymCore GitHub Modal */}
      {showGymCoreGithubModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 animate-fadeIn">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setShowGymCoreGithubModal(false)} />
          <div className="relative w-full max-w-md bg-black-100 border border-white/20 rounded-2xl overflow-hidden shadow-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <h3 className="text-2xl font-bold text-white">GitHub Repository</h3>
            </div>

            <div className="mb-8">
              {/* Full Stack Repository */}
              <a
                href="https://github.com/oubaidboussaidi/GymApp-Nextjs"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-bold text-sm group-hover:text-blue-300 transition-colors">GymCore Full-Stack</h4>
                  <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-300 text-xs font-bold border border-green-500/30">
                    Public
                  </span>
                </div>
                <p className="text-white-50 text-xs">Next.js 15 + TypeScript + MongoDB</p>
              </a>
            </div>

            <button
              onClick={() => setShowGymCoreGithubModal(false)}
              className="w-full px-4 py-3 rounded-xl border border-white/10 text-white hover:bg-white/10 transition-colors font-medium text-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Tunisian Restaurant GitHub Modal */}
      {showRestaurantGithubModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 animate-fadeIn">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setShowRestaurantGithubModal(false)} />
          <div className="relative w-full max-w-md bg-black-100 border border-white/20 rounded-2xl overflow-hidden shadow-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <h3 className="text-2xl font-bold text-white">GitHub Repository</h3>
            </div>

            <div className="mb-8">
              <a
                href="https://github.com/oubaidboussaidi/tunisian-restaurant-app"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-orange-500/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-bold text-sm group-hover:text-orange-300 transition-colors">Tunisian Restaurant Full-Stack</h4>
                  <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-300 text-xs font-bold border border-green-500/30">
                    Public
                  </span>
                </div>
                <p className="text-white-50 text-xs">React + Spring Boot + Python AI</p>
              </a>
            </div>

            <button
              onClick={() => setShowRestaurantGithubModal(false)}
              className="w-full px-4 py-3 rounded-xl border border-white/10 text-white hover:bg-white/10 transition-colors font-medium text-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Lebsa+ GitHub Modal */}
      {showEcommerceGithubModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 animate-fadeIn">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setShowEcommerceGithubModal(false)} />
          <div className="relative w-full max-w-md bg-black-100 border border-white/20 rounded-2xl overflow-hidden shadow-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <h3 className="text-2xl font-bold text-white">GitHub Repositories</h3>
            </div>

            <div className="space-y-4 mb-8">
              {/* Frontend Repository */}
              <a
                href="https://github.com/oubaidboussaidi/ecommerceSOA-Frontend"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-bold text-sm group-hover:text-purple-300 transition-colors">Frontend</h4>
                  <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-300 text-xs font-bold border border-green-500/30">
                    Public
                  </span>
                </div>
                <p className="text-white-50 text-xs">React + Redux + Material UI</p>
              </a>

              {/* Backend Repository */}
              <a
                href="https://github.com/oubaidboussaidi/ecommerceSOA-Backend"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-bold text-sm group-hover:text-purple-300 transition-colors">Backend (SOA)</h4>
                  <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-300 text-xs font-bold border border-green-500/30">
                    Public
                  </span>
                </div>
                <p className="text-white-50 text-xs">Service-Oriented Architecture</p>
              </a>
            </div>

            <button
              onClick={() => setShowEcommerceGithubModal(false)}
              className="w-full px-4 py-3 rounded-xl border border-white/10 text-white hover:bg-white/10 transition-colors font-medium text-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* SymBook GitHub Modal */}
      {showSymBookGithubModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 animate-fadeIn">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setShowSymBookGithubModal(false)} />
          <div className="relative w-full max-w-md bg-black-100 border border-white/20 rounded-2xl overflow-hidden shadow-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <h3 className="text-2xl font-bold text-white">GitHub Repository</h3>
            </div>

            <div className="mb-8">
              <a
                href="https://github.com/oubaidboussaidi/SymBook"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-bold text-sm group-hover:text-purple-300 transition-colors">SymBook Full-Stack</h4>
                  <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-300 text-xs font-bold border border-green-500/30">
                    Public
                  </span>
                </div>
                <p className="text-white-50 text-xs">PHP Symfony + Stripe Integration</p>
              </a>
            </div>

            <button
              onClick={() => setShowSymBookGithubModal(false)}
              className="w-full px-4 py-3 rounded-xl border border-white/10 text-white hover:bg-white/10 transition-colors font-medium text-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* EduConnect GitHub Modal */}
      {showEduConnectGithubModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 animate-fadeIn">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setShowEduConnectGithubModal(false)} />
          <div className="relative w-full max-w-md bg-black-100 border border-white/20 rounded-2xl overflow-hidden shadow-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <h3 className="text-2xl font-bold text-white">GitHub Repository</h3>
            </div>

            <div className="mb-8">
              <a
                href="https://github.com/oubaidboussaidi/Educonnect"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-bold text-sm group-hover:text-blue-300 transition-colors">EduConnect Full-Stack</h4>
                  <span className="px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 text-xs font-bold border border-red-500/30">
                    Private
                  </span>
                </div>
                <p className="text-white-50 text-xs">Next.js + Supabase + AI PDF Processing</p>
              </a>
            </div>

            <button
              onClick={() => setShowEduConnectGithubModal(false)}
              className="w-full px-4 py-3 rounded-xl border border-white/10 text-white hover:bg-white/10 transition-colors font-medium text-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Image Lightbox / Zoom */}
      {zoomImage && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 animate-fadeIn">
          <div
            className="absolute inset-0 bg-black/95 backdrop-blur-md cursor-zoom-out"
            onClick={() => setZoomImage(null)}
          />
          <div className="relative max-w-[95vw] max-h-[95vh] rounded-xl overflow-hidden shadow-2xl border border-white/10 animate-zoomIn">
            <img
              src={zoomImage}
              alt="Zoomed details"
              className="w-full h-full object-contain"
            />
            <button
              onClick={() => setZoomImage(null)}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 flex items-center justify-center text-white transition-all border border-white/20"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
