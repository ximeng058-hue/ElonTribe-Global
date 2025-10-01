import fetch from "node-fetch";

export default async function handler(req, res) {
  try {
    const query = req.query.query || "xAI OR SpaceX OR Neuralink";
    const apiKey = process.env.NEWS_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: "Missing NEWS_API_KEY. Please set it in Vercel environment variables." });
    }

    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${encodeURIComponent(
        query
      )}&language=en&sortBy=publishedAt&pageSize=6&apiKey=${apiKey}`
    );
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error("Failed to fetch news:", error);
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
