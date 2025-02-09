import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: 0 }, // Bring particles over the content
        particles: {
          number: { value: 120, density: { enable: true, area: 800 } },
          color: { value: "#FFD700" }, // Golden particles
          shape: { type: "circle" },
          opacity: { value: 0.8, random: false, animation: { enable: true, speed: 0.3, sync: false } },
          size: { value: 3, random: true },
          move: { enable: true, speed: 1.5, direction: "none", outModes: "out" },
          links: { enable: true, distance: 130, color: "#FFD700", opacity: 0.6, width: 1.2 },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: ["grab", "repulse"] }, // Particles grab & move away when hovered
            onClick: { enable: true, mode: "push" }, // Clicking creates more particles
          },
          modes: {
            grab: { distance: 200, links: { opacity: 0.9 } },
            repulse: { distance: 120, duration: 0.4 },
            push: { quantity: 5 }, // Clicking generates 5 new particles
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
