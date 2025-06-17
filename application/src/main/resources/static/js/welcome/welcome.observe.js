function observeWelcomeCards() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in") // có thể dùng cho .welcome-card
      }
    })
  }, observerOptions)

  document.querySelectorAll(".welcome-card").forEach((el) => {
    observer.observe(el)
  })
}

// welcome.typing.js
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
