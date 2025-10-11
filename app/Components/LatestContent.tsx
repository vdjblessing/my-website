"use client";

import { useEffect, useState } from "react";
// 🧼 Clean and validate article URLs from proxy feeds
function getValidLink(article: any): string {
  const link = article.link || article.guid || article.url || "";

  if (!link || link.trim() === "" || link === "#") return "#";

  if (link.includes("redirect?url=")) {
    const match = link.match(/redirect\\?url=([^&]+)/);
    if (match) return decodeURIComponent(match[1]);
  }

  if (link.startsWith("//")) {
    return "https:" + link;
  }

  return link;
}

// 🧼 Clean and normalize RSS links
function cleanLink(url: string): string {
  if (!url) return "#";

  // Handle WebMD-style redirect links
  if (url.includes("rssfeeds.webmd.com") && url.includes("redirect")) {
    const match = url.match(/url=([^&]+)/);
    if (match) {
      return decodeURIComponent(match[1]);
    }
  }

  // Handle Healthline-style tracking URLs
  if (url.includes("utm_")) {
    return url.split("?")[0]; // strip off tracking params
  }

  // If it's already a normal URL, return it as-is
  return url;
}

export default function LatestContent() {
  const [articles, setArticles] = useState<any[]>([]);
  const [selectedFeed, setSelectedFeed] = useState("healthline");
  const [isAdmin, setIsAdmin] = useState(false);
  const [sortOrder, setSortOrder] = useState("latest");

  // ✅ Environment key for admin mode
  const ADMIN_KEY = process.env.NEXT_PUBLIC_ADMIN_KEY || "";

  // ✅ Feeds
const feeds: Record<string, string> = {
  harvard: "https://www.health.harvard.edu/blog/feed", // ✅ Working
  webmd: "https://rssfeeds.webmd.com/rss/rss.aspx?RSSSource=RSS_PUBLIC", // ✅ Working
  medicalnews: "https://rss.medicalnewstoday.com/featurednews.xml", // ✅ Updated MNT feed
};

  // ✅ Check admin mode
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("admin");
    if (key === ADMIN_KEY) {
      setIsAdmin(true);
    }
  }, []);

  // ✅ Fetch feed data
  useEffect(() => {
    async function fetchFeed() {
      try {
        const res = await fetch(`/api/rss?url=${encodeURIComponent(feeds[selectedFeed])}`);
        const data = await res.json();
        console.log("Fetched articles:", data.items);
        setArticles(data.items || []);
      } catch (error) {
        console.error("Failed to fetch RSS feed:", error);
      }
    }
    fetchFeed();
  }, [selectedFeed]);

  return (
    <div style={{ marginTop: "4rem", width: "100%", maxWidth: "800px", margin: "0 auto" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem", textAlign: "center" }}>
        🩺 Latest Health Insights
      </h2>

      {/* 🛠 Feed Selector (Admin only) */}
      {isAdmin && (
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <label
            htmlFor="feed"
            style={{
              fontWeight: "bold",
              marginRight: "0.5rem",
              fontSize: "1.1rem",
            }}
          >
            Select Feed:
          </label>
          <select
            id="feed"
            value={selectedFeed}
            onChange={(e) => setSelectedFeed(e.target.value)}
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "8px",
              border: "1px solid #2563eb",
              fontSize: "1rem",
            }}
          >
            {Object.keys(feeds).map((feed) => (
              <option key={feed} value={feed}>
                {feed.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* 🧠 Sort Selector */}
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <label
          htmlFor="sort"
          style={{
            fontWeight: "bold",
            marginRight: "0.5rem",
            fontSize: "1.1rem",
          }}
        >
          Sort Articles:
        </label>
        <select
          id="sort"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "8px",
            border: "1px solid #2563eb",
            fontSize: "1rem",
          }}
        >
          <option value="latest">🆕 Latest</option>
          <option value="az">🔤 A–Z</option>
        </select>
      </div>

      {/* 📄 Articles */}
      <div
        style={{
          display: "grid",
          gap: "1.5rem",
          gridTemplateColumns: "1fr",
        }}
      >
        {articles.length > 0 ? (
          articles
            .slice(0, 5)
            .sort((a, b) => {
              if (sortOrder === "az") {
                return a.title.localeCompare(b.title);
              }
              return 0;
            })
            .map((article, index) => (
              <a
                key={index}
                href={getValidLink(article)}

                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  padding: "1.5rem",
                  borderRadius: "12px",
                  background: "#f9fafb",
                  border: "1px solid #e5e7eb",
                  textDecoration: "none",
                  color: "#1e3a8a",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
                  {article.title}
                </h3>
                <p style={{ fontSize: "0.95rem", color: "#4b5563" }}>
                  {article.contentSnippet?.slice(0, 150) || "Read more..."}...
                </p>
              </a>
            ))
        ) : (
          <p style={{ textAlign: "center", fontStyle: "italic" }}>
            Loading latest articles...
          </p>
        )}
      </div>
    </div>
  );
}
