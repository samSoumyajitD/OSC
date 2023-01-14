import Particles from "react-tsparticles";

import { loadFull } from "tsparticles";



function Particle(){
    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
    };
    const particlesLoaded = (container) => {
        console.log(container);
    };
  return (
    
<Particles
        id="tsparticles"
        particlesInit={particlesInit}
        init={particlesInit}
        loaded={ particlesLoaded }
        options={ 
            
            {    "fullScreen": {
                "enable": true,
                "zIndex": -1
            },
                
                background: {
                   
                    color: {
                        value: "#000",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 3,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.2,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffff",
                    },
                    links: {
                        color: "#32527b",
                        distance: 150,
                        enable: true,
                        opacity: 4,
                        width: 3,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        //  outModes: {
                        //     default: "bounce",
                        //  },
                        random: false,
                        
                        straight: 6,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 100,
                    },
                    opacity: {
                        value: 0.75,
                    },
                    shape: {
                        type: "line",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: false,
            }}

            
            
            
            
        
    
        
      />
  )
}

export default Particle;