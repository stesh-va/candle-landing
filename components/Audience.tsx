export default function Audience() {
  return (
    <section style={{ padding: "20px 20px 60px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gap: "16px",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          }}
        >
          <div style={cardStyle}>Для тех, кто любит красивые ритуалы</div>
          <div style={cardStyle}>Для тех, кто ценит атмосферу и смысл</div>
          <div style={cardStyle}>Для подарка себе или близкому человеку</div>
        </div>
      </div>
    </section>
  );
}

const cardStyle = {
  border: "1px solid #eee",
  borderRadius: "14px",
  padding: "20px",
  background: "#fff",
};
