document.addEventListener("DOMContentLoaded", () => {
    // ========================== Các sự kiện diễn ra trong PT1 ==================================

  

    



    // Sự kiện nhấn thay đổi màu và kích thước trong thumbnail


    // ====== Lấy danh sách các ảnh trong thumbnail =================


// document.querySelectorAll(".thumbnail-button").forEach(button => {
//     button.addEventListener("click", (e) => {
//         const isPrevious = e.currentTarget.classList.contains("previous-thumbnail");
//         const isNext = e.currentTarget.classList.contains("next-thumbnail");

//         const currentIndex = Array.from(changeImage).findIndex(img =>
//             img.classList.contains("img-main-now")
//         );

//         let newIndex;
//         if (isPrevious) {
//             newIndex = currentIndex <= 0 ? changeImage.length - 1 : currentIndex - 1;
//         } else if (isNext) {
//             newIndex = currentIndex >= changeImage.length - 1 ? 0 : currentIndex + 1;
//         } else {
//             return; // Không phải nút hợp lệ
//         }

//         // Cập nhật class và ảnh chính
//         changeImage.forEach(img => img.classList.remove("img-main-now"));
//         changeImage[newIndex].classList.add("img-main-now");

//         const newSrc = changeImage[newIndex].getAttribute("src");
//         document.querySelector(".img-main-img").setAttribute("src", newSrc);
//         changeImage[newIndex].scrollIntoView({ behavior: "smooth", inline: "center" });
//     });
// });



    const changeImage = document.querySelectorAll(".img-thumbnails .img-mini");

    // Sự kiện nhấn button lùi và tiến trong thumbnail
    document.querySelectorAll(".thumbnail-button").forEach(button => {
        button.addEventListener("click", (e)=> {

            // Xác định đó là nút tiến hay lùi:
            const isPrevious = e.currentTarget.classList.contains("previous-thumbnail");
            const isNext = e.currentTarget.classList.contains("next-thumbnail");
            console.log(isNext)


            // lấy index của img có chứa class img-main-now hiện tại
            const currentIndex = Array.from(changeImage).findIndex(img => img.classList.contains("img-main-now"));
            
            // Tạo hàm để tính newIndex
            function getNewPreviousIndex() {
                if (currentIndex <= 0) {
                    return changeImage.length - 1; // về cuối nếu đang ở đầu
                } else {
                    return currentIndex - 1; // lùi về một ảnh
                }
            };

            function getNewNextIndex() {
                if (currentIndex >= changeImage.length - 1) {
                    return 0; // về đầu nếu đang ở cuối
                } else {
                    return currentIndex + 1; // tiến lên một ảnh
                }
            };
            
            let newIndex;

            if(isNext) newIndex = getNewNextIndex();
            else if(isPrevious) newIndex = getNewPreviousIndex();
            else return;

            changeImage.forEach(img => {
                img.classList.remove("img-main-now")
            });

            changeImage[newIndex].classList.add("img-main-now");
            const newSrc = changeImage[newIndex].getAttribute("src");
            document.querySelector(".img-main-img").setAttribute("src", newSrc);
            changeImage[newIndex].scrollIntoView({behavior: "smooth"});
        })
    })
    
    

 
    // Sự kiện nhấn thay đổi ảnh trong thumbnail
    changeImage.forEach(option => {
        option.addEventListener("click", ()=> {
            console.log("Đã nhấn vào ảnh mini");

            changeImage.forEach(img => {
                img.classList.remove("img-main-now");
            })

            option.classList.add("img-main-now");

            const newSrc = option.getAttribute("src");

            // Cập nhật ảnh chính (giả sử chỉ có 1 ảnh chính)
            const mainImg = document.querySelector(".img-main-img");
            mainImg.setAttribute("src", newSrc);

        })
    })

    // Sự kiện nhấn thay đổi lựa chọn

    const changeColor = document.querySelectorAll(".color-options .button");

    changeColor.forEach(button => {
        button.addEventListener("click", () => {
            console.log("clicked color option");

            changeColor.forEach(btn => {
                btn.classList.remove("clicked", "checked");
            })

            button.classList.add("clicked", "checked");

            // Tìm thẻ img trong button và lấy src
            const newSrc = button.querySelector("img").getAttribute("src");

            document.querySelector(".img-main-img").setAttribute("src", newSrc)
        })
    })

    const changeSize = document.querySelectorAll(".size-options .button");

    changeSize.forEach(button => {
        button.addEventListener("click", () => {
            console.log("clicked size option");

            changeSize.forEach(btn => {
                btn.classList.remove("clicked", "checked");
            })

            button.classList.add("clicked", "checked");
        })
    })

    /* cú pháp jquery*/

    // $(document).ready(function () {
    //     $(".color-options .button").on("click" , function() {
    //         console.log("clicked color option");
    //         // xóa class ở tất cả các thành phần
    //         $(".color-options .button").removeClass("clicked", "checked");

    //         $(this).addClass("clicked", "checked");
    //     })
    // });

    // Sự kiện nhấn tăng giảm số lượng

    // $('.img-mini').hover(function() {
    //     $('.img-mini').removeClass('.img-main-now');
    //     $(this).addClass('.img-main-now');
    //     const newSrc = $(this).attr('src');

    //     $('.img-main-img').attr('src', newSrc);
    // });


    // Xử lý nút tăng giảm số lượng


    // $(document).ready(function(){
    //     $(".product-control .btn-number").on("click", function() {
    //         const input = $(this).siblings("input");
    //         let value = parseInt(input.val());

    //         console.log($(this).hasClass("plus"));
    //         if($(this).hasClass("plus")) {
    //             value+=1;
    //         } else if($(this).hasClass("minus")){
    //             if(value > 1) value -=1;
    //         }
            
    //         input.val(value);
    // })
    // })

    document.querySelectorAll(".btn-number").forEach(button => {
        button.addEventListener("click", () => {
            const parent = button.closest(".product-control");
            const input = parent.querySelector("input");

            let value = parseInt(input.value);
            console.log(value);

            if(button.classList.contains("plus")) value +=1;
            else if (button.classList.contains("minus")) {
                if (value > 1) value -=1;
            }

            input.value = value;
        })
    })

    // Nhấn icon yêu thích
    // jquery
    $(document).ready(function () {
        $(".heart").on("click", function (e) {
            const likeNumber = $(".like-number").text();
            let number = parseInt(likeNumber);
            console.log(number);

            if ($(this).hasClass("fa-regular")) {
                number += 1;
                $(this).removeClass("fa-regular").addClass("fa-solid");
            } else {
                number -= 1;
                $(this).removeClass("fa-solid").addClass("fa-regular");
            }

            $(".like-number").text(number);
        });
    })


    // Nếu chưa chọn màu và kích thước thì disable nút số tượng
    $(document).ready(function () {
        let isChooseColor = false;
        let isChooseSize = false;
        $(".product-control").addClass("disabled");
        $(".color-button").on("click", function () {
            isChooseColor = $(".color-button.clicked").length > 0;
            console.log(isChooseColor, isChooseSize);

            if(isChooseColor && isChooseSize) {
                $(".product-control").removeClass("disabled");
            } else {
                console.log("lỗi")
            }
        });

        $(".size-button").on("click", function () {
            isChooseSize = $(".size-button.clicked").length > 0;
            console.log(isChooseColor, isChooseSize);

            if(isChooseColor && isChooseSize) {
                $(".product-control").removeClass("disabled");
            } else {
                console.log("lỗi")
            }
        });
    });
})