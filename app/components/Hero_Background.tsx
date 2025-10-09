"use client";
import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

export default function HeroBackground({ children }: { children: React.ReactNode }) {
  const particlesInit = useCallback(async (engine: Engine) => {
    // Load slim version for better performance
    await loadSlim(engine);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-darkTheme via-midnight to-brand-dark overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            number: { 
              value: 80, 
              density: { 
                enable: true, 
                //area: 800 
              } 
            },
            color: { 
              value: ["#8b5cf6", "#af9bb6", "#d4c5d9"] // Your custom purple colors
            },
            shape: { 
              type: "circle" 
            },
            opacity: { 
              value: 0.5, 
              //random: true,
              animation: {
                enable: true,
                speed: 1,
                //minimumValue: 0.1
              }
            },
            size: { 
              value: 3, 
              /*random: { 
                enable: true, 
                minimumValue: 1 
              } */
            },
            move: { 
              enable: true, 
              speed: 1, 
              direction: "none",
              random: true,
              straight: false,
              outModes: "out" 
            },
            links: { 
              enable: true,
              distance: 150,
              color: "#8b5cf6",
              opacity: 0.2,
              width: 1
            },
          },
          interactivity: {
            events: { 
              onHover: { 
                enable: true, 
                mode: "grab" 
              }, 
              onClick: { 
                enable: true, 
                mode: "push" 
              } 
            },
            modes: { 
              grab: { 
                distance: 140,
                links: {
                  opacity: 0.5
                }
              }, 
              push: { 
                quantity: 4 
              } 
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}