import { useEffect, useState } from "react";

export default function Home() {
  const companies = [
    {
      name: "xAI",
      description: "xAI was founded by Elon Musk, aiming for safe and beneficial AI.",
      link: "https://x.ai",
    },
    {
      name: "SpaceX",
      description: "SpaceX is committed to enabling humans to colonize Mars.",
      link: "https://www.spacex.com",
    },
    {
      name: "Neuralink",
      description: "Neuralink develops brain-computer interfaces for healthcare and human enhancement.",
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
        console.error("Failed to fetch news:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">Future Tech Companies</h1>
        <p className="text-gray-600">Exploring the frontiers of AI, space, and brain-computer interfaces</p>
      </header>

      <section className="grid md:grid-cols-3 gap-6 mb-12">
        {companies.map((c) => (
          <div key={c.name} className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-bold mb-2">{c.name}</h2>
            <p className="text-gray-600 mb-4">{c.description}</p>
            <a href={c.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Learn more
            </a>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">Latest News</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {news.map((article, idx) => (
              <div key={idx} className="p-4 bg-white rounded-2xl shadow">
                <h3 className="font-bold">{article.title}</h3>
                <p className="text-gray-600">{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  Read more
                </a>
              </div>
            ))}
          </div>
        )}
      </section>

      <footer className="text-center mt-12 text-gray-500">
        © 2025 Future Tech Site. Built with Next.js and Vercel.
      </footer>
    </div>
  );
}
