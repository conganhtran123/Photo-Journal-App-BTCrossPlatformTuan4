# 📷 Photo Journal App

Ứng dụng di động mini được phát triển bằng **React + Vite** kết hợp với **Capacitor**.  
App cho phép chụp ảnh, lưu trữ cục bộ cùng tiêu đề, hiển thị dưới dạng gallery, và xem chi tiết ảnh.

---

## ✨ Tính năng

### Yêu cầu tối thiểu

- 📸 Chụp ảnh trực tiếp từ camera.
- 📝 Nhập **tiêu đề ảnh** khi lưu.
- 💾 Lưu đường dẫn ảnh + metadata (tiêu đề) bằng `@capacitor/preferences`.
- 🖼️ Hiển thị gallery ảnh kèm tiêu đề.
- 🔍 Xem chi tiết ảnh khi click.

### Mở rộng

- ❌ Xoá ảnh hoặc sửa tiêu đề ảnh.
- 📤 Chia sẻ ảnh với bạn bè bằng `@capacitor/share`.

---

## 🛠️ Công nghệ sử dụng

- **Frontend:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Cross-platform:** [Capacitor](https://capacitorjs.com/)
- **Capacitor Plugins:**
  - `@capacitor/camera` → Chụp ảnh từ camera.
  - `@capacitor/filesystem` → Lưu file ảnh vào bộ nhớ.
  - `@capacitor/preferences` → Lưu metadata (tiêu đề, đường dẫn).
  - `@capacitor/share` → Chia sẻ ảnh.

---

## 📂 Cấu trúc thư mục

photo-journal/
│── capacitor.config.ts
│── index.html
│── package.json
│── tsconfig.json
│── vite.config.ts
│── README.md
│
└── src/
│── main.tsx
│── App.tsx
│── App.css
│
├── components/
│ ├── Gallery.tsx
│ ├── PhotoDetail.tsx
│ └── Header.tsx
│
├── hooks/
│ └── usePhotoGallery.ts
│
└── pages/
├── Home.tsx
└── Detail.tsx
