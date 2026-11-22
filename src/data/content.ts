import beanDispensaryImage from "../assets/offerings/regulated/services/bean-dispensary.png";

export type Tag = "Bestseller" | "New" | "Limited" | "Certified" | "Featured" | "Exclusive" | "Seasonal" | "Community Pick";

export interface Offering {
  id: string;
  name: string;
  shortDescription: string;
  description: [string, string, string];
  price: string;
  tag?: Tag;
  ctaLabel: string;
  ingredients?: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  offerings: Offering[];
}

export interface Narrative {
  id: string;
  name: string;
  tagline: string;
  description: string;
  heroSubtext: string;
  accent: string;
  secondary: string;
  feel: string;
  categories: Category[];
} 

const regulated: Narrative = {
  id: "regulated",
  name: "Regulated Future",
  tagline: "",
  description: "A structured marketplace governed by the Finnish Consumer Authority for Nutritive Beverages. Every product, service and event is approved, tracked and accountable. This marketplace imagines a future where coffee has shifted from a habit that Finland's residents take for granted, into a scarce and regulated commodity. Coffee is  treated as something that carries environmental, cultural and economic value, in a world now dealing with the consequences of unchecked and linear economic growth. The narrative highlights inequality, with the wealthy people able to continue enjoying café culture, while others have limited access to coffee. The underground coffee networks reveal resistance to government control and a desire to preserve the rich, third wave coffee culture that looked so promising a few decades ago. Overall, the fiction suggests that in the future, climate pressures may transform everyday pleasures into controlled luxuries, forcing society to rethink consumption.",
  heroSubtext: "Procurement Portal v14.2 ",
  accent: "#c04a2a",
  secondary: "#d4b84a",
  feel: "institutional",
  categories: [
    {
      id: "products",
      name: "Products",
     
      offerings: [
        {
          id: "delicious-alternatives",
          name: "Delicious Alternatives",
          shortDescription: "A coffee alternative so delicious you forget what the original thing tasted like.",
          description: [
            "The blend replicates the mouthfeel, aroma signature, and stimulant profile of pre-collapse arabica at a fraction of the ecological cost.",
            "Available in three approved roast variants: Light, Balanced and Dark",
        
          ],
          price: "€18.50",
          ctaLabel: "Add to Procurement Cart",
          ingredients: [
            "Fermented mycoprotein base (Fusarium venenatum, EU-approved strain MYC-2047)",
            "Chicory root extract (Cichorium intybus, certified organic)",
            "Roasted barley malt (Hordeum vulgare)",
            "Natural arabica aroma compounds (synthetic-identical, ref. AROMA-FI-2049-391)",
            "Stabiliser: sunflower lecithin (E322)",
          ],
        },
        {
          id: "blends",
          name: "Heritage Blends",
          shortDescription: "Take page from the past and give chicory and barley blends a try, curated for that vintage feel.",
          description: [
            "Formulated by a group of experts from the International Coffee Organization, and homegrown in Finland. Delicious flavour profile with reduced caffeine dependency. Shelf-stable for up to 18 months.",
           
          ],
          price: "€24.00",
          ctaLabel: "Check Availability",
        },
      ],
    },
    {
      id: "services",
      name: "Services",
      
      offerings: [
        {
          id: "bean-dispensary",
          name: "The Bean Dispensary",
          shortDescription: "Beans are sold unpackaged in dispensaries run by the Finnish Coffee Roasters Association.",
          description: [
            "The Finnish Coffee Bean Dispensary is a network of 214 certified stores across Finland.",
            "Users authenticate before dispensing. Customers bring their own containers or purchase single-use bio-compostable jars at an additional charge.",
            "Store locations are displayed on the Kahvi 2050 approved vendor map."
          ],
          price: "€3.20 / serving",
          image: beanDispensaryImage,
          ctaLabel: "Find Nearest Terminal",
        },
        {
          id: "kahvi-museo",
          name: "Kahvi Museo",
          shortDescription: "A state-registered heritage experience documenting the pre-Collapse history of coffee cultivation and trade in Finland.",
          description: [
            "Tampere-based Kahvi Museo documents the full lifecycle of coffee culture, from colonial trade routes through the Scandinavian third-wave movement to the present-day regulatory transition period and post-extractivism.",
            "Interactive activities include discovering the origin of beans and learning about coffee addiction through an in-house escape room. Kahvi Museo is a certified cultural heritage service."
          ],
          price: "€12.00 / person",
          ctaLabel: "Book a Visit",
        },
        {
          id: "very-berry",
          name: "Very Berry",
          shortDescription: "Very-berry is Finland’s signature circular economy café with 6 locations in the capital region.",
          description: [
            "Drinks and snacks utilise all parts from the coffee process, from cascara syrups to coffee leaf chips.",
            "Get immersed in the tropical décor and feel like you have been transported to real coffee farm.",
          ],
          price: "€5.80 / serving",
          ctaLabel: "Subscribe to Deliveries",
        },
        {
          id: "finnish-environmental-data-lab",
          name: "Finnish Environmental Data Lab",
          shortDescription: "Finnish Environmental Data Lab (FEDL) designs circular benchmarks for industries and discovers best practices through analysis of big data.",
          description: [
            "While the effects of climate change, raw material availability and pollution are continuously monitored FEDL aims to transition to closed-loop systems through evidence-based research. ",
            "Services include batch origin ledger, carbon offset calculation and certification, waste stream reporting, and automated compliance submissions.",
            "Ledgers are powered by Blobchain 4.0. Visit FEDL’s Website to see all available services. "
          ],
          price: "From €280.00 / month",
          ctaLabel: "Request a Demo",
        },
        {
          id: "post-consumer-nutrients",
          name: "Post Consumer Nutrients",
          shortDescription: "Certified processing service converting spent beverage grounds into approved secondary nutrient products.",
          description: [
            "Post Consumer Nutrients operates Finland's largest licensed grounds-to-nutrients processing facility, converting an estimated 4.2 tonnes of spent beverage material per week into certified horticultural inputs and approved food-grade protein supplements.",
            "The service is available to commercial preparation sites, institutional kitchens, and residential subscribers. Collection is via registered pickup — schedule your slot through the Kahvi 2050 logistics portal. All collected material receives a processing receipt and a certified output statement.",
            "Output products — including nitrogen pellets, biochar substrate, and protein isolate powder — are available for purchase through the Products section. Processing certificates carry the Finnish Circular Economy Marque and are accepted by the national carbon offset registry."
          ],
          price: "€0.80 / kg collected",

          ctaLabel: "Schedule Collection",
        },
      ],
    },
    {
      id: "events",
      name: "Events",
      offerings: [
        {
          id: "ive-bean-underground",
          name: "Bean Underground",
          shortDescription: "When coffee becomes regulated and hard to source, a young, underground movement erupts, hosting parties with smuggled beans and exploring rituals from different parts of the world.",
          description: [
            "*need to figure out where to put this because technically this is illegal :)"
          ],
          price: "€28.00 / person",
          ctaLabel: "Enter the Ballot",
        },
      ],
    },
  ],
};

