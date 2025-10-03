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
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <h2 style={{ fontSize: "22px", fontWeight: "bold" }}>Kstev</h2>
        <div style={{ display: "flex", gap: "20px" }}>
          <a href="#home" style={{ textDecoration: "none", color: "white" }}>
            Home
          </a>
          <a href="#about" style={{ textDecoration: "none", color: "white" }}>
            About
          </a>
          <a href="#services" style={{ textDecoration: "none", color: "white" }}>
            Services
          </a>
          <a href="#contact" style={{ textDecoration: "none", color: "white" }}>
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        style={{
          textAlign: "center",
          padding: "80px 20px",
          marginBottom: "40px",
        }}
      >
        <h1 style={{ fontSize: "42px", fontWeight: "bold" }}>Hi, I'm Kstev 👋</h1>
        <p style={{ marginTop: "10px", fontSize: "20px" }}>
          Welcome to my personal website 🚀
        </p>
      </section>

      {/* About Section */}
      <section
        id="about"
        style={{
          marginBottom: "60px",
          padding: "20px",
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          maxWidth: "700px",
          width: "90%",
          margin: "0 auto 60px auto",
        }}
      >
        <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>About Me</h2>
        <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
          I'm passionate about technology, learning new skills, and creating
          opportunities online. I built this site to share my journey, showcase
          my work, and connect with awesome people like you.
        </p>
      </section>

      {/* Services Section */}
      <section
        id="services"
        style={{
          marginBottom: "60px",
          padding: "20px",
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          maxWidth: "700px",
          width: "90%",
          margin: "0 auto 60px auto",
        }}
      >
        <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>My Services</h2>
        <ul style={{ fontSize: "16px", lineHeight: "1.8", paddingLeft: "20px" }}>
          <li>💻 Web Development – Building modern, responsive websites</li>
          <li>📱 Online Consulting – Helping you set up digital projects</li>
          <li>🚀 Tech Guidance – Sharing ideas and tips to grow online</li>
        </ul>
      </section>

     export default function Home() {
  return (
    <main
      style={{
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        textAlign: "center",
      }}
    >
      {/* Hero Section */}
      <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
        Hi, I'm Kstev 👋
      </h1>
      <p style={{ fontSize: "20px", color: "#555", marginBottom: "40px" }}>
        Welcome to my personal website 🚀
      </p>

      {/* Contact Section */}
      <section
        id="contact"
        style={{
          padding: "20px",
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          maxWidth: "700px",
          width: "90%",
          margin: "0 auto 60px auto",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>Contact Me</h2>
        <p style={{ fontSize: "16px", marginBottom: "20px" }}>
          Let’s connect! Reach me on any of these platforms:
        </p>

        {/* Email */}
        <a
          href="mailto:vdjblessing@gmail.com"
          style={{
            display: "inline-block",
            margin: "8px",
            padding: "12px 24px",
            backgroundColor: "#2563eb",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          📧 Email
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/Steve Kyerrie"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            margin: "8px",
            padding: "12px 24px",
            backgroundColor: "#1877F2",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          📘 Facebook
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/@kstevox"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            margin: "8px",
            padding: "12px 24px",
            backgroundColor: "#E4405F",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          📸 Instagram
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/17742533879"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            margin: "8px",
            padding: "12px 24px",
            backgroundColor: "#25D366",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          💬 WhatsApp
        </a>

        {/* Twitter */}
        <a
          href="https://twitter.com/Steve Bariki"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            margin: "8px",
            padding: "12px 24px",
            backgroundColor: "#1DA1F2",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          🐦 Twitter
        </a>

        {/* TikTok */}
        <a
          href="https://www.tiktok.com/@kstevok"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            margin: "8px",
            padding: "12px 24px",
            backgroundColor: "#000000",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          🎵 TikTok
        </a>
      </section>
    </main>
  );
}
