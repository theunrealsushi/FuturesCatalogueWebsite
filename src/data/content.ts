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
  accent: "#d4b84a",
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
          description: ["Walk-ins are welcome during off-peak hours (10:00–12:00, 14:30–16:30). Peak-hour slots require a 15-minute advance reservation through the app.",      
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
  description: "A cooperative marketplace rooted in Finnish craft tradition. Every offering is made by hand, grown with care, or built around shared experience — nothing here is scaled beyond what one person can know.",
  heroSubtext: "Collectively owned — member-governed since 2041",
  accent: "#5a3f35",
  secondary: "#5f7a6e",
  feel: "warm",
  categories: [
    {
      id: "services",
      name: "Services",
      description: "Craft preparation and community services, each rooted in a specific skill, place, or practice. All providers are cooperative members.",
      offerings: [
        {
          id: "bean-dispensary-2",
          name: "The Bean Dispensary",
          shortDescription: "A community-owned preparation counter run by rotating member baristas in the heart of Kallio.",
          description: [
            "The Bean Dispensary in its Crafted form is a cooperative preparation counter — not a terminal, but a table staffed by a rotating roster of member baristas from the Kahvi 2050 cooperative. Every person behind the counter is a member-owner; tips contribute directly to the cooperative fund.",
            "The menu changes weekly based on what's available from cooperative-linked growers and roasters. There is no fixed offering — you ask what's good today and you receive an honest answer. Preparation methods are chosen by the barista on shift based on the material at hand.",
            "The Dispensary operates Tuesday through Sunday, 08:00–16:00. It accepts Kahvi Wallet, cooperative share credits, and cash. Members of the cooperative receive a 15% discount on all purchases. Community events are held in the space on the first Thursday of each month."
          ],
          price: "€4.00–€7.50",
          ctaLabel: "Find Us",
        },
        {
          id: "kahvitauko-services",
          name: "KahviTauko Services",
          shortDescription: "A mobile preparation service bringing skilled baristas to workplaces, care homes, and community spaces across the Helsinki region.",
          description: [
            "KahviTauko — the Finnish word for a coffee break — is a mobile service operated by cooperative members. The service brings a fully equipped preparation setup, a barista, and a carefully chosen selection of cooperative-sourced material to your location.",
            "Bookings are typically for two-hour slots, during which the barista prepares and serves for your group and is available for conversation about the material, the craft, and the cooperative's work. KahviTauko is particularly popular with care homes, where the ritual and the human connection are as important as the beverage.",
            "The service covers the Greater Helsinki area. Travel outside this zone is available by arrangement and may carry a supplementary fee. A minimum booking of 10 guests applies. All equipment is transported in a cargo bicycle — zero-emission delivery as standard."
          ],
          price: "€180.00 / 2-hour slot",
          ctaLabel: "Book a Visit",
        },
        {
          id: "group-therapy",
          name: "Group Therapy",
          shortDescription: "A facilitated sensory exploration session combining guided tasting, somatic awareness practice, and open conversation.",
          description: [
            "Group Therapy is a session format developed by cooperative members Marika Koskinen and Juhani Ojala that combines guided sensory tasting with bodywork and facilitated conversation. The name is partly tongue-in-cheek — but the sessions do draw on practices from somatic therapy and community facilitation.",
            "Sessions run for two and a half hours and are limited to eight participants. The format moves through three preparation styles — typically filter, immersion, and cold — using the same material prepared three ways, with guided attention to the sensory experience at each stage and time for conversation between rounds.",
            "Group Therapy is not appropriate for those with strong caffeine sensitivity. A non-caffeinated parallel preparation is available on request. Participants are asked to arrive with no strong fragrance. Booking is available for individuals and private groups. A sliding-scale fee structure is available — contact us."
          ],
          price: "€42.00 / person",
          ctaLabel: "Reserve a Place",
        },
        {
          id: "community-cafe",
          name: "Community Cafe",
          shortDescription: "A pay-what-you-can cooperative café space open to all, with regular programming and a deeply local character.",
          description: [
            "Community Cafe is a semi-permanent space in the Suvilahti district operating on a pay-what-you-can model. There is a suggested contribution of €4 per preparation, but no one is turned away. The space is funded through cooperative surplus, voluntary contributions, and a small grant from the City of Helsinki Cultural Fund.",
            "The space is open daily from 07:00 to 20:00 and doubles as a venue for cooperative meetings, skill-sharing sessions, language exchanges, repair cafés, and community dinners. The programme is determined monthly by a vote among cooperative members and regular visitors.",
            "All preparation at the Community Cafe uses cooperative-sourced material. The kitchen is entirely plant-based. Dogs and children are welcome. Wi-Fi is available and shared freely."
          ],
          price: "Pay what you can",
          ctaLabel: "Come In",
        },
        {
          id: "baristas-choice",
          name: "Barista's Choice",
          shortDescription: "A subscription service curated entirely by cooperative baristas — no algorithm, no committee, just craft judgment.",
          description: [
            "Barista's Choice is a monthly subscription built around a simple premise: one cooperative barista selects one material, prepares a small roasted sample, writes a personal note about why they chose it, and sends it to subscribers along with suggested preparation parameters.",
            "The selection changes every month. Subscribers cannot choose — that is the point. The barista may select something they have been working with for months, something that arrived unexpectedly, or something they have strong feelings about. The note that accompanies each selection is typically candid and sometimes funny.",
            "Subscriptions run for a minimum of three months. Cancellation requires 14 days' notice before the next dispatch. Baristas are paid for their selection work and their writing. Subscribers who wish to respond to a barista's note may do so via the cooperative forum."
          ],
          price: "€28.00 / month",
          ctaLabel: "Subscribe",
        },
      ],
    },
    {
      id: "events",
      name: "Events",
      description: "Gatherings, rituals, and shared experiences organised by and for the cooperative community. Participation over performance.",
      offerings: [
        {
          id: "coffee-ritual-workshops",
          name: "Coffee Ritual Workshops",
          shortDescription: "Small-group hands-on sessions exploring historical and contemporary preparation rituals from Finnish and global traditions.",
          description: [
            "Coffee Ritual Workshops are hosted by cooperative members with specialist knowledge of preparation traditions — Ethiopian ceremony, Nordic filter culture, Levantine cardamom preparation, and others. Each workshop focuses on one tradition and runs for approximately three hours.",
            "Participants prepare and drink alongside the facilitator, handling the equipment, measuring and adjusting, and discussing the cultural context of what they are doing. The workshops are deliberately unhurried. There is usually a meal or a shared snack at some point.",
            "Workshops are held at the cooperative's space in Kallio and at partner venues across the city. A full schedule is published at the start of each season. Workshops are limited to 12 participants. Materials are included in the ticket price. Dietary requirements are accommodated with advance notice."
          ],
          price: "€38.00 / person",
          ctaLabel: "Browse the Schedule",
        },
        {
          id: "rite-of-passage",
          name: "Rite of Passage",
          shortDescription: "An annual multi-day gathering marking the harvest season — part celebration, part skill exchange, part cooperative assembly.",
          description: [
            "Rite of Passage is the cooperative's annual gathering, held over three days each October at a site chosen by member vote. The event combines harvest celebration, skill-sharing sessions, a formal cooperative assembly, open preparation spaces, and an evening programme of music, storytelling, and community.",
            "The gathering is open to members and their guests. A limited number of public tickets are available each year via ballot. The programme is set by a volunteer organising committee drawn from across the cooperative membership.",
            "Participants camp on site or arrange their own accommodation in the local area. The cooperative provides a communal kitchen and dining tent. Children are welcome and a supervised programme is available for those aged 5–12. Dogs are welcome in designated areas."
          ],
          price: "€85.00 / 3 days",
          ctaLabel: "Apply for a Place",
        },
        {
          id: "cynical-trials",
          name: "Cynical Trials",
          shortDescription: "A competitive blind-tasting tournament with a deliberately irreverent format. All skill levels welcome.",
          description: [
            "Cynical Trials is a blind-tasting competition with a twist: the judging criteria change with each round, the materials are undisclosed until after judging, and the scoring system is redesigned each year by the previous year's winner. The result is a tournament that rewards genuine sensory acuity while actively resisting the kind of reverence that makes these things tedious.",
            "The event runs over one day and is open to all — no prior competitive experience is required or advantaged. Participants taste, score, and discuss. Past materials have included preparations from unexpected origins, unusual processing methods, and at least one round featuring something that was not coffee at all.",
            "Entry includes all tasting materials, a printed tournament booklet, lunch, and an evening meal. Previous winners receive a commemorative object of the outgoing winner's choosing. The event sells out within hours of opening — join the notification list early."
          ],
          price: "€55.00 / person",
          ctaLabel: "Join the Notification List",
        },
      ],
    },
    {
      id: "community",
      name: "Community",
      description: "The membership and exchange structures that hold the cooperative together. Join, participate, contribute.",
      offerings: [
        {
          id: "barista-exchange",
          name: "Barista Exchange",
          shortDescription: "A structured exchange programme placing cooperative baristas at partner establishments across Europe for 2–6 week residencies.",
          description: [
            "Barista Exchange is a residency programme connecting Kahvi 2050 cooperative members with partner preparation spaces across Europe. Participating baristas travel to a partner for a period of 2–6 weeks, work alongside the local team, contribute their skills and perspective, and return with new knowledge and relationships.",
            "The Exchange is reciprocal: hosting partners send a barista to Helsinki for a corresponding period. Host cooperatives cover accommodation; travel costs are shared between the cooperative and the participant. Language is not a barrier — the programme has operated successfully in 11 countries with participants who share no common language.",
            "Applications are open twice yearly. Priority is given to members who have not previously participated. The Exchange has been running since 2043 and has generated lasting friendships, cross-border collaborative projects, and at least two marriages."
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
