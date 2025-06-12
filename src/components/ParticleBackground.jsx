// ParticleBackground.jsx
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticleBackground() {
  const init = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      init={init}
      options={{
        background: {
          color: "#0d47a1",
        },
        particles: {
          number: { value: 80 },
          size: { value: 3 },
          move: { enable: true, speed: 2 },
          links: { enable: true, color: "#ffffff" },
        },
      }}
    />
  );
}
