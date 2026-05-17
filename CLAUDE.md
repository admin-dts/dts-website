# DTS Website – Claude Code Guide

This is the website for the **Dream Team Singers**, a charity choir based in Lancashire, UK. It is built with [Astro](https://astro.build/) and styled with Tailwind CSS.

---

## For non-technical users

You don't need to know how to code to make changes. Just describe what you want in plain English — Claude will find the right file and make the change for you.

**Example requests:**
- "Add a new upcoming event on 10th January 2027 at St Mary's Church in support of Age UK"
- "Remove the RNLI event"
- "Update Carol's phone number to 07700000000"
- "Change the tagline on the banner"
- "Update the 'Who Are We?' description"
- "Change the footer year to 2025"

---

## Site structure (what's where)

All the content lives in `website/src/components/`. Each component is one section of the page:

| File | Section on the website |
|---|---|
| `Banner.astro` | Big hero section at the top (tagline, logo, buttons) |
| `About.astro` | "Who Are We?" section with the group description and musical director name |
| `UpcomingEvents.astro` | List of upcoming events |
| `UEventEntry.astro` | Template for a single event entry — **don't change this file** |
| `Contact.astro` | Email, phone number, meeting time and location |
| `Navbar.astro` | Top navigation bar |
| `Footer.astro` | Footer at the bottom (copyright line) |

---

## How to make the most common changes

### Add a new upcoming event
Edit `website/src/components/UpcomingEvents.astro` and copy an existing `<UEventEntry … />` block. Each entry takes these fields:

```
header      — "IN SUPPORT OF" or "IN CONCERT WITH"
title       — The charity or group name
concertWith — (optional) A second group performing with DTS
fullDate    — e.g. '14th February 2027'
day         — Day of the week, e.g. 'Saturday'
time        — e.g. '6pm' or 'To Be Arranged'
address     — Full venue address
```

### Remove an upcoming event
Delete the entire `<UEventEntry … />` block for that event in `UpcomingEvents.astro`.

### Update contact details
Edit `website/src/components/Contact.astro`:
- Email: find `dreamteamsingers@gmail.com` — update both the `href="mailto:…"` and the visible text
- Phone: find `07933155590` — update both the `href="tel:…"` and the visible text
- Carol's name: find `Carol Warmisham` in Contact.astro
- Meeting times/location: find the text under `MEETINGS`

### Update "Who Are We?" text or the musical director name
Edit `website/src/components/About.astro`:
- The two `<p>` paragraphs are the group description
- `Carol Warmisham` is the musical director name

### Change the banner tagline
Edit `website/src/components/Banner.astro` — the tagline is the `<p>` that reads *"A choir uniting people through song…"*

### Update the footer
Edit `website/src/components/Footer.astro` — it's a single short line.

---

## Rules for Claude — read before making any change

1. **Explain every change in plain English** before applying it. Say which file you're editing and what you're changing, without using jargon.
2. **Only edit the content text** — never change Tailwind class names, layout structure, or JavaScript unless the user explicitly asks for a design or layout change.
3. **Keep all event entries in chronological order** (earliest date first).
4. **Do not touch** `UEventEntry.astro`, `Layout.astro`, `env.d.ts`, `robots.txt.ts`, or any file inside `website/src/icons/` unless the user is asking for a structural/design change.
5. **Do not modify** anything in the `strapi/` folder — that backend is not connected to the website.
6. After making a change, briefly confirm what was changed in one or two plain-English sentences.
7. If you're unsure what the user means, ask a clarifying question rather than guessing.
