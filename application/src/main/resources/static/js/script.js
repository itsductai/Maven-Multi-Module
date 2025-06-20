// Sự kiện DOMContentLoaded đảm bảo DOM đã load xong mới chạy JS
// Liên kết đến <body> trong HTML
// <script th:src="@{/js/script.js}"></script>
document.addEventListener("DOMContentLoaded", () => {
  // Lấy nút surprise và container chứa emoji
  const surpriseButton = document.getElementById("surpriseBtn") // <button id="surpriseBtn">
  const emojiContainer = document.getElementById("emojiContainer") // <div id="emojiContainer">

  // Mảng các emoji dùng để nổ ngẫu nhiên
  const emojis = ["🎉", "🎊", "✨", "🌟", "💫", "🎈", "🎁", "🌈", "🦄", "💖", "🎭", "🎪", "🎨", "🎵", "🎶"]

  // Xử lý khi click nút
  surpriseButton.addEventListener("click", function (e) {
    // 🔘 Thêm hiệu ứng ripple bằng class clicked → liên kết CSS: .surprise-button.clicked .button-ripple
    this.classList.add("clicked")
    setTimeout(() => {
      this.classList.remove("clicked")
    }, 600)

    // Gọi hàm tạo hiệu ứng emoji nổ tại vị trí click
    createEmojiExplosion(e.pageX, e.pageY)

    // Đổi text trên nút tạm thời → liên kết HTML: <span class="button-text">
    const buttonText = this.querySelector(".button-text")
    const originalText = buttonText.textContent
    buttonText.textContent = "🎉 Surprise!"

    setTimeout(() => {
      buttonText.textContent = originalText
    }, 2000)

    // Lắc màn hình → thêm animation tạm thời cho body → liên kết CSS động tạo ở dưới
    document.body.style.animation = "shake 0.5s ease-in-out"
    setTimeout(() => {
      document.body.style.animation = ""
    }, 500)
  })

  // Tạo emoji bay ra tại vị trí click với delay lần lượt (hiệu ứng chuỗi)
  function createEmojiExplosion(centerX, centerY) {
    const numberOfEmojis = 15

    for (let i = 0; i < numberOfEmojis; i++) {
      setTimeout(() => {
        createFloatingEmoji(centerX, centerY)
      }, i * 100) // mỗi emoji delay thêm 100ms
    }
  }

  // 🌀 Tạo emoji riêng lẻ và random vị trí quanh điểm click
  function createFloatingEmoji(centerX, centerY) {
    const emoji = document.createElement("div")
    emoji.className = "floating-emoji" // liên kết CSS: .floating-emoji + @keyframes floatUp
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)]

    // Random vị trí từ điểm click ra xung quanh hình tròn bán kính 50–150px
    const angle = Math.random() * 2 * Math.PI
    const distance = Math.random() * 100 + 50
    const startX = centerX + Math.cos(angle) * distance
    const startY = centerY + Math.sin(angle) * distance

    emoji.style.left = startX + "px"
    emoji.style.top = startY + "px"

    emojiContainer.appendChild(emoji)

    // Tự xóa sau 3 giây tránh bị đầy DOM
    setTimeout(() => {
      if (emoji.parentNode) {
        emoji.parentNode.removeChild(emoji)
      }
    }, 3000)
  }

  // Tạo animation shake bằng cách chèn @keyframes động vào <style>
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

  // Di chuột ngẫu nhiên tạo hạt ánh sáng nhỏ → particle
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

  // Tạo animation particleFade bằng cách inject keyframes động
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

  // Hiệu ứng gõ chữ kiểu typewriter (đang để đó nếu muốn dùng sau)
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

  // IntersectionObserver để thêm class .animate-in khi phần tử vào vùng nhìn thấy
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
})
