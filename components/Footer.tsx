import { siteContent } from "@/content/site";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "24px 20px",
        borderTop: "1px solid #eee",
        background: "#fff",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", color: "#666" }}>
        {siteContent.footer.text}
      </div>
    </footer>
  );
}
