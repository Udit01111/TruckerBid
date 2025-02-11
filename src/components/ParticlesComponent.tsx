import { useCallback } from "react";
import { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesComponent = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: false,
                background: { color: "transparent" },
                particles: {
                    number: { value: 80, density: { enable: true, value_area: 800 } },
                    color: { value: "#000000" }, // Black particles
                    shape: { type: "circle" },
                    opacity: { value: 0.8, random: false },
                    size: { value: 3, random: true },
                    links: {
                        enable: true,
                        distance: 100,
                        color: "#000000", // Black stick particles
                        opacity: 0.8,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: "none",
                        random: false,
                        straight: false,
                        outModes: { default: "bounce" },
                        attract: { enable: false },
                    },
                    interactivity: {
                        events: {
                            onHover: { enable: true, mode: "grab" },
                            onClick: { enable: true, mode: "push" },
                        },
                        modes: {
                            grab: { distance: 150, links: { opacity: 1 } },
                            push: { quantity: 4 },
                        },
                    },
                },
            }}
        />
    );
};

export default ParticlesComponent;
