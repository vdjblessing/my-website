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
          Empowering people through health, creativity, and connection.
        </p>

        {/* Primary Contact Button */}
        <a
          href="https://facebook.com/Steve Kyerrie" // 🔁 replace with your Facebook page URL
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "14px 28px",
            backgroundColor: "#fff",
            color: "#2563eb",
            borderRadius: "999px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1.2rem",
            transition: "all 0.3s ease",
            marginBottom: "20px",
          }}
        >
          📘 Connect on Facebook
        </a>

        {/* Other Social Media Icons */}
        <div style={{ display: "flex", gap: "20px", marginTop: "10px" }}>
          <a
            href="https://instagram.com/kstevox" // 🔁 replace with your Instagram
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#fff",
              fontSize: "1.5rem",
              textDecoration: "none",
              border: "2px solid white",
              padding: "10px 18px",
              borderRadius: "999px",
            }}
          >
            📸 Instagram
          </a>

          <a
            href="https://tiktok.com/@kstevok" // 🔁 replace with your TikTok
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#fff",
              fontSize: "1.5rem",
              textDecoration: "none",
              border: "2px solid white",
              padding: "10px 18px",
              borderRadius: "999px",
            }}
          >
            🎶 TikTok
          </a>

          <a
            href="https://youtube.com/@kstevok" // 🔁 replace with your YouTube
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#fff",
              fontSize: "1.5rem",
              textDecoration: "none",
              border: "2px solid white",
              padding: "10px 18px",
              borderRadius: "999px",
            }}
          >
            ▶️ YouTube
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
            {/* Latest Content Section */}
      <section
        id="latest"
        style={{
          marginTop: "100px",
          textAlign: "center",
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 1rem",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>Latest Content</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
          }}
        >
          {/* Card 1 - YouTube */}
          <div
            style={{
              background: "#f9f9f9",
              borderRadius: "16px",
              padding: "20px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              textAlign: "left",
              transition: "transform 0.3s ease",
            }}
          >
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>🎥 YouTube Feature</h3>
            <p style={{ fontSize: "1rem", color: "#555", marginBottom: "1rem" }}>
              Watch my latest video where I explore creativity, connection, and health in action.
            </p>
            <a
              href="https://youtube.com/@kstevok"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#2563eb",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              ▶️ Watch Now
            </a>
          </div>

          {/* Card 2 - Health Tips */}
          <div
            style={{
              background: "#f9f9f9",
              borderRadius: "16px",
              padding: "20px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              textAlign: "left",
              transition: "transform 0.3s ease",
            }}
          >
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>🩺 Health Tips & Blog</h3>
            <p style={{ fontSize: "1rem", color: "#555", marginBottom: "1rem" }}>
              Practical tips for living healthier and bringing wellness into your daily life.
            </p>
            <a
              href="https://facebook.com/Steve Kyerrie"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#2563eb",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              📖 Read More
            </a>
          </div>

          {/* Card 3 - Social Media Content */}
          <div
            style={{
              background: "#f9f9f9",
              borderRadius: "16px",
              padding: "20px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              textAlign: "left",
              transition: "transform 0.3s ease",
            }}
          >
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>📱 Social Media Highlights</h3>
            <p style={{ fontSize: "1rem", color: "#555", marginBottom: "1rem" }}>
              Explore my latest Instagram and TikTok posts on creativity, entrepreneurship, and impact.
            </p>
            <a
              href="https://instagram.com/kstevox"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#2563eb",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              📸 View Instagram
            </a>
            <br />
            <a
              href="https://tiktok.com/@kstevok"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#2563eb",
                fontWeight: "bold",
                textDecoration: "none",
                marginTop: "8px",
                display: "inline-block",
              }}
            >
              🎶 Watch TikTok
            </a>
          </div>

          {/* Card 4 - News & Commentary */}
          <div
            style={{
              background: "#f9f9f9",
              borderRadius: "16px",
              padding: "20px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              textAlign: "left",
              transition: "transform 0.3s ease",
            }}
          >
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>📰 News & Commentary</h3>
            <p style={{ fontSize: "1rem", color: "#555", marginBottom: "1rem" }}>
              My perspective on current events and topics shaping health, creativity, and society.
            </p>
            <a
              href="https://facebook.com/Steve Kyerrie"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#2563eb",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              🗞️ Read Articles
            </a>
          </div>
        </div>
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

      {/* Latest Content Section */}
      <LatestContent />

    </section>
  );
}

