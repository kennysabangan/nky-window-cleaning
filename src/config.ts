/**
 * siteConfig.ts — Central configuration for the site.
 *
 * To clone this template for a new niche site, ONLY edit this file
 * (and swap photos in /public/photos/). Everything else is generic.
 *
 * Content rules (these keep the site out of trouble with Google and the FTC):
 * - No invented reviews, ratings, review counts, or "years in business".
 * - No credentials (licensed, insured, background-checked, guarantees) until
 *   the service partner actually has them — add them then.
 * - Every city page needs its own real, local content. Don't add a city
 *   unless you can fill in every field below with something specific.
 */

export interface Service {
  title: string;
  slug: string;
  description: string;
  photo: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface City {
  name: string;
  slug: string;
  county: string;
  lat: string;
  lng: string;
  /** Opening paragraph — what window cleaning looks like in this city. */
  intro: string;
  /** Housing stock and the window types that come with it. */
  homes: string;
  /** What actually makes windows dirty here and how we handle it. */
  challenges: string;
  /** Neighborhoods / corridors we cover, shown as a list. */
  areas: string[];
  /** Questions specific to this city. Rendered + added to FAQPage schema. */
  faqs: FAQ[];
}

export interface Guide {
  title: string;
  slug: string;
  summary: string;
}

export const siteConfig = {
  // ── Business identity ──────────────────────────────────────────────
  businessName: "NKY Window Cleaning Pros",
  phone: "(859) 900-8044",
  phoneE164: "+18599008044",
  domain: "nkywindowcleaningpros.com",
  siteUrl: "https://nkywindowcleaningpros.com",

  // ── Form Webhook ───────────────────────────────────────────────
  // Google Sheets web app URL (set after deploying google-sheets-webhook.gs)
  formWebhookUrl: "",

  // ── Analytics ───────────────────────────────────────────────────────
  // Set these to your real GA4 / GTM IDs to enable tracking.
  // Leave as placeholders (or empty) to disable — the site still works.
  ga4MeasurementId: "G-PV0W7K0SXB",   // Google Analytics 4
  gtmContainerId: "GTM-XXXXXXX",      // Google Tag Manager

  // Google Search Console → Add property → URL prefix → "HTML tag" method.
  // Paste only the content="..." value here. Leave empty if verified via DNS.
  googleSiteVerification: "",

  // helper: truthy only when the value looks like a real ID
  get hasGA4() {
    return this.ga4MeasurementId && !this.ga4MeasurementId.startsWith('G-XX');
  },
  get hasGTM() {
    return this.gtmContainerId && !this.gtmContainerId.startsWith('GTM-XX');
  },

  // ── Location ───────────────────────────────────────────────────────
  city: "Northern Kentucky",
  state: "KY",
  region: "NKY",
  geoLat: "39.0",
  geoLng: "-84.5",

  // ── SEO keywords ──────────────────────────────────────────────────
  serviceKeyword: "window cleaning",
  serviceKeywordPlural: "window cleaning services",
  brandColor: "#1a6bb5",

  // ── Hero content ─────────────────────────────────────────────────
  heroTagline: "Window Cleaning in Northern Kentucky",
  heroSubtext: "Inside and out, with screens and tracks included. Free estimates for homes and storefronts across Boone, Kenton, and Campbell counties.",
  heroAlt: "Window cleaner washing the exterior glass of a two-story home",

  // ── Computed city lists ──────────────────────────────────────────
  get cityListShort() {
    return this.cities.slice(0, 4).map(c => c.name.replace(/, KY$/, '')).join(', ');
  },
  get cityListLong() {
    return this.cities.slice(0, 8).map(c => c.name.replace(/, KY$/, '')).join(', ');
  },

  // ── Opening hours ─────────────────────────────────────────────────
  openingHours: "Mo-Sa 08:00-18:00",

  // ── Services ──────────────────────────────────────────────────────
  services: [
    {
      title: "Residential Window Cleaning",
      slug: "residential",
      description:
        "Inside and outside glass on one- and two-story homes, including frames and sills. Dirt, pollen, fingerprints, and light hard-water spotting come off in a single visit. Most homes take one to three hours.",
      photo: "/photos/residential.jpg",
    },
    {
      title: "Storefront & Commercial",
      slug: "commercial",
      description:
        "Storefronts, offices, and restaurants on a weekly, every-other-week, or monthly route. Early-morning visits so the glass is clean before you open and nobody has to step around a ladder.",
      photo: "/photos/commercial.jpg",
    },
    {
      title: "Screens, Tracks & Sills",
      slug: "screen-track",
      description:
        "Screens are brushed and rinsed, tracks are vacuumed and wiped, and sills are cleaned. Dirty screens re-soil clean glass the first time it rains, so these get done with every full cleaning.",
      photo: "/photos/screen-cleaning.jpg",
    },
  ] as Service[],

  // ── Guides (long-form how-to pages under /guides/) ───────────────
  guides: [
    {
      title: "How Much Does Window Cleaning Cost in Northern Kentucky?",
      slug: "window-cleaning-cost",
      summary: "Typical price ranges for NKY homes, what makes a job cost more, and how to get an accurate quote.",
    },
    {
      title: "How to Remove Hard Water Stains From Windows",
      slug: "hard-water-stains-on-windows",
      summary: "Why sprinkler spray leaves white spots on glass, what removes them, and when the glass is already etched.",
    },
    {
      title: "How to Get Dried Paint Off Window Glass Without Scratching It",
      slug: "removing-paint-from-window-glass",
      summary: "The blade-and-lubricant method professionals use, and the mistakes that leave permanent scratches.",
    },
    {
      title: "Post-Construction Window Cleaning: What a New Home Needs",
      slug: "post-construction-window-cleaning",
      summary: "Stickers, film adhesive, drywall dust, and mortar splatter — what builder cleans miss and how it's removed.",
    },
  ] as Guide[],

  // ── FAQs ──────────────────────────────────────────────────────────
  faqs: [
    {
      question: "How much does window cleaning cost in Northern Kentucky?",
      answer:
        "It depends mostly on how many panes you have, whether you want inside and outside, and whether any windows need a tall ladder. Most NKY homes land between $150 and $350 for inside and outside with screens. Exterior-only is usually 40–50% less. Call (859) 900-8044 for a free estimate over the phone.",
    },
    {
      question: "How often should I get my windows cleaned?",
      answer:
        "Twice a year — spring and fall — is what most homeowners do. Spring clears off winter road film and tree pollen; fall gets the windows clear before the short days. Homes on busy roads or under big trees often move to three or four times a year. Storefronts are usually weekly or every other week.",
    },
    {
      question: "Do you clean windows in the winter?",
      answer:
        "Yes, interior cleaning happens year-round. Exterior cleaning goes ahead whenever it's above freezing and dry enough that the glass won't ice over, which covers most winter days in Northern Kentucky.",
    },
    {
      question: "How long does it take to clean my windows?",
      answer:
        "A typical home with 15 to 25 windows takes one to two hours for inside and outside. Larger homes, divided-light windows with lots of small panes, and windows that need a tall ladder take longer.",
    },
    {
      question: "Do I need to be home for the cleaning?",
      answer:
        "Not for exterior-only work, as long as the windows can be reached from outside and gates are unlocked. For interior cleaning, someone needs to let the crew in.",
    },
    {
      question: "What's the difference between a squeegee clean and a water-fed pole?",
      answer:
        "Squeegee cleaning is the traditional method — scrub, squeegee, detail the edges — and works well on reachable glass. A water-fed pole scrubs with purified water from the ground, which dries spot-free and reaches second- and third-story windows without a ladder. Most crews use both depending on the window.",
    },
    {
      question: "Can you clean windows on two- and three-story homes?",
      answer:
        "Yes. Upper-story exterior glass is cleaned with a water-fed pole or extension ladder. Interior upper windows, like two-story foyer and great-room windows, need a ladder and are usually quoted separately.",
    },
    {
      question: "How do I schedule an appointment?",
      answer:
        "Call (859) 900-8044 or use the quote form on this page. Tell us roughly how many windows you have and whether you want inside, outside, or both, and you'll get a price and the next open dates.",
    },
  ] as FAQ[],

  // ── Cities served ─────────────────────────────────────────────────
  // Kept deliberately short: a handful of pages with real local content
  // beats dozens of near-copies. Add a city only with fully unique content.
  cities: [
    {
      name: "Florence, KY",
      slug: "florence-ky",
      county: "Boone County",
      lat: "38.9989",
      lng: "-84.6266",
      intro:
        "Florence is the biggest city in Boone County and one of the busiest window cleaning markets in Northern Kentucky. Most jobs here are two-story suburban homes and the retail strips along Mall Road, Houston Road, and US-42. If you can see the Florence Y'all water tower from your street, you're in our core service area.",
      homes:
        "The majority of Florence homes were built from the 1970s through the 2000s, so most windows are vinyl double-hungs with tilt-in sashes. That's good news: tilt-in sashes let us clean both sides of second-floor glass from inside, which keeps ladder work (and cost) down. Newer subdivisions toward Union and Burlington often add tall foyer windows and transoms above the front door that need a pole or ladder.",
      challenges:
        "Florence sits right on the I-75/I-71 corridor, and homes near the interstate or busy roads like Burlington Pike pick up a grey road film that regular rain won't rinse off. Irrigation systems in newer neighborhoods are the other big one: sprinkler heads that hit the glass leave white mineral spots that get harder to remove every month. We'll point out any sprinkler heads that need adjusting so the problem doesn't come back.",
      areas: ["Mall Road & Florence Mall area", "US-42 / Dixie Highway corridor", "Burlington Pike (KY-18)", "Houston Road", "Subdivisions toward Union", "Ewing Boulevard"],
      faqs: [
        {
          question: "Do you clean storefront windows in Florence?",
          answer:
            "Yes. Retail and restaurant glass along Mall Road, Houston Road, and US-42 can go on a weekly or every-other-week route, usually first thing in the morning before opening.",
        },
        {
          question: "My Florence home has white spots on the windows by the sprinklers. Can those come off?",
          answer:
            "Usually, yes. Fresh mineral spotting comes off with a hard-water treatment during a normal cleaning. Spots that have been baking on for years may have lightly etched the glass, which we'll tell you before we start. Our hard water stain guide explains the difference.",
        },
      ],
    },
    {
      name: "Covington, KY",
      slug: "covington-ky",
      county: "Kenton County",
      lat: "39.0836",
      lng: "-84.5085",
      intro:
        "Covington has more historic homes than anywhere else in Northern Kentucky, and its windows are different from suburban windows. Tall, narrow sashes, transoms over doors, original wavy glass, and storm windows layered over the top — cleaning them right takes more care and more time than a typical vinyl window.",
      homes:
        "In MainStrasse Village, Licking Riverside, and Old Seminary Square, many homes are 19th-century brick rowhouses and Italianates with eight- to ten-foot double-hung windows. A lot of them still have original wood sashes that don't tilt in, so second-floor exterior glass has to be cleaned from a ladder or water-fed pole. Storm windows are common and need to be cleaned on both sides along with the prime window behind them. Latonia and the south side have more early-1900s frame houses and mid-century homes with standard-size windows.",
      challenges:
        "Close to the river and the Brent Spence Bridge traffic, Covington windows collect a mix of humidity film and traffic grime that turns hazy fast. Old glass is softer and sometimes already scratched, so we don't use razor blades on historic glass unless you ask us to remove something specific like paint. Narrow side yards between rowhouses mean we'll often use a pole from the sidewalk instead of setting a ladder.",
      areas: ["MainStrasse Village", "Licking Riverside", "Old Seminary Square", "Wallace Woods", "Latonia", "Peaselburg", "Downtown & Madison Avenue storefronts", "Devou Park area"],
      faqs: [
        {
          question: "Can you clean original wavy glass in older Covington homes?",
          answer:
            "Yes. Historic glass gets a soft scrubber and squeegee only — no blades or abrasive pads — because old glass scratches more easily than modern float glass.",
        },
        {
          question: "Do you clean storm windows too?",
          answer:
            "Yes. Exterior storm windows are cleaned on both sides, and where they open, we clean the prime window behind them as well. Expect storm-window homes to take a bit longer than a standard quote.",
        },
      ],
    },
    {
      name: "Fort Thomas, KY",
      slug: "fort-thomas-ky",
      county: "Campbell County",
      lat: "39.0758",
      lng: "-84.4480",
      intro:
        "Fort Thomas homes are built for the view — the river valley, the Cincinnati skyline, the tree line along the bluffs — and dirty glass wastes it. Window cleaning here is mostly older, larger homes on hilly lots, with a lot of glass facing the river.",
      homes:
        "Many homes near Tower Park and along Fort Thomas Avenue and Highland Avenue date to the early 1900s through the 1950s: Tudors, Colonials, and foursquares with divided-light windows that have a dozen or more small panes per sash. Divided-light windows take longer to clean than a single big pane, so they're priced by pane count. Newer additions and remodels often add large picture windows or walls of glass on the view side.",
      challenges:
        "Fort Thomas has some of the most mature tree canopy in NKY, which means spring pollen, summer sap, and fall leaf debris clogging tracks and screens. Steep lots and retaining walls make ladder placement tricky on the downhill side of a house, so we use water-fed poles where we can. River-facing glass on the bluffs also catches more wind-driven rain spotting than the street side.",
      areas: ["Tower Park area", "Fort Thomas Avenue", "Highland Avenue", "North Fort Thomas", "South Fort Thomas", "Homes along the river bluffs"],
      faqs: [
        {
          question: "How do you price divided-light (multi-pane) windows?",
          answer:
            "By pane count rather than by window, since a sash with 12 small panes takes far longer than a single sheet of glass. Snap-in grilles are removed and cleaned separately, which is faster and cheaper than true divided lights.",
        },
        {
          question: "My house is on a steep lot. Is that a problem?",
          answer:
            "Not usually. On the downhill side we'll use a water-fed pole from the ground instead of setting a tall ladder on a slope. We'll ask about access when you call so the quote is accurate.",
        },
      ],
    },
    {
      name: "Newport, KY",
      slug: "newport-ky",
      county: "Campbell County",
      lat: "39.0915",
      lng: "-84.4954",
      intro:
        "Newport mixes some of Kentucky's best-preserved Victorian homes with a busy commercial riverfront. That means two very different kinds of window cleaning: careful work on old bay windows and stained-glass transoms in the East Row, and fast, regular storefront routes on Monmouth Street and around Newport on the Levee.",
      homes:
        "The East Row Historic District is one of the largest historic districts in Kentucky, with roughly a thousand homes — Italianate and Queen Anne rowhouses with tall windows, three-sided bays, and decorative transoms. Bay windows have angled side panes that are awkward to reach, and leaded or stained-glass panels need gentle cleaning without ammonia or blades. Outside the historic district, Newport has a lot of rental duplexes and newer condos along the river.",
      challenges:
        "Riverfront humidity and traffic on the Taylor-Southgate Bridge and I-471 leave a grey film on Newport glass. Storefronts take the most abuse: fingerprints, sidewalk splash, and street dust mean most businesses here want weekly or every-other-week service. For landlords, move-out cleanings between tenants are a common request.",
      areas: ["East Row Historic District", "Monmouth Street storefronts", "Newport on the Levee area", "Mansion Hill", "Clifton", "Riverfront condos"],
      faqs: [
        {
          question: "Can you clean stained or leaded glass?",
          answer:
            "Yes, by hand with a mild, ammonia-free solution and soft cloths. We don't squeegee or scrape leaded panels because the lead came is soft. If any panels are loose or cracked, we'll point them out before cleaning.",
        },
        {
          question: "Do you do move-out window cleaning for rentals?",
          answer:
            "Yes. Landlords and property managers in Newport often book interior and exterior cleaning between tenants. Call with the address and unit count for a quote.",
        },
      ],
    },
    {
      name: "Fort Mitchell, KY",
      slug: "fort-mitchell-ky",
      county: "Kenton County",
      lat: "39.0458",
      lng: "-84.5533",
      intro:
        "Fort Mitchell is a small, established city along Dixie Highway, and its homes tend to have more character — and more windows — than a typical suburb. Most window cleaning jobs here are full inside-and-outside cleanings on brick homes that families have owned for a long time.",
      homes:
        "A lot of Fort Mitchell's housing went up from the 1920s through the 1950s: brick Colonials, Cape Cods, and Tudors on tree-lined side streets off Dixie Highway. Expect divided-light windows, dormers on Cape Cods that are hard to reach from inside, sunrooms with lots of glass, and storm windows on many older homes. Plenty of homes have had window replacements over the years, so it's common to find original wood windows and modern vinyl ones on the same house.",
      challenges:
        "Big oaks and maples mean pollen and sap on glass in spring and leaf grit packed into tracks in the fall. Cape Cod dormers and sunroom roofs usually need a ladder or pole from outside. Homes along Dixie Highway pick up road film faster than those on the quieter side streets.",
      areas: ["Dixie Highway (US-25) corridor", "Side streets off Dixie Highway", "Areas near Beechwood schools", "Homes near the Fort Mitchell Country Club"],
      faqs: [
        {
          question: "Can you clean dormer windows on a Cape Cod?",
          answer:
            "Yes. Dormer glass is usually cleaned from outside with a ladder or water-fed pole, since the inside is often tucked behind knee walls. Let us know about dormers when you call so they're in the quote.",
        },
        {
          question: "Do you clean sunrooms?",
          answer:
            "Yes, inside and out. Sunrooms are glass-heavy, so they're quoted by pane count. Sloped or roof glass is quoted separately because it needs different equipment.",
        },
      ],
    },
    {
      name: "Erlanger, KY",
      slug: "erlanger-ky",
      county: "Kenton County",
      lat: "39.0169",
      lng: "-84.6027",
      intro:
        "Erlanger sits between the I-71/75 corridor and the airport, with a mix of mid-century neighborhoods and a long commercial strip on Dixie Highway. Most residential jobs here are straightforward one- and two-story homes, which makes Erlanger one of the more affordable places in NKY to get windows cleaned.",
      homes:
        "Much of Erlanger was built in the 1950s through the 1970s: brick ranches, split-levels, and two-story homes off Commonwealth Avenue and the side streets off Dixie Highway. Ranches are easy — almost every window can be cleaned from the ground. Split-levels have a few upper windows over the garage or lower level that need a short ladder. Many homes have replacement vinyl windows with tilt-in sashes.",
      challenges:
        "Being close to the interstate, the airport, and Dixie Highway traffic means a fine grey film builds up on glass faster than in quieter areas, especially on the side of the house facing the road. Screens and tracks tend to collect the same grime, so we recommend including them every time. Businesses along Dixie Highway and Commonwealth Avenue usually want monthly or more frequent storefront service.",
      areas: ["Commonwealth Avenue", "Dixie Highway (US-25) businesses", "Neighborhoods near Erlanger city parks", "Areas near Erlanger-Elsmere schools", "Homes near the I-71/75 corridor"],
      faqs: [
        {
          question: "How much does it cost to clean windows on a ranch home in Erlanger?",
          answer:
            "Single-story ranches are the least expensive homes to clean because nothing needs a ladder. Inside and outside with screens on a typical Erlanger ranch usually falls at the lower end of our $150–$350 range. Call for an exact number.",
        },
        {
          question: "Do you clean office and storefront windows in Erlanger?",
          answer:
            "Yes. Businesses along Dixie Highway and Commonwealth Avenue can be set up on a recurring schedule, typically before business hours.",
        },
      ],
    },
    {
      name: "Edgewood, KY",
      slug: "edgewood-ky",
      county: "Kenton County",
      lat: "39.0142",
      lng: "-84.5779",
      intro:
        "Edgewood is a quiet residential city in Kenton County, best known for St. Elizabeth Edgewood hospital and Presidents Park. It's mostly single-family homes on generous lots, and window cleaning here is almost all residential: big two-story homes with lots of glass at the back of the house.",
      homes:
        "Edgewood's neighborhoods mostly date from the 1970s through the 1990s: two-story Colonials and split-levels off Dudley Road and Turkeyfoot Road, many on larger wooded lots. These homes usually have large picture windows in the family room, sliding or French patio doors, and a lot of glass facing the back yard. Some newer homes have two-story great rooms with tall interior windows that need a ladder inside.",
      challenges:
        "Wooded lots mean pollen, sap, and bird droppings on exterior glass and screens packed with debris. Back-facing windows over decks and patios often get spotted by sprinklers or hose spray. Patio door tracks collect a lot of grit and are worth having cleaned with the glass.",
      areas: ["Dudley Road", "Turkeyfoot Road", "Neighborhoods around Presidents Park", "Area near St. Elizabeth Edgewood", "Homes along the Crestview Hills border"],
      faqs: [
        {
          question: "Can you clean the tall windows in a two-story great room?",
          answer:
            "Yes. The outside is cleaned with a water-fed pole or ladder, and the inside needs a ladder set carefully on your floor with protective pads. Tall interior glass is quoted separately because it takes more time.",
        },
        {
          question: "Do you clean sliding door tracks?",
          answer:
            "Yes. Patio door tracks are vacuumed and wiped as part of a full cleaning. Clean tracks also make heavy sliders noticeably easier to open.",
        },
      ],
    },
    {
      name: "Independence, KY",
      slug: "independence-ky",
      county: "Kenton County",
      lat: "38.9431",
      lng: "-84.5431",
      intro:
        "Independence is one of the fastest-growing cities in Northern Kentucky, and a lot of the window cleaning here is for newer homes — including first cleanings right after construction. New subdivisions along Madison Pike (KY-17) and Taylor Mill Road (KY-16) keep adding homes every year.",
      homes:
        "Most Independence homes were built in the last 25 years: two-story vinyl-sided homes with tilt-in double-hung windows, two-story foyers, and great rooms with a wall of windows facing the back yard. Tilt-ins make second-floor exterior glass easy to clean from inside. The foyer and great-room windows are the ones that need a ladder or pole.",
      challenges:
        "New construction leaves a lot behind on glass: manufacturer stickers, protective film adhesive, drywall dust, paint overspray, and mortar or siding debris. Builder 'final cleans' usually don't remove these, and scraping them off wrong scratches new glass. Open lots in newer subdivisions also get more wind-blown dust and construction dirt from homes still being built nearby.",
      areas: ["Madison Pike (KY-17) corridor", "Taylor Mill Road (KY-16) corridor", "Newer subdivisions off Richardson Road", "Areas near Summit View", "Downtown Independence"],
      faqs: [
        {
          question: "Do you do post-construction window cleaning in Independence?",
          answer:
            "Yes. A post-construction cleaning removes stickers, film adhesive, paint specks, and drywall dust from inside and outside glass, frames, and tracks. It takes longer than a maintenance cleaning and is quoted separately. See our post-construction guide for what's involved.",
        },
        {
          question: "Will scraping stickers off my new windows scratch them?",
          answer:
            "It can. New tempered glass sometimes has tiny bits of debris fused to the surface during manufacturing, and a razor blade can drag them across the glass. We test a corner first and use adhesive remover instead of a blade where possible.",
        },
      ],
    },
  ] as City[],
};
