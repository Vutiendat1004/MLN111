import { AlertTriangle, BookOpen, CheckSquare, DollarSign, FlaskConical, Heart, Lightbulb, Quote, Scale, Search, Shield, Square, TrendingUp, XCircle } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const S = {
  blue: "#0F172A",
  cyan: "#FFF7E8",
  yellow: "#F59E0B",
  gray: "#334155",
  white: "#ffffff",
};

function SectionTitle({ tag, title, sub }: { tag: string; title: string; sub?: string }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "48px" }}>
      <span style={{ display: "inline-block", background: S.cyan, color: S.blue, fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", borderRadius: "20px", padding: "4px 14px", marginBottom: "12px" }}>
        {tag}
      </span>
      <h2 style={{ color: S.blue, fontSize: "26px", fontWeight: 800, margin: "0 0 12px", lineHeight: 1.3 }}>{title}</h2>
      {sub && <p style={{ color: "#6B7280", fontSize: "15px", lineHeight: 1.65, maxWidth: "620px", margin: "0 auto" }}>{sub}</p>}
    </div>
  );
}

/* ===== SECTION 6: Ví dụ thực tế ===== */
export function Section6() {
  const prefersReducedMotion = useReducedMotion();
  const cases = [
    {
      icon: <DollarSign size={24} color="#374151" />,
      iconBg: "#f3f4f6",
      iconBorder: "#d1d5db",
      tag: "Tài chính",
      tagColor: "#374151",
      tagBg: "#f3f4f6",
      title: "Tình huống 1: Lời khuyên tài chính",
      text: "Một influencer tài chính khoe lối sống giàu có và khuyên đầu tư vào một loại tài sản. Sinh viên có thể bị hấp dẫn bởi hình ảnh thành công, nhưng cần kiểm tra kiến thức chuyên môn, rủi ro, nguồn lợi ích và tính phù hợp với điều kiện tài chính cá nhân.",
      warns: ["Không có chứng chỉ tài chính không = không đáng tin", "Hình ảnh giàu có ≠ kiến thức đầu tư", "Kiểm tra lợi ích xung đột trước khi nghe"],
    },
    {
      icon: <Heart size={24} color="#374151" />,
      iconBg: "#f3f4f6",
      iconBorder: "#d1d5db",
      tag: "Sức khỏe",
      tagColor: "#374151",
      tagBg: "#f3f4f6",
      title: "Tình huống 2: Sức khỏe & dinh dưỡng",
      text: "Một người nổi tiếng chia sẻ phương pháp ăn uống hoặc tập luyện. Người xem không nên áp dụng ngay nếu chưa kiểm chứng cơ sở khoa học, tình trạng sức khỏe cá nhân và ý kiến chuyên môn từ bác sĩ.",
      warns: ["Cơ thể mỗi người là khác nhau", "Không có bằng y khoa ≠ lời khuyên sức khỏe", "Tham khảo chuyên gia y tế trước"],
    },
    {
      icon: <BookOpen size={24} color="#374151" />,
      iconBg: "#f3f4f6",
      iconBorder: "#d1d5db",
      tag: "Học tập & Tình yêu",
      tagColor: "#374151",
      tagBg: "#f3f4f6",
      title: "Tình huống 3: Kinh nghiệm cá nhân",
      text: "Một KOL chia sẻ kinh nghiệm học tập hoặc lời khuyên tình cảm. Những kinh nghiệm này có thể hữu ích, nhưng không thể xem là công thức đúng cho tất cả vì mỗi hoàn cảnh, tính cách và điều kiện đều khác nhau.",
      warns: ["Kinh nghiệm cá nhân ≠ phương pháp phổ quát", "Hoàn cảnh mỗi người là độc nhất", "Học hỏi nhưng điều chỉnh cho phù hợp"],
    },
  ];

  return (
    <section id="vi-du" style={{ padding: "80px 24px", background: S.white, fontFamily: "'Be Vietnam Pro', sans-serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <SectionTitle
          tag="Section 06 — Ví dụ thực tế"
          title="Khi lời khuyên của influencer chưa chắc phù hợp với bạn"
          sub="Ba tình huống minh họa cho thấy tại sao cần tư duy phê phán khi tiếp nhận thông tin từ người nổi tiếng"
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {cases.map(({ icon, iconBg, iconBorder, tag, tagColor, tagBg, title, text, warns }, i) => (
            <motion.div
              key={tag}
              style={{ background: "#fafafa", border: "1.5px solid #e5e7eb", borderRadius: "16px", overflow: "hidden", display: "flex", flexDirection: "column" }}
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 18 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(0,0,0,0.1)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              <div style={{ padding: "24px 22px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                  <div style={{ background: iconBg, border: `1px solid ${iconBorder}`, borderRadius: "10px", padding: "10px" }}>{icon}</div>
                  <span style={{ background: tagBg, color: tagColor, fontSize: "11px", fontWeight: 700, borderRadius: "12px", padding: "3px 10px" }}>{tag}</span>
                </div>
                <h3 style={{ margin: "0 0 10px", fontSize: "15px", fontWeight: 800, color: S.blue, lineHeight: 1.35 }}>{title}</h3>
                <p style={{ margin: "0 0 18px", fontSize: "13px", color: S.gray, lineHeight: 1.65 }}>{text}</p>
              </div>
              <div style={{ background: "#f1f5f9", padding: "14px 22px 22px", marginTop: "auto" }}>
                <p style={{ margin: "0 0 8px", fontSize: "11px", fontWeight: 700, color: "#475569", textTransform: "uppercase", letterSpacing: "0.5px" }}>Cần lưu ý</p>
                {warns.map((w, wIndex) => (
                  <motion.div
                    key={wIndex}
                    style={{ display: "flex", gap: "7px", alignItems: "flex-start", marginBottom: "5px" }}
                    initial={prefersReducedMotion ? undefined : { opacity: 0, x: -8 }}
                    whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 1 }}
                    transition={{ duration: 0.24, delay: 0.14 + wIndex * 0.05 }}
                  >
                    <AlertTriangle size={12} color="#6b7280" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <span style={{ fontSize: "12px", color: "#475569", lineHeight: 1.5 }}>{w}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== SECTION 7: Vai trò thực tiễn & chân lý ===== */
export function Section7() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section id="thuc-tien" style={{ padding: "80px 24px", background: "#f9fafb", fontFamily: "'Be Vietnam Pro', sans-serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <SectionTitle
          tag="Section 07 — Thực tiễn & Chân lý"
          title="Thực tiễn là tiêu chuẩn kiểm tra chân lý"
          sub="Theo triết học Mác – Lênin, thực tiễn giữ vai trò quan trọng trong quá trình nhận thức — là cơ sở, động lực, mục đích của nhận thức và là tiêu chuẩn duy nhất để kiểm tra chân lý."
        />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", marginBottom: "32px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {[
              {
                icon: <XCircle size={18} color="#374151" />,
                bg: "#f3f4f6",
                text: "Không phải điều gì người nổi tiếng nói cũng đúng",
                sub: "Danh tiếng không đồng nghĩa với chuyên môn hay chân lý.",
              },
              {
                icon: <XCircle size={18} color="#374151" />,
                bg: "#f3f4f6",
                text: "Không thể lấy lượt thích làm tiêu chuẩn chân lý",
                sub: "Số lượng ủng hộ không xác định tính đúng sai của thông tin.",
              },
              {
                icon: <XCircle size={18} color="#374151" />,
                bg: "#f3f4f6",
                text: "Không thể xem danh tiếng là bằng chứng khoa học",
                sub: "Cần phân biệt rõ giữa uy tín xã hội và bằng chứng thực tiễn.",
              },
              {
                icon: <CheckSquare size={18} color="#374151" />,
                bg: "#f3f4f6",
                text: "Cần kiểm chứng bằng thực tế và nguồn đáng tin cậy",
                sub: "Tri thức có giá trị khi phù hợp với hiện thực khách quan.",
              },
            ].map(({ icon, bg, text, sub }, i) => (
              <motion.div
                key={i}
                style={{ display: "flex", gap: "12px", background: "#fff", borderRadius: "10px", padding: "14px 16px", border: "1px solid #e5e7eb", alignItems: "flex-start" }}
                initial={prefersReducedMotion ? undefined : { opacity: 0, x: -14 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.75 }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
              >
                <div style={{ background: bg, borderRadius: "8px", padding: "8px", flexShrink: 0 }}>{icon}</div>
                <div>
                  <p style={{ margin: "0 0 3px", fontSize: "13.5px", fontWeight: 700, color: S.blue }}>{text}</p>
                  <p style={{ margin: 0, fontSize: "12px", color: "#6B7280", lineHeight: 1.5 }}>{sub}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            initial={prefersReducedMotion ? undefined : { opacity: 0, x: 18 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            {/* Main quote */}
            <div
              style={{
                background: "linear-gradient(135deg, #1f2937, #374151)",
                borderRadius: "16px",
                padding: "28px 24px",
                position: "relative",
                overflow: "hidden",
                flex: 1,
              }}
            >
              <div style={{ position: "absolute", top: -30, right: -30, opacity: 0.08 }}>
                <Scale size={130} color="#fff" />
              </div>
              <Scale size={28} color="#fff" style={{ marginBottom: "16px" }} />
              <p style={{ margin: "0 0 12px", fontSize: "15px", fontWeight: 700, color: "#fff", lineHeight: 1.6 }}>
                Chân lý không phụ thuộc vào độ nổi tiếng của người nói, mà phụ thuộc vào sự phù hợp với hiện thực khách quan và sự kiểm nghiệm của thực tiễn.
              </p>
              <div style={{ height: "1px", background: "rgba(255,255,255,0.2)", margin: "12px 0" }} />
              <p style={{ margin: 0, fontSize: "11.5px", color: "rgba(255,255,255,0.55)", letterSpacing: "0.5px" }}>Triết học Mác – Lênin | Nhận thức luận</p>
            </div>

            {/* 3 roles of practice */}
            <div style={{ background: "#fff", border: "1.5px solid #d1d5db", borderRadius: "14px", padding: "18px 20px" }}>
              <p style={{ margin: "0 0 14px", fontSize: "12px", fontWeight: 700, color: "#374151", textTransform: "uppercase", letterSpacing: "0.8px" }}>Ba vai trò của thực tiễn</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
                {[
                  { icon: <FlaskConical size={18} color="#374151" />, label: "Cơ sở", sub: "của nhận thức" },
                  { icon: <TrendingUp size={18} color="#374151" />, label: "Động lực", sub: "phát triển nhận thức" },
                  { icon: <Search size={18} color="#374151" />, label: "Tiêu chuẩn", sub: "kiểm tra chân lý" },
                ].map(({ icon, label, sub }, i) => (
                  <motion.div
                    key={label}
                    style={{ background: "#f9fafb", borderRadius: "8px", padding: "12px", textAlign: "center", border: "1px solid #d1d5db" }}
                    initial={prefersReducedMotion ? undefined : { opacity: 0, y: 10 }}
                    whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 1 }}
                    transition={{ duration: 0.25, delay: 0.14 + i * 0.06 }}
                  >
                    <div style={{ background: "#e5e7eb", borderRadius: "6px", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 8px" }}>{icon}</div>
                    <p style={{ margin: "0 0 2px", fontSize: "12px", fontWeight: 800, color: "#1f2937" }}>{label}</p>
                    <p style={{ margin: 0, fontSize: "10.5px", color: "#6b7280" }}>{sub}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ===== SECTION 8: Checklist kiểm chứng ===== */
export function Section8() {
  const prefersReducedMotion = useReducedMotion();
  const items = [
    { q: "Người nói có chuyên môn trong lĩnh vực này không?", hint: "Tìm kiếm bằng cấp, chứng chỉ, kinh nghiệm thực tế" },
    { q: "Nội dung có bằng chứng, số liệu hoặc nguồn đáng tin cậy không?", hint: "Kiểm tra tài liệu tham khảo, nghiên cứu khoa học" },
    { q: "Đây là chia sẻ thật hay là quảng cáo trá hình?", hint: "Xem xét lợi ích kinh tế của người đăng" },
    { q: "Có nguồn độc lập nào xác nhận thông tin này không?", hint: "Tìm ít nhất 2-3 nguồn khác nhau" },
    { q: "Lời khuyên này có phù hợp với hoàn cảnh của mình không?", hint: "Hoàn cảnh mỗi người là khác nhau" },
    { q: "Nếu áp dụng sai, rủi ro là gì?", hint: "Đánh giá hậu quả tiềm ẩn trước khi hành động" },
    { q: "Thông tin này đã được kiểm nghiệm trong thực tiễn chưa?", hint: "Tìm bằng chứng thực tế, không chỉ lý thuyết" },
  ];

  return (
    <section id="checklist" style={{ padding: "80px 24px", background: S.white, fontFamily: "'Be Vietnam Pro', sans-serif" }}>
      <div style={{ maxWidth: "820px", margin: "0 auto" }}>
        <SectionTitle
          tag="Section 08 — Công cụ thực hành"
          title="Trước khi tin một lời khuyên trên mạng xã hội, hãy tự hỏi"
          sub="Bộ câu hỏi kiểm chứng thông tin giúp bạn áp dụng nhận thức lý tính vào thực tiễn"
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {items.map(({ q, hint }, i) => (
            <motion.div
              key={i}
              style={{
                display: "flex",
                gap: "16px",
                alignItems: "flex-start",
                background: "#f9fafb",
                border: "1.5px solid #d1d5db",
                borderRadius: "12px",
                padding: "16px 18px",
                transition: "all 0.2s",
              }}
              initial={prefersReducedMotion ? undefined : { opacity: 0, x: -16 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateX(4px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateX(0)"; }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "#374151",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "13px",
                  fontWeight: 800,
                  flexShrink: 0,
                }}
              >
                {i + 1}
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ margin: "0 0 4px", fontSize: "14px", fontWeight: 700, color: S.blue, lineHeight: 1.4 }}>{q}</p>
                <p style={{ margin: 0, fontSize: "12px", color: "#6B7280", lineHeight: 1.45 }}>
                  <span style={{ fontWeight: 600, color: "#9CA3AF" }}>Gợi ý: </span>{hint}
                </p>
              </div>
              <motion.div
                style={{ flexShrink: 0 }}
                animate={prefersReducedMotion ? undefined : { scale: [1, 1.06, 1] }}
                transition={prefersReducedMotion ? undefined : { duration: 1.8, repeat: Infinity, delay: i * 0.12 }}
              >
                <Square size={20} color="#D1D5DB" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          style={{ marginTop: "28px", background: S.blue, borderRadius: "12px", padding: "18px 22px", display: "flex", gap: "14px", alignItems: "center" }}
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.9 }}
          transition={{ duration: 0.35, delay: 0.08 }}
        >
          <Shield size={28} color="#fff" style={{ flexShrink: 0 }} />
          <p style={{ margin: 0, fontSize: "13.5px", color: "rgba(255,255,255,0.9)", lineHeight: 1.6 }}>
            <strong style={{ color: "#fff" }}>Tư duy phê phán</strong> không có nghĩa là không tin ai — mà là biết cách đặt câu hỏi đúng và kiểm chứng thông tin một cách chủ động, khoa học.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ===== SECTION 9: Kết luận ===== */
export function Section9() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section style={{ padding: "80px 24px", background: "linear-gradient(135deg, #0B1220 0%, #0F172A 60%, #1F2937 100%)", fontFamily: "'Be Vietnam Pro', sans-serif", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -80, left: -80, width: 300, height: 300, borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "820px", margin: "0 auto", textAlign: "center", position: "relative" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(245,158,11,0.14)", border: "1px solid rgba(245,158,11,0.38)", borderRadius: "20px", padding: "5px 16px", marginBottom: "24px" }}>
          <Lightbulb size={14} color="#FDE68A" />
          <span style={{ fontSize: "11px", color: "#FDE68A", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>Kết luận</span>
        </div>

        <h2 style={{ color: "#fff", fontSize: "30px", fontWeight: 800, margin: "0 0 24px", lineHeight: 1.3 }}>
          Lắng nghe bằng cảm xúc,
          <br />
          <span style={{ color: "#FCD34D" }}>nhưng tiếp nhận bằng lý trí</span>
        </h2>

        <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "15px", lineHeight: 1.75, margin: "0 0 40px", maxWidth: "620px", marginLeft: "auto", marginRight: "auto" }}>
          KOLs và influencers có thể là nguồn tham khảo hữu ích, có thể truyền cảm hứng và cung cấp kinh nghiệm sống. Tuy nhiên, không nên xem họ là nguồn chân lý tuyệt đối. Sinh viên cần biết kết hợp giữa nhận thức cảm tính và nhận thức lý tính, giữa niềm tin và sự kiểm chứng.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "40px", textAlign: "left" }}>
          <motion.div
            style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "14px", padding: "22px 20px" }}
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 14 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.65 }}
            transition={{ duration: 0.35 }}
          >
            <Quote size={22} color="rgba(255,255,255,0.5)" style={{ marginBottom: "12px" }} />
            <p style={{ margin: 0, fontSize: "15px", fontWeight: 700, color: "#fff", lineHeight: 1.55, fontStyle: "italic" }}>
              "Hãy lắng nghe người nổi tiếng như một nguồn tham khảo, nhưng phải kiểm chứng bằng lý trí, tri thức và thực tiễn."
            </p>
          </motion.div>
          <motion.div
            style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "14px", padding: "22px 20px" }}
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 14 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.65 }}
            transition={{ duration: 0.35, delay: 0.08 }}
          >
            <Quote size={22} color="rgba(255,255,255,0.5)" style={{ marginBottom: "12px" }} />
            <p style={{ margin: 0, fontSize: "15px", fontWeight: 700, color: "#fff", lineHeight: 1.55, fontStyle: "italic" }}>
              "Chân lý không nằm ở độ nổi tiếng của người nói, mà nằm ở sự phù hợp với hiện thực khách quan."
            </p>
          </motion.div>
        </div>

        {/* 3 takeaways */}
        <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
          {[
            { icon: "🧠", label: "Tư duy phê phán" },
            { icon: "🔬", label: "Kiểm chứng thực tiễn" },
            { icon: "⚖️", label: "Chân lý khách quan" },
          ].map(({ icon, label }, i) => (
            <motion.div
              key={label}
              style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "40px", padding: "10px 20px", display: "flex", alignItems: "center", gap: "8px" }}
              initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.92 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
            >
              <span style={{ fontSize: "18px" }}>{icon}</span>
              <span style={{ color: "#fff", fontSize: "13px", fontWeight: 700 }}>{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== FOOTER ===== */
export function Footer() {
  return (
    <footer style={{ background: "#0B1220", padding: "24px", fontFamily: "'Be Vietnam Pro', sans-serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <p style={{ margin: "0 0 3px", fontSize: "13px", color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>Chủ đề: Triết học Mác – Lênin | Nhận thức luận và tiêu chuẩn chân lý</p>
          <p style={{ margin: 0, fontSize: "11.5px", color: "rgba(255,255,255,0.4)" }}>Dành cho sinh viên đại học · Môn học Triết học Mác – Lênin</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "rgba(245,158,11,0.14)", border: "1px solid rgba(245,158,11,0.38)", borderRadius: "8px", padding: "6px 14px" }}>
          <Scale size={14} color="#FDE68A" />
          <span style={{ color: "#FDE68A", fontSize: "12px", fontWeight: 700 }}>Thực tiễn là tiêu chuẩn của chân lý</span>
        </div>
      </div>
    </footer>
  );
}
