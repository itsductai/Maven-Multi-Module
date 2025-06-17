function injectShakeKeyframes() {
  const shakeKeyframes = `
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
      20%, 40%, 60%, 80% { transform: translateX(2px); }
    }
  `
  const styleSheet = document.createElement("style")
  styleSheet.textContent = shakeKeyframes
  document.head.appendChild(styleSheet)
}

// welcome.particles.js
function initMouseParticles() {
  document.addEventListener("mousemove", (e) => {
    if (Math.random() > 0.95) {
      // Only occasionally create particles
      createMouseParticle(e.pageX, e.pageY)
    }
  })

  function createMouseParticle(x, y) {
    const particle = document.createElement("div")
    particle.style.position = "fixed"
    particle.style.left = x + "px"
    particle.style.top = y + "px"
    particle.style.width = "4px"
    particle.style.height = "4px"
    particle.style.background = "rgba(102, 126, 234, 0.6)"
    particle.style.borderRadius = "50%"
    particle.style.pointerEvents = "none"
    particle.style.zIndex = "999"
    particle.style.animation = "particleFade 1s ease-out forwards"

    document.body.appendChild(particle)

    setTimeout(() => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle)
      }
    }, 1000)
  }
}

function injectParticleKeyframes() {
  const particleKeyframes = `
        @keyframes particleFade {
            0% {
                opacity: 1;
                transform: scale(1);
            }
            100% {
                opacity: 0;
                transform: scale(0) translateY(-20px);
            }
        }
    `

  const particleStyleSheet = document.createElement("style")
  particleStyleSheet.textContent = particleKeyframes
  document.head.appendChild(particleStyleSheet)
}
