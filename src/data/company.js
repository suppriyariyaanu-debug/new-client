import { brand } from '../config/brand'

/**
 * Company information.
 *
 * Name, tagline and contact details come from src/config/brand.js, so the
 * brand can be renamed in one place. The other exports below (stats,
 * testimonials, partners, team) were carried over from the source project;
 * see the `show` switches in brand.js before displaying any of them.
 */

export const company = {
  name: brand.name,
  tagline: brand.tagline,
  description: brand.description,
  phone: brand.phone,
  phoneHref: brand.phoneHref,
  email: brand.email,
  emailHref: brand.emailHref,
  hours: brand.hours,
  locations: brand.locations,
  copyright: `${brand.name}. All Rights Reserved`,
  show: brand.show,
}

/**
 * Published business figures.
 *
 * These are the counters from the previous site's statistics strip, confirmed
 * by the business. They are NOT derived from the catalogue in this repository
 * and must not be recomputed from it — the catalogue lists the services with
 * their own pages, which is a smaller number than the services offered.
 * Because these are the published figures, no other part of the UI quotes a
 * service total, so the site never contradicts itself.
 */
export const stats = [
  { value: '126+', label: 'Services', icon: 'layers' },
  { value: '54+', label: 'Partners', icon: 'handshake' },
  { value: '18+', label: 'Advisors', icon: 'users' },
  { value: '3', label: 'Global Locations', icon: 'globe' },
]

/** Short trust points (descriptive of the service model, not claims of results). */
export const trustPoints = [
  'Guidance at every stage',
  'Clear process, fee confirmed upfront',
  'Registration, compliance and growth in one place',
  'Support that continues after launch',
]

/**
 * The six service pillars from the previous site, with their published
 * descriptions reproduced verbatim.
 */
export const pillars = [
  {
    icon: 'building',
    title: 'Company Registration',
    description:
      'We help entrepreneurs navigate the complexities of setting up a business in India, ensuring they comply with legal requirements for business growth',
    categorySlug: 'start-business',
  },
  {
    icon: 'badge',
    title: 'MSME Services & Certificates',
    description:
      'These services and certificates are vital for the growth and sustainability of your company, enabling you to compete effectively in the market',
    categorySlug: 'registrations',
  },
  {
    icon: 'shield',
    title: 'Statutory Compliances',
    description:
      'Ensuring statutory compliance is crucial for avoiding legal penalties, maintaining a good reputation, and fostering trust with stakeholders.',
    categorySlug: 'compliances',
  },
  {
    icon: 'trademark',
    title: 'Patent & Trademark Services',
    description:
      'Trademark patent services typically involve the registration and legal protection of trademarks and patents, ensuring that intellectual property rights are upheld',
    categorySlug: 'registrations',
  },
  {
    icon: 'code',
    title: 'Software & Web Solutions',
    description:
      'A wide range of services and products designed to meet the needs of businesses and individuals in the digital space like Website, Digital Marketing and many more',
    categorySlug: 'it-services',
  },
  {
    icon: 'bank',
    title: 'Corporate Banking & Loans',
    description:
      'Corporate banking plays a crucial role in supporting the financial needs of businesses, enabling them to grow and operate efficiently',
    categorySlug: 'financial-services',
  },
]

/** "WHAT MAKES US DIFFERENCE" — the eight published differentiators. */
export const differentiators = [
  { icon: 'wallet', title: 'Affordable Professional Services' },
  { icon: 'network', title: 'Diverse Expert Network' },
  { icon: 'scale', title: 'CA & Legal Services' },
  { icon: 'shield', title: 'Compliance Guaranteed' },
  { icon: 'clock', title: 'On-time Service' },
  { icon: 'target', title: 'Industry Specialists' },
  { icon: 'zap', title: 'Quick Support' },
  { icon: 'handshake', title: 'Business Partnerships' },
]

/**
 * Team, exactly as published. Photographs have been removed at the client's
 * request; the portrait frame on each card is intentionally left blank.
 * Names and designations are as given and must not be altered.
 */
export const team = [
  { name: 'Pavan Kumar', role: 'Global Evangelist' },
  { name: 'CSV Prasad', role: 'Global Advisor' },
  { name: 'Ram', role: 'Founder' },
  { name: 'Shivaprasad', role: 'Business Advisor' },
]

export const teamIntro =
  'The strength and success of an organization are closely linked to the effectiveness of its team.'

/** Testimonials, reproduced verbatim. */
export const testimonials = [
  {
    quote:
      'I want to thank the team for their attentive support and guidance. We are happy customers and would recommend their hassle-free service to others.',
    name: 'Vinay',
    role: 'CEO, Zerozilla',
  },
  {
    quote:
      "We've been with this firm for almost a year. They provide sound advice and excellent financial planning. The team is very focused and always delivers on time. Wishing them all the best",
    name: 'Maruthi Guruji',
    role: 'Partner, Sri Charana Foods',
  },
  {
    quote:
      'One of the best consulting firm in Bangalore with in-depth knowledge related to company set-up. I highly recommend them for NRIs who want to set-up Business in India.',
    name: 'Sanju',
    role: 'CEO, In4 Growth Inc.',
  },
]

/**
 * Partners. `logo` points at where the real mark should live; the BrandMark
 * component falls back to a typeset wordmark until the file is added.
 * Source filenames on the previous site: /images/partners/<file>.
 */
export const partners = [
  { name: 'Academy Axis', logo: '/images/partners/academy-axis.png' },
  { name: 'Amsware', logo: '/images/partners/amsware.png' },
  { name: 'Book My Square Feet', logo: '/images/partners/book-my-square-feet.png' },
  { name: 'LoansMitra', logo: '/images/partners/loanzmitra.png' },
  { name: 'IIIQ', logo: '/images/partners/iiiq.png' },
  { name: 'Spectra', logo: '/images/partners/spectra.png' },
]

/** How the business describes itself. */
export const positioning = {
  eyebrow: 'BUSINESS CONSULTING',
  statement:
    'We help entrepreneurs establish and grow their businesses, with guidance on business registration, licensing, compliance and the decisions that follow launch.',
  servicesIntro:
    'Understanding and effectively managing core services is vital for any organization aiming to achieve long-term success and customer loyalty',
  differenceIntro: 'We stand out is the wide array of services we offer under one roof.',
}
