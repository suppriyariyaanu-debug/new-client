/**
 * Growth-partner homepage content.
 *
 * Every service listed here is referenced by its slug in data/catalogue.js —
 * nothing is duplicated. Components resolve slugs with getService() and drop
 * any slug that no longer exists, so a catalogue change can never produce a
 * dead link.
 *
 * Wording rule: requirements depend on the business, its location and the
 * applicable regulations. Copy here says what *may* apply and offers to
 * confirm it — it never states that every registration or licence is
 * mandatory for every business.
 */

/** "What Are You Planning to Build?" — one entry per business type. */
export const businessTypes = [
  {
    id: 'restaurant',
    icon: 'coffee',
    title: 'Restaurants & Cafés',
    short: 'Cafés, restaurants, cloud kitchens, bakeries and food outlets.',
    intro:
      'Opening a food business involves a few more formalities than most. We help you work out which registrations, food-safety and local licences apply to your outlet, and keep your accounts and filings in order once you open.',
    considerations: [
      'Choosing a business structure — proprietorship, partnership, LLP or company',
      'GST registration, where your turnover or business model requires it',
      'FSSAI registration or licence — the type depends on your scale and activity',
      'Local trade and other licences, which vary by state and municipality',
      'Accounting, GST returns and ongoing compliance after you open',
    ],
    groups: [
      { label: 'Set up', services: ['sole-proprietorship', 'partnership-firm', 'llp', 'company'] },
      { label: 'Registrations & licences', services: ['fssai', 'gst', 'udyam', 'other-compliances'] },
      { label: 'Accounts & compliance', services: ['gst-returns-filing', 'fssai-returns-filing', 'itr', 'virtual-cfo'] },
      { label: 'Brand & growth', services: ['trademark', 'logo-design', 'social-media-marketing'] },
    ],
  },
  {
    id: 'retail',
    icon: 'shoppingBag',
    title: 'Retail & E-commerce',
    short: 'Physical stores, online shops and marketplace sellers.',
    intro:
      'Whether you sell from a shop, your own website or a marketplace, we help you set up the business, put the relevant tax registrations in place and build an online presence that can take payments.',
    considerations: [
      'The right structure for a single store, multiple outlets or an online brand',
      'GST registration — often needed for online and marketplace selling',
      'Payment gateway, website and online store set-up',
      'Protecting your brand name with a trademark',
      'Regular GST returns, income tax and bookkeeping',
    ],
    groups: [
      { label: 'Set up', services: ['sole-proprietorship', 'partnership-firm', 'llp', 'company'] },
      { label: 'Registrations', services: ['gst', 'udyam', 'trademark'] },
      { label: 'Go online', services: ['ecommerce-website', 'payment-gateway', 'domain-registration', 'search-engine-optimization'] },
      { label: 'Compliance & finance', services: ['gst-returns-filing', 'itr', 'working-capital-od'] },
    ],
  },
  {
    id: 'it-services',
    icon: 'briefcase',
    title: 'IT & Professional Services',
    short: 'Software firms, agencies, consultants and freelancers.',
    intro:
      'Service businesses grow on credibility and clean paperwork. We help you choose a structure that suits clients and partners, handle tax and payroll registrations, and support exports of services where relevant.',
    considerations: [
      'LLP, private limited or OPC — depending on partners, funding and client needs',
      'GST registration and, for overseas clients, import–export (IEC) where applicable',
      'TDS, payroll, PF and ESIC as your team grows',
      'ROC and annual filings for companies and LLPs',
      'A professional website and brand protection',
    ],
    groups: [
      { label: 'Set up', services: ['llp', 'company', 'opc', 'digital-signature-certificate'] },
      { label: 'Registrations', services: ['gst', 'iec', 'trademark', 'udyam'] },
      { label: 'Team & compliance', services: ['payroll-management', 'pf-registration', 'esic-registration', 'tds-filings', 'roc-filings'] },
      { label: 'Digital presence', services: ['website-development', 'cloud-management'] },
    ],
  },
  {
    id: 'manufacturing',
    icon: 'factory',
    title: 'Manufacturing',
    short: 'Production units, workshops, processing and packaging.',
    intro:
      'Manufacturing brings product, labour and finance requirements together. We help you identify the registrations and certifications relevant to your product, set up labour compliance and explore funding options.',
    considerations: [
      'Business structure and MSME (Udyam) registration',
      'Product certifications such as ISO or BIS, where relevant to your product',
      'PF, ESIC and payroll for your workforce',
      'Import–export registration if you source or sell abroad',
      'Working capital, MSME loans and project reports for lenders',
    ],
    groups: [
      { label: 'Set up', services: ['company', 'llp', 'partnership-firm'] },
      { label: 'Registrations & certifications', services: ['gst', 'udyam', 'iso-certification', 'bis-isi-mark-certificate', 'iec'] },
      { label: 'Workforce & compliance', services: ['pf-registration', 'esic-registration', 'payroll-management', 'gst-returns-filing', 'roc-filings'] },
      { label: 'Finance', services: ['cma-report-preparation', 'msme-loans', 'working-capital-od'] },
    ],
  },
  {
    id: 'startups',
    icon: 'rocket',
    title: 'Startups & Entrepreneurs',
    short: 'New ventures, founders and first-time business owners.',
    intro:
      'If you have an idea and are not sure where to begin, start here. We help you pick a structure, register it, protect your brand and put the foundations in place for funding and growth.',
    considerations: [
      'Choosing between private limited, LLP and OPC',
      'Startup India recognition, if your business is eligible',
      'Trademark protection for your brand name',
      'An office address, digital signatures and statutory filings',
      'Financial planning and exploring funding options',
    ],
    groups: [
      { label: 'Set up', services: ['company', 'llp', 'opc', 'digital-signature-certificate'] },
      { label: 'Registrations', services: ['startup-india-registration', 'gst', 'trademark'] },
      { label: 'Workspace', services: ['virtual-office-address', 'co-working-office'] },
      { label: 'Grow', services: ['virtual-cfo', 'startup-funding', 'website-development', 'roc-filings'] },
    ],
  },
]

