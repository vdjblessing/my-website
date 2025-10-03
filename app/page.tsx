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
    </main>
  );
}