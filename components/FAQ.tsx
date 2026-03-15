import { siteContent } from "@/content/site";

export default function FAQ() {
  const { faq } = siteContent;

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <div className="faq-heading">
          <div className="faq-badge">FAQ</div>

          <h2 className="faq-title">{faq.title}</h2>

          {"subtitle" in faq && <p className="faq-subtitle">{faq.subtitle}</p>}
        </div>

        <div className="faq-grid">
          {faq.items.map((item, index) => (
            <article key={index} className="faq-card">
              <h3 className="faq-question">{item.question}</h3>
              <p className="faq-answer">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
