# Gameplay Flow – Truth Hunter

## 1. Luồng tổng quát
1. Vào màn (map theo lĩnh vực).
2. Đi cảnh và nhặt vật phẩm.
3. Gặp sự kiện thông tin nhiễu.
4. Trả lời câu hỏi trắc nghiệm.
5. Đúng: boss mất máu, mở lời giải triết học ngắn.
6. Sai: người chơi tăng nhiễu loạn nhận thức.
7. Đánh boss kết màn.
8. Nhận mảnh ghép nhận thức và mở ải mới.

## 2. Trạng thái người chơi
- `hpPlayer` (tuỳ thiết kế, có thể 3 mạng/ải).
- `cognitiveNoise` (0-100).
- `rationalPoints` (điểm nhận thức).
- `inventory` (kính lý tính, la bàn, lá chắn, sổ tay).

## 3. Trạng thái boss
- `hpBoss`.
- `phase` (đầu/trung/cuối, câu hỏi khó dần).
- `illusionType` (cảm xúc, đám đông, ngụy biện, quyền uy giả).

## 4. Pseudo flow boss fight
```text
while hpBoss > 0 and hpPlayer > 0:
  showScenario()
  answer = playerChooseOption()
  if answer == correct:
    hpBoss -= damage
    showRationale()
  else:
    cognitiveNoise += penalty
    if cognitiveNoise >= threshold:
      hpPlayer -= 1
      cognitiveNoise = resetValue
```

## 5. Cân bằng độ khó theo ải
- Ải 1: câu hỏi trực diện, ít nhiễu ngôn từ.
- Ải 2: nhiễu bằng bình luận đám đông.
- Ải 3: tăng câu ngụy biện tinh vi.
- Ải 4: thêm yếu tố hậu quả thực tế và lựa chọn hành động.

## 6. Trigger phản hồi giáo dục
- Đúng: hiện “vì sao đúng” + nguyên tắc áp dụng.
- Sai: hiện “bạn đang mắc thiên kiến nào” + cách tránh.
- Kết thúc ải: hiện 3 ý chính cần nhớ.

## 7. Điều kiện thắng/thua
- **Thắng ải:** `hpBoss == 0`.
- **Thua ải:** `hpPlayer == 0` hoặc vượt ngưỡng nhiễu loạn nhiều lần.
- **Thắng game:** hạ boss cuối + mở thông điệp “thực tiễn là tiêu chuẩn chân lý”.
