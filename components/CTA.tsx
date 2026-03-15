import { siteContent } from "@/content/site";

export default function CTA() {
  const { cta } = siteContent;

  return (
    <section id="cta" className="cta-section">
      <div className="cta-container">
        <div className="cta-box">
          <div className="cta-content">
            <div className="cta-badge">Связаться</div>

            <h2 className="cta-title">Подберем свечу под ваше намерение</h2>

            <p className="cta-text">
              Напишите нам в Telegram или WhatsApp. Мы поможем выбрать свечу и
              ответим на любые вопросы.
            </p>

            <div className="cta-buttons">
              <a
                href={cta.telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button-primary"
              >
                Написать в Telegram
              </a>

              <a
                href={cta.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button-secondary"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
