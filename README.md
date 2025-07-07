
# 🌱 Growvy Website Design

Growvy is a modern, responsive, and elegant job and business solution platform built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. It features pages like **Jobs**, **Pricing**, **Services**, and **Success Stories** to support both job seekers and business owners.

---

## 📁 Project Structure

```
growvy-career/
│
├── app/                  # Next.js 14 App Router
│   ├── jobs/             # Jobs listing page
│   ├── pricing/          # Pricing plans for services
│   ├── services/         # Business & E-commerce solutions
│   ├── success/          # Testimonials and success stories
│   └── layout.tsx        # App layout
│
├── components/           # Reusable UI components
│   ├── Hero.tsx
│   ├── Testimonials.tsx
│   ├── CommunitySection.tsx
│   ├── ScheduleCall.tsx
│   └── ...
│
├── public/               # Static files (images, icons)
│
├── styles/               # Global styles if needed
├── tailwind.config.ts    # Tailwind CSS config
└── next.config.js        # Next.js config
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/maryamsafdar/growvy-website
cd growvy-website
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## ✨ Features

- ✅ Clean and modern UI with Tailwind CSS
- ✅ Page routing using Next.js 14 App Router
- ✅ Fully responsive design
- ✅ Scroll animations with AOS
- ✅ Framer Motion effects in Hero section
- ✅ Reusable components (Buttons, Cards, Sections)
- ✅ Testimonials and User feedback
- ✅ GitHub-ready project structure

---

## 🧪 Available Scripts

- `npm run dev` – Run local server
- `npm run build` – Build for production
- `npm run start` – Start production server
- `npm run lint` – Run ESLint


## 📝 Explanation Note

### What I Learned

- Implemented file-based routing in **Next.js 14** using App Directory
- Designed responsive layouts using **Tailwind CSS utility classes**
- Created reusable components for maintainable and scalable code
- Used **Framer Motion** and **AOS** for smooth UI animations

### Challenges Faced

- Positioning custom SVG (ellipse) behind the “business” word
- Aligning floating images (like user icon over “Join” or testimonial card corner)
- Managing component layout responsiveness on multiple screen sizes

### How I Solved Them

- Used `relative` + `absolute` positioning and tuned SVG `viewBox`, `rx`, and `ry`
- Applied Tailwind spacing utilities (`gap`, `px`, `mt`, `ml`) and responsive modifiers (`md:`, `lg:`)
- Broke large code blocks into **small, focused components**
- Reduced padding and min-height where extra space was showing.
- Used `.map()` carefully or manually created sections where required.


---

## 🌐 Live Demo

You can deploy it using [Vercel](https://growvy-website.vercel.app/) 

---

## 📎 GitHub Repository

🔗 [https://github.com/maryamsafdar/growvy-website](https://github.com/maryamsafdar/growvy-website)

---

## 👩‍💻 Tech Stack

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [AOS (Animate on Scroll)](https://michalsnik.github.io/aos/)

---


