# Game Design Document

## Truth Hunter – Thợ Săn Chân Lý

## 1. Tổng quan
- **Thể loại:** 2D phiêu lưu vượt ải + trắc nghiệm tương tác + boss battle.
- **Nền tảng mục tiêu:** Web (desktop-first, mobile-second).
- **Đối tượng:** Học sinh/sinh viên cần rèn kỹ năng tiếp nhận thông tin có chọn lọc.
- **Mục tiêu giáo dục:** Rèn 3 năng lực: nhận diện cảm tính, phân tích lý tính, kiểm chứng bằng thực tiễn.

## 2. Tuyên ngôn thiết kế
- Chơi phải vui trước, học đến từ hành động trong gameplay.
- Mỗi ải phải gắn trực tiếp với một nguyên lý nhận thức luận.
- Trả lời sai phải giúp người chơi hiểu vì sao sai, không chỉ trừ điểm.
- Không biến game thành bài thi; cần nhịp đi cảnh, né bẫy, đối đầu boss rõ ràng.

## 3. Cốt truyện
Trong thành phố mạng xã hội, thế lực **Ảo Tưởng Chân Lý** thao túng sinh viên bằng thông điệp: _"Ai nổi tiếng thì luôn đúng."_  
Nhân vật chính **Minh Triết** bắt đầu như một người dùng dễ tin theo đám đông. Qua từng ải, Minh Triết thu thập mảnh ghép nhận thức để phục hồi tư duy độc lập và khám phá tiêu chuẩn chân lý thật sự: **Thực tiễn**.

## 4. Nhân vật và kỹ năng
### 4.1 Nhân vật chính: Minh Triết
- Vai trò: người học đi từ cảm tính đến lý tính.
- Trạng thái phát triển: từ bị ảnh hưởng bởi lượt like sang biết kiểm chứng thông tin.

### 4.2 Bộ kỹ năng cốt lõi
- **Con mắt cảm tính:** cho thấy tín hiệu bề ngoài (viral, hiệu ứng đám đông, halo nổi tiếng).
- **Bộ não lý tính:** mở lớp phân tích nguồn, ngụy biện, mâu thuẫn logic.
- **La bàn thực tiễn:** ưu tiên hành động kiểm chứng trước khi tin.

## 5. Vòng lặp gameplay (Core Loop)
1. Vào khu vực theo chủ đề.
2. Đi cảnh, né bẫy thông tin sai lệch.
3. Thu thập mảnh ghép nhận thức/vật phẩm.
4. Đối mặt câu hỏi tình huống.
5. Trả lời đúng để gây sát thương boss.
6. Trả lời sai nhận trạng thái nhiễu loạn nhận thức.
7. Qua ải, mở kỹ năng/chương tiếp theo.

## 6. Thiết kế màn chơi
### Ải 1: Vương quốc Cảm Tính
- **Chủ đề:** Nhận thức cảm tính.
- **Boss:** Nữ Hoàng Cảm Xúc.
- **Mục tiêu học:** phân biệt ấn tượng ban đầu và chân lý.

### Ải 2: Mê Cung Đám Đông
- **Chủ đề:** Niềm tin xã hội và cảm xúc tập thể.
- **Boss:** Quái Vật Lượt Like.
- **Mục tiêu học:** nhiều người tin không đồng nghĩa thông tin đúng.

### Ải 3: Tháp Lý Tính
- **Chủ đề:** Nhận thức lý tính.
- **Boss:** Nhà Ảo Thuật Ngụy Biện.
- **Mục tiêu học:** đánh giá nguồn tin, chuyên môn, bằng chứng, lợi ích ẩn.

### Ải 4: Cánh Cổng Thực Tiễn
- **Chủ đề:** Thực tiễn là tiêu chuẩn chân lý.
- **Boss:** Cổng Kiểm Nghiệm.
- **Mục tiêu học:** ra quyết định dựa trên kiểm chứng thực tế.

### Boss cuối: Nguồn Chân Lý Giả
- Cấu thành bởi lượt like, share, bình luận tung hô và hình ảnh hào nhoáng.
- Muốn thắng phải phối hợp đủ 3 kỹ năng (cảm tính -> lý tính -> thực tiễn).

## 7. Hệ thống chiến đấu và trạng thái
- **Boss HP:** giảm khi trả lời đúng hoặc giải đúng mini challenge.
- **Nhiễu loạn nhận thức (player):** tăng khi trả lời sai, đầy thanh thì thất bại lượt.
- **Combo nhận thức:** trả lời đúng liên tiếp tăng thưởng điểm.
- **Bộ đếm kiểm chứng:** thưởng thêm khi chọn đáp án có hành động kiểm chứng.

## 8. Vật phẩm
- **Kính Lý Tính:** loại bỏ 2 đáp án sai.
- **La Bàn Thực Tiễn:** gợi ý phương án dựa trên kiểm chứng thực tế.
- **Lá Chắn Phản Biện:** chặn một lần nhiễu loạn nhận thức.
- **Sổ Tay Triết Học:** mở giải thích ngắn sau mỗi câu hỏi.

## 9. Thiết kế câu hỏi
- Dạng trắc nghiệm 4 lựa chọn, có 1 đáp án đúng.
- Mỗi câu phải có:
  - Tình huống thực tế.
  - Đáp án nhiễu hợp lý (không vô lý).
  - Giải thích sau câu trả lời.
  - Tag kiến thức (cảm tính, đám đông, lý tính, thực tiễn, ngụy biện).

## 10. UI/UX
- **HUD chính:** HP boss, nhiễu loạn player, vật phẩm, tiến độ ải.
- **Màn câu hỏi:** ưu tiên đọc rõ, độ tương phản cao, nút lớn.
- **Feedback:** đúng/sai có giải thích ngắn, tránh phán xét.
- **Accessibility:** font dễ đọc, hỗ trợ điều hướng bàn phím, giảm hiệu ứng khi cần.

## 11. Âm thanh và hình ảnh
- Tông màu gợi ý: navy + gold để giữ chất học thuật.
- Mỗi ải có nhạc nền riêng theo cảm xúc.
- Âm hiệu đặc trưng: lock đáp án, trúng boss, nhiễu loạn tăng, mở khóa kỹ năng.

## 12. KPI đánh giá
- Tỷ lệ hoàn thành theo ải.
- Accuracy theo chủ đề (cảm tính/lý tính/thực tiễn).
- Tỷ lệ cải thiện từ ải 1 đến ải 4.
- Tỷ lệ dùng vật phẩm và hiệu quả dùng vật phẩm.

## 13. Rủi ro và phương án giảm thiểu
- **Quá nặng lý thuyết:** giữ nhịp gameplay xen kẽ di chuyển và đối đầu.
- **Quá dễ:** tăng độ khó theo tầng, thêm ngụy biện tinh vi ở ải 3.
- **Quá khó:** cho phép retry nhanh và tăng vật phẩm hỗ trợ.
- **Hiểu sai kiến thức:** duyệt nội dung với giảng viên trước release.

## 14. Slogan
- **Đừng để lượt like dẫn đường cho chân lý.**
- **Tin có chọn lọc - Nghĩ bằng lý trí - Kiểm chứng bằng thực tiễn.**
