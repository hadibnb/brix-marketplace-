# BRIX Marketplace — Frontend Prototype

This repository contains a front-end prototype for **BRIX Marketplace** — a global e-commerce marketplace where users buy a "BRIX card" and pay with BRICS token. This is a *static prototype* (HTML/CSS/JS) intended for demonstration and early frontend work. It **does not** perform real blockchain transactions.

## Features
- Landing / Hero with BRIX highlight
- Product listing and product page
- Checkout flow with BRIX card / BRICS token (simulated escrow + 24h confirmation)
- Seller upload form (client-side product submission)
- Multi-currency display mock (price adapts by country)
- Light theme with steel/metallic aesthetic

## How to use
1. Clone or create repo and add provided files.
2. Open `index.html` in a browser for the prototype.
3. For real deployment, implement backend (Node.js/Express), DB (Mongo/Postgres), and smart contracts for token & escrow.

## Tech / Next steps
- Frontend: static HTML/CSS/vanilla JS (fast to demo)
- Backend recommended: Node.js + Express + MongoDB
- Blockchain: TRON/Ethereum/Binance Smart Chain smart contract for BRICS token (escrow logic)
- Auth: JWT + OAuth for social logins
- Deployment: GitHub Pages / Netlify / Vercel for frontend; Heroku / DigitalOcean / AWS for backend.

See `/docs/smart-contract-design.md` for contract and escrow pseudocode.
