/**
 * BRAND CONFIGURATION — the single place to rename or re-point the site.
 *
 * Brand name: VyapaarSetu (confirmed by the client).
 *
 * To rename the site: change BRAND_NAME in src/config/brand-name.js
 * (this also updates the <title> and meta tags in index.html), then restart
 * `npm run dev`.
 *
 * Everything else that shows the brand (navbar logo, footer, hero, chatbot,
 * FAQs, page copy) reads from this file through `company` in data/company.js.
 */

import { BRAND_NAME } from './brand-name'

const name = import.meta.env.VITE_BRAND_NAME || BRAND_NAME

export const brand = {
  name,
  tagline: 'Your Business Growth Partner',
  description:
    'From starting your business to managing compliance and exploring growth opportunities, we help you navigate every stage of your entrepreneurial journey.',

  /*
   * CONTACT DETAILS — REVIEW BEFORE LAUNCH.
   * These were carried over from the source project so that every phone,
   * email and "Talk to an expert" link keeps working during review. Replace
   * them with the new client's details as soon as they are supplied.
   */
  phone: '+91 959 123 9899',
  phoneHref: 'tel:+919591239899',
  email: 'enquiry@udyamakendra.com',
  emailHref: 'mailto:enquiry@udyamakendra.com',
  hours: 'Mon - Sat: 9.30 AM to 6.30 PM',
  locations: ['India'],

  /*
   * SOCIAL PROOF SWITCHES.
   * The figures, testimonials and partner list in data/company.js belong to
   * the source business. They are hidden for the new client so the site does
   * not present someone else's customers or numbers as its own. Switch a flag
   * on only after the new client supplies and approves its own content.
   */
  show: {
    stats: false,
    testimonials: false,
    partners: false,
  },
}

export default brand
