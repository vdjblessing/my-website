"use client";

import LatestContent from "./Components/LatestContent";

export default function Home() {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1>Welcome to The Blessing Lab</h1>
      <p>Empowering people through health, creativity, and connection.</p>

      {/* 📬 Contact Section */}
      <div style={{ marginTop: "2rem" }}>
        <h2>Contact Me</h2>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "400px",
            width: "100%",
            gap: "0.5rem",
          }}
        >
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" rows={4}></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* 🩺 Latest Health Insights Section */}
      <div style={{ marginTop: "4rem", width: "100%" }}>
        <LatestContent />
      </div>
    </section>
  );
}
