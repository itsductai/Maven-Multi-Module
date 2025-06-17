function initSurpriseEffect() {
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
}
