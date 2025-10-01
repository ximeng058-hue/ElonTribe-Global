# Future Tech Site

A simple promotional website introducing **xAI**, **SpaceX**, and **Neuralink**, with the latest related news.

Built with **Next.js**, deployable on **Vercel**.

---

## 🚀 Features
- Company introduction (xAI, SpaceX, Neuralink)
- Live news section (powered by [NewsAPI](https://newsapi.org))
- Responsive layout with TailwindCSS classes
- Easy deployment on Vercel

---

## 📂 Project Structure
```
future-tech-site-en/
├── pages/
│   └── index.js      # Homepage
├── api/
│   └── news.js       # API route for fetching news
├── package.json      # Dependencies
└── .env.local.example # Example environment variables
```

---

## 🔧 Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/future-tech-site-en.git
   cd future-tech-site-en
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy environment variables:
   ```bash
   cp .env.local.example .env.local
   ```
   Then edit `.env.local` and add your **NewsAPI key**:
   ```
   NEWS_API_KEY=yourNewsApiKey
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```
   Visit [http://localhost:3000](http://localhost:3000) to view the site.

---

## 🌍 Deployment on Vercel
1. Push this project to GitHub.
2. Import the repository into [Vercel](https://vercel.com).
3. Add environment variables in **Vercel → Settings → Environment Variables**:
   ```
   NEWS_API_KEY=yourNewsApiKey
   ```
4. Deploy. Your site will be live at:
   ```
   https://your-project.vercel.app
   ```

---

## 📜 License
MIT License. Free to use and modify.
