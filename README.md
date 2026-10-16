# 🍳 Bếp Nhà – Trợ Lý Lên Thực Đơn Thông Minh

> Ứng dụng Web App tối ưu giải quyết câu hỏi **"Hôm nay ăn gì?"** từ nguyên liệu sẵn có trong tủ lạnh. Tiết kiệm thời gian, tối ưu ngân sách và giảm lãng phí thực phẩm cho gia đình.

---

## 🌟 1. Giới thiệu & Đối chiếu PRD

Dự án được xây dựng bám sát 100% **Tài liệu Yêu cầu Sản phẩm (PRD)**:

- **Phạm vi 4 yếu tố cốt lõi (Scope)**:
  1. 🥩 **Nguyên liệu (Ingredients)**: Tận dụng nguyên liệu sẵn có trong tủ lạnh + tự động liệt kê nguyên liệu cần mua thêm.
  2. ⏱️ **Thời gian (Cooking Time)**: Lọc linh hoạt món dưới 15', 15-30', 30-60' hoặc xem tất cả.
  3. 💰 **Ngân sách (Budget)**: Dự toán tổng chi phí bữa ăn và chi phí phát sinh mua thêm (Tiết kiệm, Tiêu chuẩn, Sang chảnh).
  4. 👥 **Khẩu phần (Servings)**: Thanh trượt tự động quy đổi định lượng chuẩn và chi phí cho **1 đến 10 người ăn**.

---

## 🚀 2. Bảng Tính Năng Đáp Ứng Yêu Cầu (FR-01 đến FR-06)

| Mã FR | Tên tính năng | Hiện trạng triển khai |
| :--- | :--- | :--- |
| **FR-01** | **Input Nguyên liệu** | Hỗ trợ tìm kiếm Live Autocomplete gõ phím gợi ý tức thì, chọn nhanh theo phân loại (Thịt/Cá, Rau củ, Trứng & Đậu, Gia vị), gắn/xóa thẻ (Tag Chips), nạp nhanh kịch bản mẫu. |
| **FR-02** | **Bộ lọc thông minh** | Slider & nút tăng giảm số người (1 - 10 người); Lựa chọn thời gian nấu (<15', 15-30', 30-60'); Lựa chọn ngân sách (Tiết kiệm, Tiêu chuẩn, Sang chảnh). |
| **FR-03** | **Đề xuất & Xếp hạng** | Thuật toán so khớp % nguyên liệu có sẵn: `(Nguyên liệu có sẵn / Tổng nguyên liệu) * 100%`. Tự động gắn nhãn "100% Nấu ngay!", "Thiếu ít nguyên liệu", tính chi phí mua thêm. |
| **FR-04** | **Quy đổi định lượng** | Tính toán động theo công thức: `amount_per_serving * servings`. Tự động nhân số lượng nguyên liệu chuẩn và thành tiền VND trong Modal chi tiết món ăn. |
| **FR-05** | **Tạo danh sách mua sắm** | Công thức: `[Nguyên liệu cần cho món] - [Nguyên liệu đã có] = [Danh sách cần mua thêm]`. Hỗ trợ giỏ hàng đi chợ, tính tổng tiền phát sinh, checkbox đánh dấu đã mua, nút sao chép text gửi Zalo/SMS. |
| **FR-06** | **Trải nghiệm người dùng** | Giao diện Responsive (Mobile First, Tablet, Desktop), Dark / Light mode sang trọng, hiệu ứng cuộn mượt (Smooth Scroll) khi bấm "Gợi ý món ăn", thời gian phản hồi thuật toán < 5ms (đạt yêu cầu PRD < 500ms). |

---

## 🗄️ 3. Cơ sở dữ liệu & Cấu trúc Mock Data (Mục 5 PRD)

Hệ thống mô phỏng chuẩn xác cấu trúc cơ sở dữ liệu quan hệ (Relational Database) và câu lệnh SQL truy vấn:

### 3.1 Bảng `Ingredients` (Nguyên liệu)
```sql
CREATE TABLE Ingredients (
    ingredient_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50), -- Rau củ, Thịt/Cá, Gia vị, Khác
    unit VARCHAR(20),     -- gram, kg, quả, mớ, ml
    estimated_price_per_unit DECIMAL(10, 2) -- VND
);
```

### 3.2 Bảng `Recipes` (Món ăn)
```sql
CREATE TABLE Recipes (
    recipe_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(150) NOT NULL,
    cooking_time INT NOT NULL,          -- phút
    difficulty VARCHAR(20) DEFAULT 'Dễ', -- Dễ, Trung bình, Khó
    base_servings INT DEFAULT 2,        -- Khẩu phần chuẩn
    estimated_budget_level VARCHAR(20)  -- Tiết kiệm, Tiêu chuẩn, Sang chảnh
);
```

### 3.3 Bảng `Recipe_Ingredients` (Chi tiết Định lượng 1 người)
```sql
CREATE TABLE Recipe_Ingredients (
    id INT PRIMARY KEY AUTO_INCREMENT,
    recipe_id INT,
    ingredient_id INT,
    amount_per_serving FLOAT NOT NULL, -- Định lượng cho 1 người ăn
    FOREIGN KEY (recipe_id) REFERENCES Recipes(recipe_id),
    FOREIGN KEY (ingredient_id) REFERENCES Ingredients(ingredient_id)
);
```

---

## 💻 4. Hướng dẫn chạy ứng dụng

### Cách 1: Mở trực tiếp trong trình duyệt
Bạn có thể mở tệp [index.html](file:///c:/bep-nha-app/index.html) trực tiếp bằng trình duyệt Chrome, Edge hoặc Cốc Cốc:
```powershell
Start-Process "c:\bep-nha-app\index.html"
```

### Cách 2: Khởi chạy qua Local Web Server (PowerShell)
Mở PowerShell tại thư mục dự án và chạy file `server.ps1`:
```powershell
cd C:\bep-nha-app
powershell -ExecutionPolicy Bypass -File .\server.ps1
```
Sau đó truy cập trình duyệt tại địa chỉ: **`http://localhost:3000/`**

---

## 🎨 5. Điểm nhấn Thiết kế & Trải nghiệm (Aesthetics)
- **Bảng màu ấm cúng**: Terracotta (`#E76F51`), Xanh lá ngải cứu (`#2A9D8F`), Hổ phách (`#E9C46A`).
- **Typography hiện đại**: Google Fonts `Be Vietnam Pro` & `Outfit` hiển thị tiếng Việt sắc nét, chuẩn thiết kế cao cấp.
- **Micro-animations**: Hiệu ứng chuyển động mượt mà khi thêm bớt thẻ nguyên liệu, thanh tiến trình % trực quan, modal chi tiết món ăn kèm hướng dẫn nấu và mẹo vặt đầu bếp.
