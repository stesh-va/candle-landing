import { siteContent } from "@/content/site";

export default function CTA() {
  const { cta } = siteContent;

  return (
    <section
      id="cta"
      style={{
        padding: "70px 20px",
        background: "#111",
        color: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "36px", marginBottom: "16px" }}>{cta.title}</h2>
        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.6,
            maxWidth: "700px",
            margin: "0 auto 24px",
          }}
        >
          {cta.text}
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <a
            href={cta.telegramLink}
            style={{
              textDecoration: "none",
              background: "#fff",
              color: "#111",
              padding: "12px 18px",
              borderRadius: "10px",
            }}
          >
            Telegram
          </a>

          <a
            href={cta.whatsappLink}
            style={{
              textDecoration: "none",
              background: "#fff",
              color: "#111",
              padding: "12px 18px",
              borderRadius: "10px",
            }}
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
