import { siteContent } from "@/content/site";

export default function Products() {
  const { products } = siteContent;

  return (
    <section id="products" className="products-section">
      <div className="products-container">
        <div className="products-heading">
          <div className="products-badge">Коллекция</div>

          <h2 className="products-title">{products.title}</h2>

          {"subtitle" in products && (
            <p className="products-subtitle">{products.subtitle}</p>
          )}
        </div>

        <div className="products-grid">
          {products.items.map((item, index) => (
            <article key={index} className="product-card">
              <div className="product-gallery">
                {item.images.map((image, imageIndex) => (
                  <div key={imageIndex} className="product-gallery-slide">
                    <img
                      src={image}
                      alt={`${item.name} ${imageIndex + 1}`}
                      className="product-image"
                    />
                  </div>
                ))}
              </div>

              <div className="product-card-body">
                <div className="product-card-top">
                  {"tag" in item && (
                    <div className="product-tag">{item.tag}</div>
                  )}

                  <div className="product-price">{item.price}</div>
                </div>

                <h3 className="product-name">{item.name}</h3>

                <p className="product-description">{item.description}</p>

                <a href="#cta" className="product-button">
                  Оставить заявку
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
