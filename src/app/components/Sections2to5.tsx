import { AlertCircle, Brain, CheckCircle, Eye, Flame, Heart, Lightbulb, MessageCircle, Quote, Share2, Shield, Star, ThumbsUp, Users, Zap } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const S = {
  blue: "#0F172A",
  cyan: "#FFF8E6",
  yellow: "#EAB308",
  gray: "#334155",
  white: "#FFF8E6",
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

function LearningSummary({ points, nextHref, nextLabel }: { points: string[]; nextHref: string; nextLabel: string }) {
  return (
    <div style={{ marginTop: "26px", padding: "16px 18px", borderRadius: "12px", border: "1px solid #dbe3ef", background: "#fff" }}>
      <p style={{ margin: "0 0 10px", fontSize: "13px", fontWeight: 800, color: S.blue, textTransform: "uppercase", letterSpacing: "0.8px" }}>
        Ý chính cần nhớ
      </p>
      <div style={{ display: "grid", gap: "6px", marginBottom: "12px" }}>
        {points.map((point) => (
          <div key={point} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
            <div style={{ marginTop: "6px", width: "6px", height: "6px", borderRadius: "999px", background: "#EAB308", flexShrink: 0 }} />
            <span style={{ fontSize: "14px", color: S.gray, lineHeight: 1.5 }}>{point}</span>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <a href={nextHref} style={{ fontSize: "13px", fontWeight: 700, color: "#0F172A", background: "rgba(234,179,8,0.2)", border: "1px solid rgba(234,179,8,0.4)", borderRadius: "999px", padding: "7px 13px", textDecoration: "none" }}>
          Tiếp theo: {nextLabel}
        </a>
        <a href="#top" style={{ fontSize: "13px", fontWeight: 700, color: "#475569", border: "1px solid #d1d5db", borderRadius: "999px", padding: "7px 13px", textDecoration: "none" }}>
          Quay lại đầu trang
        </a>
      </div>
    </div>
  );
}

/* ===== SECTION 2: Đặt vấn đề ===== */
export function Section2() {
  const prefersReducedMotion = useReducedMotion();
  const cards = [
    {
      icon: <Star size={22} color="#374151" />,
      color: "#f3f4f6",
      border: "#d1d5db",
      title: "Uy tín cá nhân",
      text: "Sinh viên dễ tin vào người có danh tiếng, hình ảnh thành công hoặc phong cách thuyết phục — dù chưa kiểm chứng chuyên môn.",
    },
    {
      icon: <Users size={22} color="#374151" />,
      color: "#f3f4f6",
      border: "#d1d5db",
      title: "Hiệu ứng đám đông",
      text: "Một thông tin được nhiều người chia sẻ, bình luận tích cực sẽ dễ bị xem là đúng dù không có bằng chứng khoa học.",
    },
    {
      icon: <Heart size={22} color="#374151" />,
      color: "#f3f4f6",
      border: "#d1d5db",
      title: "Cảm xúc dẫn dắt nhận thức",
      text: "Sự yêu thích, ngưỡng mộ, đồng cảm có thể khiến người học tiếp nhận thông tin thiếu kiểm chứng một cách tự nhiên.",
    },
  ];

  return (
    <section id="van-de" style={{ padding: "80px 24px", background: S.white, fontFamily: "'Be Vietnam Pro', sans-serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <SectionTitle
          tag="Section 02 — Đặt vấn đề"
          title='Khi người nổi tiếng trở thành "nguồn chân lý"'
          sub="Mạng xã hội khiến thông tin lan truyền nhanh chóng. KOLs và influencers có sức ảnh hưởng lớn đến suy nghĩ, cảm xúc và hành vi của sinh viên. Nhiều lời khuyên được tiếp nhận không hẳn vì đã được chứng minh đúng, mà vì người nói nổi tiếng, có sức hút và được cộng đồng ủng hộ."
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {cards.map(({ icon, color, border, title, text }, i) => (
            <motion.div
              key={title}
              style={{ background: color, border: `1.5px solid ${border}`, borderRadius: "16px", padding: "28px 24px", transition: "transform 0.2s, box-shadow 0.2s" }}
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 18 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: 0.06 * i }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 30px rgba(0,0,0,0.1)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
            >
              <div style={{ background: "rgba(255,255,255,0.7)", borderRadius: "10px", width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                {icon}
              </div>
              <h3 style={{ margin: "0 0 10px", fontSize: "16px", fontWeight: 800, color: S.blue }}>{title}</h3>
              <p style={{ margin: 0, fontSize: "13.5px", color: S.gray, lineHeight: 1.65 }}>{text}</p>
            </motion.div>
          ))}
        </div>
        <LearningSummary
          points={[
            "Uy tín và độ nổi tiếng không thay thế cho bằng chứng.",
            "Cảm xúc đám đông có thể làm sai lệch nhận thức ban đầu.",
            "Cần đặt câu hỏi trước khi chấp nhận lời khuyên trên mạng.",
          ]}
          nextHref="#triet-hoc"
          nextLabel="Góc nhìn triết học"
        />
      </div>
    </section>
  );
}

/* ===== SECTION 3: Góc nhìn triết học Mác – Lênin ===== */
export function Section3() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section id="triet-hoc" style={{ padding: "80px 24px", background: "#f8faff", fontFamily: "'Be Vietnam Pro', sans-serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <SectionTitle
          tag="Section 03 — Góc nhìn triết học"
          title="Nhận thức không chỉ là lý trí, mà còn chịu tác động bởi niềm tin và cảm xúc"
        />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "start" }}>
          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, x: -20 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45 }}
          >
            <p style={{ color: S.gray, fontSize: "14.5px", lineHeight: 1.75, margin: "0 0 20px" }}>
              Theo góc nhìn triết học Mác – Lênin, <strong style={{ color: S.blue }}>ý thức con người</strong> không chỉ bao gồm tri thức mà còn có <strong style={{ color: S.blue }}>tình cảm, niềm tin, ý chí</strong>. Tình cảm phản ánh quan hệ giữa con người với thế giới xung quanh và có thể trở thành động lực trong hành động.
            </p>
            <p style={{ color: S.gray, fontSize: "14.5px", lineHeight: 1.75, margin: "0 0 20px" }}>
              Niềm tin được hình thành từ sự kết hợp giữa tri thức, cảm xúc và trải nghiệm thực tiễn. Vì vậy, khi sinh viên tin vào KOLs hay influencers, đó không chỉ là quá trình tiếp nhận thông tin, mà còn là quá trình bị chi phối bởi cảm xúc cá nhân, niềm tin xã hội và tâm lý cộng đồng.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {["Tri thức + Cảm xúc + Trải nghiệm → Niềm tin", "Niềm tin xã hội ảnh hưởng đến quá trình nhận thức", "Ý thức = Tri thức + Tình cảm + Ý chí"].map((item, i) => (
                <motion.div
                  key={i}
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                  initial={prefersReducedMotion ? undefined : { opacity: 0, x: -8 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 1 }}
                  transition={{ duration: 0.28, delay: 0.08 + i * 0.06 }}
                >
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: S.blue, flexShrink: 0 }} />
                  <span style={{ fontSize: "13.5px", color: S.gray, lineHeight: 1.5 }}>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, x: 20 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            {/* Block quote */}
            <div
              style={{
                background: "linear-gradient(135deg, #0F172A 0%, #1F2937 100%)",
                borderRadius: "16px",
                padding: "32px 28px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{ position: "absolute", top: -20, right: -20, opacity: 0.08 }}>
                <Quote size={100} color="#fff" />
              </div>
              <Quote size={28} color="rgba(255,255,255,0.5)" style={{ marginBottom: "16px" }} />
              <p style={{ margin: "0 0 16px", fontSize: "17px", fontWeight: 700, color: "#fff", lineHeight: 1.55, fontStyle: "italic" }}>
                "Cái được nhiều người tin chưa chắc là cái đúng. Cái tạo cảm xúc mạnh chưa chắc là chân lý."
              </p>
              <div style={{ height: "1px", background: "rgba(255,255,255,0.2)", margin: "16px 0" }} />
              <p style={{ margin: 0, fontSize: "12px", color: "rgba(255,255,255,0.55)", fontStyle: "normal", letterSpacing: "0.5px" }}>Triết học Mác – Lênin về nhận thức luận</p>
            </div>

            {/* 3 elements */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", marginTop: "16px" }}>
              {[
                { icon: <Lightbulb size={22} color="#374151" />, label: "Tri thức", sub: "Cơ sở nhận thức" },
                { icon: <Heart size={22} color="#374151" />, label: "Tình cảm", sub: "Động lực hành động" },
                { icon: <Flame size={22} color="#374151" />, label: "Ý chí", sub: "Định hướng hành vi" },
              ].map(({ icon, label, sub }, i) => (
                <motion.div
                  key={label}
                  style={{ background: "#f3f4f6", borderRadius: "10px", padding: "14px", textAlign: "center", border: "1px solid #d1d5db" }}
                  initial={prefersReducedMotion ? undefined : { opacity: 0, y: 10 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 1 }}
                  transition={{ duration: 0.25, delay: 0.16 + i * 0.06 }}
                >
                  <div style={{ display: "flex", justifyContent: "center", marginBottom: "6px" }}>{icon}</div>
                  <p style={{ margin: "0 0 2px", fontSize: "12px", fontWeight: 700, color: S.blue }}>{label}</p>
                  <p style={{ margin: 0, fontSize: "10.5px", color: "#4B5563" }}>{sub}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        <LearningSummary
          points={[
            "Ý thức bao gồm tri thức, tình cảm và ý chí.",
            "Niềm tin được tạo bởi cả tri thức lẫn trải nghiệm.",
            "Nhận thức cần được soi chiếu bằng lý trí và thực tiễn.",
          ]}
          nextHref="#niem-tin"
          nextLabel="Niềm tin và cảm xúc"
        />
      </div>
    </section>
  );
}

/* ===== SECTION 4: Niềm tin xã hội & cảm xúc tập thể ===== */
export function Section4() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section id="niem-tin" style={{ padding: "80px 24px", background: S.white, fontFamily: "'Be Vietnam Pro', sans-serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <SectionTitle
          tag="Section 04 — Niềm tin & Cảm xúc"
          title="Niềm tin xã hội và cảm xúc tập thể tác động đến nhận thức như thế nào?"
        />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", marginBottom: "40px" }}>
          {/* Left: Niềm tin xã hội */}
          <motion.div
            style={{ background: "#f9fafb", border: "1.5px solid #d1d5db", borderRadius: "16px", padding: "28px 24px" }}
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 18 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.42 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "18px" }}>
              <div style={{ background: "#374151", borderRadius: "10px", padding: "10px" }}>
                <ThumbsUp size={20} color="#fff" />
              </div>
              <h3 style={{ margin: 0, fontSize: "17px", fontWeight: 800, color: S.blue }}>Niềm tin xã hội</h3>
            </div>
            <p style={{ margin: "0 0 18px", fontSize: "13.5px", color: S.gray, lineHeight: 1.7 }}>
              Niềm tin xã hội khiến con người dễ chấp nhận thông tin từ người có uy tín, danh tiếng hoặc được cộng đồng công nhận. Trên mạng xã hội, số lượng người theo dõi và hình ảnh thành công có thể tạo cảm giác đáng tin.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
              {[
                "Tin vì người nói nổi tiếng",
                "Tin vì người nói có hình ảnh thành công",
                "Tin vì nhiều người khác cũng tin",
                "Tin vì lời nói phù hợp với mong muốn cá nhân",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                  initial={prefersReducedMotion ? undefined : { opacity: 0, x: -8 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 1 }}
                  transition={{ duration: 0.24, delay: 0.08 + i * 0.05 }}
                >
                  <div style={{ width: "22px", height: "22px", borderRadius: "50%", background: "#e5e7eb", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontSize: "10px", color: "#374151", fontWeight: 700 }}>{i + 1}</span>
                  </div>
                  <span style={{ fontSize: "13px", color: S.gray }}>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Cảm xúc tập thể */}
          <motion.div
            style={{ background: "#f9fafb", border: "1.5px solid #d1d5db", borderRadius: "16px", padding: "28px 24px" }}
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 18 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.42, delay: 0.08 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "18px" }}>
              <div style={{ background: "#374151", borderRadius: "10px", padding: "10px" }}>
                <Users size={20} color="#fff" />
              </div>
              <h3 style={{ margin: 0, fontSize: "17px", fontWeight: 800, color: S.blue }}>Cảm xúc tập thể</h3>
            </div>
            <p style={{ margin: "0 0 18px", fontSize: "13.5px", color: S.gray, lineHeight: 1.7 }}>
              Cảm xúc tập thể xuất hiện khi một cộng đồng cùng chia sẻ sự ngưỡng mộ, phấn khích, lo sợ hoặc đồng cảm. Khi cảm xúc lan truyền mạnh, cá nhân dễ bị cuốn theo đám đông và giảm khả năng kiểm chứng độc lập.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
              {[
                "Dễ bị cuốn theo xu hướng",
                "Dễ nhầm sự lan truyền với sự đúng đắn",
                "Dễ đánh giá thông tin bằng cảm xúc thay vì lý trí",
                "Dễ xem KOLs như hình mẫu tuyệt đối",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                  initial={prefersReducedMotion ? undefined : { opacity: 0, x: 8 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 1 }}
                  transition={{ duration: 0.24, delay: 0.16 + i * 0.05 }}
                >
                  <div style={{ width: "22px", height: "22px", borderRadius: "50%", background: "#e5e7eb", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontSize: "10px", color: "#374151", fontWeight: 700 }}>{i + 1}</span>
                  </div>
                  <span style={{ fontSize: "13px", color: S.gray }}>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Flow diagram */}
        <div style={{ background: "linear-gradient(135deg, #FFFBEB, #FEF3C7)", border: "1.5px solid #FCD34D", borderRadius: "14px", padding: "24px 28px" }}>
          <p style={{ margin: "0 0 16px", fontSize: "12px", fontWeight: 700, color: "#92400E", textTransform: "uppercase", letterSpacing: "1px" }}>Sơ đồ quá trình nhận thức bị ảnh hưởng</p>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
            {[
              { label: "KOLs / Influencers", bg: "#0F172A", color: "#fff", icon: <Star size={14} color="#fff" /> },
              { label: "Cảm xúc lan truyền", bg: "#0F172A", color: "#fff", icon: <Heart size={14} color="#fff" /> },
              { label: "Niềm tin hình thành", bg: "#0F172A", color: "#fff", icon: <ThumbsUp size={14} color="#fff" /> },
              { label: "Hành vi thay đổi", bg: "#0F172A", color: "#fff", icon: <Users size={14} color="#fff" /> },
              { label: "Cần kiểm chứng bằng thực tiễn ✓", bg: "#0F172A", color: "#fff", icon: <Shield size={14} color="#fff" /> },
            ].map(({ label, bg, color, icon }, i, arr) => (
              <motion.div
                key={i}
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 10 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 1 }}
                transition={{ duration: 0.26, delay: i * 0.07 }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "6px", background: bg, color, borderRadius: "8px", padding: "8px 14px", fontSize: "12.5px", fontWeight: 600 }}>
                  {icon} {label}
                </div>
                {i < arr.length - 1 && (
                  <motion.span
                    style={{ color: "#94a3b8", fontSize: "18px", fontWeight: 300 }}
                    animate={prefersReducedMotion ? undefined : { opacity: [0.4, 1, 0.4] }}
                    transition={prefersReducedMotion ? undefined : { duration: 1.5, repeat: Infinity, delay: i * 0.12 }}
                  >
                    →
                  </motion.span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
        <LearningSummary
          points={[
            "Niềm tin xã hội và cảm xúc tập thể dễ tác động hành vi.",
            "Lan truyền mạnh không đồng nghĩa với thông tin đúng.",
            "Kiểm chứng độc lập là bước bảo vệ nhận thức.",
          ]}
          nextHref="#nhan-thuc"
          nextLabel="Nhận thức luận"
        />
      </div>
    </section>
  );
}

/* ===== SECTION 5: Nhận thức cảm tính vs lý tính ===== */
export function Section5() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section id="nhan-thuc" style={{ padding: "80px 24px", background: "#f8faff", fontFamily: "'Be Vietnam Pro', sans-serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <SectionTitle
          tag="Section 05 — Nhận thức luận"
          title="Từ nhận thức cảm tính đến nhận thức lý tính"
          sub="Hai giai đoạn của quá trình nhận thức và cách chúng biểu hiện trong bối cảnh mạng xã hội"
        />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
          {/* Card 1: Nhận thức cảm tính */}
          <motion.div
            style={{ background: "linear-gradient(160deg, #fafafa, #f0f0f0)", border: "2px solid #d1d5db", borderRadius: "20px", padding: "32px 28px", position: "relative", overflow: "hidden" }}
            initial={prefersReducedMotion ? undefined : { opacity: 0, x: -26 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45 }}
          >
            <div style={{ position: "absolute", top: -20, right: -20, opacity: 0.07 }}>
              <Eye size={120} color="#374151" />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
              <div style={{ background: "#374151", borderRadius: "50%", padding: "10px" }}>
                <Eye size={20} color="#fff" />
              </div>
              <div>
                <div style={{ fontSize: "10px", color: "#374151", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>Giai đoạn 1</div>
                <h3 style={{ margin: 0, fontSize: "20px", fontWeight: 800, color: "#1f2937" }}>Nhận thức cảm tính</h3>
              </div>
            </div>
            <div style={{ background: "#f3f4f6", border: "1px solid #d1d5db", borderRadius: "8px", padding: "10px 14px", marginBottom: "18px" }}>
              <p style={{ margin: 0, fontSize: "12.5px", color: "#374151", lineHeight: 1.55 }}>
                Dựa trên cảm giác, tri giác và biểu tượng. Giúp tiếp xúc trực tiếp với sự vật nhưng thường chỉ phản ánh vẻ bề ngoài.
              </p>
            </div>
            <p style={{ margin: "0 0 14px", fontSize: "12.5px", color: "#1f2937", fontWeight: 700 }}>Biểu hiện khi tin vào KOLs vì:</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
              {[
                "Người đó nói chuyện tự tin",
                "Hình ảnh đẹp, đời sống thành công",
                "Nội dung truyền cảm hứng",
                "Có nhiều lượt thích, bình luận tích cực",
                "Tạo cảm giác gần gũi và đáng tin",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}
                  initial={prefersReducedMotion ? undefined : { opacity: 0, x: -8 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 1 }}
                  transition={{ duration: 0.24, delay: 0.08 + i * 0.05 }}
                >
                  <Zap size={13} color="#374151" style={{ marginTop: "2px", flexShrink: 0 }} />
                  <span style={{ fontSize: "13px", color: "#374151", lineHeight: 1.5 }}>{item}</span>
                </motion.div>
              ))}
            </div>
            <div style={{ background: "rgba(55,65,81,0.08)", borderRadius: "8px", padding: "12px 14px", display: "flex", gap: "8px" }}>
              <AlertCircle size={15} color="#374151" style={{ flexShrink: 0, marginTop: "1px" }} />
              <p style={{ margin: 0, fontSize: "12px", color: "#374151", lineHeight: 1.5, fontStyle: "italic" }}>Nhanh và trực tiếp, nhưng dễ bị chi phối bởi hình ảnh, cảm xúc và ấn tượng ban đầu.</p>
            </div>
          </motion.div>

          {/* Card 2: Nhận thức lý tính */}
          <motion.div
            style={{ background: "linear-gradient(160deg, #f8fafc, #e2e8f0)", border: "2px solid #94a3b8", borderRadius: "20px", padding: "32px 28px", position: "relative", overflow: "hidden" }}
            initial={prefersReducedMotion ? undefined : { opacity: 0, x: 26 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: 0.06 }}
          >
            <div style={{ position: "absolute", top: -20, right: -20, opacity: 0.07 }}>
              <Brain size={120} color="#374151" />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
              <div style={{ background: "#0F172A", borderRadius: "50%", padding: "10px" }}>
                <Brain size={20} color="#fff" />
              </div>
              <div>
                <div style={{ fontSize: "10px", color: "#0F172A", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>Giai đoạn 2</div>
                <h3 style={{ margin: 0, fontSize: "20px", fontWeight: 800, color: "#0F172A" }}>Nhận thức lý tính</h3>
              </div>
            </div>
            <div style={{ background: "#f1f5f9", border: "1px solid #cbd5e1", borderRadius: "8px", padding: "10px 14px", marginBottom: "18px" }}>
              <p style={{ margin: 0, fontSize: "12.5px", color: "#0F172A", lineHeight: 1.55 }}>
                Dựa trên khái niệm, phán đoán và suy luận. Giúp đi sâu vào bản chất vấn đề, phân tích nguyên nhân, điều kiện và mối liên hệ.
              </p>
            </div>
            <p style={{ margin: "0 0 14px", fontSize: "12.5px", color: "#0F172A", fontWeight: 700 }}>Biết đặt những câu hỏi:</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
              {[
                "Người này có chuyên môn thật không?",
                "Lời khuyên có bằng chứng không?",
                "Có nguồn độc lập nào kiểm chứng không?",
                "Nội dung có phải quảng cáo trá hình không?",
                "Lời khuyên có phù hợp với hoàn cảnh của mình không?",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}
                  initial={prefersReducedMotion ? undefined : { opacity: 0, x: 8 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 1 }}
                  transition={{ duration: 0.24, delay: 0.14 + i * 0.05 }}
                >
                  <CheckCircle size={13} color="#0F172A" style={{ marginTop: "2px", flexShrink: 0 }} />
                  <span style={{ fontSize: "13px", color: "#0F172A", lineHeight: 1.5 }}>{item}</span>
                </motion.div>
              ))}
            </div>
            <div style={{ background: "rgba(30,58,138,0.08)", borderRadius: "8px", padding: "12px 14px", display: "flex", gap: "8px" }}>
              <Shield size={15} color="#0F172A" style={{ flexShrink: 0, marginTop: "1px" }} />
              <p style={{ margin: 0, fontSize: "12px", color: "#0F172A", lineHeight: 1.5, fontStyle: "italic" }}>Giúp vượt qua ấn tượng bề ngoài để đánh giá thông tin khách quan và toàn diện hơn.</p>
            </div>
          </motion.div>
        </div>

        {/* VS divider / bridge */}
        <motion.div
          style={{ textAlign: "center", marginTop: "28px" }}
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.9 }}
          transition={{ duration: 0.35, delay: 0.1 }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: "16px", background: S.blue, color: "#fff", borderRadius: "40px", padding: "10px 24px" }}>
            <MessageCircle size={16} color="#fff" />
            <span style={{ fontSize: "13px", fontWeight: 600 }}>Nhận thức đúng đắn cần kết hợp cả hai giai đoạn và kiểm chứng bằng thực tiễn</span>
            <Brain size={16} color="#fff" />
          </div>
        </motion.div>
        <LearningSummary
          points={[
            "Nhận thức cảm tính nhanh nhưng dễ bị ảnh hưởng bởi bề ngoài.",
            "Nhận thức lý tính giúp phân tích bản chất và điều kiện.",
            "Cần kết hợp hai giai đoạn và đối chiếu với thực tiễn.",
          ]}
          nextHref="#vi-du"
          nextLabel="Ví dụ thực tế"
        />
      </div>
    </section>
  );
}
