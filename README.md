# Thầy Ân - Landing Page Huấn Luyện Viên Thể Thao

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

Landing page chuyên nghiệp cho Thầy Ân - Huấn luyện viên Cầu Lông và Bơi Lội tại Tây Ninh.

## 📋 Mục Lục

- [Giới Thiệu](#giới-thiệu)
- [Tính Năng](#tính-năng)
- [Công Nghệ](#công-nghệ)
- [Cài Đặt](#cài-đặt)
- [Cấu Trúc Dự Án](#cấu-trúc-dự-án)
- [Tùy Chỉnh](#tùy-chỉnh)
- [Tối Ưu Hóa](#tối-ưu-hóa)
- [Hướng Cải Tiến](#hướng-cải-tiến)
- [Liên Hệ](#liên-hệ)

## 🎯 Giới Thiệu

Landing page được thiết kế theo concept **"Antigravity Motion"** với phong cách minh họa vector phẳng hiện đại. Trang web tập trung vào việc giới thiệu dịch vụ huấn luyện Cầu Lông và Bơi Lội chuyên nghiệp, hướng đến đối tượng học sinh từ Tiểu học đến THPT và phụ huynh.

### Điểm Nổi Bật

- ✨ Thiết kế hiện đại với vector illustrations không viền
- 🎨 Bảng màu vàng đồng (Golden/Bronze) sang trọng
- 🚀 Hiệu ứng "antigravity" với floating cards
- 📱 Responsive hoàn toàn trên mọi thiết bị
- ⚡ Tối ưu hiệu suất với smooth animations
- 🎯 SEO-friendly với semantic HTML

## ✨ Tính Năng

### 1. Navigation Bar
- Sticky navigation với scroll effects
- Active link highlighting tự động
- Mobile-responsive hamburger menu
- Smooth scrolling đến các sections

### 2. Hero Section
- Split-screen layout động
- Vector illustrations cho Badminton & Swimming
- Dual CTA buttons
- Scroll indicator với bounce animation

### 3. Profile Section
- Achievement badge với pulse animation
- Statistics counter với số liệu động
- Responsive two-column layout
- Professional coach profile

### 4. Services Section
- Floating service cards với hover effects
- Keyword tags cho mỗi dịch vụ
- Feature lists chi tiết
- Individual CTAs

### 5. Why Choose Us
- 6-item grid layout
- Animated icons với float effect
- Staggered fade-in animations
- Hover lift effects

### 6. Gallery Section
- Responsive grid layout
- Vector illustration images
- Hover zoom effects
- Overlay captions

### 7. Footer
- Modern gradient background
- Glassmorphism contact cards
- Golden accent styling
- Enhanced hover effects

## 🛠️ Công Nghệ

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling với CSS Variables
- **JavaScript (ES6+)** - Vanilla JS, no dependencies
- **Google Fonts** - Outfit & Inter

### Design System
- CSS Custom Properties (Variables)
- Flexbox & CSS Grid
- Intersection Observer API
- CSS Animations & Transitions

### Performance
- Lazy loading images
- GPU-accelerated animations
- Optimized CSS selectors
- Minimal JavaScript footprint

## 📦 Cài Đặt

### Yêu Cầu
- Trình duyệt hiện đại (Chrome, Firefox, Safari, Edge)
- Web server (hoặc mở trực tiếp file HTML)

### Cài Đặt Cơ Bản

1. **Clone hoặc download dự án:**
```bash
git clone <repository-url>
cd thay-an
```

2. **Mở file index.html:**
```bash
# Mở trực tiếp trong trình duyệt
start index.html

# Hoặc sử dụng Live Server (VS Code)
# Right-click index.html > Open with Live Server
```

3. **Tùy chỉnh nội dung:**
   - Cập nhật thông tin liên hệ trong `index.html`
   - Thay thế hình ảnh trong thư mục gốc
   - Điều chỉnh màu sắc trong `index.css`

## 📁 Cấu Trúc Dự Án

```
thay-an/
├── index.html              # Trang chính
├── index.css              # Design system & base styles
├── components.css         # Component-specific styles
├── footer.css            # Footer override styles
├── navbar.css            # Navigation bar styles
├── script.js             # JavaScript interactions
├── thay-an.png           # Coach profile image
├── badminton-bg.jpg      # Hero background (Badminton)
├── swimming-bg.jpg       # Hero background (Swimming)
├── gallery-1.jpg         # Gallery image 1
├── gallery-2.jpg         # Gallery image 2
├── gallery-3.jpg         # Gallery image 3
├── gallery-4.jpg         # Gallery image 4
├── gallery-5.jpg         # Gallery image 5
├── gallery-6.jpg         # Gallery image 6
└── README.md             # Documentation
```

## 🎨 Tùy Chỉnh

### Thay Đổi Màu Sắc

Mở `index.css` và chỉnh sửa CSS Variables:

```css
:root {
  /* Màu chính */
  --color-golden: #FFD700;        /* Vàng chủ đạo */
  --color-bronze: #8B4513;        /* Nâu đồng */
  
  /* Màu nền */
  --color-white: #FFFFFF;
  --color-beige-light: #FAF8F3;
  
  /* Gradient */
  --gradient-golden: linear-gradient(135deg, #FFD700 0%, #FFED4E 100%);
}
```

### Cập Nhật Thông Tin Liên Hệ

Trong `index.html`, tìm section `#contact`:

```html
<div class="contact-item">
  <span class="contact-icon">📱</span>
  <div class="contact-details">
    <span class="contact-label">Điện thoại / Zalo</span>
    <a href="tel:0123456789" class="contact-value">0123 456 789</a>
  </div>
</div>
```

### Thay Thế Hình Ảnh

1. Chuẩn bị hình ảnh mới (khuyến nghị vector illustrations)
2. Đặt tên file giống với file cũ hoặc cập nhật trong HTML
3. Đảm bảo kích thước phù hợp:
   - Hero backgrounds: 1200x800px
   - Coach profile: 600x800px (3:4 ratio)
   - Gallery: 800x600px (4:3 ratio)

## ⚡ Tối Ưu Hóa

### Performance Tips

1. **Optimize Images:**
```bash
# Sử dụng công cụ nén ảnh
- TinyPNG (https://tinypng.com)
- ImageOptim
- Squoosh (https://squoosh.app)
```

2. **Minify CSS & JS:**
```bash
# Sử dụng build tools
npm install -g clean-css-cli uglify-js
cleancss -o index.min.css index.css components.css footer.css navbar.css
uglifyjs script.js -o script.min.js
```

3. **Enable Caching:**
```apache
# .htaccess (Apache)
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

### SEO Optimization

1. **Meta Tags** (đã có trong `index.html`)
2. **Structured Data** (khuyến nghị thêm)
3. **Sitemap.xml** (tạo nếu có nhiều trang)
4. **robots.txt** (cấu hình cho search engines)

## 🚀 Hướng Cải Tiến

### Phase 1: Tính Năng Cơ Bản (1-2 tháng)

#### 1.1 Form Đăng Ký Online
- [ ] Tích hợp form đăng ký học viên
- [ ] Validation dữ liệu client-side
- [ ] Email notification cho admin
- [ ] Auto-response email cho học viên

**Công nghệ đề xuất:**
- Formspree / EmailJS (free tier)
- Google Forms integration
- Custom PHP backend

#### 1.2 Booking System
- [ ] Lịch tập hiển thị theo tuần
- [ ] Chọn khung giờ tập
- [ ] Xác nhận đặt lịch qua email/SMS
- [ ] Quản lý slot còn trống

**Công nghệ đề xuất:**
- FullCalendar.js
- Calendly integration
- Custom booking system với Firebase

#### 1.3 Testimonials & Reviews
- [ ] Section đánh giá từ học viên
- [ ] Star rating system
- [ ] Carousel hiển thị reviews
- [ ] Tích hợp Google Reviews

**Công nghệ đề xuất:**
- Swiper.js cho carousel
- Google Places API
- Custom review system

### Phase 2: Tương Tác & Nội Dung (2-3 tháng)

#### 2.1 Blog/News Section
- [ ] Trang blog chia sẻ kiến thức
- [ ] Hướng dẫn kỹ thuật cầu lông/bơi lội
- [ ] Tin tức giải đấu
- [ ] SEO-optimized articles

**Công nghệ đề xuất:**
- Static Site Generator (Hugo, Jekyll)
- WordPress integration
- Headless CMS (Strapi, Contentful)

#### 2.2 Video Gallery
- [ ] Thư viện video hướng dẫn
- [ ] YouTube integration
- [ ] Video player tùy chỉnh
- [ ] Playlist theo chủ đề

**Công nghệ đề xuất:**
- YouTube API
- Vimeo Player
- Video.js

#### 2.3 Progress Tracking Portal
- [ ] Đăng nhập cho học viên
- [ ] Theo dõi tiến độ học tập
- [ ] Lịch sử tham gia lớp
- [ ] Chứng chỉ/thành tích

**Công nghệ đề xuất:**
- Firebase Authentication
- Custom backend (Node.js + MongoDB)
- Supabase

### Phase 3: Nâng Cao (3-6 tháng)

#### 3.1 Multi-language Support
- [ ] Hỗ trợ tiếng Anh
- [ ] Language switcher
- [ ] i18n implementation
- [ ] Localized content

**Công nghệ đề xuất:**
- i18next
- Vue I18n / React Intl
- Static JSON translations

#### 3.2 Mobile App
- [ ] Progressive Web App (PWA)
- [ ] Push notifications
- [ ] Offline support
- [ ] Add to home screen

**Công nghệ đề xuất:**
- PWA with Workbox
- React Native / Flutter
- Ionic Framework

#### 3.3 Payment Integration
- [ ] Thanh toán học phí online
- [ ] Nhiều phương thức thanh toán
- [ ] Hóa đơn tự động
- [ ] Quản lý gói học

**Công nghệ đề xuất:**
- VNPay / MoMo API
- Stripe / PayPal
- Custom payment gateway

#### 3.4 Analytics & Reporting
- [ ] Google Analytics 4
- [ ] Heatmap tracking (Hotjar)
- [ ] Conversion tracking
- [ ] A/B testing

**Công nghệ đề xuất:**
- Google Analytics 4
- Hotjar / Microsoft Clarity
- Google Optimize

### Phase 4: Tối Ưu & Mở Rộng (Liên tục)

#### 4.1 Performance Optimization
- [ ] Image lazy loading nâng cao
- [ ] Code splitting
- [ ] CDN integration
- [ ] Service Worker caching

#### 4.2 Accessibility (A11y)
- [ ] WCAG 2.1 compliance
- [ ] Screen reader support
- [ ] Keyboard navigation
- [ ] High contrast mode

#### 4.3 Marketing Integration
- [ ] Facebook Pixel
- [ ] Google Ads tracking
- [ ] Email marketing (Mailchimp)
- [ ] Social media auto-posting

#### 4.4 Admin Dashboard
- [ ] Quản lý học viên
- [ ] Quản lý lịch dạy
- [ ] Báo cáo doanh thu
- [ ] Content management

**Công nghệ đề xuất:**
- React Admin / Vue Admin
- Custom dashboard với Chart.js
- Firebase Admin SDK

## 📊 Roadmap Timeline

```
Tháng 1-2:   Form đăng ký + Booking System
Tháng 3-4:   Blog + Video Gallery
Tháng 5-6:   Progress Tracking Portal
Tháng 7-9:   PWA + Payment Integration
Tháng 10-12: Admin Dashboard + Analytics
```

## 🔧 Troubleshooting

### Vấn Đề Thường Gặp

**1. Hình ảnh không hiển thị:**
- Kiểm tra đường dẫn file
- Đảm bảo tên file khớp với HTML
- Kiểm tra quyền truy cập file

**2. Animations không hoạt động:**
- Kiểm tra JavaScript console
- Đảm bảo tất cả CSS files được load
- Xóa cache trình duyệt

**3. Mobile menu không mở:**
- Kiểm tra `script.js` đã load
- Kiểm tra console errors
- Đảm bảo `navbar.css` được include

## 📝 License

MIT License - Tự do sử dụng cho dự án cá nhân và thương mại.

## 👨‍💻 Developer

Developed with ❤️ by Antigravity AI

## 📞 Liên Hệ

**Thầy Ân - Huấn Luyện Viên Thể Thao**
- 📱 Điện thoại/Zalo: [Số điện thoại]
- 📍 Địa chỉ: Sân cầu lông Phương Tường, Tây Ninh
- ⏰ Giờ làm việc: Thứ 2 - Chủ Nhật: 6:00 - 20:00

---

**Version:** 1.0.0  
**Last Updated:** December 2024  
**Status:** ✅ Production Ready
