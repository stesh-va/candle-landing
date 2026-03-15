import { siteContent } from "@/content/site";

export default function Footer() {
  const { footer } = siteContent;

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-text">{footer.text}</div>
      </div>
    </footer>
  );
}