/** Extra enquiry topics that are not business types (used by hero / CTA links). */
export const enquiryTopics = {
  start: {
    title: 'Starting a new business',
    requirement: 'I am planning to start a business and would like help choosing the right structure and registrations.',
    services: ['company', 'llp', 'opc', 'gst'],
  },
  grow: {
    title: 'Growing my business',
    requirement: 'I would like to discuss my business idea and the next steps to grow it.',
    services: [],
  },
}

/** Enquiry topic lookup used by the Contact page (?plan=<id>). */
export function getEnquiryTopic(id) {
  if (!id) return null
  const type = businessTypes.find((item) => item.id === id)
  if (type) {
    return {
      title: type.title,
      requirement: `I am planning a business in ${type.title.replace('&', 'and')} and would like guidance on the registrations, licences and compliance that apply.`,
      services: type.groups.flatMap((group) => group.services).slice(0, 6),
    }
  }
  return enquiryTopics[id] ?? null
}

/** "More Than Registrations. A Partner in Your Growth." */
export const growthPillars = [
  {
    icon: 'compass',
    title: 'Guided Business Setup',
    description:
      'We help you choose the right structure, understand the registrations that apply to your business and complete them in the right order — so you start on solid ground.',
  },
  {
    icon: 'shield',
    title: 'Simplified Compliance',
    description:
      'GST returns, income tax, ROC and other filings explained in plain language and handled on schedule, so compliance stops being a distraction.',
  },
  {
    icon: 'target',
    title: 'Solutions for Your Business',
    description:
      'Advice shaped around your industry and stage — a café, a factory and a software studio need different things, and we treat them that way.',
  },
  {
    icon: 'trendingUp',
    title: 'Support Beyond Launch',
    description:
      'Registration is only the start. As you grow we help with hiring compliance, trademarks, technology, finance and the next set of decisions.',
  },
]

/** The four-step business journey. */
export const journeySteps = [
  {
    step: '01',
    icon: 'message',
    title: 'Tell Us Your Idea',
    description: 'Share what you are planning to build — through the enquiry form, chat or a call.',
  },
  {
    step: '02',
    icon: 'search',
    title: 'Understand Your Requirements',
    description:
      'We work out which registrations, licences and filings apply to your business, and confirm the documents and fee before any work begins.',
  },
  {
    step: '03',
    icon: 'headset',
    title: 'Get the Right Assistance',
    description: 'Our team handles the applications and formalities, and keeps you updated along the way.',
  },
  {
    step: '04',
    icon: 'trendingUp',
    title: 'Focus on Growing Your Business',
    description: 'With the groundwork in place, you concentrate on customers — we stay available for what comes next.',
  },
]

/** Hero "Where are you today?" quick paths. */
export const stagePaths = [
  {
    icon: 'rocket',
    label: 'I am starting a business',
    hint: 'Structures, registrations and PAN',
    to: '/services/category/start-business',
  },
  {
    icon: 'shield',
    label: 'I need to stay compliant',
    hint: 'GST, income tax, ROC and payroll filings',
    to: '/services/category/compliances',
  },
  {
    icon: 'trendingUp',
    label: 'I want to grow',
    hint: 'Trademarks, websites, loans and funding',
    to: '/services/category/financial-services',
  },
]
