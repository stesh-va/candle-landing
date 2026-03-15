import { siteContent } from "@/content/site";

export default function Benefits() {
  const { benefits } = siteContent;

  return (
    <section className="benefits-section">
      <div className="benefits-container">
        <div className="benefits-heading">
          <div className="benefits-badge">Преимущества</div>

          <h2 className="benefits-title">{benefits.title}</h2>

          {"subtitle" in benefits && (
            <p className="benefits-subtitle">{benefits.subtitle}</p>
          )}
        </div>

        <div className="benefits-grid">
          {benefits.items.map((item, index) => (
            <article key={index} className="benefit-card">
              <div className="benefit-icon">{item.icon}</div>

              <h3 className="benefit-title">{item.title}</h3>

              <p className="benefit-text">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
