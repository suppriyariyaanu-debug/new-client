# VyapaarSetu — review notes

## Rename the brand
Edit `BRAND_NAME` in `src/config/brand-name.js`, then restart `npm run dev`.
Tagline, contact details and section switches live in `src/config/brand.js`.

## Before launch (needs client input)
- Phone / email in `src/config/brand.js` are carried over from the source project — replace them.
- Team (About → Our Team) still shows the source project's team — replace `team` in `src/data/company.js`.
- Stats, testimonials and partners are hidden (`brand.show`) because they belong to the source business.
  Turn them on only with the client's own approved content.
- Enquiry form and chatbot run locally (no backend). Connect `src/lib/leads.js` and `src/lib/chat.js` to real endpoints.
- Logo is a typeset wordmark (`src/components/ui/Logo.jsx`); swap in the client's final logo file when approved.

## What changed
- New homepage: hero, "What Are You Planning to Build?", growth-partner pillars, 4-step journey, final CTA.
- Data for the new sections: `src/data/growth.js` (all services referenced by existing catalogue slugs).
- Contact page accepts `?plan=<id>` (restaurant, retail, it-services, manufacturing, startups, start, grow) and pre-fills the enquiry.
- Chatbot answers restaurant/café questions.
- All existing routes, services, mega menu, search, forms and chatbot are unchanged in behaviour.
