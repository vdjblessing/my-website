import { NextResponse } from "next/server";
import Parser from "rss-parser";

export const dynamic = "force-dynamic";

const parser = new Parser();

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get("url");

    if (!url) {
      return NextResponse.json({ error: "No RSS URL provided" }, { status: 400 });
    }

    console.log("📡 Fetching RSS feed from:", url);

    // ✅ Step 1: Fetch the XML manually with proper headers
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "application/rss+xml, application/xml, text/xml",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RSS feed: ${response.status} ${response.statusText}`);
    }

    const xml = await response.text();

    // ✅ Step 2: Parse it with rss-parser
    const feed = await parser.parseString(xml);

    return NextResponse.json(feed);
  } catch (error) {
    console.error("❌ RSS fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch RSS feed", details: String(error) },
      { status: 500 }
    );
  }
}
