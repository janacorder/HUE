# HUE Glint — Complete Wix Studio Build Guide
### Step-by-step instructions for every page, every section, every detail.
*Open this document side-by-side with Wix Studio and follow each step exactly.*

---

## BEFORE YOU START — One-Time Setup

### Set Your Brand Colors (do this first, everything else uses them)
1. In Wix Studio, click the paint palette icon on the left sidebar → **"Theme Colors"**
2. Set these exact colors:
   - **Color 1 (Primary):** `#F5F0E8` ← cream/butter background
   - **Color 2 (Secondary):** `#0A0A0A` ← near-black
   - **Color 3 (Accent):** `#C9A84C` ← champagne gold
   - **Color 4:** `#EDE7D9` ← darker cream for alternating sections
   - **Color 5:** `#8A8A8A` ← gray body text

### Set Your Brand Fonts
1. Click the **"T" (Typography)** icon in the left sidebar → **"Theme Fonts"**
2. **Heading font:** Search for and select **"Cormorant Garamond"** — set weight to **Light (300)**
3. **Body font:** Search for and select **"Montserrat"** — set weight to **Light (300)**

### Set Your Site Name
1. Dashboard → Settings → General Info
2. Site Name: **HUE Glint**
3. Tagline: **No Clasp. No Compromise.**

---

---

# PAGE 1: HOME PAGE

*This is your most important page. Build it top to bottom, section by section.*

---

## SECTION 1 — Navigation Bar (Header)

**What it looks like:** Black bar across the top. Logo left. Menu links center-right. Gold "Book Now" button on the far right.

**How to set it up:**
1. Click the top of your page → **"Add Header"** (or edit existing header)
2. Set header **background color** to `#0A0A0A` (near-black)
3. Set header to **"Scroll Effect: Sticky"** so it stays at the top when scrolling
4. Set header **height** to 70px
5. Set header **border bottom** to 1px, color `#C9A84C`, opacity 25%

**Logo text:**
1. Add a **Text element** to the left of the header
2. Type: **HUE ✦ GLINT**
3. Font: Cormorant Garamond, size 22px, color White, letter spacing 3
4. The ✦ symbol — type it or copy/paste this: ✦ — color it `#C9A84C` (gold)

