export interface Service {
  title: string;
  slug: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    title: "Residential Window Cleaning",
    slug: "residential",
    description: "Interior and exterior window cleaning for homes of all sizes. We remove dirt, hard-water stains, and buildup to restore crystal-clear views.",
    icon: "🏠"
  },
  {
    title: "Commercial Window Cleaning",
    slug: "commercial",
    description: "Professional window cleaning for storefronts, offices, and commercial buildings. Keep your business looking polished and inviting.",
    icon: "🏢"
  },
  {
    title: "Screen & Track Cleaning",
    slug: "screen-track",
    description: "We don't just clean the glass — we thoroughly wash screens and vacuum tracks so every component of your windows is spotless.",
    icon: "🪟"
  },
  {
    title: "Post-Construction Cleanup",
    slug: "post-construction",
    description: "New construction or renovation leaves windows covered in paint, stickers, and debris. We safely remove it all without scratching the glass.",
    icon: "🔨"
  }
];

export const faqs = [
  {
    question: "How often should I have my windows cleaned?",
    answer: "Most Northern Kentucky homeowners benefit from professional window cleaning twice a year — once in spring and once in fall. However, if your home is near trees, construction, or a busy road, quarterly cleanings may be ideal to keep your windows looking their best."
  },
  {
    question: "Do you clean windows in winter?",
    answer: "Yes, we clean windows year-round in Northern Kentucky. As long as temperatures are above freezing and conditions are safe, we can get the job done. Winter cleanings are actually a great way to maximize the limited natural light during shorter days."
  },
  {
    question: "How long does a typical window cleaning take?",
    answer: "For an average-sized home with 15 to 25 windows, our team typically completes the job in 1 to 2 hours. Larger homes or properties with hard-to-reach windows may take a bit longer. We always work efficiently without sacrificing quality."
  },
  {
    question: "Do I need to be home during the cleaning?",
    answer: "For exterior-only cleaning, you don't need to be home as long as we have access to the outside of all windows. For interior and exterior cleaning, we do ask that someone be available to let us inside. We'll work around your schedule to find a convenient time."
  },
  {
    question: "What cleaning solutions do you use?",
    answer: "We use professional-grade, eco-friendly cleaning solutions that are safe for your family, pets, and landscaping. Our purified water system leaves zero residue on your glass, which means your windows stay cleaner longer compared to traditional soap-based methods."
  },
  {
    question: "Do you offer any guarantees?",
    answer: "Absolutely. We offer a 100% satisfaction guarantee on every job. If you're not completely happy with the results, we'll come back and re-clean any windows at no extra charge. Your satisfaction is our top priority."
  },
  {
    question: "Can you clean windows on multi-story homes?",
    answer: "Yes, our team is fully equipped and trained to clean windows on homes up to three stories. We use professional-grade extension poles, ladders, and safety equipment to access hard-to-reach windows safely and effectively."
  },
  {
    question: "How do I get a price estimate?",
    answer: "The easiest way to get an estimate is to call us at (859) 555-0100. We can often provide a quote over the phone based on the number and type of windows in your home. For larger or more complex properties, we're happy to schedule a free on-site estimate."
  }
];
