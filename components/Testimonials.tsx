import { siteContent } from "@/content/site";

export default function Testimonials() {
  const { testimonials } = siteContent;

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-heading">
          <div className="testimonials-badge">Отзывы</div>

          <h2 className="testimonials-title">{testimonials.title}</h2>

          {"subtitle" in testimonials && (
            <p className="testimonials-subtitle">{testimonials.subtitle}</p>
          )}
        </div>

        <div className="testimonials-grid">
          {testimonials.items.map((item, index) => (
            <article key={index} className="testimonial-card">
              <div className="testimonial-quote">“</div>

              <p className="testimonial-text">{item.text}</p>

              <div className="testimonial-author">{item.name}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
