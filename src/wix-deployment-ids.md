# HUE Glint — Wix Deployment Reference
*Site: glint.hue-co.com | metaSiteId: 5c94bfb1-a2c7-4edd-b4ec-f3fdba54b4e8*

---

## Staff Members

| Name | Email | Resource ID (for Bookings) |
|------|-------|--------------------------|
| HUE Glint Studio | studio@hue-co.com | `1df40ae0-07e2-48aa-9737-27ecb0288e7e` |

---

## Booking Service Categories

| Name | Category ID |
|------|------------|
| Weld Sessions | `c31b9f1e-5ee1-44e5-b343-36e2b5a17f01` |
| Events & Parties | `c0b52377-a548-468b-871d-0d2aba1e59fe` |
| Maintenance & Add-Ons | `a8bf73e2-a049-4fff-aab3-115e172cd995` |

---

## Booking Services (10 live)

| Service | Category | Duration | Deposit | Service ID |
|---------|----------|----------|---------|-----------|
| In-Studio Weld Session | Weld Sessions | 30 min | $25 | `20b1914b-387f-4937-a498-8da1b1116fe0` |
| Stacking Session (3+ Chains) | Weld Sessions | 60 min | $25 | `fa6622cd-d484-414d-bc73-991d861a1ae1` |
| Glow & Glint Package | Weld Sessions | 30 min | $25 | `efcf8408-8c6d-4093-82bc-a1240ac6b9aa` |
| Virtual Consultation (Free) | Weld Sessions | 15 min | Free | `9d3f10eb-4a9b-46f6-961b-c35863eee4e6` |
| Bridal & Bachelorette Pop-Up | Events & Parties | 90 min | $25 | `d0696ebb-dc81-4db4-99ba-00205007d03d` |
| Party Favor Event | Events & Parties | 120 min | $25 | `f3064b33-d938-4881-8274-986f726f94e1` |
| Corporate Gifting Session | Events & Parties | 60 min | $25 | `df1c1ca8-8455-4812-8bbc-7f98c576645e` |
| Re-Weld Service | Maintenance & Add-Ons | 15 min | $20 | `15421989-0827-4535-ad9d-e0d1502e2d1f` |
| Charm Swap | Maintenance & Add-Ons | 15 min | $10 | `c716d992-94fa-40b6-9621-c7ec48034890` |
| Chain Removal | Maintenance & Add-Ons | 10 min | Free | `32836203-a874-4a2e-8095-5ac51c0a22a4` |

---

## Blog Posts (The HUE Journal — 12 published)

| Title | Slug | Target Keywords |
|-------|------|----------------|
| What Is Permanent Jewelry? The Complete Guide | `what-is-permanent-jewelry-the-complete-guide` | what is permanent jewelry, how does permanent jewelry work |
| Stainless Steel vs Gold-Filled vs Solid Gold: Which Permanent Jewelry Should You Choose? | `stainless-steel-vs-gold-filled-vs-solid-gold-which-permanent-jewelry-should-you-choose` | best metal for permanent jewelry |
| What to Expect at Your First Permanent Jewelry Appointment | `what-to-expect-at-your-first-permanent-jewelry-appointment` | permanent jewelry appointment |
| How to Stack Permanent Chains Like a Pro | `how-to-stack-permanent-chains-like-a-pro` | how to style permanent jewelry |
| Why Permanent Jewelry Is the New Bachelorette Party Trend | `why-permanent-jewelry-is-the-new-bachelorette-party-trend` | bachelorette party permanent jewelry |
| The Best Party Favor No One Saw Coming | `the-best-party-favor-no-one-saw-coming` | permanent jewelry party favor |
| The Science Behind the Weld: Is Permanent Jewelry Safe? | `the-science-behind-the-weld-is-permanent-jewelry-safe` | permanent jewelry safe, is welded jewelry dangerous |
| Argentium Silver: Why It's Better Than Sterling | `argentium-silver-why-it-s-better-than-sterling-and-what-that-means-for-permanent-jewelry` | argentium silver vs sterling silver |
| Permanent Jewelry for Men: Breaking the Style Barrier | `permanent-jewelry-for-men-breaking-the-style-barrier` | permanent jewelry men |
| The Rise of Permanent Jewelry Collaborations | `the-rise-of-permanent-jewelry-collaborations-how-local-businesses-are-partnering-up` | permanent jewelry pop up, permanent jewelry collaboration |
| How to Care for Your Permanent Jewelry (By Tier) | `how-to-care-for-your-permanent-jewelry-by-tier` | permanent jewelry care, how to clean permanent bracelet |
| When Permanent Jewelry Breaks: What To Do and Who to Call | `when-permanent-jewelry-breaks-what-to-do-and-who-to-call` | permanent jewelry broke, permanent bracelet repair |

---

## Site Member (Blog Author)

| Name | Email | Member ID |
|------|-------|----------|
| Jana Corder | janalcorder@icloud.com | `c7b96723-4ff3-434a-8df9-8dc8050cd9b1` |

---

## Wix Apps Installed

- Wix Bookings ✓
- Wix Blog ✓
- Wix Pricing Plans ✓
- Wix Forms ✓

---

## Loyalty Program (Inner Circle)

Managed via Velo backend — see `src/velo/loyalty-referral.js`

Required CMS Collections to create in Wix Studio:
1. **GlintMembers** — memberId, points, tier, referralCode, referralCount, joinDate, birthday, birthdayMMDD, name, email, phone
2. **GlintTransactions** — memberId, type, points, notes, createdAt
3. **GlintReferrals** — referrerId, refereeId, referralCode, createdAt, status

| Tier | Points Required | Multiplier |
|------|----------------|------------|
| Glint | 0–499 | 1.0× |
| Gold | 500–1,499 | 1.25× |
| Champagne | 1,500–2,999 | 1.5× |
| Diamond | 3,000+ | 2.0× |

---

## Manual Steps Remaining

1. **Subdomain** — Connect `glint.hue-co.com` in Wix Dashboard > Settings > Domains
2. **Velo code** — Paste `src/velo/pricing-engine.js` into Wix Studio Public folder
3. **Configurator page** — Paste `src/velo/page-configurator-bindings.js` into Design Your Chain page code panel
4. **Body mockup** — Upload `src/velo/body-mockup.html` and embed as HTML iFrame on Design Your Chain page
5. **Loyalty backend** — Paste `src/velo/loyalty-referral.js` into Backend > loyalty.jsw
6. **CMS collections** — Create GlintMembers, GlintTransactions, GlintReferrals collections in Wix Data
7. **Wix Payments** — Connect bank account in Dashboard > Payments
8. **deSoleil cross-link** — Add Glow & Glint 10% discount link from both sites
9. **Google Business Profile** — Add booking link, update categories to Jewelry Store + Beauty Salon
