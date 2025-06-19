document.addEventListener("DOMContentLoaded", () => {
    const animateBtn = document.getElementById("animateBtn");

    animateBtn.addEventListener("click", () => {
        $("#animateBtn").addClass("clicked");
        
        setTimeout(() => {
            $("#animateBtn").removeClass("clicked");
        }, 500);
    });
}); 