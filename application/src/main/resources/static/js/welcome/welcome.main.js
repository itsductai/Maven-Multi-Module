// Sự kiện DOMContentLoaded đảm bảo DOM đã load xong mới chạy JS
// Liên kết đến <body> trong HTML
// <script th:src="@{/js/script.js}"></script>
document.addEventListener("DOMContentLoaded", () => {
  initSurpriseEffect();
  injectShakeKeyframes();
  initMouseParticles();
  injectParticleKeyframes();
  observeWelcomeCards();
});