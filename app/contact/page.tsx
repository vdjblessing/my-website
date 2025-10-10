export default function Contact() {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Contact Me</h1>
      <p>Let’s connect! You can reach me on any of the platforms below:</p>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <a href="mailto:vdjblessing@gmail.com" target="_blank">
            📧 Email
          </a>
        </li>
        <li>
          <a href="https://wa.me/1234567890" target="_blank">
            💬 WhatsApp
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/YOUR_USERNAME" target="_blank">
            📸 Instagram
          </a>
        </li>
        <li>
          <a href="https://twitter.com/YOUR_USERNAME" target="_blank">
            🐦 Twitter (X)
          </a>
        </li>
        <li>
          <a href="https://www.tiktok.com/@YOUR_USERNAME" target="_blank">
            🎵 TikTok
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/YOUR_USERNAME" target="_blank">
            👍 Facebook
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/@YOUR_CHANNEL" target="_blank">
            ▶ YouTube
          </a>
        </li>
      </ul>
    </section>
  );
}