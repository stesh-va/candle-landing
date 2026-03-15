import { siteContent } from "@/content/site";

export default function AboutProduct() {
  const { about } = siteContent;

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-grid">
          <div className="about-content">
            <div className="about-badge">О продукте</div>

            <h2 className="about-title">{about.title}</h2>

            <p className="about-text">{about.text}</p>
          </div>

          <div className="about-side-card">
            <div className="about-side-label">Мягкий формат</div>

            <div className="about-points">
              {about.points.map((point, index) => (
                <div key={index} className="about-point">
                  <span className="about-point-dot" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
