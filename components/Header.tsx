import { siteContent } from "@/content/site";

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header-container">
        <div className="site-header-brand">
          <div className="site-header-brand-title">
            {siteContent.brand.name}
          </div>
          <div className="site-header-brand-tagline">
            {siteContent.brand.tagline}
          </div>
        </div>

        <nav className="site-header-nav">
          <a href="#about" className="site-header-link">
            О свечах
          </a>
          <a href="#products" className="site-header-link">
            Варианты
          </a>
          <a href="#faq" className="site-header-link">
            FAQ
          </a>
          <a href="#cta" className="site-header-link">
            Контакты
          </a>
        </nav>

        <div className="site-header-action">
          <a href="#cta" className="site-header-button">
            Оставить заявку
          </a>
        </div>
      </div>
    </header>
  );
}
