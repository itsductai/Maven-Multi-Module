document.addEventListener("DOMContentLoaded", () => {
    // animation khi chuyển từ trang welcome sang pt1
    document.getElementById("pt2Btn").addEventListener("click", () => {
        console.log("pt2Btn click"); // kiểm tra có log không
        $("#pt2Btn").addClass("clicked");
        
        setTimeout(() => {
            $("#pt2Btn").removeClass("clicked");
            window.location.href="/webpt2";
        }, 500);
    });
}); 