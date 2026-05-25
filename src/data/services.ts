export interface Service {
  title: string;
  slug: string;
  description: string;
  photo: string;
}

export const services: Service[] = [
  {
    title: "Residential Window Cleaning",
    slug: "residential",
    description: "We clean windows on houses of all sizes across Northern Kentucky. Inside and out — we get rid of dirt, hard water spots, fingerprints, and buildup. Your home windows will look brand new after we're done. We clean windows in Florence, Covington, Fort Mitchell, and all across NKY.",
    photo: "/photos/residential.jpg"
  },
  {
    title: "Commercial Window Cleaning",
    slug: "commercial",
    description: "Own a business in Northern Kentucky? We clean windows on storefronts, offices, restaurants, and commercial buildings. Clean windows make your business look professional and inviting. We work around your schedule so we don't interrupt your business day.",
    photo: "/photos/commercial.jpg"
  },
  {
    title: "Screen & Track Cleaning",
    slug: "screen-track",
    description: "We don't just clean the glass. We also wash your window screens and vacuum out the tracks. Dirty screens and clogged tracks make your windows look bad even when the glass is clean. We take care of everything so your windows look their best.",
    photo: "/photos/screen-cleaning.jpg"
  }
];

export const faqs = [
  {
    question: "How much does window cleaning cost in Northern Kentucky?",
    answer: "It depends on how many windows you have and whether you want inside and outside cleaned. Most homes cost between $100 and $250. Give us a call at (859) 555-0100 and we'll give you a free estimate over the phone. No pressure, no obligation."
  },
  {
    question: "How often should I get my windows cleaned?",
    answer: "Most homeowners in Northern Kentucky get their windows cleaned twice a year — once in spring and once in fall. If you live near trees or a busy road, you might want quarterly cleanings. We clean windows year-round."
  },
  {
    question: "Do you clean windows in the winter?",
    answer: "Yes! We clean windows all year long in Northern Kentucky. As long as it's above freezing and safe, we can get the job done. Winter window cleaning is actually great because it helps bring in more light during the shorter days."
  },
  {
    question: "How long does it take to clean my windows?",
    answer: "For a typical home with 15 to 25 windows, we're usually done in 1 to 2 hours. Bigger homes with hard-to-reach windows might take a bit longer. We work fast but we never cut corners."
  },
  {
    question: "Do I need to be home for the cleaning?",
    answer: "If you only want the outside of your windows cleaned, you don't need to be home as long as we can get to the windows from outside. For inside cleaning, someone needs to let us in. We'll work around your schedule."
  },
  {
    question: "What do you use to clean windows?",
    answer: "We use professional-grade cleaning solutions and a purified water system. The purified water leaves zero residue on your glass, which means your windows stay cleaner longer than with regular soap and water. Our solutions are safe for your family, pets, and plants."
  },
  {
    question: "Can you clean windows on two-story homes?",
    answer: "Yes! We clean windows on homes up to three stories high. We use extension poles, ladders, and professional safety equipment to reach any window safely."
  },
  {
    question: "How do I schedule an appointment?",
    answer: "Just call us at (859) 555-0100. We answer the phone and can usually schedule your window cleaning within a few days. We serve Florence, Covington, Fort Mitchell, Erlanger, and all of Northern Kentucky."
  }
];