const techno: Narrative = {
  id: "techno",
  name: "Technosolutionist Future",
  tagline: "",
  description: "The smart marketplace for next-generation beverage innovation. Discover AI-formulated products, precision automation services, and the community powering the fourth-wave coffee revolution.This narrative imagines a future where coffee continues to be central to life, but becomes more intentionally consumed, or rather, “dosed”. Scientific developments move at a rapid pace, inspired by a new era of space exploration, making sophisticated technology accessible to anyone on earth who can afford it. AI is peripheral to these developments, being utilized only for narrow, functional tasks. The presented values of energy conservation, circularity and optimisation, all have fingerprints of a world that is trying to leverage technology to live a comfortable life within planetary boundaries. Technology also acts as a connector in old or new ways, as humans still value social relationships with other humans. In addition to this, technology is also widely used to connect with animals and plants. This technologically managed future comes with trade-offs – unprecedented personal data collection and inevitable adoption by humans who cannot afford to be left behind.",
  heroSubtext: "Powered by Kahvi Intelligence Engine™ — Real-time personalisation active",
  accent: "#66B8AC",
  secondary: "#5f7a6e",
  feel: "sleek",
  categories: [
    {
      id: "products",
      name: "Products",
      offerings: [
        {
          id: "post-consumer-nutrients-2",
          name: "Post Consumer Nutrients 2",
          shortDescription: "Coffee grounds are collected and analysed for their properties, such as oils, nutrients and pigments that can be useful for other industries.",
          description: [
            ""
          ],
          price: "€349.00",
          ctaLabel: "Order Now",
        },
        {
          id: "zero-gravity-coffee",
          name: "Zero Gravity Coffee",
          shortDescription: "A self-brewing coffee mug with vaccuum technology. Invented for space. Now available for everyone.",
          description: [
            ""
          ],
          price: "€38.00 / 12 pods",
          ctaLabel: "Add to Cart",
        },
        {
          id: "dr-device",
          name: "Dr. Device",
          shortDescription: "Your smart watch or health ring has a code that can be scanned to read your health profiles.",
          description: [
            ""
          ],
          price: "€620.00",
          ctaLabel: "Configure Your Device",
        },
        {
          id: "coffee-machine-sleep-tracker",
          name: "Coffee Machine Sleep Tracker",
          shortDescription: "Integrated sleep telemetry module for existing brewing hardware — retrofits in minutes, optimises all day.",
          description: [
            "The Sleep Tracker module bridges your existing brewer and your sleep data, learning the relationship between your consumption timing and your recovery quality. It attaches magnetically to the base of any Kahvi 2050-compatible machine and begins passively learning within 72 hours of installation.",
            "After a 14-day calibration period, the module begins issuing gentle guidance: adjusting your brewer's scheduled morning time, dimming the display after your personal cut-off hour, and sending a notification when consumption within the next window is likely to affect your rest.",
            "Data syncs with the Kahvi Intelligence Engine and can be shared with registered health practitioners via the secure provider portal. The module has a 3-year battery life and is fully field-serviceable."
          ],
          price: "€89.00",
          ctaLabel: "Add to Cart",
        },
      ],
    },
    {
      id: "services",
      name: "Services",
      description: "Technology-forward preparation and experience services. Staffed by algorithms, supervised by humans, and optimised for outcomes.",
      offerings: [
        {
          id: "paradigm-shift-infusions-bar",
          name: "Paradigm Shift Infusions Bar",
          shortDescription: "A smoothie and mocktails bar that offers post-consumer nutrient infusions, including coffee.",
          description: [
            "Walk-ins are welcome during off-peak hours (10:00–12:00, 14:30–16:30). Peak-hour slots require a 15-minute advance reservation through the app."   
            ],
          price: "€9.50–€18.00",
          ctaLabel: "Reserve a Slot",
        },
        {
          id: "hologram-farmer",
          name: "Hologram Farmer",
          shortDescription: "A hologram coffee farmer from sits across the table from you at a café and tells you about their life, their kids, their aspirations and struggles.",
          description: [
          ""
          ],
          price: "€55.00 / session",
          ctaLabel: "Book a Session",
        },
        {
          id: "robot-barista",
          name: "Robot Barista",
          shortDescription: "An AI enabled system at cafés takes orders, makes recommendations, brews espresso shots and orders new coffee when its out. It can tailor the caffeine, acidity and fat content to suit your health profile.",
          description: [
            ""
          ],
          price: "From €480.00 / day",
          ctaLabel: "Get a Quote",
        },
      ],
    },
    {
      id: "community",
      name: "Community",
      description: "A fourth-wave coffee community builds, shares, and solves. Membership unlocks early access, co-creation tools, and collective intelligence.",
      offerings: [
        {
          id: "internood-community",
          name: "Internood Community",
          shortDescription: "A global fourth-wave community of farmers, business owners, technologists and innovators working at the intersection of agriculture, drink innovation and beverage culture.",
          description: [
            "Membership includes: access to the Internood private forum, a monthly digest of pre-publication research, priority tickets to Kahvi 2050 events, and a profile in the community directory. Members regularly collaborate on open-source tooling, share job opportunities, and peer-review each other's technical work.",
            "Applications are reviewed monthly. Applicants are asked to provide a brief professional biography and a short statement of interest. 80% of applications are accepted. Student memberships are available at a reduced rate for registered higher education students."
          ],
          price: "€12.00 / month",
          ctaLabel: "Apply for Membership",
        },
        {
          id: "tech-forests",
          name: "Tech Forests",
          shortDescription: "A forest ecosystem planted by human technologists and managed by mushrooms.",
          description: [
            ""
          ],
          price: "Free — open enrolment",
          ctaLabel: "Join the Programme",
        },
      ],
    },
  ],
};

