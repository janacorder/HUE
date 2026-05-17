# HUE Glint — Wix Headless Site

Complete Astro-based site for HUE Glint permanent jewelry studio.
5 pages: Home, Collections, Services, Collaborations, Book/Configurator.

## Local Development

```bash
npm install
npm run dev       # http://localhost:4321
```

## Deploy to Wix Hosting

```bash
npm install -g @wix/cli
wix login                  # opens browser — log in with your Wix account
wix env pull               # pulls WIX_CLIENT_ID into .env
wix release                # builds + deploys to Wix hosting
```

Your `.wix/config.json` is already linked to the HUE Glint site (metaSiteId: 5c94bfb1-a2c7-4edd-b4ec-f3fdba54b4e8).

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, trust bar, tiers, services, testimonials, email capture |
| Collections | `/collections` | Tier tabs, 6 chain styles, 12 charms + pricing, comparison table |
| Services | `/services` | All 6 services with sticky pricing panels + policy strip |
| Collaborations | `/collaborations` | Featured partner, inquiry form |
| Book | `/book` | Live price configurator + booking form |

## Brand

- **Colors**: Cream `#F5F0E8` · Black `#0A0A0A` · Gold `#C9A84C`
- **Fonts**: Cormorant Garamond (headings) · Montserrat (body)
