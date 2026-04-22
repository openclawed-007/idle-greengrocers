/**
 * Single source of truth for site-wide business information.
 * Update values here and every page stays in sync.
 */

export const site = {
  name: 'Idle Greengrocers',
  shortName: 'Idle',
  tagline: 'Fresh. Local. Sustainable.',
  established: 2020,
  description:
    'Carefully sourced fruit, vegetables and local produce from trusted Yorkshire growers and makers. Fresh flavour, every day.',
  url: 'https://idlegreengrocers.co.uk',
  locale: 'en-GB',
  currency: 'GBP',

  contact: {
    email: 'hello@idlegreengrocers.co.uk',
    phone: '+44 7780 438563',
    phoneDisplay: '07780 438563',
  },

  address: {
    line1: '23 The Green',
    locality: 'Idle',
    region: 'Bradford',
    postalCode: 'BD10 9PT',
    country: 'GB',
    full: '23 The Green, Idle, Bradford, United Kingdom, BD10 9PT',
    // Approx. centre of Idle village (for JSON-LD only — update with exact lat/lng when known).
    geo: { latitude: 53.8333, longitude: -1.7667 },
  },

  hours: [
    { day: 'Monday', open: '08:00', close: '18:00' },
    { day: 'Tuesday', open: '08:00', close: '18:00' },
    { day: 'Wednesday', open: '08:00', close: '18:00' },
    { day: 'Thursday', open: '08:00', close: '18:00' },
    { day: 'Friday', open: '08:00', close: '18:30' },
    { day: 'Saturday', open: '08:00', close: '17:00' },
    { day: 'Sunday', open: '09:00', close: '13:00' },
  ],

  socials: {
    instagram: 'https://instagram.com/idlegreengrocers',
    facebook: 'https://www.facebook.com/profile.php?id=61557840344635',
  },

  // Prefer WhatsApp over the main line for out-of-hours queries. Falls back
  // to `contact.phone` if left empty.
  whatsapp: {
    number: '+447780438563',       // digits only, E.164 — used in wa.me links
    display: '07780 438563',
  },

  delivery: {
    cost: '£3.50',
    freeOver: '£30',
    cutoff: '10am',                // same-day cutoff for Mon–Fri
    days: 'Mon – Fri',
    areas: [
      'Idle', 'Thackley', 'Greengates', 'Shipley', 'Baildon', 'Saltaire', 'Pudsey',
    ],
  },

  // Postcode prefixes we deliver to. Used by the PostcodeChecker widget
  // on the home and delivery pages.
  deliveryPostcodes: [
    'BD10',
    'BD2',
    'BD17',
    'BD18',
    'LS28',
    'LS19',
  ],

  // Top-of-page announcement. Leave `enabled: false` to hide the strip.
  // Bump `id` to force-show a new message to users who dismissed the
  // previous one.
  announcement: {
    enabled: true,
    id: '2026-04-spring',
    message: 'Yorkshire rhubarb is in — pop by the shop while it lasts.',
    linkLabel: 'See what\u2019s in',
    linkHref: '/our-produce',
  },
} as const;

export type Site = typeof site;
