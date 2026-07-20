# Birthday For Manu ❤️

> *22 Memories. 22 Reasons. One Forever Story.*

A premium, Apple-inspired, mobile-first birthday website built with pure HTML, CSS, and Vanilla JavaScript — with cinematic transitions, glassmorphism, scroll-triggered animations, and an emotionally engaging storytelling flow.

Crafted with love by **Pglu**, for **Manu**.

---

## ✨ Features

- 🎬 Cinematic intro with animated gradient, floating hearts, sparkles & stars
- 📖 "Our Story" timeline with scroll-reveal
- 🖼️ 22-memory gallery with fullscreen lightbox (swipe + pinch-zoom)
- 📅 Interactive milestones timeline
- 💌 Typewriter love letter
- 🎴 22 flip-card reasons "I love you because…"
- 🎁 Animated gift box → confetti → balloons → cake
- 🌙 Night-sky finale with moon, stars, fireflies & drifting clouds
- 🎹 Background piano music with custom controls
- 🥚 Secret easter eggs (tap moon, double-tap, long-press, shake phone, tap cake 22×)
- 📱 Fully optimized for iPhone Safari
- 🎨 Apple Human Interface–inspired design

---

## 📁 Project Structure

```
Birthday-For-Manu/
├── index.html
├── style.css
├── script.js
├── README.md
├── images/
│   ├── photo1.jpg
│   ├── photo2.jpg
│   └── ... (up to photo22.jpg)
└── music/
    └── piano.mp3
```

---

## 🚀 How to Use Locally

1. Clone or download this folder.
2. Add your 22 photos inside the `images/` folder, named exactly:
   `photo1.jpg`, `photo2.jpg`, …, `photo22.jpg`.
3. Add your piano track as `music/piano.mp3`.
4. Double-click `index.html` — it opens directly in any modern browser.

> No build step. No dependencies to install. Everything loads from CDNs.

---

## 🌐 Deploy to GitHub Pages

1. Create a new GitHub repository (e.g. `birthday-for-manu`).
2. Push the entire project folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/birthday-for-manu.git
   git push -u origin main
   ```
3. Go to **Settings → Pages**.
4. Under **Source**, choose **Deploy from a branch** → `main` → `/ (root)` → Save.
5. Wait ~1 minute. Your site will be live at:
   `https://YOUR_USERNAME.github.io/birthday-for-manu/`

> ⚠️ Make sure your photo and music filenames match exactly — GitHub is case-sensitive.

---

## 🖼️ How to Replace the 22 Photos

Open `script.js` and find the `MEMORIES` array near the top:

```js
const MEMORIES = [
  { img:'images/photo1.jpg',  title:'The First Hello',       date:'28 Oct 2024' },
  { img:'images/photo2.jpg',  title:'Coffee & Conversations',date:'Nov 2024' },
  // ...
];
```

- Change `img` to the path of your image.
- Change `title` to your own caption.
- Change `date` to the date of the memory.

---

## 🎵 How to Replace the Music

Replace the file `music/piano.mp3` with your own track (keep the same name, or update the `<source>` tag in `index.html`).

> Tip: use a soft piano instrumental around 2–4 minutes, exported as MP3 (128–192 kbps) for best mobile performance.

---

## ✍️ How to Edit the Captions & Letter

- **Captions** → edit the `MEMORIES` array in `script.js`.
- **22 Reasons** → edit the `REASONS` array in `script.js`.
- **Love Letter** → edit the `LETTER_TEXT` constant in `script.js`.
- **Section titles / dates** → edit directly inside `index.html`.

---

## 🥚 Easter Eggs

| Action | Effect |
|---|---|
| Tap the moon | Hearts explode ✨ |
| Double-tap the background | Sparkle burst |
| Long-press a photo | Hidden sweet message |
| Tap the cake 22 times | *"I Love You More Than Yesterday ❤️"* |
| Shake the phone | Flower petals fall 🌸 |

---

## 🎨 Tech Stack

- HTML5 · CSS3 · Vanilla JavaScript
- [GSAP](https://gsap.com/) — animations
- [Swiper](https://swiperjs.com/) — (available if needed)
- [canvas-confetti](https://www.kirilv.com/canvas-confetti/) — confetti
- Google Fonts — Playfair Display, Inter, Dancing Script

---

## 💖 Credits

Designed & developed with love by **Pglu** — for the one who makes every ordinary moment extraordinary.

> *"Today isn't just your birthday. Today is the celebration of someone who makes my world brighter every single day."*

Happy 22nd Birthday, Manu ❤️