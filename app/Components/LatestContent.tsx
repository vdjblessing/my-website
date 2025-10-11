"use client";

import { useEffect, useState } from "react";

export default function LatestContent() {
  const [articles, setArticles] = useState([]);
  const [selectedFeed, setSelectedFeed] = useState("healthline");
  const [isAdmin, setIsAdmin] = useState(false);

  // ✅ Your secret key (change this!)
  const ADMIN_KEY = process.env.NEXT_PUBLIC_ADMIN_KEY;


  // ✅ Feed URLs
  const feeds = {
    healthline: "https://www.healthline.com/rss",
    mayo: "https://www.mayoclinic.org/rss/all-health-content",
    harvard: "https://www.health.harvard.edu/blog/feed",
    webmd: "https://rssfeeds.webmd.com/rss/rss.aspx?RSSSource=RSS_PUBLIC",
  };

  // ✅ Check URL for admin key
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("admin");
    if (key === ADMIN_KEY) {
      setIsAdmin(true);
    }
  }, []);

  // ✅ Fetch articles
  useEffect(() => {
    async function fetchFeed() {
      try {
        const res = await fetch(
          `https://api.allorigins.win/get?url=${encodeURIComponent(feeds[selectedFeed])}`
        );
        const data = await res.json();
        const text = data.contents;

        const parser = new DOMParser();
        const xml = parser.parseFromString(text, "application/xml");
        const items = Array.from(xml.querySelectorAll("item")).slice(0, 5);

        const parsed = items.map((item) => ({
          title: item.querySelector("title")?.textContent || "",
          description: item.querySelector("description")?.textContent || "",
          link: item.querySelector("link")?.textContent || "#",
        }));

        setArticles(parsed);
      } catch (error) {
        console.error("Failed to fetch RSS feed:", error);
      }
    }

    fetchFeed();
  }, [selectedFeed]);

  return (
    <section
      style={{
        width: "100%",
        maxWidth: "1000px",
        margin: "3rem auto",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          marginBottom: "1.5rem",
          color: "#1e3a8a",
          fontWeight: "bold",
        }}
      >
        🩺 Latest Health Insights
      </h2>

      {/* 🔑 Feed selector - shows only if correct admin key is present */}
      {isAdmin && (
        <div style={{ marginBottom: "2rem" }}>
          <label
            htmlFor="feed-select"
            style={{
              fontWeight: "bold",
              marginRight: "0.75rem",
              fontSize: "1.1rem",
            }}
          >
            Choose Feed Source:
          </label>
          <select
            id="feed-select"
            value={selectedFeed}
            onChange={(e) => setSelectedFeed(e.target.value)}
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "8px",
              fontSize: "1rem",
              cursor: "pointer",
              border: "1px solid #ccc",
            }}
          >
            <option value="healthline">🩺 Healthline</option>
            <option value="mayo">🏥 Mayo Clinic</option>
            <option value="harvard">🎓 Harvard Health</option>
            <option value="webmd">🧬 WebMD</option>
          </select>
        </div>
      )}

      {articles.length === 0 ? (
        <p style={{ fontSize: "1.2rem" }}>Loading latest articles...</p>
      ) : (
        <>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {articles.map((article, index) => (
              <a
                key={index}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  background: "#f9fafb",
                  padding: "1.5rem",
                  borderRadius: "12px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                  textDecoration: "none",
                  color: "#111",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 14px rgba(0,0,0,0.12)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 10px rgba(0,0,0,0.08)";
                }}
              >
                <h3
                  style={{
                    fontSize: "1.3rem",
                    marginBottom: "0.75rem",
                    color: "#1e3a8a",
                  }}
                >
                  {article.title}
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#444",
                    lineHeight: "1.5",
                  }}
                  dangerouslySetInnerHTML={{
                    __html:
                      article.description?.length > 150
                        ? article.description.slice(0, 150) + "..."
                        : article.description,
                  }}
                ></p>
              </a>
            ))}
          </div>

          {/* 🌐 View More Button */}
          <div style={{ marginTop: "2.5rem" }}>
            <a
              href={
                selectedFeed === "healthline"
                  ? "https://www.healthline.com"
                  : selectedFeed === "mayo"
                  ? "https://www.mayoclinic.org"
                  : selectedFeed === "harvard"
                  ? "https://www.health.harvard.edu"
                  : "https://www.webmd.com"
              }
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "0.9rem 2rem",
                background: "#2563eb",
                color: "#fff",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "1.1rem",
                transition: "background 0.2s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = "#1e40af")}
              onMouseOut={(e) => (e.currentTarget.style.background = "#2563eb")}
            >
              🌐 View More Articles
            </a>
          </div>
        </>
      )}
    </section>
  );
}

