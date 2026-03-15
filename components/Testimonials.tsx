import { siteContent } from "@/content/site";

export default function Testimonials() {
  const { testimonials } = siteContent;

  return (
    <section style={{ padding: "60px 20px", background: "#fafafa" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "24px" }}>
          {testimonials.title}
        </h2>

        <div
          style={{
            display: "grid",
            gap: "16px",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          }}
        >
          {testimonials.items.map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #eee",
                borderRadius: "14px",
                padding: "20px",
                background: "#fff",
              }}
            >
              <p style={{ lineHeight: 1.6, marginBottom: "12px" }}>
                {item.text}
              </p>
              <strong>{item.name}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
