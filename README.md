# 🕌 Alzaytuna

**Alzaytuna** ist eine arabischsprachige Wissensplattform, die moderne Technologie mit klassischem Design kombiniert.  
Die Seite basiert auf **Next.js (Frontend)** und **Strapi (Headless CMS)** – mit Fokus auf Lesbarkeit, Struktur und visuelle Eleganz.

## 🌿 Features

- 🌍 **Komplett arabischsprachig & RTL-optimiert**
- 📰 **Startseite mit Featured Post**, Beitragsgalerie & Sidebar-Filter
- 🏷️ **Kategorien, Tags & Autoren** dynamisch aus Strapi
- 🖼 **Post-Seite mit Bildergalerie & Zoom**
- ✨ **Design in Olivgrün**, inspiriert von traditionellem Stil
- 📎 Unterstützung für **Anhänge** (PDFs etc.)

---

## 📂 Projektstruktur

```bash
.
├── frontend/          # Next.js Frontend (Pages, Components, Styles)
├── backend/           # Strapi CMS (Collections, APIs, Media)
├── public/            # Logos, Ornamente, statische Dateien
├── .env               # API-Keys & Umgebungsvariablen
└── README.md


🚀 Lokale Entwicklung
1. Backend starten (Strapi)

cd backend
npm install
npm run develop

2. Frontend starten (Next.js)
bash
Copy
Edit

cd frontend
npm install
npm run dev

⚠️ Stelle sicher, dass NEXT_PUBLIC_API_URL korrekt gesetzt ist (.env.local).

🧠 Inhalte verwalten (Strapi)
Beiträge (Posts) mit:

- Titel, Inhalt (Markdown), Slug
- Vorschaubild (Thumbnail)
- Mehrere Kategorien
- Autor & Veröffentlichungsdatum
- Optional: Anhänge (PDF, Bilder)

📸 Design Highlights

- Responsives Layout
- Zentriertes Ornament unter Titeln
- Bilder automatisch als Galerie gruppiert (bis zu 3)
- Einzelbilder stilvoll hervorgehoben
- Hover- und Zoomeffekte

📜 Lizenz

- MIT – frei verwendbar mit Namensnennung.
