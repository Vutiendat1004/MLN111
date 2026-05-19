import { BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Đặt vấn đề", href: "#van-de" },
  { label: "Triết học ML", href: "#triet-hoc" },
  { label: "Niềm tin & CX", href: "#niem-tin" },
  { label: "Nhận thức", href: "#nhan-thuc" },
  { label: "Ví dụ", href: "#vi-du" },
  { label: "Thực tiễn", href: "#thuc-tien" },
  { label: "Checklist", href: "#checklist" },
  { label: "Truth Hunter", href: "#truth-hunter" },
];

type NavbarProps = {
  activeHref?: string;
};

export function Navbar({ activeHref }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(30,41,59,0.96)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        fontFamily: "'Be Vietnam Pro', sans-serif",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "60px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ background: "rgba(234,179,8,0.2)", border: "1px solid rgba(234,179,8,0.45)", borderRadius: "8px", padding: "6px" }}>
            <BookOpen size={18} color="#FDE68A" />
          </div>
          <span style={{ color: "#fff", fontSize: "14px", fontWeight: 700, letterSpacing: "0.2px" }}>Triết học Mác – Lênin</span>
        </div>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: "6px", alignItems: "center" }} className="hidden-mobile">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                color: activeHref === l.href ? "#FDE68A" : "rgba(255,255,255,0.75)",
                fontSize: "12.5px",
                fontWeight: 500,
                textDecoration: "none",
                padding: "5px 10px",
                borderRadius: "6px",
                transition: "all 0.2s",
                background: activeHref === l.href ? "rgba(234,179,8,0.24)" : "transparent",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "#fff";
                (e.target as HTMLElement).style.background = "rgba(234,179,8,0.24)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = activeHref === l.href ? "#FDE68A" : "rgba(255,255,255,0.75)";
                (e.target as HTMLElement).style.background = activeHref === l.href ? "rgba(234,179,8,0.24)" : "transparent";
              }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", cursor: "pointer", color: "#fff", padding: "4px", display: "none" }}
          className="show-mobile"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "#1E293B", borderTop: "1px solid rgba(255,255,255,0.1)", padding: "12px 24px 16px" }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ display: "block", color: activeHref === l.href ? "#FDE68A" : "rgba(255,255,255,0.85)", fontSize: "14px", fontWeight: 500, textDecoration: "none", padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
