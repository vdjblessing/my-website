export default function Home() {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>
        The Blessing Lab
      </h1>

      <p
        style={{
          fontSize: "1.25rem",
          color: "#555",
          maxWidth: "600px",
        }}
      >
        Hi, I’m Stephen — a Registered Nurse & web creator. I build clean,
        modern sites for small businesses and creators.
      </p>

      <div style={{ marginTop: "20px", display: "flex", gap: "12px" }}>
        <a
          href="mailto:info@theblessinglab.com"
          style={{
            padding: "10px 16px",
            backgroundColor: "#2563eb",
            color: "white",
            borderRadius: "999px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          📧 Email Me
        </a>

        <a
          href="https://wa.me/1XXXXXXXXXX" // 👈 replace this with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "10px 16px",
            border: "2px solid #2563eb",
            color: "#2563eb",
            borderRadius: "999px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          💬 WhatsApp
        </a>
      </div>
    </section>
  );
}

