"use client";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f9fafb",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Navigation Bar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          backgroundColor: "#2563eb",
          color: "white",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        Stephen’s Website
      </nav>

      {/* Hero Section */}
      <section style={{ padding: "60px", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
          Hello World 🌍
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#555" }}>
          This is Stephen’s first live Next.js site deployed on Vercel 🚀
        </p>
      </section>

      {/* Contact Section */}
      <section
        style={{
          padding: "40px",
          textAlign: "center",
          backgroundColor: "white",
          marginTop: "auto",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>📬 Contact Me</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            fontSize: "1.1rem",
          }}
        >
          <a href="mailto:vdjblessing@gmail.com" style={{ color: "#2563eb" }}>
            Email
          </a>
          <a
            href="https://wa.me/17742533879"
            target="_blank"
            style={{ color: "#25D366" }}
          >
            WhatsApp
          </a>
          <a
            href="https://instagram.com/@kstevox"
            target="_blank"
            style={{ color: "#E1306C" }}
          >
            Instagram
          </a>
          <a
            href="https://twitter.com/Steve Bariki"
            target="_blank"
            style={{ color: "#1DA1F2" }}
          >
            Twitter
          </a>
          <a
            href="https://tiktok.com/@kstevok"
            target="_blank"
            style={{ color: "black" }}
          >
            TikTok
          </a>
          <a
            href="https://facebook.com/Steve Kyerrie"
            target="_blank"
            style={{ color: "#1877F2" }}
          >
            Facebook
          </a>
        </div>
      </section>
    </main>
  );
}