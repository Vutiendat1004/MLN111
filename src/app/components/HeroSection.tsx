import { ArrowDown, Brain, Scale, Search, Share2, Star, ThumbsUp, Users } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { CountUp } from "./Effects";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const yBubbleTop = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const yBubbleBottom = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const xBubbleSide = useTransform(scrollYProgress, [0, 1], [-18, 18]);
  const spotlightX = useMotionValue(240);
  const spotlightY = useMotionValue(200);
  const smoothSpotlightX = useSpring(spotlightX, { stiffness: 160, damping: 24, mass: 0.3 });
  const smoothSpotlightY = useSpring(spotlightY, { stiffness: 160, damping: 24, mass: 0.3 });
  const spotlight = useMotionTemplate`radial-gradient(220px circle at ${smoothSpotlightX}px ${smoothSpotlightY}px, rgba(234,179,8,0.22), rgba(234,179,8,0.08) 38%, rgba(15,23,42,0) 72%)`;

  return (
    <motion.section
      ref={sectionRef}
      style={{
        background: "linear-gradient(135deg, #0B1220 0%, #0F172A 55%, #1F2937 100%)",
        padding: "80px 24px 64px",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Be Vietnam Pro', sans-serif",
      }}
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
      animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Background decorations */}
      <motion.div style={{ position: "absolute", top: -80, right: -80, width: 360, height: 360, borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none", y: yBubbleTop }} />
      <motion.div style={{ position: "absolute", bottom: -60, left: -60, width: 280, height: 280, borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none", y: yBubbleBottom }} />
      <motion.div style={{ position: "absolute", top: "30%", left: "5%", width: 120, height: 120, borderRadius: "50%", background: "rgba(255,255,255,0.03)", pointerEvents: "none", x: xBubbleSide }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
          {/* Left: Text */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.25)", borderRadius: "20px", padding: "5px 14px", marginBottom: "24px" }}>
              <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.85)", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>Triết học Mác – Lênin</span>
            </div>

            <motion.h1
              style={{
                color: "#ffffff",
                fontSize: "32px",
                fontWeight: 800,
                lineHeight: 1.3,
                margin: "0 0 20px",
                letterSpacing: "-0.3px",
              }}
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.55, delay: 0.08 }}
            >
              Niềm tin xã hội,
              <br />
              <span style={{ color: "#FDE68A" }}>cảm xúc tập thể</span>
              <br />
              và nhận thức trong
              <br />
              thời đại mạng xã hội
            </motion.h1>

            <motion.p
              style={{ color: "rgba(255,255,255,0.72)", fontSize: "15px", lineHeight: 1.7, margin: "0 0 32px", maxWidth: "480px" }}
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.65 }}
              transition={{ duration: 0.5, delay: 0.18 }}
            >
              Trong thời đại mạng xã hội, nhiều sinh viên dễ tin vào lời khuyên của KOLs, influencers về tài chính, sức khỏe, học tập, tình yêu… Thậm chí, có người xem họ như <em style={{ color: "rgba(255,255,255,0.9)" }}>"nguồn chân lý"</em>. Hiện tượng này phản ánh cách nhận thức đang chịu ảnh hưởng mạnh bởi niềm tin xã hội và cảm xúc tập thể.
            </motion.p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <motion.a
                href="#van-de"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#EAB308",
                  color: "#111827",
                  fontWeight: 700,
                  fontSize: "14px",
                  padding: "12px 22px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                }}
                whileHover={prefersReducedMotion ? undefined : { y: -2, scale: 1.02 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
              >
                Tìm hiểu vấn đề <ArrowDown size={16} />
              </motion.a>
              <motion.a
                href="#thuc-tien"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(234,179,8,0.14)",
                  color: "#FDE68A",
                  fontWeight: 600,
                  fontSize: "14px",
                  padding: "12px 22px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  border: "1px solid rgba(234,179,8,0.35)",
                }}
                whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
              >
                Vai trò của thực tiễn
              </motion.a>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", gap: "24px", marginTop: "40px", paddingTop: "32px", borderTop: "1px solid rgba(255,255,255,0.12)" }}>
              {[
                { num: "9", label: "Chủ đề" },
                { num: "5", label: "Lĩnh vực" },
                { num: "7", label: "Câu hỏi kiểm chứng" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <div style={{ fontSize: "26px", fontWeight: 800, color: "#fff" }}>
                    <CountUp to={Number(num)} />
                  </div>
                  <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)", fontWeight: 500 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Illustration */}
          <motion.div
            style={{ position: "relative" }}
            initial={prefersReducedMotion ? undefined : { opacity: 0, x: 24 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            onMouseMove={(e) => {
              if (prefersReducedMotion) return;
              const rect = e.currentTarget.getBoundingClientRect();
              spotlightX.set(e.clientX - rect.left);
              spotlightY.set(e.clientY - rect.top);
            }}
            onMouseLeave={(e) => {
              if (prefersReducedMotion) return;
              const rect = e.currentTarget.getBoundingClientRect();
              spotlightX.set(rect.width / 2);
              spotlightY.set(rect.height * 0.45);
            }}
          >
            {!prefersReducedMotion && (
              <motion.div
                style={{
                  position: "absolute",
                  inset: "-12px",
                  borderRadius: "18px",
                  background: spotlight,
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />
            )}
            {/* Center: Student */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0", position: "relative", zIndex: 1 }}>
              {/* Top label */}
              <motion.div
                style={{ background: "rgba(234,179,8,0.12)", border: "1px solid rgba(234,179,8,0.26)", borderRadius: "8px", padding: "8px 16px", marginBottom: "16px", textAlign: "center" }}
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 8 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.9 }}
                transition={{ duration: 0.35, delay: 0.08 }}
              >
                <span style={{ color: "rgba(255,255,255,0.82)", fontSize: "12px", fontWeight: 600 }}>Sinh viên đứng giữa hai luồng thông tin</span>
              </motion.div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "16px", alignItems: "center", width: "100%" }}>
                {/* Left column: Cảm xúc / đám đông */}
                <motion.div
                  style={{ background: "linear-gradient(160deg, rgba(255,255,255,0.1), rgba(255,255,255,0.06))", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "16px 14px" }}
                  initial={prefersReducedMotion ? undefined : { opacity: 0, x: -18 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ duration: 0.4, delay: 0.14 }}
                  whileHover={prefersReducedMotion ? undefined : { y: -3, boxShadow: "0 16px 32px rgba(0,0,0,0.24)" }}
                >
                  <p style={{ margin: "0 0 10px", fontSize: "11px", fontWeight: 800, color: "rgba(255,255,255,0.6)", textAlign: "center", textTransform: "uppercase", letterSpacing: "0.5px" }}>Cảm xúc & Đám đông</p>
                  {[
                    { icon: <Star size={13} color="rgba(255,255,255,0.7)" />, text: "KOLs / Influencers" },
                    { icon: <ThumbsUp size={13} color="rgba(255,255,255,0.7)" />, text: "Lượt thích, viral" },
                    { icon: <Users size={13} color="rgba(255,255,255,0.7)" />, text: "Hiệu ứng đám đông" },
                    { icon: <Share2 size={13} color="rgba(255,255,255,0.7)" />, text: "Tin vì nổi tiếng" },
                  ].map(({ icon, text }, i) => (
                    <motion.div
                      key={i}
                      style={{ display: "flex", gap: "7px", alignItems: "center", marginBottom: "7px" }}
                      initial={prefersReducedMotion ? undefined : { opacity: 0, x: -8 }}
                      whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 1 }}
                      transition={{ duration: 0.24, delay: 0.18 + i * 0.04 }}
                    >
                      <div style={{ flexShrink: 0 }}>{icon}</div>
                      <span style={{ fontSize: "11.5px", color: "rgba(255,255,255,0.8)" }}>{text}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Center: Student avatar */}
                <motion.div
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}
                  initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.75 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <div style={{ position: "relative", width: "72px", height: "72px" }}>
                    <motion.div
                      style={{
                        position: "absolute",
                        inset: "-8px",
                        borderRadius: "9999px",
                        border: "1px solid rgba(234,179,8,0.5)",
                      }}
                      animate={prefersReducedMotion ? undefined : { scale: [1, 1.24, 1], opacity: [0.45, 0, 0.45] }}
                      transition={prefersReducedMotion ? undefined : { duration: 2.1, repeat: Infinity, ease: "easeOut" }}
                    />
                    <motion.div
                      style={{
                        width: "72px",
                        height: "72px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #fff, #e5e7eb)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "32px",
                        boxShadow: "0 0 0 4px rgba(255,255,255,0.2), 0 8px 24px rgba(0,0,0,0.3)",
                      }}
                      animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }}
                      transition={prefersReducedMotion ? undefined : { duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      🎓
                    </motion.div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px", alignItems: "center" }}>
                    <div style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "4px", padding: "2px 8px", fontSize: "10px", color: "#fff", fontWeight: 700 }}>?</div>
                    <div style={{ width: "2px", height: "20px", background: "rgba(255,255,255,0.2)" }} />
                  </div>
                </motion.div>

                {/* Right column: Lý trí / thực tiễn */}
                <motion.div
                  style={{ background: "linear-gradient(160deg, rgba(255,255,255,0.1), rgba(255,255,255,0.06))", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "16px 14px" }}
                  initial={prefersReducedMotion ? undefined : { opacity: 0, x: 18 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ duration: 0.4, delay: 0.26 }}
                  whileHover={prefersReducedMotion ? undefined : { y: -3, boxShadow: "0 16px 32px rgba(0,0,0,0.24)" }}
                >
                  <p style={{ margin: "0 0 10px", fontSize: "11px", fontWeight: 800, color: "rgba(255,255,255,0.6)", textAlign: "center", textTransform: "uppercase", letterSpacing: "0.5px" }}>Lý trí & Thực tiễn</p>
                  {[
                    { icon: <Brain size={13} color="rgba(255,255,255,0.7)" />, text: "Tư duy phê phán" },
                    { icon: <Search size={13} color="rgba(255,255,255,0.7)" />, text: "Kiểm chứng khoa học" },
                    { icon: <Scale size={13} color="rgba(255,255,255,0.7)" />, text: "Tiêu chuẩn chân lý" },
                    { icon: <Star size={13} color="rgba(255,255,255,0.7)" />, text: "Hiện thực khách quan" },
                  ].map(({ icon, text }, i) => (
                    <motion.div
                      key={i}
                      style={{ display: "flex", gap: "7px", alignItems: "center", marginBottom: "7px" }}
                      initial={prefersReducedMotion ? undefined : { opacity: 0, x: 8 }}
                      whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 1 }}
                      transition={{ duration: 0.24, delay: 0.3 + i * 0.04 }}
                    >
                      <div style={{ flexShrink: 0 }}>{icon}</div>
                      <span style={{ fontSize: "11.5px", color: "rgba(255,255,255,0.8)" }}>{text}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Bottom arrows */}
              <div style={{ display: "flex", gap: "16px", marginTop: "16px", width: "100%" }}>
                <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "6px" }}>
                  <div style={{ flex: 1, height: "2px", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.35))", position: "relative", overflow: "hidden" }}>
                    {!prefersReducedMotion && (
                      <motion.div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "40%",
                          height: "100%",
                          background: "linear-gradient(90deg, transparent, rgba(234,179,8,0.95), transparent)",
                        }}
                        animate={{ x: ["-120%", "260%"] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                      />
                    )}
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "16px" }}>→</div>
                </div>
                <div style={{ width: "72px" }} />
                <div style={{ flex: 1, display: "flex", alignItems: "center", gap: "6px" }}>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "16px" }}>←</div>
                  <div style={{ flex: 1, height: "2px", background: "linear-gradient(90deg, rgba(255,255,255,0.35), transparent)", position: "relative", overflow: "hidden" }}>
                    {!prefersReducedMotion && (
                      <motion.div
                        style={{
                          position: "absolute",
                          top: 0,
                          right: 0,
                          width: "40%",
                          height: "100%",
                          background: "linear-gradient(90deg, transparent, rgba(234,179,8,0.95), transparent)",
                        }}
                        animate={{ x: ["260%", "-120%"] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
