import { useEffect, useState } from "react";

export default function Home() {
  const companies = [
    {
      name: "xAI",
      description: "xAI 由马斯克创立，目标是安全且有益的人工智能。",
      link: "https://x.ai",
    },
    {
      name: "SpaceX",
      description: "SpaceX 致力于让人类能够移民火星。",
      link: "https://www.spacex.com",
    },
    {
      name: "Neuralink",
      description: "Neuralink 研究脑机接口技术，探索医疗与人类增强。",
      link: "https://neuralink.com",
    },
  ];

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("/api/news");
        const data = await res.json();
        if (data.articles) {
          setNews(data.articles);
        }
      } catch (error) {
        console.error("获取新闻失败:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6 font-sans">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold mb-4">未来科技公司宣传站</h1>
        <p className="text-lg text-gray-600">
          探索人工智能、太空探索与脑机接口的前沿科技
        </p>
      </header>

      {/* 公司介绍 */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
        {companies.map((c, i) => (
          <div key={i} className="bg-white shadow-md rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-2">{c.name}</h2>
            <p className="text-gray-600 mb-4">{c.description}</p>
            <a
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              了解更多 →
            </a>
          </div>
        ))}
      </section>

      {/* 新闻模块 */}
      <section className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-center">最新新闻</h2>
        {loading ? (
          <p className="text-center text-gray-500">正在加载新闻...</p>
        ) : news.length === 0 ? (
          <p className="text-center text-gray-500">暂无相关新闻</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((n, i) => (
              <div key={i} className="bg-white shadow-md rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-2">{n.title}</h3>
                <p className="text-gray-600 mb-4">
                  {n.description || "点击了解更多"}
                </p>
                <a
                  href={n.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  阅读原文
                </a>
              </div>
            ))}
          </div>
        )}
      </section>

      <footer className="text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} 未来科技公司宣传站. 保留所有权利。
      </footer>
    </div>
  );
}
