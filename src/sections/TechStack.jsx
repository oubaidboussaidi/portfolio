import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import React from "react";
import TitleHeader from "../components/TitleHeader";
import { techStackIcons, techStackDescription } from "../constants";

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
  });

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />

        {/* Optional description */}
        {techStackDescription && (
          <p className="text-center mt-4 text-gray-400">
            {techStackDescription}
          </p>
        )}

        <div className="tech-grid mt-8">
          {techStackIcons.map((tech, index) => (
            <div
              key={index}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <img
                    src={tech.imgPath}
                    alt={tech.name}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <div className="padding-x w-full">
                  <p className="text-center">{tech.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
