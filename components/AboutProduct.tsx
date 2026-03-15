import { siteContent } from "@/content/site";

export default function AboutProduct() {
  const { about } = siteContent;

  return (
    <section id="about" style={{ padding: "60px 20px", background: "#faf7f2" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "18px" }}>
          {about.title}
        </h2>
        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.7,
            maxWidth: "850px",
            color: "#333",
          }}
        >
          {about.text}
        </p>
      </div>
    </section>
  );
}
