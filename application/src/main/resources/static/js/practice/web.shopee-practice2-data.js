const categoryData = [
  { img: "/image/practice2/danhmuc-bachhoa.jpg", name: "Bách hóa" },
  { img: "/image/practice2/danhmuc-balonam.jpg", name: "Ba lô nam" },
  { img: "/image/practice2/danhmuc-chamsocthucung.jpg", name: "Chăm sóc thú cưng" },
  { img: "/image/practice2/danhmuc-dienthoai-phukien.jpg", name: "Điện thoại & phụ kiện" },
  { img: "/image/practice2/danhmuc-dochoi.jpg", name: "Đồ chơi" },
  { img: "/image/practice2/danhmuc-dongho.jpg", name: "Đồng hồ" },
  { img: "/image/practice2/danhmuc-giaydepnam.jpg", name: "Giày dép nam" },
  { img: "/image/practice2/danhmuc-giaydepnu.jpg", name: "Giày dép nữ" },
  { img: "/image/practice2/danhmuc-mayanh.jpg", name: "Máy ảnh" },
  { img: "/image/practice2/danhmuc-maytinhlaptop.jpg", name: "Máy tính & Laptop" },
  { img: "/image/practice2/danhmuc-mevabe.jpg", name: "Mẹ và bé" },
  { img: "/image/practice2/danhmuc-nhacuadoisong.jpg", name: "Nhà cửa & đời sống" },
  { img: "/image/practice2/danhmuc-nhasach.jpg", name: "Nhà sách" },
  { img: "/image/practice2/danhmuc-phukiennu.jpg", name: "Phụ kiện nữ" },
  { img: "/image/practice2/danhmuc-phuongtien.jpg", name: "Phương tiện" },
  { img: "/image/practice2/danhmuc-sacdep.jpg", name: "Sắc đẹp" },
  { img: "/image/practice2/danhmuc-suckhoe.jpg", name: "Sức khỏe" },
  { img: "/image/practice2/danhmuc-thethao.jpg", name: "Thể thao" },
  { img: "/image/practice2/danhmuc-thietbidiendd.jpg", name: "Thiết bị di động" },
  { img: "/image/practice2/danhmuc-thietbidientu.jpg", name: "Thiết bị điện tử" },
  { img: "/image/practice2/danhmuc-thoitrangnam.jpg", name: "Thời trang nam" },
  { img: "/image/practice2/danhmuc-thoitrangnu.jpg", name: "Thời trang nữ" },
  { img: "/image/practice2/danhmuc-thoitrangtreem.jpg", name: "Thời trang trẻ em" },
  { img: "/image/practice2/danhmuc-tuivinu.jpg", name: "Túi ví nữ" }
];

const topSearchData = [
  { img: "/image/practice2/topsearch.jpg", title: "Áo sơ mi nữ phong cách Hàn Quốc", sold: "Bán 125k / tháng" },
  { img: "/image/practice2/topsearch1.jpg", title: "Quạt mini cầm tay", sold: "Bán 105k / tháng" },
  { img: "/image/practice2/topsearch2.jpg", title: "Combo quần áo trẻ em ", sold: "Bán 90k / tháng" },
  { img: "/image/practice2/topsearch3.jpg", title: "Dù đi mưa cao cấp chống nắng chống mưa", sold: "Bán 78k / tháng" },
  { img: "/image/practice2/topsearch4.jpg", title: "Set bút viết học tập tiện dụng dễ dùng", sold: "Bán 65k / tháng" },
  { img: "/image/practice2/topsearch5.jpg", title: "Son Romand phiên bản mới", sold: "Bán 55k / tháng" },
  { img: "/image/practice2/topsearch6.jpg", title: "Giày dép mạng tại nhà", sold: "Bán 98k / tháng" },
  { img: "/image/practice2/topsearch7.jpg", title: "Khăn giấy rút tiện lợi", sold: "Bán 60k / tháng" },
  { img: "/image/practice2/topsearch8.jpg", title: "Kem dưỡng da sáng mịn ban đêm", sold: "Bán 44k / tháng" },
  { img: "/image/practice2/topsearch9.jpg", title: "Phấn phủ cho nữ cao cấp", sold: "Bán 87k / tháng" },
  { img: "/image/practice2/topsearch10.jpg", title: "Combo gói hạt giống cây trồng", sold: "Bán 72k / tháng" }
];



