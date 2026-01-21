import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState, useRef } from "react";
import { techStackIcons } from "../constants";

const TechStack = () => {
  const [activeLayer, setActiveLayer] = useState(null);
  const containerRef = useRef(null);

  const layers = [
    {
      id: "design",
      title: "Architecture & UX",
      skills: ["Figma", "Git", "Jira"],
      color: "#f59e0b",
      description: "Translating complex requirements into intuitive, high-fidelity prototypes and managed workflows."
    },
    {
      id: "frontend",
      title: "Client-Side Sync",
      skills: ["Next.js", "React.js", "Angular", "Flutter", "kotlin"],
      color: "#06b6d4",
      description: "Engineered for speed and responsiveness, bridging the gap between design and logic."
    },
    {
      id: "backend",
      title: "Logic Core",
      skills: ["Symfony", "Spring Boot", "Python"],
      color: "#a855f7",
      description: "The computational hub, managing state, security, and high-performance server processing."
    },
    {
      id: "database",
      title: "Persistence Layer",
      skills: ["SQL", "MongoDB"],
      color: "#10b981",
      description: "Structured and non-structured data integrity, optimized for rapid retrieval and scale."
    }
  ];

  useGSAP(() => {
    gsap.from(".blueprint-card", {
      rotateY: 90,
      opacity: 0,
      stagger: 0.1,
      duration: 1.2,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: "#skills",
        start: "top bottom-=100",
      },
    });
  }, { scope: containerRef });

  const handleCardClick = (id) => {
    setActiveLayer(activeLayer === id ? null : id);
  };

  return (
    <div id="skills" className="w-full py-12 bg-[#050505] relative overflow-hidden" ref={containerRef}>
      {/* Blueprint Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-5"
        style={{ backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />

      <div className="max-w-[1440px] mx-auto px-5 relative z-10">
        <div className="flex flex-col items-center mb-2">
          <div className="flex items-center gap-4 mb-2">
            <span className="h-px w-8 bg-blue-500/20" />
            <span className="text-blue-400 text-[10px] font-black uppercase tracking-[0.4em]">Integrated Stack</span>
            <span className="h-px w-8 bg-blue-500/20" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white text-center uppercase tracking-tighter mb-4">
            MY <span className="text-white/20">STACK</span>
          </h2>
          <p className="max-w-xl text-white-50/30 text-center text-base italic">
            Architectural foundations of my technical ecosystem.
          </p>
        </div>

        <div className="flex flex-col xl:flex-row gap-12 items-center justify-center pb-12">
          {/* Bigger, More Vertical Schema */}
          <div className="relative w-full max-w-[700px] h-[550px] flex items-center justify-center">
            {/* Center Hub */}
            <div className="absolute z-20 w-32 h-32 md:w-44 md:h-44 rounded-full bg-black border-2 border-white/10 flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.1)]">
              <div className="text-center">
                <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">Architecture</p>
                <h4 className="text-xl md:text-2xl font-black text-white">HUB</h4>
              </div>
              <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-ping" />
            </div>

            {/* Orbital Cards - More Vertical Circle */}
            {layers.map((layer, idx) => {
              const angles = [225, 315, 135, 45];
              const angle = angles[idx];
              // Further increased radius for a more spacious layout
              const radiusX = 220;
              const radiusY = 180;

              return (
                <div
                  key={layer.id}
                  onClick={() => handleCardClick(layer.id)}
                  className={`blueprint-card absolute z-30 transition-all duration-500 cursor-pointer
                             ${activeLayer === layer.id ? "scale-110" : "hover:scale-105"}`}
                  style={{
                    top: `calc(50% + ${Math.sin(angle * Math.PI / 180) * radiusY}px)`,
                    left: `calc(50% + ${Math.cos(angle * Math.PI / 180) * radiusX}px)`,
                    transform: 'translate(-50%, -50%)',
                    width: 'min(40vw, 200px)',
                  }}
                >
                  <div className={`relative p-5 rounded-2xl border transition-all duration-500 bg-black z-50 group
                                  ${activeLayer === layer.id ? "border-white border-2" : "border-white/10 hover:border-white/30"}`}
                    style={{ backgroundColor: '#000000', borderColor: activeLayer === layer.id ? layer.color : '' }}>

                    <div className="flex items-center justify-between mb-4">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/5 border border-white/10"
                        style={{ color: layer.color }}>
                        <span className="text-xl">
                          {layer.id === 'design' && '📐'}
                          {layer.id === 'frontend' && '💻'}
                          {layer.id === 'backend' && '⚙️'}
                          {layer.id === 'database' && '🗄️'}
                        </span>
                      </div>
                      <span className="text-[10px] font-black text-white/20 tracking-widest uppercase">{layer.id}</span>
                    </div>

                    <h3 className="text-xs md:text-sm font-black text-white mb-2 uppercase tracking-wide group-hover:text-blue-400 transition-colors">
                      {layer.title}
                    </h3>

                    <div className="flex gap-1.5 mt-auto">
                      {layer.skills.slice(0, 4).map(s => (
                        <div key={s} className="w-1 h-1 rounded-full bg-white/10" style={{ backgroundColor: activeLayer === layer.id ? layer.color : '' }} />
                      ))}
                    </div>
                  </div>

                  {/* Connecting Line to Hub */}
                  <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-px origin-left pointer-events-none transition-all duration-700
                                  ${activeLayer === layer.id ? "opacity-100" : "opacity-10"}`}
                    style={{
                      transform: `rotate(${angle + 180}deg) translateX(-110px)`,
                      background: `linear-gradient(90deg, transparent, ${layer.color})`
                    }} />
                </div>
              );
            })}
          </div>

          {/* Flexible Detail Panel */}
          <div className="w-full max-w-[600px] min-h-[400px]">
            {activeLayer ? (
              <div className="animate-reveal p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-3xl relative group">
                <div className="absolute top-0 right-0 p-6">
                  <span className="text-4xl opacity-5 font-black uppercase tracking-tighter select-none">
                    SPEC:{activeLayer}
                  </span>
                </div>

                <div className="flex items-center gap-5 mb-8">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10">
                    <span className="text-2xl animate-pulse">⚡</span>
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-blue-400 uppercase tracking-[0.3em] mb-1">Architecture Node</h4>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight">{layers.find(l => l.id === activeLayer).title}</h3>
                  </div>
                </div>

                <p className="text-white-50 text-lg leading-relaxed mb-10 italic border-l-4 border-white/10 pl-6">
                  "{layers.find(l => l.id === activeLayer).description}"
                </p>

                <div className="grid grid-cols-3 gap-6">
                  {layers.find(l => l.id === activeLayer).skills.map((skillName) => {
                    const tech = techStackIcons.find(t => t.name === skillName);
                    return (
                      <div key={skillName} className="group/skill flex flex-col items-center gap-3">
                        <div className="w-full aspect-square rounded-2xl bg-black border border-white/5 flex items-center justify-center p-5 group-hover/skill:border-blue-500/50 group-hover/skill:bg-blue-500/5 transition-all duration-500">
                          {tech ? (
                            <img src={tech.imgPath} alt={skillName} className="w-full h-full object-contain filter brightness-75 group-hover/skill:brightness-110 group-hover/skill:scale-125 transition-all duration-500" />
                          ) : (
                            <span className="text-[10px] font-black">{skillName}</span>
                          )}
                        </div>
                        <span className="text-[9px] font-black uppercase tracking-widest text-white/30 group-hover/skill:text-white transition-colors">
                          {skillName}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="h-full min-h-[400px] border border-dashed border-white/10 rounded-3xl flex flex-col items-center justify-center p-12 text-center group">
                <div className="w-20 h-20 mb-8 rounded-full border border-white/5 flex items-center justify-center animate-pulse group-hover:border-blue-500/30 transition-colors">
                  <svg className="w-10 h-10 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v4m6-4v4m6-4a2 2 0 100-4m0 4a2 2 0 110-4m0 4v4" />
                  </svg>
                </div>
                <h4 className="text-white/20 text-xs font-black uppercase tracking-[0.5em] mb-4">Initialize Diagnostics</h4>
                <p className="text-white/10 text-sm italic">Click on an architecture node to decode technical specifications</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
