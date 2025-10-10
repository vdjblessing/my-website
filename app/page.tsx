export default function Home() {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "0 1rem",
      }}
    >
      {/* Navigation Bar */}
      <nav
        style={{
          width: "100%",
          padding: "20px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "fixed",
          top: 0,
          left: 0,
          backgroundColor: "white",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          zIndex: 1000,
        }}
      >
        
      </nav>

      {/* Hero Banner Section */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100%",
          background: "linear-gradient(135deg, #2563eb, #1e3a8a)",
          color: "white",
          textAlign: "center",
          padding: "0 1rem",
        }}
      >
        <h1 style={{ fontSize: "4rem", marginBottom: "1rem" }}>
          Welcome to <span style={{ fontWeight: "bold" }}>The Blessing Lab</span>
        </h1>

        <p
          style={{
            fontSize: "1.5rem",
            maxWidth: "600px",
            marginBottom: "2rem",
            lineHeight: "1.6",
          }}
        >
          Creativity, health, and purpose — building impactful digital spaces
          that connect people and ideas.
        </p>

        <div style={{ display: "flex", gap: "20px" }}>
          <a
            href="mailto:info@theblessinglab.com"
            style={{
              padding: "14px 28px",
              backgroundColor: "#fff",
              color: "#2563eb",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: "bold",
              transition: "all 0.3s ease",
            }}
          >
            📧 Email Me
          </a>

          <a
            href="https://wa.me/15551234567" // replace with your number
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "14px 28px",
              border: "2px solid white",
              color: "#fff",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: "bold",
              transition: "all 0.3s ease",
            }}
          >
            💬 WhatsApp
          </a>
        </div>
      </div>

      {/* About Me Section */}
      <section
        id="about"
        style={{
          marginTop: "80px",
          textAlign: "center",
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>About Me</h2>
        <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: "1.6" }}>
          I am a registered nurse with a passion for creativity, health,
          entrepreneurship, political views, and connecting with people through
          social media. My mission is to bridge health, creativity, and
          meaningful conversations into impactful digital spaces.
        </p>
      </section>

      {/* What I Do Section */}
      <section
        id="services"
        style={{
          marginTop: "80px",
          textAlign: "center",
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>What I Do</h2>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            fontSize: "1.1rem",
            color: "#555",
            lineHeight: "1.8",
          }}
        >
          <li>📱 Content Creation & Social Media Management</li>
          <li>🩺 Health & Wellness Consulting</li>
          <li>🎨 Creative Digital Branding</li>
          <li>📰 News Outlets & Commentary</li>
        </ul>
      </section>

      {/* Contact Me Section */}
      <section
        id="contact"
        style={{
          marginTop: "80px",
          textAlign: "center",
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Contact Me</h2>
        <form
          action="mailto:info@theblessinglab.com"
          method="post"
          encType="text/plain"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            textAlign: "left",
          }}
        >
          <label>
            Name:
            <input
              type="text"
              name="name"
              required
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "4px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              required
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "4px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            />
          </label>

          <label>
            Message:
            <textarea
              name="message"
              rows={5}
              required
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "4px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            />
          </label>

          <button
            type="submit"
            style={{
              marginTop: "12px",
              padding: "12px 20px",
              backgroundColor: "#2563eb",
              color: "white",
              fontWeight: "bold",
              border: "none",
              borderRadius: "999px",
              cursor: "pointer",
            }}
          >
            📤 Send Message
          </button>
        </form>
      </section>
    </section>
  );
}

