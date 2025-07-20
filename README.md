# Mobilfunk.wiki 📱

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

Das umfassende Wiki für Mobilfunk in Deutschland - unabhängig, aktuell und community-driven.

## 🚀 Über das Projekt

Mobilfunk.wiki ist eine offene Informationsquelle für alles rund um Mobilfunk in Deutschland. Hier finden Sie:

- 📡 **Netzbetreiber**: Detaillierte Infos zu Telekom, Vodafone, O2 und 1&1
- 💳 **Prepaid-Tarife**: Flexible Angebote ohne Vertragsbindung
- 📋 **Postpaid-Verträge**: Laufzeitverträge mit allen Konditionen
- 🔍 **Objektive Vergleiche**: Unabhängige Bewertungen und Tipps

## 🛠️ Technischer Stack

- **Framework**: [Astro](https://astro.build) mit [Starlight](https://starlight.astro.build)
- **Styling**: TailwindCSS mit DaisyUI
- **Content**: MDX für erweiterte Markdown-Funktionen
- **Analytics**: Umami (privacy-friendly)
- **Deployment**: Node.js Standalone

## 🏗️ Projektstruktur

Das Projekt ist wie folgt strukturiert:

```bash
.
├── public/                 # Statische Assets
├── src/
│   ├── assets/            # Bilder und Medien  
│   ├── components/        # Wiederverwendbare Komponenten
│   ├── content/
│   │   └── docs/          # Wiki-Inhalte (MDX)
│   │       ├── allgemein/ # Allgemeine Informationen
│   │       ├── providers/ # Netzbetreiber-Infos
│   │       ├── prepaid/   # Prepaid-Tarife
│   │       └── postpaid/  # Postpaid-Verträge
│   ├── layouts/           # Seitenlayouts
│   └── styles/            # Custom CSS
├── astro.config.mjs       # Astro-Konfiguration
└── package.json
```

Das Wiki verwendet MDX-Dateien im `src/content/docs/` Verzeichnis. Jede Datei wird automatisch als Route basierend auf dem Dateinamen bereitgestellt.

## 🧞 Entwicklung

Alle Befehle werden im Projektverzeichnis ausgeführt:

| Befehl              | Aktion                                    |
| :------------------ | :---------------------------------------- |
| `pnpm install`      | Abhängigkeiten installieren               |
| `pnpm dev`          | Dev-Server starten auf `localhost:9000`  |
| `pnpm build`        | Produktions-Build erstellen              |
| `pnpm preview`      | Build lokal testen                        |
| `pnpm deploy`       | Build und Deploy (Wrangler)              |

## 🤝 Beitragen

Das Wiki lebt von der Community! Helfen Sie mit:

- **📝 Inhalte verbessern**: Veraltete Infos aktualisieren, neue Anbieter hinzufügen
- **🐛 Fehler melden**: Issues für veraltete Informationen oder technische Probleme
- **💡 Ideen einbringen**: Verbesserungsvorschläge und neue Features

## 📄 Content-Richtlinien

- ✅ **Sachliche, objektive Informationen**
- ✅ **Aktuelle Preise und Konditionen** (Stand 2025)
- ❌ **Keine Werbung** für bestimmte Anbieter
- ❌ **Keine Affiliate-Links** ohne Kennzeichnung

## � Mehr erfahren

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).
