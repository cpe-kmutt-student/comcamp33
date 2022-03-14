import Particles from "react-tsparticles"

const particleConfig = {
    "fullScreen": {
        "zIndex": 12
    },
    "particles": {
        "move": {
            "enable": true,
            "speed": 0.3,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        },
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 750
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 83.91608391608392,
                    "size": 1,
                    "duration": 3,
                    "opacity": 1,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "opacity": {
            "value": 1,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1.5,
                "opacity_min": 0.2,
                "sync": false
            }
        },
        "shape": {
            "options": {
                "image": [
                    {
                        "src": "/assets/star.png",
                        "width": 32,
                        "height": 32
                    },
                ]
            },
            "type": "image"
        },
        "size": {
            "value": 7,
            "random": true,
            "animation": {
                "enable": true,
                "speed": 2,
                "minimumValue": 0.1,
            }
        },
    }
}

const StarParticle = () => {
    const particlesInit = (main) => {

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particleConfig}
        />
    )
}

export default StarParticle;