const crafted: Narrative = {
  id: "crafted",
  name: "Crafted Future",
  tagline: "",
  description: "A cooperative marketplace rooted in Finnish craft. Coffee is highly valued, not just for its functional properties or scarcity, but for its inherent social properties. The moments in which coffee is consumed are elevated, and time feels stretched. While there is no explicit mention of coffee scarcity, the high prices, the dispensary model, and gratefulness to the producers and pollinators alike, points to a world that is slowly recovering from the harshest effects of climate change. There is no way forward but to create post-extractive systems with space built-in for reflection.",
  heroSubtext: "Collectively owned and collectively elevated",
  accent: "#D4B84A",
  secondary: "#5f7a6e",
  feel: "warm",
  categories: [
    {
      id: "services",
      name: "Services",
      description: "",
      offerings: [
        {
          id: "bean-dispensary-2",
          name: "The Bean Dispensary",
          shortDescription: "Beans are sold unpackaged in dispensaries run by the Finnish Coffee Roasters Association. The Finnish Coffee Bean Dispensary is a network of 214 certified stores across Finland.",
          description: [
            "Customers bring their own containers or purchase single-use bio-compostable jars at an additional charge.",
            "Store locations are displayed on the Kahvi 2050 approved vendor map",
            "Members of the cooperative receive a 15% discount on all purchases. Community events are held in the space on the first Thursday of each month."
          ],
          price: "€4.00–€7.50",
          ctaLabel: "Find Us",
        },
        {
          id: "kahvitauko-services",
          name: "KahviTauko Services",
          shortDescription: "A mobile preparation service bringing skilled baristas to workplaces, care homes, and community spaces across the Helsinki region.",
          description: [
            "People come to work once a week to enjoy a wholesome coffee and make low threshold social interactions thanks to the expert facilitators.",
            "Bookings are typically for two-hour slots, during which the barista prepares and serves for the group and is available for conversation about the material, the craft, and the cooperative's work.",
            "A minimum booking of 4 guests applies. All equipment is transported in a cargo bicycle with zero-emission delivery as standard."
          ],
          price: "€180.00 / 2-hour slot",
          ctaLabel: "Book a Visit",
        },
        {
          id: "group-therapy",
          name: "Group Therapy",
          shortDescription: "A facilitated sensory exploration session combining guided tasting, somatic awareness practice, and open conversation.",
          description: [
            "Self-regulation sessions developed by nutritionists, psychologists and social workers to help people build healthier relationships with coffee",
            "Booking is available for individuals and private groups. A sliding-scale fee structure is available — contact us.",
            "",
          ],
          price: "€42.00 / person",
          ctaLabel: "Reserve a Place",
        },
        {
          id: "community-cafe",
          name: "Community Cafe",
          shortDescription: "A community-owned café space open to all, with hyperlocal characteristics.",
          description: [
            "Community Cafe is a community-owned space in the Suvilahti district operating on a pay-what-you-can model.",
            "The space is open daily from 07:00 to 20:00 and doubles as a venue for cooperative meetings, skill-sharing sessions, language exchanges, repair cafés, and community dinners.",
            "The kitchen is entirely plant-based. Dogs and children are welcome. Wi-Fi is available. There is a suggested contribution of €4 per preparation. The space was bought back by residents after it was abandoned by an Americal coffee chain that became unprofitable in 2041."
          ],
          price: "Pay what you can",
          ctaLabel: "Come In",
        },
        {
          id: "baristas-choice",
          name: "Barista's Choice",
          shortDescription: "A subscription service curated entirely by cooperative baristas",
          description: [
            "Barista's Choice is a monthly drop built around a simple premise: baristas prepare a small roasted sample with a  personal note about the it.",
            "The note that accompanies each selection is typically candid and reflects the personality of the barista as much as the sample itself.",
            "Coffee enthusiasts line up for the release of  limited edition coffee blends by their favourite barista, the way people used to wait in line for the new iphone back in the 020's."
          ],
          price: "€28.00 / month",
          ctaLabel: "Subscribe",
        },
      ],
    },
    {
      id: "events",
      name: "Events",
      description: "",
      offerings: [
        {
          id: "coffee-ritual-workshops",
          name: "Coffee Ritual Workshops",
          shortDescription: "Small-group hands-on sessions exploring historical and contemporary preparation rituals from Finnish and global traditions.",
          description: [
            "Coffee Ritual Workshops are hosted by cooperative members with specialist knowledge of preparation traditions such as Ethiopian ceremony, Nordic filter culture, Turkish preparation, and others. Each workshop focuses on one tradition and runs for approximately three hours.",
            "",
            "Workshops are held at the Roasters Association's Bean Dispensaries. A full schedule is published at the start of each season."
          ],
          price: "€38.00 / person",
          ctaLabel: "Browse the Schedule",
        },
        {
          id: "rite-of-passage",
          name: "Rite of Passage",
          shortDescription: "Children brew their first cup of coffee in the wilderness when they turn 16, in a ceremony with loved ones who bless them and impart words of wisdom.",
          description: [
            "",
            "",
            ""
          ],
          price: "€85.00 / 3 days",
          ctaLabel: "Apply for a Place",
        },
        {
          id: "cynical-trials",
          name: "Cynical Trials",
          shortDescription: "The sampling programme gives people the opportunity to try roasts and blends of liberica to develop its flavour. They get feedback, you get free coffee. The more interesting the feeback, the more coffee you get to try. ",
          description: [
            "",
            "",
            ""
          ],
          price: "€55.00 / person",
          ctaLabel: "Join the Notification List",
        },
      ],
    },
    {
      id: "community",
      name: "Community",
      description: "",
      offerings: [
        {
          id: "barista-exchange",
          name: "Barista Exchange",
          shortDescription: "An cultural exchange programme for baristas and farmers alike, funded by the EU. Looks great on any resumé.",
          description: [
            "",
            "",
            ""
          ],
          price: "Cooperative member benefit",
          ctaLabel: "Apply for the Exchange",
        },
      ],
    },
  ],
};

export const narratives: Narrative[] = [regulated, techno, crafted];

export const narrativeMap: Record<string, Narrative> = {
  regulated,
  techno,
  crafted,
};

export function getNarrativeCategory(narrativeId: string, categoryId: string): Category | undefined {
  const narrative = narrativeMap[narrativeId];
  return narrative?.categories.find((c) => c.id === categoryId);
}

export function getOffering(narrativeId: string, categoryId: string, offeringId: string): Offering | undefined {
  const category = getNarrativeCategory(narrativeId, categoryId);
  return category?.offerings.find((o) => o.id === offeringId);
}
