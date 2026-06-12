/**
 * siteConfig.ts — Central configuration for the site.
 *
 * To clone this template for a new niche site, ONLY edit this file
 * (and swap photos in /public/photos/). Everything else is generic.
 */

export interface Service {
  title: string;
  slug: string;
  description: string;
  photo: string;
}

export interface City {
  name: string;
  slug: string;
  lat: string;
  lng: string;
  intro: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  city: string;
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
  heroTagline: "Northern Kentucky's Trusted Window Cleaning Service",
  heroSubtext: "Streak-free results for homes and businesses. Call us for a free estimate.",
  heroAlt: "Professional window cleaning technician at work",

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
        "We clean windows on houses of all sizes across Northern Kentucky. Inside and out — we get rid of dirt, hard water spots, fingerprints, and buildup. Your home windows will look brand new after we're done. We clean windows in Florence, Covington, Fort Mitchell, and all across NKY.",
      photo: "/photos/residential.jpg",
    },
    {
      title: "Commercial Window Cleaning",
      slug: "commercial",
      description:
        "Own a business in Northern Kentucky? We clean windows on storefronts, offices, restaurants, and commercial buildings. Clean windows make your business look professional and inviting. We work around your schedule so we don't interrupt your business day.",
      photo: "/photos/commercial.jpg",
    },
    {
      title: "Screen & Track Cleaning",
      slug: "screen-track",
      description:
        "We don't just clean the glass. We also wash your window screens and vacuum out the tracks. Dirty screens and clogged tracks make your windows look bad even when the glass is clean. We take care of everything so your windows look their best.",
      photo: "/photos/screen-cleaning.jpg",
    },
  ] as Service[],

  // ── FAQs ──────────────────────────────────────────────────────────
  faqs: [
    {
      question: "How much does window cleaning cost in Northern Kentucky?",
      answer:
        "It depends on how many windows you have and whether you want inside and outside cleaned. Most homes cost between $100 and $250. Give us a call at (859) 900-8044 and we'll give you a free estimate over the phone. No pressure, no obligation.",
    },
    {
      question: "How often should I get my windows cleaned?",
      answer:
        "Most homeowners in Northern Kentucky get their windows cleaned twice a year — once in spring and once in fall. If you live near trees or a busy road, you might want quarterly cleanings. We clean windows year-round.",
    },
    {
      question: "Do you clean windows in the winter?",
      answer:
        "Yes! We clean windows all year long in Northern Kentucky. As long as it's above freezing and safe, we can get the job done. Winter window cleaning is actually great because it helps bring in more light during the shorter days.",
    },
    {
      question: "How long does it take to clean my windows?",
      answer:
        "For a typical home with 15 to 25 windows, we're usually done in 1 to 2 hours. Bigger homes with hard-to-reach windows might take a bit longer. We work fast but we never cut corners.",
    },
    {
      question: "Do I need to be home for the cleaning?",
      answer:
        "If you only want the outside of your windows cleaned, you don't need to be home as long as we can get to the windows from outside. For inside cleaning, someone needs to let us in. We'll work around your schedule.",
    },
    {
      question: "What do you use to clean windows?",
      answer:
        "We use professional-grade cleaning solutions and a purified water system. The purified water leaves zero residue on your glass, which means your windows stay cleaner longer than with regular soap and water. Our solutions are safe for your family, pets, and plants.",
    },
    {
      question: "Can you clean windows on two-story homes?",
      answer:
        "Yes! We clean windows on homes up to three stories high. We use extension poles, ladders, and professional safety equipment to reach any window safely.",
    },
    {
      question: "How do I schedule an appointment?",
      answer:
        "Just call us at (859) 900-8044. We answer the phone and can usually schedule your window cleaning within a few days. We serve Florence, Covington, Fort Mitchell, Erlanger, and all of Northern Kentucky.",
    },
  ] as FAQ[],

  // ── Cities served ─────────────────────────────────────────────────
  cities: [
    {
      name: "Florence, KY",
      slug: "florence-ky",
      lat: "38.9989",
      lng: "-84.6266",
      intro:
        "Florence homeowners and businesses trust NKY Window Cleaning Pros for reliable, streak-free window cleaning year-round. Whether you live near the Florence Mall area or in one of the quiet residential neighborhoods off US-42, our team brings professional-grade equipment and eco-friendly solutions right to your door. We understand the local climate — from humid summers that attract grime to winter storms that leave hard-water spots — and we tailor our cleaning process to handle whatever Northern Kentucky weather throws at your glass. Florence's mix of older homes and new construction means we've seen every type of window, and we know how to treat each one with care.",
    },
    {
      name: "Covington, KY",
      slug: "covington-ky",
      lat: "39.0836",
      lng: "-84.5085",
      intro:
        "Covington's historic neighborhoods and riverfront properties demand a window cleaning service that respects both the architecture and the views. NKY Window Cleaning Pros has been serving Covington residents and businesses for years, from the charming Victorian homes of Licking Riverside to the commercial spaces along Madison Avenue. Our team is experienced with the unique challenges Covington properties present — older window frames, multi-story buildings near the Roebling Bridge, and the mineral deposits that come with proximity to the Ohio River. We take pride in keeping Covington's windows crystal clear so you can enjoy those stunning Cincinnati skyline views without obstruction.",
    },
    {
      name: "Fort Mitchell, KY",
      slug: "fort-mitchell-ky",
      lat: "39.0458",
      lng: "-84.5533",
      intro:
        "Fort Mitchell is one of Northern Kentucky's most desirable communities, and homeowners here expect a higher standard of service. NKY Window Cleaning Pros delivers exactly that. We specialize in the kind of meticulous, detail-oriented window cleaning that Fort Mitchell properties deserve — from the stately homes along Dixie Highway to the well-maintained colonials in the residential side streets. Our technicians are background-checked, fully insured, and trained to treat your home with the same respect they'd treat their own. Fort Mitchell residents choose us because we show up on time, do the job right, and leave every window spotless.",
    },
    {
      name: "Erlanger, KY",
      slug: "erlanger-ky",
      lat: "39.0169",
      lng: "-84.6027",
      intro:
        "Erlanger residents know that clean windows make a real difference in how a home looks and feels. NKY Window Cleaning Pros is proud to serve this thriving community with professional window cleaning that's thorough, affordable, and reliable. Whether you're in a ranch-style home near the Erlanger city park or a two-story house off Stevenson Road, we have the tools and expertise to handle windows at any height. We also serve Erlanger's growing commercial corridor, keeping storefronts and offices looking their best. Our flexible scheduling means we work around your life, not the other way around.",
    },
    {
      name: "Independence, KY",
      slug: "independence-ky",
      lat: "38.9431",
      lng: "-84.5431",
      intro:
        "As one of the fastest-growing cities in Kenton County, Independence has seen a surge of new homes and businesses — and NKY Window Cleaning Pros is here to keep every one of them looking sharp. From the newer subdivisions near Taylor Mill Road to the established neighborhoods closer to downtown Independence, we provide window cleaning services that Northern Kentucky homeowners count on. We know that Independence properties often sit on larger lots with mature trees, which means more pollen, sap, and debris on your glass. Our deep-cleaning process removes it all, leaving your windows so clear you'll forget there's glass there.",
    },
    {
      name: "Newport, KY",
      slug: "newport-ky",
      lat: "39.0915",
      lng: "-84.4954",
      intro:
        "Newport has transformed into one of the region's most vibrant communities, and NKY Window Cleaning Pros is proud to help keep it looking its best. From the Newport on the Levee district to the residential streets of Clifton and Southgate, we provide expert window cleaning for homes and businesses throughout the city. Newport's position along the Ohio River means windows here face unique challenges — humidity, mineral buildup, and the residue that comes with waterfront living. Our team uses specialized techniques to combat these issues, ensuring your windows stay cleaner longer. Whether you're a homeowner or a business owner, we'll make your property shine.",
    },
    {
      name: "Edgewood, KY",
      slug: "edgewood-ky",
      lat: "39.0142",
      lng: "-84.5779",
      intro:
        "Edgewood's tree-lined streets and well-kept homes make it one of Kenton County's most charming communities — and NKY Window Cleaning Pros helps keep it that way. We've served Edgewood homeowners for years, providing the kind of careful, professional window cleaning that this neighborhood's beautiful properties demand. From the homes along Turkeyfoot Road to the quiet cul-de-sacs throughout the city, we know how to navigate Edgewood's varied architecture and deliver consistently excellent results. Our team respects your landscaping, protects your property, and always leaves your home looking better than we found it.",
    },
    {
      name: "Fort Thomas, KY",
      slug: "fort-thomas-ky",
      lat: "39.0758",
      lng: "-84.4480",
      intro:
        "Fort Thomas is known for its stunning hilltop views, historic homes, and tree-canopied streets — but all that beauty means your windows need extra attention. NKY Window Cleaning Pros is Fort Thomas's go-to service for professional window cleaning that preserves your home's character while maximizing natural light. We're experienced with the unique challenges Fort Thomas presents: steep driveways, multi-level homes built into hillsides, and mature hardwoods that drop leaves, pollen, and sap throughout the year. Our team handles it all with skill and care, ensuring every window in your Fort Thomas home is spotless.",
    },
    {
      name: "Bellevue, KY",
      slug: "bellevue-ky",
      lat: "39.1042",
      lng: "-84.4762",
      intro:
        "Bellevue's revitalized Fairfield Avenue corridor and charming hillside homes make it a standout community in Northern Kentucky. NKY Window Cleaning Pros is honored to serve Bellevue residents and business owners with top-quality window cleaning services. We understand the mix of historic and modern properties that define Bellevue, and we approach each job with the care and attention your home or storefront deserves. From the panoramic views along the river hills to the cozy bungalows in the side streets, we bring the same level of professionalism to every appointment. Bellevue is a community that takes pride in its appearance, and we're here to help.",
    },
    {
      name: "Cold Spring, KY",
      slug: "cold-spring-ky",
      lat: "39.0114",
      lng: "-84.4369",
      intro:
        "Cold Spring's rolling hills and spacious properties make it a beautiful place to live — but they also mean your windows face constant exposure to the elements. NKY Window Cleaning Pros provides Cold Spring homeowners with thorough, professional window cleaning that removes dirt, hard-water stains, and seasonal buildup. Whether your home overlooks Alexandria Pike or sits in one of Cold Spring's peaceful residential developments, we'll make sure your windows let in maximum light and maximum views. We use purified water systems that leave zero residue, so your windows stay cleaner for longer after every visit.",
    },
    {
      name: "Taylor Mill, KY",
      slug: "taylor-mill-ky",
      lat: "39.0003",
      lng: "-84.5013",
      intro:
        "Taylor Mill has grown into a thriving community, and NKY Window Cleaning Pros is proud to serve the homes and businesses that make this city special. From the established neighborhoods along Taylor Mill Road to the newer developments spreading across the city, we provide window cleaning that Taylor Mill residents trust. Our team understands the local environment — the clay soil dust, the seasonal pollen from surrounding woodlands, and the way Northern Kentucky's changing seasons affect your windows throughout the year. We tailor our approach to each property, ensuring the best possible results every single time.",
    },
    {
      name: "Villa Hills, KY",
      slug: "villa-hills-ky",
      lat: "39.0625",
      lng: "-84.5916",
      intro:
        "Villa Hills is one of Northern Kentucky's premier residential communities, and the homes here deserve nothing less than the best. NKY Window Cleaning Pros delivers premium window cleaning services that match Villa Hills' high standards. The city's elevated terrain and river-adjacent location mean your windows face unique challenges — morning fog, afternoon sun, and the mineral deposits that come with proximity to the Ohio River floodplain. Our team is equipped to handle all of it, using professional-grade tools and techniques that leave your windows truly spotless. Villa Hills homeowners trust us because we never cut corners.",
    },
    {
      name: "Crescent Springs, KY",
      slug: "crescent-springs-ky",
      lat: "39.0544",
      lng: "-84.5829",
      intro:
        "Crescent Springs residents appreciate quality, and NKY Window Cleaning Pros delivers it with every visit. We've been serving this close-knit community with professional window cleaning that homeowners and businesses rely on. Whether your property is along Buttermilk Pike or in one of Crescent Springs' well-maintained neighborhoods, we bring the same commitment to excellence. Our team handles everything from standard residential window cleaning to more complex jobs involving hard-to-reach windows, skylights, and storm windows. We work efficiently, respect your time, and always deliver results that exceed expectations.",
    },
    {
      name: "Lakeside Park, KY",
      slug: "lakeside-park-ky",
      lat: "39.0331",
      lng: "-84.5711",
      intro:
        "Lakeside Park may be one of Northern Kentucky's smaller cities, but its residents expect — and deserve — top-tier service. NKY Window Cleaning Pros is proud to serve Lakeside Park with professional window cleaning that keeps homes looking pristine. The tree-lined streets and well-maintained properties that define Lakeside Park require a careful touch, and our technicians deliver exactly that. We protect your landscaping, work neatly, and leave every window sparkling clean. From routine maintenance cleanings to post-construction window cleanup, Lakeside Park homeowners know they can count on us.",
    },
    {
      name: "Park Hills, KY",
      slug: "park-hills-ky",
      lat: "39.0667",
      lng: "-84.5285",
      intro:
        "Park Hills' hilltop location offers some of the best views in Northern Kentucky — but it also means your windows face the full force of the elements. NKY Window Cleaning Pros provides Park Hills homeowners with expert window cleaning that keeps those views crystal clear. We're experienced with the steep terrain, multi-story homes, and unique architectural features that Park Hills properties are known for. Our team uses safety equipment and proven techniques to access even the most challenging windows, delivering the same streak-free results whether your home overlooks Devou Park or the Cincinnati skyline beyond.",
    },
    // ── Cincinnati-area cities ────────────────────────────────────────
    {
      name: "Walnut Hills, OH",
      slug: "walnut-hills-oh",
      lat: "39.1212",
      lng: "-84.4872",
      intro:
        "Walnut Hills is one of Cincinnati's most historic and diverse neighborhoods, and it's just minutes from Northern Kentucky across the river. NKY Window Cleaning Pros is proud to extend our window cleaning services to Walnut Hills homeowners and businesses. From the stately homes along Gilbert Avenue to the revitalized commercial district near Peeble's Corner, we bring the same professional-grade window cleaning that NKY residents trust. Walnut Hills' mix of historic Victorian homes, modern apartments, and commercial properties means we see every type of window — and we know how to clean each one to perfection.",
    },
    {
      name: "Hyde Park, OH",
      slug: "hyde-park-oh",
      lat: "39.1373",
      lng: "-84.4463",
      intro:
        "Hyde Park is one of Cincinnati's most desirable neighborhoods, known for its beautiful homes, tree-lined streets, and vibrant town square. NKY Window Cleaning Pros brings our professional window cleaning expertise right across the river to serve Hyde Park residents. Whether you own a historic craftsman near the square or a stately home in the surrounding hills, we understand the high standards Hyde Park homeowners expect. Our team delivers streak-free, spotless windows every time — because a neighborhood this nice deserves windows to match.",
    },
    {
      name: "Norwood, OH",
      slug: "norwood-oh",
      lat: "39.1556",
      lng: "-84.4597",
      intro:
        "Norwood is a thriving independent city surrounded by Cincinnati, just a short drive from Northern Kentucky. NKY Window Cleaning Pros is happy to serve Norwood's dense residential neighborhoods and growing commercial district with reliable, affordable window cleaning. Norwood's mix of older homes, duplexes, and storefronts means windows here face everything from decades of paint buildup to hard-water stains from aging plumbing. Our team handles it all with professional equipment and techniques, leaving every window in Norwood crystal clear.",
    },
    {
      name: "Montgomery, OH",
      slug: "montgomery-oh",
      lat: "39.2289",
      lng: "-84.3541",
      intro:
        "Montgomery's tree-canopied streets and stately homes make it one of the Cincinnati area's premier residential communities. NKY Window Cleaning Pros extends our premium window cleaning services to Montgomery homeowners who expect nothing but the best. The large lots, mature landscaping, and multi-story homes throughout Montgomery require a careful, experienced approach — and our team delivers exactly that. From historic properties near the downtown village center to sprawling estates on the outskirts, we bring the same meticulous attention to detail that has made us Northern Kentucky's most trusted window cleaning service.",
    },
    {
      name: "Deer Park, OH",
      slug: "deer-park-oh",
      lat: "39.2053",
      lng: "-84.3922",
      intro:
        "Deer Park is a welcoming, family-friendly community just north of Cincinnati, and NKY Window Cleaning Pros is proud to bring our window cleaning services to this great neighborhood. From the well-kept ranch homes along Blue Ash Road to the two-story colonials in the residential side streets, Deer Park homes deserve windows that let in maximum natural light. We offer flexible scheduling, fair pricing, and the kind of dependable service that Deer Park homeowners appreciate. Clean windows make a real difference in how your home looks and feels — and we deliver every time.",
    },
    {
      name: "Amberly, OH",
      slug: "amberly-oh",
      lat: "39.1987",
      lng: "-84.4281",
      intro:
        "Amberley Village is one of the Cincinnati area's most exclusive residential communities, with large estates and beautifully maintained properties. NKY Window Cleaning Pros provides the premium window cleaning service that Amberley homes demand. The spacious lots, mature trees, and high-end finishes throughout this community require a professional touch — and our fully insured, background-checked technicians deliver exactly that. We protect your property, respect your privacy, and leave every window spotless. Amberley homeowners choose us because we treat every home like it's our own.",
    },
    {
      name: "Westwood, OH",
      slug: "westwood-oh",
      lat: "39.1531",
      lng: "-84.6164",
      intro:
        "Westwood is one of Cincinnati's largest and most established neighborhoods, with a strong sense of community and a wide range of homes and businesses. NKY Window Cleaning Pros is excited to serve Westwood with the same reliable window cleaning that Northern Kentucky residents have come to trust. From the charming Victorians along Harrison Avenue to the mid-century homes throughout the neighborhood, we've cleaned every type of window Westwood has to offer. Our team works efficiently, respects your property, and always delivers streak-free results.",
    },
    {
      name: "Fort Heights, OH",
      slug: "fort-heights-oh",
      lat: "39.0947",
      lng: "-84.5256",
      intro:
        "Fort Wright and the Fort Mitchell Heights area sit just across the river from Northern Kentucky, making them a natural extension of our service area. NKY Window Cleaning Pros brings our professional window cleaning expertise to Fort Heights homeowners who want the same quality service their NKY neighbors enjoy. The elevated terrain here means stunning views — but it also means your windows face wind, rain, and the elements head-on. Our deep-cleaning process removes all buildup and leaves your windows so clear you'll feel like the glass isn't there.",
    },
    {
      name: "Mt. Adams, OH",
      slug: "mt-adams-oh",
      lat: "39.1089",
      lng: "-84.4981",
      intro:
        "Mt. Adams is one of Cincinnati's most iconic hilltop neighborhoods, with stunning skyline views, steep streets, and a mix of historic and modern properties. NKY Window Cleaning Pros brings expert window cleaning to Mt. Adams homeowners and businesses who want to keep those incredible views crystal clear. The hillside homes and unique architecture in Mt. Adams require careful access and professional techniques — our team has the ladders, poles, and safety equipment to reach any window safely. Whether you're in a renovated Victorian or a modern condo, we'll make your windows shine.",
    },
    {
      name: "Mt. Lookout, OH",
      slug: "mt-lookout-oh",
      lat: "39.1283",
      lng: "-84.4317",
      intro:
        "Mt. Lookout is a charming, walkable neighborhood on Cincinnati's east side, just across the river from Northern Kentucky. NKY Window Cleaning Pros serves Mt. Lookout homeowners with professional window cleaning that keeps homes looking their best. The neighborhood's mix of older bungalows, updated colonials, and new construction means we've seen every window type Mt. Lookout has to offer. We use purified water systems that leave zero residue, so your windows stay cleaner longer — perfect for homes along the tree-lined streets of this beloved Cincinnati neighborhood.",
    },
    {
      name: "Oakley, OH",
      slug: "oakley-oh",
      lat: "39.1536",
      lng: "-84.4228",
      intro:
        "Oakley is one of Cincinnati's fastest-growing neighborhoods, with a thriving business district, new developments, and a strong sense of community. NKY Window Cleaning Pros is proud to serve Oakley's homes and businesses with professional window cleaning that matches the neighborhood's upward trajectory. From the homes around Oakley Square to the new builds throughout the area, we provide window cleaning that's thorough, affordable, and reliable. Whether you're a homeowner wanting curb appeal or a business owner keeping your storefront inviting, we've got you covered.",
    },
    {
      name: "Columbia-Tusculum, OH",
      slug: "columbia-tusculum-oh",
      lat: "39.1128",
      lng: "-84.4136",
      intro:
        "Columbia-Tusculum is Cincinnati's oldest neighborhood, nestled along the Ohio River on the city's east side. NKY Window Cleaning Pros brings our professional window cleaning services to this historic riverfront community, where homes range from restored 19th-century cottages to modern river-view condos. The Ohio River proximity means windows here face humidity, mineral deposits, and river residue — our specialized cleaning process tackles all of it. Whether your home overlooks the river or sits tucked into the hillside, we'll make every window spotless.",
    },
    {
      name: "Pleasant Ridge, OH",
      slug: "pleasant-ridge-oh",
      lat: "39.1842",
      lng: "-84.4403",
      intro:
        "Pleasant Ridge is a vibrant, family-friendly neighborhood on Cincinnati's north side, known for its well-kept homes and strong community spirit. NKY Window Cleaning Pros is happy to extend our window cleaning services to Pleasant Ridge residents who want clean, streak-free windows without the hassle. The neighborhood's diverse housing stock — from classic foursquares to updated ranches — means we adapt our approach to each property. Our team is fast, friendly, and thorough, leaving your home looking its best every single time.",
    },
  ] as City[],

  // ── Testimonials ──────────────────────────────────────────────────
  testimonials: [
    {
      quote:
        "NKY Window Cleaning Pros did an awesome job on our windows. Every window was spotless and they were really careful around our flower beds. We will definitely call them again next time we need our windows cleaned in Florence.",
      name: "Jennifer M.",
      city: "Florence, KY",
    },
    {
      quote:
        "We have a lot of windows and these guys cleaned every one of them in a couple hours. Great window cleaning service. Our house in Covington looks so much better now. Highly recommend.",
      name: "Robert T.",
      city: "Covington, KY",
    },
    {
      quote:
        "Finally found a window cleaning company that actually shows up when they say they will. The team was fast, friendly, and my windows have never been this clean. Best window cleaning in Northern Kentucky.",
      name: "Sarah K.",
      city: "Fort Mitchell, KY",
    },
    {
      quote:
        "We get our windows cleaned twice a year with NKY Window Cleaning Pros. They always do a great job and our home in Edgewood looks wonderful every time. Reliable window cleaning company.",
      name: "Karen L.",
      city: "Edgewood, KY",
    },
  ] as Testimonial[],

  // ── Reviews (for reviews page) ────────────────────────────────────
  reviews: [
    {
      name: "Jennifer M.",
      location: "Florence, KY",
      text: "These guys cleaned every window in our house and they all look amazing. We have a two-story home in Florence and they got to every window, no problem. The team was friendly and worked fast. Best window cleaning service we've ever used in Northern Kentucky.",
    },
    {
      name: "Robert T.",
      location: "Covington, KY",
      text: "We have an older home in Covington with some tricky windows. NKY Window Cleaning Pros handled every one of them. No streaks, no spots, just clean windows. They even cleaned our screens and tracks which other companies never do. Very happy with the service.",
    },
    {
      name: "Sarah K.",
      location: "Fort Mitchell, KY",
      text: "I've tried three different window cleaning companies in Northern Kentucky and these guys are by far the best. They showed up on time, worked quickly, and left every window spotless. Our house in Fort Mitchell looks so much better with clean windows.",
    },
    {
      name: "Mike D.",
      location: "Erlanger, KY",
      text: "Hired them to clean the windows at our restaurant in Erlanger. They worked around our business hours so we didn't have to close. Great window cleaning service. Our customers have commented on how much better the place looks. Will be using them regularly.",
    },
    {
      name: "Jennifer P.",
      location: "Independence, KY",
      text: "We just moved into a new home in Independence and the windows were covered in construction dust and stickers. NKY Window Cleaning Pros came out and removed everything without scratching the glass. Our windows look brand new. Highly recommend their window cleaning service.",
    },
    {
      name: "Dave S.",
      location: "Newport, KY",
      text: "Called for window cleaning on our home in Newport. They gave us a fair price over the phone and came out the same week. Every window was cleaned inside and out. They even cleaned the tracks which were really dirty. Great service, great price.",
    },
    {
      name: "Karen L.",
      location: "Edgewood, KY",
      text: "We get our windows cleaned twice a year with NKY Window Cleaning Pros. They always do a great job and our home in Edgewood looks wonderful every time. Reliable window cleaning company in Northern Kentucky that we trust completely.",
    },
    {
      name: "Tom W.",
      location: "Fort Thomas, KY",
      text: "Our Fort Thomas home has a lot of windows and these guys cleaned them all in about two hours. Every single window is streak-free and clear. They were careful with our landscaping and cleaned up after themselves. Best window cleaning in NKY.",
    },
  ] as { name: string; location: string; text: string }[],
};
