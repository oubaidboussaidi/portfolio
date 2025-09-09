import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const restaurantRef = useRef(null);
  const symbookRef = useRef(null);
  const educonnectRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });

    const cards = [restaurantRef.current, symbookRef.current, educonnectRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* MAIN PROJECT */}
          <div ref={restaurantRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/restaurant.png" alt="Tunisian Restaurant App" />
            </div>
            <div className="text-content">
              <h2>
                Tunisian Restaurant Web App — Reviews, Favorites & Sentiment Analysis
              </h2>
              <p className="text-white-50 md:text-xl">
                React + Spring Boot + MongoDB + FastAPI (Transformers). Features: authentication, reviews, favorites, and an AI-powered sentiment dashboard.
              </p>
            </div>
          </div>

          {/* SIDE PROJECTS */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={symbookRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img src="/images/symbook.png" alt="SymBook E-commerce" />
              </div>
              <h2>SymBook — E-commerce Platform</h2>
              <p className="text-white-50 md:text-lg">
                Symfony + Doctrine + MySQL + Stripe. Features: email-confirm auth, chatbot, shopping cart, orders, and admin dashboard with Google Charts.
              </p>
            </div>

            <div className="project" ref={educonnectRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/educonnect.png" alt="EduConnect Platform" />
              </div>
              <h2>EduConnect — Student/Professor Platform</h2>
              <p className="text-white-50 md:text-lg">
                Next.js + Supabase. Features: course management, real-time chat, PDF upload for courses with AI summarization for students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
