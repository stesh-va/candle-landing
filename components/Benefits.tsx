import { siteContent } from "@/content/site";

export default function Benefits() {
  const { benefits } = siteContent;

  return (
    <section
      style={{
        padding: "80px 20px",
        background: "linear-gradient(to bottom, #fff, #faf7f2)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ maxWidth: "700px", marginBottom: "32px" }}>
          <div
            style={{
              display: "inline-block",
              padding: "6px 12px",
              borderRadius: "999px",
              background: "#f3ece3",
              fontSize: "14px",
              marginBottom: "14px",
            }}
          >
            Преимущества
          </div>

          <h2
            style={{
              fontSize: "36px",
              lineHeight: 1.2,
              margin: "0 0 12px",
            }}
          >
            {benefits.title}
          </h2>

          <p
            style={{
              margin: 0,
              fontSize: "18px",
              lineHeight: 1.6,
              color: "#555",
            }}
          >
            Мы делаем акцент не только на самой свече, но и на ощущении, которое
            получает человек от выбора, получения и использования продукта.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gap: "20px",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          }}
        >
          {benefits.items.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                border: "1px solid #eee6dc",
                borderRadius: "20px",
                padding: "24px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "14px",
                  background: "#f7f1e8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  marginBottom: "18px",
                }}
              >
                {item.icon}
              </div>

              <h3
                style={{
                  margin: "0 0 10px",
                  fontSize: "20px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  margin: 0,
                  color: "#555",
                  lineHeight: 1.65,
                  fontSize: "16px",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
