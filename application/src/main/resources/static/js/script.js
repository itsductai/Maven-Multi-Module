document.addEventListener("DOMContentLoaded", () => {
  const surpriseButton = document.getElementById("surpriseBtn")
  const emojiContainer = document.getElementById("emojiContainer")

  // Array of celebration emojis
  const emojis = ["🎉", "🎊", "✨", "🌟", "💫", "🎈", "🎁", "🌈", "🦄", "💖", "🎭", "🎪", "🎨", "🎵", "🎶"]

  // Button click handler
  surpriseButton.addEventListener("click", function (e) {
    // Add ripple effect
    this.classList.add("clicked")
    setTimeout(() => {
      this.classList.remove("clicked")
    }, 600)

    // Create emoji explosion
    createEmojiExplosion(e.pageX, e.pageY)

    // Change button text temporarily
    const buttonText = this.querySelector(".button-text")
    const originalText = buttonText.textContent
    buttonText.textContent = "🎉 Surprise!"

    setTimeout(() => {
      buttonText.textContent = originalText
    }, 2000)

    // Add screen shake effect
    document.body.style.animation = "shake 0.5s ease-in-out"
    setTimeout(() => {
      document.body.style.animation = ""
    }, 500)
  })

  // Create emoji explosion function
  function createEmojiExplosion(centerX, centerY) {
    const numberOfEmojis = 15

    for (let i = 0; i < numberOfEmojis; i++) {
      setTimeout(() => {
        createFloatingEmoji(centerX, centerY)
      }, i * 100)
    }
  }

  // Create individual floating emoji
  function createFloatingEmoji(centerX, centerY) {
    const emoji = document.createElement("div")
    emoji.className = "floating-emoji"
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)]

    // Random position around the click point
    const angle = Math.random() * 2 * Math.PI
    const distance = Math.random() * 100 + 50
    const startX = centerX + Math.cos(angle) * distance
    const startY = centerY + Math.sin(angle) * distance

    emoji.style.left = startX + "px"
    emoji.style.top = startY + "px"

    emojiContainer.appendChild(emoji)

    // Remove emoji after animation
    setTimeout(() => {
      if (emoji.parentNode) {
        emoji.parentNode.removeChild(emoji)
      }
    }, 3000)
  }

  // Add shake animation keyframes dynamically
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

  // Add particle effect on mouse move (subtle)
  const mouseTrail = []
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

  // Add particle fade animation
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

  // Welcome message typing effect (if you want to add it later)
  function typeWriter(element, text, speed = 50) {
    let i = 0
    element.textContent = ""

    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i)
        i++
        setTimeout(type, speed)
      }
    }

    type()
  }

  // Intersection Observer for animations (if you add more content)
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in")
      }
    })
  }, observerOptions)

  // Observe elements for animation
  document.querySelectorAll(".welcome-card").forEach((el) => {
    observer.observe(el)
  })
})
