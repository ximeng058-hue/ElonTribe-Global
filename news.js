import fetch from "node-fetch";

export default async function handler(req, res) {
  try {
    const query = req.query.query || "xAI OR SpaceX OR Neuralink";
    const apiKey = process.env.NEWS_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: "缺少 NEWS_API_KEY，请在 Vercel 设置环境变量" });
    }

    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${encodeURIComponent(
        query
      )}&language=zh&sortBy=publishedAt&pageSize=6&apiKey=${apiKey}`
    );
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error("获取新闻失败:", error);
    res.status(500).json({ error: "获取新闻失败" });
  }
}