**Navigation links** (add each as a text element or use Wix's built-in menu):
- Design Your Chain
- Services
- Collaborations
- Collections
- Learn

All link text: Montserrat, 11px, color White at 75% opacity, ALL CAPS, letter spacing 2. On hover: color changes to `#C9A84C`.

**"Book Now" button:**
1. Add a **Button** element on the far right of the header
2. Button text: **BOOK NOW**
3. Button background: `#C9A84C` (gold)
4. Button text color: `#0A0A0A` (black)
5. Font: Montserrat, 11px, Bold, ALL CAPS, letter spacing 2
6. Padding: 10px top/bottom, 24px left/right
7. No border radius (keep it square/sharp edges)
8. **Link this button to:** your Wix Bookings page

---

## SECTION 2 — Hero (Full Screen, Black Background)

**What it looks like:** Full screen. Black background. Big italic gold-and-white headline on the left. Two buttons below. Subtle animated gold circle rings on the right side like a glowing aura.

**Add a new section:**
1. Click **"Add Section"** → choose **Blank section**
2. Set section height to **100vh** (full screen height) — in Wix Studio this is "fit to screen height"
3. Set background color: `#0A0A0A`

**Add the decorative circle rings (right side):**
1. Add a **Shape element** → Circle (no fill, just border)
2. Set border: 1px, color `#C9A84C`, opacity 15%
3. Size: 300×300px. Position: right side of section, vertically centered
4. Copy/paste this circle 2 more times. Make one 500×500px and one 700×700px. All centered at the same point on the right.
5. Select all 3 circles → **Add animation** → choose **"Pulse"** or **"Breathe"** effect, set to **Continuous loop**, speed **Slow**. Stagger the 3 circles so they don't pulse at exactly the same time (offset each by 1 second).

**Add the eyebrow text above the headline:**
1. Add a **Text element** on the LEFT side of the section
2. Type: **HUE Glint ✦ Permanent Jewelry Studio**
3. Font: Montserrat, 10px, color `#C9A84C`, ALL CAPS, letter spacing 4
4. Position: about 15% from the left edge, about 35% from the top

**Add a horizontal gold line next to the eyebrow:**
1. Add a **Shape → Line** element directly after the eyebrow text
2. Width: 40px, color `#C9A84C`, thickness 1px

**Add the main headline:**
1. Add a **Text element** below the eyebrow
2. Type these two lines:
   - Line 1: **No Clasp.**
   - Line 2: **No Compromise.**
3. Font: Cormorant Garamond, size **96px** (go as large as your layout allows), weight Light
4. Line 1 color: White (`#FFFFFF`)
5. Line 2 color: `#C9A84C` (gold) AND set to **Italic**
6. Line height: 1.0 (very tight)

**Add the subheadline:**
1. Add a **Text element** below the headline
2. Type: **Permanent jewelry welded to your exact body. Gold, silver, or steel. Three tiers. Seven body locations. One ten-second weld. Yours forever.**
3. Font: Montserrat, 13px, color White at 60% opacity, weight Light
4. Max width: 420px (don't let it stretch full width)
5. Line height: 1.8

**Add the two CTA buttons:**
1. Add a **Button** element below the subheadline
2. Button 1 text: **DESIGN YOUR CHAIN →**
   - Background: `#C9A84C` (gold)
   - Text color: `#0A0A0A` (black)
   - Font: Montserrat, 11px, Bold, ALL CAPS
   - Padding: 16px top/bottom, 36px left/right
   - No border radius
   - Link to: your Design Your Chain page
3. Button 2 text: **BOOK A SESSION**
   - Background: Transparent
   - Border: 1px solid White at 40% opacity
   - Text color: White
   - Same font/size as Button 1
   - Link to: your Wix Bookings page
4. Place the two buttons side by side with 16px gap between them

**Add scroll indicator at the bottom left:**
1. Add a **Text element** at the very bottom-left of the section
2. Type: **SCROLL**
3. Font: Montserrat, 10px, White at 40% opacity, ALL CAPS, letter spacing 3

**Add entrance animation to the hero content:**
1. Select the eyebrow text, headline, subheadline, and buttons together
2. Go to **Animations → Entrance** → choose **"Fade In + Slide Up"**
3. Duration: 0.8 seconds, Delay: 0.2 seconds

---

## SECTION 3 — Trust Bar (4 Stats)

**What it looks like:** Cream-dark background. 4 stats in a row separated by thin gold vertical lines.

**Add a new section:**
1. Height: about 120px (short)
2. Background: `#EDE7D9` (darker cream)
3. Add top and bottom borders: 1px, color `#C9A84C`, opacity 20%

**Add 4 columns inside this section.** In each column, stack two text elements:

| Column | Big number | Label below |
|--------|-----------|------------|
| 1 | **3** | METAL TIERS |
| 2 | **7** | BODY LOCATIONS |
| 3 | **30** | DAY WELD WARRANTY |
| 4 | **0** | CLASPS. EVER. |

**Big number styling:** Cormorant Garamond, 36px, color `#C9A84C`, weight Light
**Label styling:** Montserrat, 10px, color `#8A8A8A`, ALL CAPS, letter spacing 2

**Dividers between columns:** Add a thin vertical **Line shape** between each column. Color `#C9A84C`, opacity 25%, height 40px.

**Entrance animation:** Fade In, duration 0.5s, stagger each stat by 0.1s

---

## SECTION 4 — How It Works (Three Steps)

**What it looks like:** Cream background. Centered heading. Three columns side by side, each with a number, icon circle, title, and description text.

**Add a new section:**
1. Height: auto (grows with content)
2. Background: `#F5F0E8` (cream)
3. Padding: 100px top and bottom

**Add centered heading block:**
1. Eyebrow text: **THE PROCESS** — Montserrat, 10px, `#C9A84C`, ALL CAPS, letter spacing 4
2. Main heading: **Three Steps to Permanent.** — Cormorant Garamond, 64px, `#0A0A0A`, centered
3. Subheading: **From design to weld in under 30 minutes. The experience is simple. The result is forever.** — Montserrat, 13px, `#8A8A8A`, centered, max-width 480px, centered on page

**Add a 3-column layout** below the heading text:

**Column 1 — Design:**
- Large faded number **"01"** — Cormorant Garamond, 80px, color `#C9A84C` at 12% opacity, positioned top-right of the column
- Circle icon: Add a **circle shape**, no fill, border 1px `#C9A84C`, size 48×48px. Inside the circle type ✦ in gold.
- Title: **Design** — Cormorant Garamond, 24px, `#0A0A0A`
- Body: **Choose your body location, metal tier, chain style, and charms using our online configurator. See your exact price before you book.** — Montserrat, 13px, `#8A8A8A`, weight Light, line height 1.8
- Add a thin border around the entire column: 1px solid `#C9A84C` at 15% opacity

**Column 2 — Book:** (same structure)
- Number: **"02"**
- Icon: ◈ in a circle
- Title: **Book**
- Body: **Hold your spot with a $25 deposit. We confirm your session, measure your exact fit, and prepare your chain.**

**Column 3 — Weld:** (same structure)
- Number: **"03"**
- Icon: ⬡ in a circle
- Title: **Weld**
- Body: **Ten seconds. A micro-pulse of energy. A flash of light. The chain closes. No clasp. No hardware. Yours — forever.**

**Column styling:**
- Background: `#F5F0E8`
- Padding inside each column: 56px all sides
- Border: 1px solid `#C9A84C` at 15% opacity
- The 3 columns sit right next to each other with NO gap between (so the borders create a grid effect)

**CTA Button below the columns:**
- Text: **START DESIGNING YOUR CHAIN →**
- Same gold button style as the hero
- Centered below the 3 columns

**Entrance animation on columns:** Fade In + Slide Up, stagger each column by 0.15 seconds

---

## SECTION 5 — Three Tiers (Black Background)

**What it looks like:** Black background. Centered gold heading. Three cards side by side. The MIDDLE card (Tier 2) has a gold/champagne background to make it pop as "most popular."

**Add a new section:**
1. Background: `#0A0A0A` (black)
2. Padding: 100px top and bottom

**Add centered heading:**
1. Eyebrow: **THE COLLECTION** — Montserrat, 10px, `#C9A84C`, ALL CAPS, letter spacing 4
2. Heading: **Choose Your Metal.** — Cormorant Garamond, 64px, White
3. Sub: **Three honest tiers. We'll tell you which one fits your life — and we'll never push you past what you need.** — Montserrat, 13px, White at 45% opacity, centered, max-width 500px

**Add 3 columns (cards) below:**

**Card 1 — Tier 1:**
- Background: `#0E0E0E` (very dark, slightly lighter than black)
- Padding: 64px all sides
- Border: none (just touches adjacent cards)
- Large faded "I" — Cormorant Garamond, 100px, White at 4% opacity, top-right corner
- Tiny label: **TIER 1** — Montserrat, 9px, `#C9A84C`, ALL CAPS, letter spacing 3
- Title: **Durable** then new line **Utility** — Cormorant Garamond, 32px, White
- Material: **316L Stainless Steel · PVD Gold or Silver** — Montserrat, 11px, White at 40% opacity
- Price: **$42+** — Cormorant Garamond, 48px, White (the + sign is 20px, White at 40% opacity)
- Price note: **$1.75/in + $30 weld fee** — Montserrat, 10px, White at 35%
- Divider line: 1px, White at 6%
- Feature bullets (each on its own row with a ✦ before it in gold):
  - Zero tarnish. Zero maintenance.
  - PVD coating 3–5× harder than plating
  - Surgical-grade hypoallergenic steel
  - Built for active, real life
- Feature text: Montserrat, 12px, White at 60%, weight Light
- Bottom link text: **DESIGN IN TIER 1 →** — Montserrat, 10px, Bold, White, ALL CAPS, letter spacing 2, with a thin underline

**Card 2 — Tier 2 (FEATURED — middle card):**
- Background: `#C9A84C` (gold!)
- ALL text inside this card is `#0A0A0A` (black) instead of white
- Large faded "II" — Black at 6% opacity
- Tiny label: **TIER 2 — MOST POPULAR** — Black at 50% opacity
- Title: **Refined** then **Luxury**
- Material: **14k Gold-Filled · Argentium Silver**
- Price: **$72+**
- Price note: **$3.75/in + $45 weld fee**
- Feature bullets (✦ is black here):
  - 100× thicker than gold plating
  - Ideal for sensitive skin
  - Looks and wears like fine jewelry
  - Tarnish-resistant Argentium silver
- Bottom link: **DESIGN IN TIER 2 →**

**Card 3 — Tier 3:**
- Same as Card 1 styling (dark background, white text)
- Large faded "III"
- Label: **TIER 3**
- Title: **Solid** then **Gold**
- Material: **14k Yellow Gold · 14k White Gold**
- Price: **$145+**
- Price note: **$10.00/in + $75 weld fee**
- Features:
  - Retains melt value — real investment
  - The most hypoallergenic option
  - Heirloom quality. Outlives decades.
  - 14k solid yellow or white gold
- Bottom link: **DESIGN IN TIER 3 →**

**Card entrance animation:** Fade In, stagger by 0.15 seconds per card

---

## SECTION 6 — Services Grid (Cream Background)

**What it looks like:** Cream background. Left-aligned heading. Six tiles in a 3×2 grid.

**Add a new section:**
1. Background: `#F5F0E8`
2. Padding: 100px top and bottom

**Heading (left-aligned):**
1. Eyebrow: **SERVICES** — same style as before
2. Heading: **Every way we weld.** — Cormorant Garamond, 64px
3. Gold line below heading: Shape → Line, 40px wide, 1px thick, `#C9A84C`
4. Sub: **In-studio appointments, mobile pop-ups, bridal experiences, corporate events — permanent jewelry that goes wherever the occasion calls.** — Montserrat, 13px, `#8A8A8A`, max-width 520px

**Add a 3-column, 2-row grid of service tiles below:**

Each tile has the same structure:
- Background: White
- Border: 1px solid `#C9A84C` at 15% opacity (they touch, no gaps, creating a grid)
- Padding: 48px all sides
- On hover: background changes to `#EDE7D9`
- Icon at top (use emoji or Wix icon): 24px
- Title: Cormorant Garamond, 22px
- Description: Montserrat, 12px, `#8A8A8A`, weight Light, line height 1.8
- Link at bottom: Montserrat, 10px, Bold, `#C9A84C`, ALL CAPS, letter spacing 2

**The 6 tiles:**

1. **Icon:** ◈ | **Title:** In-Studio Weld | **Desc:** One-on-one appointment in our studio. Design, measure, and weld your permanent chain from $42. $25 deposit holds your spot. | **Link:** BOOK NOW →

2. **Icon:** ✦✦✦ | **Title:** Stacking Session | **Desc:** Book 3 or more chains in one sitting and receive 10% off the total. Mix wrists, ankles, and tiers in a single 60-minute session. | **Link:** BOOK NOW →

3. **Icon:** ○ | **Title:** Glow & Glint | **Desc:** Spray tan at deSoleil + permanent weld at HUE Glint, same day. Combined 10% savings on both services. The ultimate afternoon. | **Link:** BOOK NOW →

4. **Icon:** ♡ | **Title:** Bridal & Bachelorette | **Desc:** We bring the studio to your venue. Minimum 4 guests. Host always receives a complimentary Tier 1 chain. Perfect for every wedding event. | **Link:** INQUIRE →

5. **Icon:** ⬡ | **Title:** Party Favor Events | **Desc:** Host a permanent jewelry experience for your guests. From $38/guest in Tier 1. Host always wins — complimentary chain, always. | **Link:** INQUIRE →

6. **Icon:** ◈ | **Title:** Collaborations | **Desc:** We partner with local businesses for pop-ups, branded events, and dual-service packages. Your venue. Our studio. Both audiences. | **Link:** LEARN MORE →

---

## SECTION 7 — Testimonials (Black Background)

**What it looks like:** Black background. Centered heading. Three quote cards side by side. Each card has a huge decorative quotation mark in the background.

**Add a new section:**
1. Background: `#0A0A0A`
2. Padding: 100px top and bottom

**Centered heading:**
1. Eyebrow: **CLIENT STORIES** — gold, same style
2. Heading: **What stays, stays.** — Cormorant Garamond, 64px, White

**Add 3 cards side by side:**

Each card:
- Background: Transparent
- Border: 1px solid `#C9A84C` at 12% opacity
- Padding: 48px all sides
- Decorative large **"** mark: Cormorant Garamond, 120px, `#C9A84C` at 10% opacity, positioned at top-left of the card (partially outside)

**Card 1:**
- Quote: *"I haven't taken it off in 8 months. Through a red-eye flight, a wedding, and roughly 240 showers."*
- Quote font: Cormorant Garamond, 20px, Italic, White at 85%, line height 1.6
- Attribution: **INNER CIRCLE MEMBER** — Montserrat, 10px, `#C9A84C`, ALL CAPS, letter spacing 3

**Card 2:**
- Quote: *"My whole bachelorette group got matching anklets. We still text each other photos of them."*
- Attribution: **BACHELORETTE POP-UP CLIENT**

**Card 3:**
- Quote: *"My daughter and I got mother-daughter bracelets for her graduation. She's across the country now. I look at mine every day."*
- Attribution: **STUDIO CLIENT**

**Entrance animation:** Fade In, stagger each card by 0.15 seconds

---

## SECTION 8 — Email Capture / Inner Circle Signup

**What it looks like:** Very dark background (almost black with a subtle warm gold undertone). Centered. Icon, heading, description, email form.

**Add a new section:**
1. Background: `#0D0B00` (very dark warm black — or use `#0A0A0A` with a subtle gold overlay strip at top)
2. Add a thin gold line at the very top: 1px, `#C9A84C`
3. Padding: 100px top and bottom
4. Everything inside is CENTER ALIGNED

**Content (centered):**
1. Icon circle: Add a circle shape, 56×56px, no fill, border 1px `#C9A84C` at 40% opacity. Inside type ✦ in `#C9A84C`, 20px
2. Heading: **Join the Inner Circle.** — Cormorant Garamond, 48px, White
3. Sub: **Early access to new chain styles and charms. Member pricing on events. Your personal referral code — $20 credit every time a friend books. Plus a free printable measurement guide.** — Montserrat, 13px, White at 50%, weight Light, max-width 520px, centered
4. **Email input + button:**
   - Add a Wix **Form** element (or manually add an input + button side by side)
   - Input: background `rgba(255,255,255,0.06)`, border 1px `#C9A84C` at 30%, text White, placeholder "Your email address", Montserrat 12px, height 52px
   - Button: background `#C9A84C`, text "JOIN →", color `#0A0A0A`, Montserrat 11px Bold ALL CAPS, height 52px, no gap between input and button
   - Total form width: max 480px, centered on page

---

## SECTION 9 — Footer (Black)

**What it looks like:** Very dark black. 4-column layout top. Logo + tagline + social icons on left. Three link columns on right. Copyright bar at very bottom.

**Add a footer section:**
1. Background: `#050505`
2. Top border: 1px `#C9A84C` at 10%
3. Padding: 80px top, 40px bottom

**Top row — 4 columns:**

**Column 1 (widest — about 35% width):**
- Logo text: **HUE ✦ GLINT** — Cormorant Garamond, 28px, White. The ✦ is gold.
- Tagline: **No Clasp. No Compromise.** — Montserrat, 11px, White at 35%, ALL CAPS, letter spacing 2
- Social icons (add 3 small square shapes with letters inside): IG · TK · PT
  - Each: 36×36px, border 1px White at 10%, text White at 40%
  - On hover: border becomes `#C9A84C`, text becomes `#C9A84C`

**Column 2 — Services links:**
- Header: **SERVICES** — Montserrat, 10px, `#C9A84C`, ALL CAPS, letter spacing 3
- Links (Montserrat, 12px, White at 40%, weight Light):
  - Design Your Chain
  - In-Studio Weld
  - Stacking Session
  - Bridal Pop-Up
  - Party Favors
  - Glow & Glint

**Column 3 — Learn links:**
- Header: **LEARN**
- Links: What Is Permanent Jewelry? · Which Tier Is Right for Me? · Aftercare Guide · FAQs · The HUE Journal

**Column 4 — Studio links:**
- Header: **STUDIO**
- Links: About HUE Glint · Collaborations · Gift Cards · Aftercare Shop · Inner Circle

**Bottom copyright bar:**
- Left: **© 2025 HUE Co. All rights reserved. glint.hue-co.com** — Montserrat, 11px, White at 20%
- Right: Terms of Service · Privacy Policy · Aftercare Policy — same styling, links

---
---

# PAGE 2: DESIGN YOUR CHAIN (Configurator)

*This is your most powerful page. Build it as a two-column layout: configurator on the left, live summary + body mockup on the right.*

---

## OVERALL PAGE LAYOUT

1. Add a page with a **2-column layout**:
   - Left column: **about 60% width** — this is where the 7 steps live
   - Right column: **about 40% width**, black background — this is the live price summary + body illustration

2. Left column background: `#F5F0E8` (cream)
3. Right column background: `#0A0A0A` (black)
4. Right column has a thin gold left border: 1px `#C9A84C` at 20%
5. Right column is **sticky** — it stays in place as the user scrolls through steps on the left

---

## STEP PROGRESS BAR (at top of left column)

Add a horizontal row of 7 steps. Each step is:
- A circle (32×32px) with the step number inside
- A label below the circle (tiny text)
- Connected by a thin horizontal line between circles

**Default circle:** border 1px `rgba(0,0,0,0.15)`, background cream, number is gray
**Active circle:** background `#C9A84C`, border `#C9A84C`, number is black
**Completed circle:** same as active

Step labels (below each circle), Montserrat 10px, ALL CAPS, letter spacing 1:
1. LOCATION
2. MEASURE
3. TIER
4. STYLE
5. CHARMS
6. WIDTH
7. REVIEW

---

## STEP 1 — Choose Your Body Location

**Page heading:**
- Eyebrow: **STEP 1 OF 7** — Montserrat, 10px, `#C9A84C`
- Main: **Where will you** (new line) ***wear it?*** — Cormorant Garamond, 44px. Second line is italic and gold.
- Sub: **Choose the body location for your permanent chain.** — Montserrat, 12px, gray

**Six location tiles in a 3×2 grid:**

Each tile:
- Background: White
- Border: 1px `rgba(0,0,0,0.1)`
- Padding: 24px
- On hover: border turns gold
- When selected: gold border + very light gold background tint

| Icon | Title | Description |
|------|-------|-------------|
| 🤎 | **Wrist** | The most popular placement. Bracelet sits just below the hand. |
| 🦶 | **Ankle** | Sits at the narrowest point of the ankle. Slightly looser fit. |
| ✨ | **Neck** | Choker (14–16"), princess (17–19"), or matinee (20–24") lengths. |
| ⬡ | **Belly** | Drapes loosely at natural waist level. Belly chains sit with ease. |
| 💪 | **Upper Arm** | Armband at the widest bicep point. Slides on, but doesn't fall. |
| 💍 | **Finger / Toe** | Measured at the knuckle. Permanent ring — very precise fit. |

Icon: 24px emoji/icon at top of tile
Title: Cormorant Garamond, 20px
Description: Montserrat, 11px, gray, weight Light

**"Next" button at bottom:**
- Text: **NEXT: MEASURE →**
- Background: `#0A0A0A`
- Text color: White
- On hover: background `#C9A84C`, text Black
- Montserrat, 11px, Bold, ALL CAPS

---

## STEP 2 — Measurement Instructions

**Page heading:**
- **Measure your** (new line) ***exact fit.***

**Black instruction box (left border gold):**
- Background: `#0A0A0A`
- Left border: 3px `#C9A84C`
- Padding: 36px all sides

Inside the box, the text changes based on location selected in Step 1:

*For Wrist:* **Measuring your wrist** — Cormorant Garamond, 22px, White
Then: Wrap a flexible tape measure snugly around your wrist bone just below the hand. Record in inches. We add 0.75" for a comfortable permanent fit. — Montserrat, 12px, White at 60%

*For Ankle:* **Measuring your ankle**
Then: Measure around the narrowest part of your ankle, just above the ankle bone. We add 1" for movement ease.

*For Neck:* **Measuring your neck**
Then: Choker (14–16"): Measure around the base of your neck and add 1". Princess: Measure from collarbone to desired drop. Matinee: Measure desired drape length.

*And so on for each location.*

**Below the instruction box, add a measurement input:**
- Label: **YOUR MEASUREMENT** — Montserrat, 10px, ALL CAPS, gray, letter spacing 2
- Input field: white background, border 1px `rgba(0,0,0,0.15)`, padding 14px 18px, Montserrat 18px
- Unit label next to input: **inches** — in a gray box

**Below that, a note in small text:**
*Don't have a tape measure? Use a strip of paper, wrap around your wrist, mark where it meets, then measure flat.*

---

## STEP 3 — Choose Your Metal Tier

**Page heading:** **Choose your** (new line) ***metal.***

**Three tall tile cards (side by side):**

Same structure as the home page tier cards but on a cream background.

**Tier 1 card:**
- Label: **TIER 1**
- Title: **Durable Utility**
- Material: 316L Stainless Steel + PVD Gold or Silver
- Price: **From $42 · $1.75/in**
- Bullet features (with ✦ in gold before each):
  - Zero tarnish. Zero maintenance.
  - PVD coating 3–5× harder than plating
  - Built for active everyday life

**Tier 2 card (highlight this one):**
- Label: **TIER 2 — MOST POPULAR**
- Title: **Refined Luxury**
- Material: 14k Gold-Filled or Argentium Silver
- Price: **From $72 · $3.75/in**
- Bullets: 100× thicker than gold plating · Ideal for sensitive skin · Looks like fine jewelry

**Tier 3 card:**
- Label: **TIER 3**
- Title: **Solid Gold**
- Material: 14k Yellow or White Gold
- Price: **From $145 · $10.00/in**
- Bullets: Retains melt value · Most hypoallergenic option · Investment-quality, heirloom piece

---

## STEP 4 — Choose Your Chain Style

**Page heading:** **Choose your** (new line) ***chain style.***
**Sub:** Six classic styles, each available in multiple widths. Every style works in all three tiers.

**Six style cards in a 3×2 grid:**

Each card: centered text, white background, border 1px `rgba(0,0,0,0.1)`, padding 20px

| Style | Visual hint | Description |
|-------|------------|-------------|
| **Box** | Three small squares in a row | Square links with clean, geometric edges. Modern and precise. |
| **Cable** | Three ovals in a row | Classic round oval links. The most versatile, universally flattering style. |
| **Figaro** | Small oval, small oval, large oval, repeat | Three small links, one large elongated link. Italian-inspired pattern. |
| **Rope** | Twisted line | Twisted spiral links that catch light at every angle. Substantial texture. |
| **Snake** | Smooth solid line | Smooth, flexible metal scales. Liquid movement. The most delicate style. |
| **Curb** | Flat square links | Flat interlocking links. The boldest style. Especially popular for men. |

---

## STEP 5 — Add Charms (Optional)

**Page heading:** **Add your** (new line) ***charms.***
**Sub:** Optional. Up to 3 charms per chain. Each is permanently attached.

**Counter text:** **0 of 3 charms selected** (updates as charms are chosen)

**12 charm tiles in a 6×2 grid (or 4×3 on smaller screens):**

Each charm tile:
- White background
- Border: 1px `rgba(0,0,0,0.1)`
- Padding: 16px 8px
- Center-aligned
- Large icon at top (emoji or image)
- Charm name below
- Price below that (price changes based on tier selected in Step 3)

| Icon | Name | T1 | T2 | T3 |
|------|------|----|----|-----|
| ⭐ | Star | $12 | $28 | $75 |
| 🌙 | Crescent Moon | $12 | $28 | $75 |
| ♡ | Heart | $12 | $28 | $75 |
| 👁 | Evil Eye | $12 | $28 | $75 |
| A | Initial (A–Z) | $12 | $28 | $75 |
| 🦋 | Butterfly | $12 | $28 | $75 |
| ⚡ | Lightning Bolt | $12 | $28 | $75 |
| ∞ | Infinity | $12 | $28 | $75 |
| ✵ | Sunburst | $12 | $28 | $75 |
| ♎ | Zodiac Sign | $18 | $40 | $95 |
| ● | Pearl Drop | $15 | $35 | $85 |
| 🔒 | Lock & Key Set | $20 | $45 | $110 |

**Small note below grid:**
*Charms are permanently attached. Charm Swap service available for $10 + new charm cost. Max 3 charms per chain.*

---

## STEP 6 — Width Selection

**Page heading:** **Choose your** (new line) ***width.***

**Three width buttons:**
- **1mm** — Ultra-delicate. Barely visible. The lightest presence on the body.
- **1.5mm** — Delicate. The most popular width across all tiers.
- **2mm** — Classic. Visible and substantial without being bold.
- **3mm** — Bold. Maximum visual impact. (Only available in certain styles)

Display as large toggle buttons. Montserrat, 12px. Selected state: gold background, black text.

---

## STEP 7 — Review & Book

**Page heading:** **Your chain,** (new line) ***confirmed.***

**Summary card (white background, black border):**
Show a clean table with rows for:
- Location: [what they chose]
- Measurement: [what they entered] inches
- Metal Tier: [Tier 1/2/3 name]
- Chain Style: [style chosen]
- Width: [width chosen]
- Charms: [charm names or "None"]
- Estimated Total: **$XX.XX** (large, gold, Cormorant Garamond 36px)

**Deposit note box (cream background, gold left border):**
**$25 deposit** is required to confirm your booking. The remaining balance is collected at your in-studio appointment. **Your deposit is fully refundable** with 24 hours' notice.

**BOOK button:**
- Text: **HOLD MY SPOT — $25 DEPOSIT →**
- Background: `#C9A84C`
- Text: `#0A0A0A`
- Montserrat, 12px, Bold, ALL CAPS
- Full width of the column
- Large padding: 18px top/bottom
- Link to: Wix Bookings calendar or Wix Payments $25 deposit product

---

## RIGHT COLUMN (sticky sidebar) — Body Mockup + Live Price

This column stays fixed as the user scrolls through steps.

**Heading:** **Your Design** — Cormorant Garamond, 22px, White
**Sub:** LIVE PREVIEW — Montserrat, 10px, `#C9A84C`, ALL CAPS, letter spacing 2

**Body illustration:**
Add the SVG body mockup from the file `src/velo/body-mockup.html` as an **HTML iFrame** component.
- In Wix Studio: Add → Embed → Embed a website → paste the file contents
- The illustration shows a simple human silhouette in white lines on black background
- A glowing gold dot appears at whichever body location the customer chose in Step 1

**Selection tags:**
Below the body illustration, show small gold-bordered tags for each selection made.
Example: `Wrist` `7.25"` `Tier 2` `Cable` `1.5mm` `Heart charm`
Each tag: small rectangle, border 1px `#C9A84C` at 20%, text `#C9A84C`, Montserrat 10px

**Price breakdown:**
- Line: Chain cost · value in gold
- Line: Weld fee · value in gold
- Line: Charms · value in gold
- Divider: 1px `#C9A84C` at 15%
- Label: EST. TOTAL — Montserrat 12px, White at 60%, ALL CAPS
- Total: **$—** — Cormorant Garamond, 48px, White (updates live as selections are made)

---
---

# PAGE 3: SERVICES

*Alternating cream and cream-dark sections, each service as a 2-column layout.*

---

## HERO
- Background: `#0A0A0A`
- Eyebrow: SERVICES
- Heading: **Every way we weld.** — White
- Sub: In-studio, mobile, bridal, corporate — permanent jewelry for every occasion and every guest count. — White at 50%

---

## SERVICE 1 — In-Studio Weld Session (Cream background)

**2-column layout: text left, price panel right**

**Left column text:**
- Eyebrow: IN-STUDIO · FROM $42
- Title: **In-Studio Weld Session** — Cormorant Garamond, 48px
- Body: The core experience. One-on-one in our studio — you arrive, we design together, we weld. 30 minutes from door to door. The chain is yours before you leave.
- Bullet list (with ✦ bullets in gold):
  - 7 body locations available
  - 6 chain styles in multiple widths
  - Up to 3 charms permanently attached
  - $25 deposit holds your appointment
- Button: **BOOK NOW →** (gold button)

**Right column — Price Panel (black background, left border gold):**
- Heading: **Pricing** — White, Cormorant Garamond
- 3 rows:
  - TIER 1: **$42 and up** — Stainless Steel PVD · $1.75/in + $30 weld
  - TIER 2: **$72 and up** — Gold-Filled / Argentium · $3.75/in + $45 weld
  - TIER 3: **$145 and up** — 14k Solid Gold · $10/in + $75 weld
- All on black, text in white with gold price numbers

---

## SERVICE 2 — Stacking Session (Cream-dark background)

**Left column:**
- Eyebrow: STACKING · 10% OFF 3+ CHAINS
- Title: **Stacking Session**
- Body: Three chains. Ten percent off. One perfect afternoon. Stack the same wrist, mix wrist and ankle, bring a friend and get matching sets. One sitting, one jeweler, one unforgettable hour.
- Bullet list:
  - Book 3 or more chains in one session
  - 10% off the entire total
  - Mix any tiers and any styles
  - 60-minute session
- Button: **BOOK A STACK →**

**Right price panel:**
- Example pricing:
  - 3 × Tier 1 bracelets: **from $126** (before 10%)
  - 3 × Tier 2: **from $216** (before 10%)
  - Mix-and-match: calculated at booking

---

## SERVICE 3 — Glow & Glint Package (Cream background)

**Left:**
- Eyebrow: IN PARTNERSHIP WITH DESOLEIL SPRAY TANNING
- Title: **Glow & Glint Package**
- Body: A spray tan takes 20 minutes. A permanent bracelet takes 10. Together they're the most efficient glow-up in existence — and 10% off both services when booked the same day. Bronzed skin plus a chain that won't leave tan lines, because it's already part of you.
- Bullets:
  - Book both services for the same afternoon
  - 10% savings on both HUE Glint and deSoleil
  - Spray tan first, chain weld after tan fully sets
  - Available by appointment only
- Button: **BOOK GLOW & GLINT →**

---

## SERVICE 4 — Bridal & Bachelorette Pop-Up (Cream-dark background)

**Left:**
- Eyebrow: MOBILE · MINIMUM 4 GUESTS
- Title: **Bridal & Bachelorette Pop-Up**
- Body: We bring the full studio to your venue. Every bride deserves a chain. Every bridesmaid deserves a moment. We've done hotel suites, Airbnbs, vineyards, and salon backrooms. Book us for the most memorable part of the weekend.
- Bullets:
  - We travel to your venue — hotel, Airbnb, vineyard, salon
  - Minimum 4 guests
  - Host / bride always receives a complimentary Tier 1 chain (FREE)
  - Same per-person pricing as in-studio
- Button: **INQUIRE ABOUT BRIDAL →**

---

## SERVICE 5 — Party Favor Events (Black background, centered table)

**Centered heading:**
- Eyebrow: PARTY FAVORS
- Title: **The experience that doesn't end.** — White
- Sub: Your guests choose their own chain. You choose the tier. They leave with something they'll wear every single day. Host always gets a complimentary chain. — White at 50%

**Pricing table (3 columns):**

| | TIER 1 | TIER 2 | TIER 3 |
|---|---|---|---|
| Material | Stainless PVD | Gold-Filled / Argentium | Solid Gold |
| Per Guest | **$38** | **$72** | **$175** |
| Host Chain | **FREE** | **FREE** | **FREE** |
| Host Chain Value | ($38 value) | ($72 value) | ($175 value) |

Table styling:
- Black background, gold header row
- Column borders: 1px `#C9A84C` at 15%
- Tier 2 column has a top gold border that's thicker (3px) to highlight it as most popular
- Montserrat 13px, White

**Travel fee note below table:**
Base travel fee: $50–75 depending on guest count. +$2 per mile beyond 15 miles from studio.

**Two CTA buttons:**
- **GET A QUOTE →** (gold button)
- **LEARN ABOUT COLLABORATIONS →** (outline button, white)

---

## SERVICE 6 — Maintenance Services (Cream background, 4-card grid)

**Heading:**
- Title: **Re-weld. Swap. Remove. Repeat.** — Cormorant Garamond, 48px

**Four cards in a 2×2 grid:**

Card 1 — Re-Weld Service:
- Icon circle with ◈ inside (gold, 48px circle)
- Title: **Re-Weld**
- Price: **$20** Tier 1 & 2 · **$35** Tier 3
- Desc: Your chain came loose or broke at a link. Bring both ends in — we weld it back in 15 minutes.

Card 2 — Charm Swap:
- Icon: ✦
- Title: **Charm Swap**
- Price: **$10** + new charm cost
- Desc: Changed your mind on a charm? We cut the old one off and permanently attach your new selection.

Card 3 — Chain Removal:
- Icon: ✂
- Title: **Chain Removal**
- Price: **Free. Always.**
- Desc: Need it off for surgery, imaging, or any reason? We remove it at no charge. Re-weld it when you're ready.

Card 4 — Virtual Consult:
- Icon: ○
- Title: **Virtual Consultation**
- Price: **Free · 15 minutes**
- Desc: Not sure what tier, location, or style is right for you? Talk to us before you commit.

---

## POLICY STRIP (Black background, 3 columns)

**30-Day Weld Warranty:**
- Icon: ✦
- Title: 30-Day Weld Warranty
- Body: If the weld itself fails within 30 days of your appointment, we re-weld at no charge. We stand behind our work.

**24-Hour Cancellation:**
- Icon: ◈
- Title: 24-Hour Cancellation
- Body: Cancel or reschedule with 24+ hours notice for a full deposit refund. No questions asked.

**Age Policy:**
- Icon: ○
- Title: Age Policy
- Body: Clients under 18 are welcome with a parent or guardian present and consenting at the appointment.

Column styling: Black background, padding 48px. Separated by thin gold vertical lines.

---
---

# PAGE 4: COLLABORATIONS

---

## HERO (Black, full-width, dramatic)

- Background: `#0A0A0A`
- Add 3 decorative concentric circles (same as home hero) — cream colored, low opacity, positioned on the right
- Eyebrow: COLLABORATIONS
- Heading: **Your venue.**  (new line) **Our studio.**  (new line) ***Both audiences.***  — third line is italic and gold
- Sub: HUE Glint partners with local businesses for pop-ups, branded events, and dual-service packages. The pop-up host always benefits.

---

## FEATURED COLLABORATION — deSoleil (Cream background)

**2-column layout:**

**Left column:**
- Small tag in a box: **✦ FEATURED PARTNER** — gold border, gold text, Montserrat 9px ALL CAPS
- Heading: **deSoleil Spray Tanning** — Cormorant Garamond, 56px
- Sub in gold italic: *The most natural partnership in beauty.*
- Body: A spray tan and a permanent chain, same afternoon. Bronzed skin plus a chain that won't leave tan lines — because it's already part of you. Clients save 10% on both services when they book the Glow & Glint Package same day.
- Three stat boxes in a row:
  - **10%** combined savings
  - **Same-day** booking
  - **2×** audiences reached
- Button: **BOOK GLOW & GLINT →** (gold button)

**Right column:**
- Black background panel
- Centered gold italic text in Cormorant Garamond, 64px: *Glow &*  (new line) *Glint.*
- Sub: **Two services. One perfect afternoon.** — Montserrat, small, White

---

## HOW IT WORKS (Cream-dark, 3 steps)

- Heading: **The collaboration model.**
- Three step cards (same style as How It Works on home page):

Step 1 — **You Host**: Choose your event format — pop-up, dual-service promo, or co-branded event. You provide the venue and promote to your audience.

Step 2 — **We Bring the Studio**: HUE Glint arrives with full equipment — all 3 tiers, all chain styles, the complete charm collection, and the welder. Everything needed for a seamless experience.

Step 3 — **Both Brands Win**: You get a free chain as host. Your clients get an unforgettable experience. Both brands grow. Both audiences expand. The pop-up host always benefits.

---

## COLLABORATION CONCEPTS GRID (Black background, 4×3 grid, 12 cards)

- Heading: **12 ways to collaborate.** — White
- Sub: From blow dry bars to corporate events — if your clients would love an experience, we want to talk. — White at 45%

**Each card (12 total):**
- Background: `#0E0E0E`
- Border: 1px `#C9A84C` at 10%
- Padding: 36px 28px
- On hover: border becomes `#C9A84C` at 30%

Content in each card:
- Industry tag: small text in a gold-bordered box, Montserrat 9px ALL CAPS
- Title: Cormorant Garamond, 22px, White
- Concept: Montserrat, 12px, White at 45%, weight Light, line height 1.7
- "Learn More →" link at bottom — Montserrat, 10px, `#C9A84C`, ALL CAPS

**The 12 cards:**

1. **Industry:** Blow Dry Bar — **Title:** Blown Out + Linked Up — **Concept:** Come for the blowout, stay for the bracelet. Both services done in the same chair window.

2. **Industry:** Wine Bar / Tasting Room — **Title:** Sip & Glint — **Concept:** An evening pop-up where guests taste and get welded. The chain becomes the souvenir of the night.

3. **Industry:** Nail Studio — **Title:** Polish & Permanent — **Concept:** Manicure first, chain after. The wrist is already extended and pampered.

4. **Industry:** Yoga & Wellness — **Title:** Post-Class Glow-Up — **Concept:** End a weekend morning class with a pop-up weld session for attendees. The ultimate wellness moment.

5. **Industry:** Bridal Boutique — **Title:** Try It On, Weld It On — **Concept:** On-site weld day during dress fittings or alterations. Brides leave with a chain and a ring.

6. **Industry:** Floral Designer — **Title:** Blooms & Bracelets — **Concept:** Bridal market collaboration. Book your florals, get your bracelet — same unforgettable day.

7. **Industry:** Athletic Retail — **Title:** The Launch Weld — **Concept:** In-store pop-up during product launch events. The chain is the drop people remember.

8. **Industry:** Hotel / Resort — **Title:** The Weekend Weld — **Concept:** Pop-up in the lobby or pool deck. Guests leave with something that travels home.

9. **Industry:** Boutique Clothing — **Title:** Trunk Show + Chain Show — **Concept:** In-store event during new arrivals or trunk shows. The chain matches the moment.

10. **Industry:** Tattoo Studio — **Title:** Permanent Everything — **Concept:** Adjacent permanent art brands. Same session, same afternoon, same philosophy.

11. **Industry:** Spa / Med Spa — **Title:** The After-Glow — **Concept:** Add-on experience after a facial, massage, or treatment. The glow continues outward.

12. **Industry:** Event Venue — **Title:** The Event Weld — **Concept:** On-site pop-up during weddings, galas, corporate events. Guests weld as part of the evening.

---

## INQUIRY FORM (Cream background)

- Heading: **Apply to Collaborate.** — Cormorant Garamond, 48px
- Sub: Fill out the form below and we'll follow up within 48 hours. We partner with businesses across industries — if your clients would love an experience, we want to talk.

**Form fields (2-column grid layout):**
- Business Name
- Industry / Type
- Contact Name
- Email Address
- Phone Number
- Event Type (dropdown): Pop-Up Event / Dual-Service Package / Co-Branded Promotion / Other
- Message (full-width text area)
- **SEND INQUIRY →** button — gold background, black text, full width

---
---

# PAGE 5: COLLECTIONS

*See src/prototype/collections.html for the full design — build it section by section using the same principles above.*

Key notes:
- Use **Wix Tabs** component for the Tier 1 / Tier 2 / Tier 3 tabbed navigation
- Build the chain styles as a 3×2 grid of cards
- Build the charms as a 6×2 grid
- The comparison table: use Wix's **Table** component

---

# PAGE 6: EDUCATION HUB (The Knowledge Bar)

*See src/prototype/education.html — build it as a 2-column layout: sidebar navigation on left (sticky), content on right.*

Key notes:
- Left sidebar: Use Wix's **anchor menu** or a vertical list of text links that jump to page sections
- Each content section: heading + body text + any info boxes
- FAQ accordion: Use Wix's **Accordion** component (in Add → Interactive → Accordion)

---

# GLOBAL ANIMATIONS — Apply to Every Page

These entrance animations should be applied to almost every content element:

**Standard fade-in:** Element enters by fading from transparent to visible AND sliding up 20px. Duration 0.7 seconds.
- In Wix Studio: Select element → Animations tab → Entrance → **"Fade In + Float In"** → set direction to Up → duration 0.7s

**Staggered groups:** When you have multiple cards/columns side by side, delay each one slightly:
- First card: delay 0s
- Second card: delay 0.15s
- Third card: delay 0.3s

**Scroll trigger:** All entrance animations should trigger **"On Scroll"** (when element enters the viewport), not on page load.

**Hover effects on cards:** Every card element should have:
- Background color: lightens slightly on hover (use Wix Studio hover state)
- Border color: changes to `#C9A84C` on hover
- Transition: 0.3 seconds smooth

**Gold line animation on hero:** The decorative gold circle rings should pulse slowly using Wix's **Continuous Loop** animation → **Breathe/Pulse** effect, slow speed.

---

# FINAL CHECKLIST BEFORE PUBLISHING

- [ ] Connect domain: `glint.hue-co.com` in Dashboard → Domains
- [ ] All CTA buttons linked to correct pages
- [ ] "Book Now" / "Book a Session" buttons linked to Wix Bookings
- [ ] Email capture form connected to Wix Contacts / Ascend mailing list
- [ ] Wix Payments connected (for $25 deposit collection)
- [ ] Google Analytics added in Dashboard → Marketing → Analytics
- [ ] SEO: Every page has a custom Meta Title and Meta Description
  - Home: **HUE Glint — Permanent Jewelry Studio | No Clasp. No Compromise.**
  - Design Your Chain: **Design Your Permanent Jewelry Chain | HUE Glint**
  - Services: **Permanent Jewelry Services — Studio, Mobile & Events | HUE Glint**
  - Collections: **Permanent Jewelry Collections — 3 Tiers, 6 Styles | HUE Glint**
- [ ] All pages tested on mobile (Wix Studio mobile preview button)
- [ ] deSoleil cross-link added to Glow & Glint sections
