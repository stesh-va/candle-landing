import { siteContent } from "@/content/site";

export default function HowItWorks() {
  const { howItWorks } = siteContent;

  return (
    <section className="how-section">
      <div className="how-container">
        <div className="how-heading">
          <div className="how-badge">Как это работает</div>

          <h2 className="how-title">{howItWorks.title}</h2>

          {"subtitle" in howItWorks && (
            <p className="how-subtitle">{howItWorks.subtitle}</p>
          )}
        </div>

        <div className="how-grid">
          {howItWorks.steps.map((step, index) => (
            <article key={index} className="how-card">
              <div className="how-card-header">
                <div className="how-number">{step.number}</div>
                <h3 className="how-card-title">{step.title}</h3>
              </div>

              <p className="how-card-text">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
