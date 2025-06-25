document.addEventListener("DOMContentLoaded", () => {

    // Xử lý hiện số point theo số slide

    const slides = document.querySelectorAll(".carousel-item");
    const pointWrapper = document.querySelector(".point-wrapper");

    // Xóa các point nếu đã có
    pointWrapper.innerHTML = "";
    slides.forEach((_, index) => {
        const point = document.createElement("div");
        point.classList.add("point");

        if(index==0) {
            point.classList.add("point-now");
        }

        pointWrapper.appendChild(point);
    })

    const points = pointWrapper.querySelectorAll(".point")

    const carousel = document.getElementById("carouselExampleSlidesOnly");
    carousel.addEventListener("slid.bs.carousel", function (e) {
        const activeIndex = e.to; // index của slide mới
        console.log("bắt sự kiện chueyern slide");

        points.forEach((point, index) => {
            if(index == activeIndex) {
                point.classList.add("point-now");
            } else {
                point.classList.remove("point-now");
            }
        });
    });

    // Bắt sự kiện khi click vào nút trong slide
    points.forEach((point, index) => {
        point.addEventListener("click", () => {
            points.forEach((point) => {
                point.classList.remove("point-now");
            });
            point.classList.add("point-now");

            
            /*
                * Để chuyển slide bằng tay, phải lấy được "instance" (vị trí bộ nhớ)
                * mà Bootstrap tạo ra để quản lý carousel.
                *
                * Khi có instance rồi, mới gọi được các hàm có sẵn như:
                *   - .prev()  → chuyển về slide trước
                *   - .next()  → chuyển sang slide kế tiếp
                *   - .to(i)   → nhảy đến slide có index tương ứng
                *
                * Ở đây, khi người dùng nhấn vào chấm tròn (point),
                * ta dùng instance.to(index) để nhảy đến đúng slide tương ứng.
                *
                * Nếu không dùng instance mà chỉ gán class 'active' thủ công,
                * thì carousel sẽ không chạy đúng logic của Bootstrap (mất hiệu ứng, lỗi trạng thái).
            */
            const carousel = document.querySelector(".slider-container");

            console.log(carousel);
            // Lấy instance của slider tồn tại
            let carouselInstance = bootstrap.Carousel.getInstance(carousel);
            console.log(carouselInstance)

            // Chuyển đến slide
            carouselInstance.to(index);


            })
    })


    // ============================= Xử lý danh mục =======================================
    function initScrollControl(wrapperSelector) {
        const wrapper = document.querySelector(wrapperSelector);
        if (!wrapper) return;

        // Tìm các phần tử con cần dùng
        const scrollContent = wrapper.querySelector('.scroll-content'); // là khối có thể cuộn ngang
        const prevBtn = wrapper.querySelector('.previous-button'); // nút mũi tên trái
        const nextBtn = wrapper.querySelector('.next-button'); // nút mũi tên phải

        console.log("scrollWidth:", scrollContent.scrollWidth);
        console.log("clientWidth:", scrollContent.clientWidth);

        // Hàm kiểm tra và cập nhật nút
        function updateButtons() {
            // scrollLeft: vị trí hiện tại đã cuộn bao nhiêu pixel từ bên trái
            // scrollWidth: tổng chiều rộng của nội dung cuộn
            // clientWidth: chiều rộng vùng hiển thị (không tính phần bị che)

            const scrollLeft = scrollContent.scrollLeft; 
            const maxScrollLeft = scrollContent.scrollWidth - scrollContent.clientWidth;  // số pixel tối đa có thể cuộn

            prevBtn.classList.toggle('disable-button', scrollLeft <= 0); // Nếu đang ở đầu (scrollLeft <= 0 trả về true) thì vô hiệu nút trái
            nextBtn.classList.toggle('disable-button', scrollLeft >= maxScrollLeft - 1); // Nếu đang ở cuối (scrollLeft >= maxScrollLeft) → vô hiệu nút phải.

            console.log("scrollWidth:", scrollContent.scrollWidth);
            console.log("clientWidth:", scrollContent.clientWidth);
            console.log("maxScrollLeft:", maxScrollLeft);
        }

        function scrollByStep(direction) {
            const step = scrollContent.clientWidth;
            scrollContent.scrollBy({ left: direction * step, behavior: 'smooth' });
        }

        prevBtn.addEventListener('click', () => scrollByStep(-1)); // cuộn sang trái
        nextBtn.addEventListener('click', () => scrollByStep(1)); // cuộn sang phải
        scrollContent.addEventListener('scroll', updateButtons); // Theo dõi cuộn bằng tay

        updateButtons(); // Initial check
    }

    // ================================== Render Danh mục (categoryData) =================================
    function renderCategories() {
    const container = document.getElementById("category-list");
    container.innerHTML = categoryData
        .map(
        (item) => `
        <div class="category-card">
            <img src="${item.img}" alt="${item.name}">
            <p>${item.name}</p>
        </div>
        `
        )
        .join("");
    }

    // Render Top tìm kiếm (topSearchData)
    function renderTopSearch() {
    const container = document.querySelector(".top-search-scroll");
    container.innerHTML = topSearchData
        .map(
        (item) => `
        <div class="top-search-card">
            <div class="header">
            <img class="icon-top-search" src="../static/image/practice2/topsearch-top.png" alt="">
            <img class="top-search-img" src="${item.img}" alt="${item.title}">
            <p class="sold">${item.sold}</p>
            </div>
            <div class="title-top-search-card">${item.title}</div>
        </div>
        `
        )
        .join("");
    }

    // Render Gợi ý sản phẩm (suggestionData)
    function renderSuggestions() {
    const container = document.querySelector(".suggestion-grid");
    container.innerHTML = suggestionData
        .map((item) => {
        const videoIcon = item.isVideo
            ? `<span class="video-icon"><i class="fa-solid fa-circle-play"></i></span>`
            : "";

        const tagImages = item.tags
            .map(
            (tag) =>
                `<img class="img-title" src="../static/image/practice2/tag-${tag}.png" alt="">`
            )
            .join("");

        const flashTags = item.flashTags
            .map(
            (flash) =>
                `<span class="flash-tag ${flash.type}">${flash.label}</span>`
            )
            .join("");

        const formattedPrice = item.price.toLocaleString("vi-VN");

        return `
            <div class="suggestion-card">
            <div class="image-wrapper">
                <div class="sale-frame">${item.sale}</div>
                <img src="${item.frameImg}" alt="" class="product-img frame-img">
                <img src="${item.productImg}" alt="${item.title}" class="product-img">
                ${videoIcon}
            </div>

            <div class="title-wrapper">
                <div class="title">
                ${tagImages}
                ${item.title}
                </div>

                <div class="flashsale-tags">
                ${flashTags}
                </div>

                <div class="price-wrapper">
                <p class="price"><span class="vnd-symbol">₫</span>${formattedPrice}</p>
                <div class="sale-total">Đã bán ${item.sold}</div>
                </div>
            </div>
            </div>
        `;
        })
        .join("");
    }

    // Gọi hàm khi DOM đã sẵn sàng
        renderCategories();
        renderTopSearch();
        
        initScrollControl('.top-search-list');
        initScrollControl('.section-category'); 
    
        renderSuggestions();


})