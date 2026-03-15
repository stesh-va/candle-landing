import { siteContent } from "@/content/site";

export default function Hero() {
  const { hero } = siteContent;

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">Атмосфера • Намерение • Эстетика</div>

          <h1 className="hero-title">{hero.title}</h1>

          <p className="hero-subtitle">{hero.subtitle}</p>

          <div className="hero-actions">
            <a
              href={hero.buttonLink}
              className="hero-button hero-button-primary"
            >
              {hero.buttonText}
            </a>

            <a href="#products" className="hero-button hero-button-secondary">
              Посмотреть варианты
            </a>
          </div>

          <div className="hero-tags">
            <div className="hero-tag">Ручная работа</div>
            <div className="hero-tag">Подбор под запрос</div>
            <div className="hero-tag">Идея для подарка</div>
          </div>
        </div>

        <div className="hero-media">
          <div className="hero-image-wrapper">
            <img
              src="/images/white_candle_pions.jpg"
              alt="Свечи"
              className="hero-image"
            />

            <div className="hero-image-card">
              <div className="hero-image-card-label">Авторский формат</div>

              <div className="hero-image-card-title">
                Свечи как часть личного ритуала
              </div>

              <div className="hero-image-card-text">
                Эстетичный формат для намерения, атмосферы и спокойного
                внутреннего фокуса.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