const suggestionData = [
  {
    sale: "-44%",
    frameImg: "/image/practice2/sanpham-frame1.png",
    productImg: "/image/practice2/sanpham1.png",
    isVideo: true,
    tags: ["yeuthich", "mall"],
    title: "Bút Đánh Dấu Ngòi Dài 20mm Đánh Dấu...",
    flashTags: [
      { type: "flash-sale", label: "Flash Sale 12:00 20 Th06" }
    ],
    price: 15800,
    sold: "12,5k"
  },
  {
    sale: "-10%",
    frameImg: "/image/practice2/sanpham-frame2.png",
    productImg: "/image/practice2/sanpham2.png",
    isVideo: false,
    tags: ["mall"],
    title: "Giấy note mini màu sắc dễ thương",
    flashTags: [
      { type: "voucher", label: "Giảm 5%" }, {type: "normal", label: "Rẻ Vô Địch" }
    ],
    price: 9800,
    sold: "8,2k" 
  },
  {
    sale: "-46%",
    frameImg: "/image/practice2/sanpham-frame3.png",
    productImg: "/image/practice2/sanpham3.png",
    isVideo: false,
    tags: ["yeuthich"],
    title: "Kệ góc tường 5 tầng Chuyên dụng cho nhà cửa ",
    flashTags: [
      { type: "normal", label: "Rẻ Vô Địch" }
    ],
    price: 21000,
    sold: "2,1k"
  },
  {
    sale: "-90%",
    frameImg: "",
    productImg: "/image/practice2/sanpham4.png",
    isVideo: true,
    tags: [],
    title: "Ly giữ nhiệt ICED AMERICA Inox 304 cao cấp chống trầy",
    flashTags: [
      { type: "flash-sale", label: "Đang bán chạy" }
    ],
    price: 3100,
    sold: "9,8k"
  },
  {
    sale: "-51%",
    frameImg: "/image/practice2/sanpham-frame2.png",
    productImg: "/image/practice2/sanpham5.png",
    isVideo: true,
    tags: ["mall"],
    title: "Jojo COCO Kính râm hình bầu dục đen hiện đại dành cho nữ",
    flashTags: [
      { type: "flash-sale", label: "Đang bán chạy" }
    ],
    price: 6350,
    sold: "15,2k"
  },
  {
    sale: "-45%",
    frameImg: "/image/practice2/sanpham-frame1.png",
    productImg: "/image/practice2/sanpham6.png",
    isVideo: true,
    tags: [],
    title: "Dép HÀN QUỐC KAIZEN-KITTY GIÁ XƯỞNG",
    flashTags: [
      { type: "normal", label: "Rẻ Vô Địch" }
    ],
    price: 55000,
    sold: "6,2k"
  },
  {
    sale: "-17%",
    frameImg: "",
    productImg: "/image/practice2/sanpham7.png",
    isVideo: false,
    tags: ["yeuthich"],
    title: "Đèn led Đội Đầu Siêu Sáng Chống Thấm Nước",
    flashTags: [
      { type: "normal", label: "Rẻ Vô Địch" }
    ],
    price: 38000,
    sold: "3,1k"
  },
  {
    sale: "-55%",
    frameImg: "/image/practice2/sanpham-frame3.png",
    productImg: "/image/practice2/sanpham8.png",
    isVideo: false,
    tags: ["yeuthich"],
    title: "Loa Bluetooth mini KTS-1057 nhỏ gọn tiện lợi",
    flashTags: [
      { type: "flash-sale", label: "Đang bán chạy" }
    ],
    price: 18000,
    sold: "11,5k"
  },
  {
    sale: "-46%",
    frameImg: "/image/practice2/sanpham-frame2.png",
    productImg: "/image/practice2/sanpham9.png",
    isVideo: false,
    tags: ["yeuthich"],
    title: "Balo gấu dễ thương học sinh cấp 1 2 3 vải bố",
    flashTags: [
      { type: "normal", label: "Rẻ Vô Địch" }
    ],
    price: 8700,
    sold: "5,2k"
  },
  {
    sale: "-13%",
    frameImg: "/image/practice2/sanpham-frame1.png",
    productImg: "/image/practice2/sanpham10.png",
    isVideo: false,
    tags: ["yeuthich"],
    title: "Dép Nữ tiểu thư dễ thương nhiều màu",
    flashTags: [
      { type: "normal", label: "Rẻ Vô Địch" }
    ],
    price: 33000,
    sold: "7,4k"
  },
  {
    sale: "-38%",
    frameImg: "",
    productImg: "/image/practice2/sanpham11.png",
    isVideo: true,
    tags: ["yeuthich"],
    title: "Áo thun cổ vuông chất liệu thun tăm co giãn",
    flashTags: [{ type: "normal", label: "Rẻ Vô Địch" }],
    price: 28000,
    sold: "10,3k"
  },
  {
    sale: "-55%",
    frameImg: "/image/practice2/sanpham-frame2.png",
    productImg: "/image/practice2/sanpham12.png",
    isVideo: true,
    tags: ["yeuthich"],
    title: "Giày thể thao nữ HOLA kiểu dáng trẻ trung",
    flashTags: [{ type: "voucher", label: "Giảm ₫1,001k" }],
    price: 99000,
    sold: "4,7k"
  },
  {
    sale: "-23%",
    frameImg: "/image/practice2/sanpham-frame3.png",
    productImg: "/image/practice2/sanpham13.png",
    isVideo: true,
    tags: ["mall"],
    title: "Marbit Thời Trang Tại Nhà Họa Tiết Mèo Đỏ",
    flashTags: [{ type: "voucher", label: "Giảm ₫3k" }],
    price: 76680,
    sold: "6,8k"
  },
  {
    sale: "-44%",
    frameImg: "",
    productImg: "/image/practice2/sanpham14.png",
    isVideo: true,
    tags: ["yeuthich"],
    title: "Dép Lê Nữ Quai Ngang Khuy Cài Thời Trang",
    flashTags: [{ type: "normal", label: "Rẻ Vô Địch" }],
    price: 55000,
    sold: "8,1k"
  },
  {
    sale: "-47%",
    frameImg: "/image/practice2/sanpham-frame1.png",
    productImg: "/image/practice2/sanpham15.png",
    isVideo: true,
    tags: [],
    title: "Dép bánh mì vân nhám nam nữ, đi trong nhà",
    flashTags: [{ type: "voucher", label: "Giảm ₫10k" }],
    price: 48000,
    sold: "9,3k"
  },
  {
    sale: "-50%",
    frameImg: "/image/practice2/sanpham-frame2.png",
    productImg: "/image/practice2/sanpham16.png",
    isVideo: true,
    tags: ["yeuthich"],
    title: "Quạt cầm tay M2 di động sạc gió mạnh",
    flashTags: [{ type: "flash-sale", label: "Đang bán chạy" }],
    price: 10000,
    sold: "11,2k"
  },
  {
    sale: "-45%",
    frameImg: "",
    productImg: "/image/practice2/sanpham17.png",
    isVideo: false,
    tags: ["yeuthich"],
    title: "Set 10 đôi tất da gv xỏ ngón chống nắng",
    flashTags: [{ type: "flash-sale", label: "Đang bán chạy" }],
    price: 27500,
    sold: "7,6k"
  },
  {
    sale: "-90%",
    frameImg: "/image/practice2/sanpham-frame1.png",
    productImg: "/image/practice2/sanpham18.png",
    isVideo: true,
    tags: [],
    title: "Bộ Quần Áo Jor Dan Paris Nam, Áo Đỏ Kèm Quần",
    flashTags: [{ type: "flash-sale", label: "Đang bán chạy" }],
    price: 3127,
    sold: "13,4k"
  },
  {
    sale: "-56%",
    frameImg: "/image/practice2/sanpham-frame1.png",
    productImg: "/image/practice2/sanpham19.png",
    isVideo: false,
    tags: ["yeuthich"],
    title: "1kg Kẹo Chip Chip Trái Cây",
    flashTags: [{ type: "normal", label: "Rẻ Vô Địch" }],
    price: 35000,
    sold: "14,6k"
  },
  {
    sale: "-82%",
    frameImg: "/image/practice2/sanpham-frame2.png",
    productImg: "/image/practice2/sanpham20.png",
    isVideo: false,
    tags: ["yeuthich"],
    title: "Dép Quai Ngang Eva Đế Cao Hình Gấu",
    flashTags: [{ type: "normal", label: "Giá dành riêng bạn mới" }],
    price: 10000,
    sold: "6,5k"
  }
];
