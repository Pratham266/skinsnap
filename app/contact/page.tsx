"use client";

import { useRef, useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { InstagramIcon, WhatsappIcon } from "@/components/SocialIcons";
import { useReveals } from "@/lib/useReveals";

const faqData = [
  { q: "How fast do you ship?", a: "Orders placed before 2pm PT ship the same business day, with tracking sent to your email." },
  { q: "Do you offer wholesale?", a: 'Yes — reach out at hello@skinsnap.co with "Wholesale" in the subject and our team will share the catalog and terms.' },
  { q: "Is SkinSnap suitable for sensitive skin?", a: "Every formula is 100% natural with no preservatives. We still recommend a patch test if your skin is highly reactive." },
  { q: "What is your return policy?", a: "Unopened pouches can be returned within 30 days. Because each pouch is single-use and hygienic, opened pouches are non-returnable." },
];

export default function ContactPage() {
  const scopeRef = useRef<HTMLDivElement>(null);
  const [faqOpen, setFaqOpen] = useState(0);
  const [sent, setSent] = useState(false);
  useReveals(scopeRef);

  return (
    <div className="wrap" ref={scopeRef}>
      <Nav active="contact" />

      {/* HEADER */}
      <section
        className="section-pad"
        style={{
          padding: "170px 48px 60px",
          textAlign: "center",
          background: "radial-gradient(120% 100% at 50% 0%, #FBF6EF 0%, #EFE4D4 100%)",
        }}
      >
        <div data-hero style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#A15E38" }}>
          Get in Touch
        </div>
        <h1 data-hero className="section-title h-xl" style={{ fontSize: 78, lineHeight: 1.02, margin: "20px 0 0" }}>
          Let&apos;s talk skincare.
        </h1>
        <p data-hero style={{ fontSize: 17, color: "#5A5348", maxWidth: 520, margin: "22px auto 0", lineHeight: 1.6 }}>
          Questions, wholesale, or press — we usually reply within one business day.
        </p>
      </section>

      {/* FORM + INFO */}
      <section className="section-pad" style={{ padding: "70px 48px 110px", background: "#F6F1E9" }}>
        <div className="contact-grid" style={{ maxWidth: 1160, margin: "0 auto", display: "grid", gridTemplateColumns: "1.3fr 0.9fr", gap: 56, alignItems: "start" }}>
          {/* FORM */}
          <div data-reveal style={{ background: "#FCFAF5", border: "1px solid #EAE0D0", borderRadius: 26, padding: 44 }}>
            <h2 className="section-title" style={{ fontSize: 30, margin: "0 0 28px" }}>
              Send us a message
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                setTimeout(() => setSent(false), 2200);
              }}
            >
              <div className="grid-2 contact-fields" style={{ gap: 18 }}>
                <Field label="Name" placeholder="Your name" type="text" required />
                <Field label="Email" placeholder="you@email.com" type="email" required />
                <Field label="Phone" placeholder="Optional" type="tel" />
                <Field label="Subject" placeholder="How can we help?" type="text" />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 18 }}>
                <label style={fieldLabel}>Message</label>
                <textarea
                  rows={5}
                  required
                  placeholder="Tell us more…"
                  style={{ ...fieldInput, resize: "vertical" }}
                />
              </div>
              <button
                type="submit"
                style={{ marginTop: 24, width: "100%", background: "#26221C", color: "#F6F1E9", border: "none", borderRadius: 999, padding: "17px 0", fontFamily: "'Manrope',sans-serif", fontWeight: 700, fontSize: 15, cursor: "pointer", transition: "background 0.25s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#A15E38")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#26221C")}
              >
                {sent ? "Message sent ✓" : "Send Message"}
              </button>
            </form>
          </div>

          {/* INFO */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div data-reveal style={{ background: "#26221C", color: "#F6F1E9", borderRadius: 22, padding: 34 }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#E8CBB2", marginBottom: 22 }}>
                Business Info
              </div>
              <InfoRow icon="✉" label="Email" value="hello@skinsnap.co" />
              <InfoRow icon="☏" label="Phone" value="+1 (415) 555-0199" />
              <InfoRow icon="⌖" label="Studio" value={<>42 Petal Lane, Suite 3<br />San Francisco, CA 94107</>} last />
              <div style={{ display: "flex", gap: 12, marginTop: 26 }}>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={social}><InstagramIcon size={16} /></a>
                <a href="https://wa.me/14155550199" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" style={social}><WhatsappIcon size={16} /></a>
              </div>
            </div>
            {/* MAP PLACEHOLDER */}
            <div data-reveal style={{ borderRadius: 22, overflow: "hidden", border: "1px solid #EAE0D0", height: 220, position: "relative", background: "linear-gradient(135deg,#EDE4D5 0%,#E6D9C4 100%)" }}>
              <svg width="100%" height="100%" viewBox="0 0 400 220" preserveAspectRatio="xMidYMid slice">
                <rect width="400" height="220" fill="#E9DECC" />
                <path d="M0 60 L400 40 M0 130 L400 115 M0 190 L400 178" stroke="#D8C9AF" strokeWidth="8" fill="none" />
                <path d="M90 0 L110 220 M230 0 L210 220 M330 0 L345 220" stroke="#D8C9AF" strokeWidth="8" fill="none" />
                <path d="M0 60 L400 40" stroke="#C9B590" strokeWidth="2" />
                <circle cx="205" cy="118" r="9" fill="#B97C79" />
                <path d="M205 118 C 190 96 190 84 205 84 C 220 84 220 96 205 118 Z" fill="#B97C79" />
                <circle cx="205" cy="92" r="4" fill="#F6F1E9" />
              </svg>
              <div style={{ position: "absolute", bottom: 12, left: 12, background: "rgba(246,241,233,0.9)", borderRadius: 10, padding: "8px 14px", fontSize: 12, fontWeight: 600, color: "#6B6357" }}>
                42 Petal Lane · SF
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad" style={{ padding: "20px 48px 130px", background: "#F6F1E9" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <div data-reveal style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: "#A15E38" }}>Support</div>
            <h2 className="section-title h-lg" style={{ fontSize: 44, margin: "14px 0 0" }}>Frequently asked</h2>
          </div>
          <div data-reveal>
            {faqData.map((f, i) => {
              const open = faqOpen === i;
              return (
                <div key={f.q} style={{ borderBottom: "1px solid #DAD0C0" }}>
                  <button
                    onClick={() => setFaqOpen(open ? -1 : i)}
                    style={{ width: "100%", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20, padding: "24px 4px", textAlign: "left", fontFamily: "'Manrope',sans-serif" }}
                  >
                    <span style={{ fontSize: 17, fontWeight: 600, color: "#26221C" }}>{f.q}</span>
                    <span style={{ fontSize: 24, color: "#A15E38", fontWeight: 300, flexShrink: 0 }}>{open ? "−" : "+"}</span>
                  </button>
                  {open && (
                    <div style={{ padding: "0 4px 24px", fontSize: 15, color: "#6B6357", lineHeight: 1.7 }}>{f.a}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @media (max-width: 520px) {
          .contact-fields {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

function Field({ label, placeholder, type, required }: { label: string; placeholder: string; type: string; required?: boolean }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <label style={fieldLabel}>{label}</label>
      <input type={type} required={required} placeholder={placeholder} style={fieldInput} />
    </div>
  );
}

function InfoRow({ icon, label, value, last }: { icon: string; label: string; value: React.ReactNode; last?: boolean }) {
  return (
    <div style={{ display: "flex", gap: 14, marginBottom: last ? 0 : 18 }}>
      <span style={{ color: "#E8CBB2" }}>{icon}</span>
      <div>
        <div style={{ fontSize: 11, color: "#9B927F", textTransform: "uppercase", letterSpacing: "0.1em" }}>{label}</div>
        <div style={{ fontSize: 15, marginTop: 2, lineHeight: 1.5 }}>{value}</div>
      </div>
    </div>
  );
}

const fieldLabel: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: "#6B6357",
};

const fieldInput: React.CSSProperties = {
  border: "1px solid #E0D6C6",
  background: "#F6F1E9",
  borderRadius: 12,
  padding: "14px 16px",
  fontFamily: "'Manrope',sans-serif",
  fontSize: 14,
  color: "#26221C",
  outline: "none",
  width: "100%",
};

const social: React.CSSProperties = {
  width: 36,
  height: 36,
  borderRadius: "50%",
  border: "1px solid #4A4238",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#C9C1B3",
};
