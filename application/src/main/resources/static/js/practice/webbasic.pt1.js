document.addEventListener("DOMContentLoaded", () => {
    // animation khi chuyển từ trang welcome sang pt1
    document.getElementById("pt1Btn").addEventListener("click", () => {
        console.log("pt1Btn click"); // kiểm tra có log không
        $("#pt1Btn").addClass("clicked");
        
        setTimeout(() => {
            $("#pt1Btn").removeClass("clicked");
            window.location.href="/webpt1";
        }, 500);
    });
}); 