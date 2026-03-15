import { siteContent } from "@/content/site";

export default function FAQ() {
  const { faq } = siteContent;

  return (
    <section id="faq" style={{ padding: "60px 20px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "24px" }}>{faq.title}</h2>

        <div style={{ display: "grid", gap: "16px" }}>
          {faq.items.map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #eee",
                borderRadius: "14px",
                padding: "20px",
                background: "#fff",
              }}
            >
              <h3 style={{ marginBottom: "10px" }}>{item.question}</h3>
              <p style={{ lineHeight: 1.6, color: "#444" }}>{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
