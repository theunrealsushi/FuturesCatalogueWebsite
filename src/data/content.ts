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
  tagline: "Certified. Compliant. Complete.",
  description: "A structured marketplace governed by the Finnish Consumer Authority for Nutritive Beverages. Every product, service and event is approved, tracked and accountable. This marketplace imagines a future where coffee has shifted from a habit that Finland's residents take for granted, into a scarce and regulated commodity. Coffee is  treated as something that carries environmental, cultural and economic value, in a world now dealing with the consequences of unchecked and linear economic growth. The narrative highlights inequality, with the wealthy people able to continue enjoying café culture, while others have limited access to coffee. The underground coffee networks reveal resistance to government control and a desire to preserve the rich, third wave coffee culture that looked so promising a few decades ago. Overall, the fiction suggests that in the future, climate pressures may transform everyday pleasures into controlled luxuries, forcing society to rethink consumption.",
  heroSubtext: "Procurement Portal v14.2 ",
  accent: "#c04a2a",
  secondary: "#d4b84a",
  feel: "institutional",
  categories: [
    {
      id: "products",
      name: "Products",
      description: "Approved nutritive beverage products meeting all 2049 EU Circular Standards. Each item carries a verified traceability certificate.",
      offerings: [
        {
          id: "delicious-alternatives",
          name: "Delicious Alternatives",
          shortDescription: "A coffee alternative so delicious you forget what the original thing tasted like.",
          description: [
            "The blend replicates the mouthfeel, aroma signature, and stimulant profile of pre-collapse arabica at a fraction of the ecological cost.",
            "Available in three approved roast variants: Nordic Light (ref. NL-04), Balanced (ref. BA-11), and Dark Functional (ref. DF-22).",
            ""
          ],
          price: "€18.50",
          ctaLabel: "Add to Procurement Cart",
          ingredients: [
            "Fermented mycoprotein base (Fusarium venenatum, EU-approved strain MYC-2047)",
            "Chicory root extract (Cichorium intybus, certified organic)",
            "Roasted barley malt (Hordeum vulgare)",
            "Adaptogenic ashwagandha (Withania somnifera, standardised 5% withanolides)",
            "Caffeine isolate (synthetic, EU Reg. 2044/NUT-06, 80mg/serving)",
            "Natural arabica aroma compounds (synthetic-identical, ref. AROMA-FI-2049-391)",
            "Stabiliser: sunflower lecithin (E322)",
            "pH regulator: potassium carbonate (E501)",
          ],
        },
        {
          id: "blends",
          name: "Blends",
          shortDescription: "Curated multi-origin certified blends assembled quarterly by the National Beverage Standards Institute.",
          description: [
            "Each quarterly Blend release is assembled by the National Beverage Standards Institute from a pool of pre-approved single-origin stocks. The 2050 Q2 release — Blend 07-B — combines fermented oat extract, adaptogenic chicory root, and a 12% certified robusta derivative sourced from the Vertical Estates of Tampere.",
            "Blends carry a limited-batch identification code printed on each unit. Provenance data — including extraction date, processor ID, and transport chain — is accessible by scanning the QR matrix on the packaging with any registered device.",
            "Available in 200g and 500g formats. Subscription allocation is prioritised for Tier 2 and above account holders. Public stock releases occur on the first Tuesday of each month."
          ],
          price: "€24.00",
          ctaLabel: "Check Availability",
        },
      ],
    },
    {
      id: "services",
      name: "Services",
      description: "Licensed beverage preparation and data services operating under the 2048 Finnish Service Provision Act. All providers are bonded and regularly inspected.",
      offerings: [
        {
          id: "bean-dispensary",
          name: "The Bean Dispensary",
          shortDescription: "Automated licensed dispensary terminals providing precision-dosed nutritive beverages at certified preparation points across Helsinki.",
          description: [
            "The Bean Dispensary is a network of 214 certified preparation terminals operating under Dispensary Licence D-2049-FI-007. Each terminal is calibrated weekly by a registered technician and maintains a real-time quality log accessible to the Finnish Consumer Authority.",
            "Users authenticate via their Kahvi 2050 ID before dispensing. Dosage is personalised based on registered health data and daily intake quota as defined by the National Nutritive Beverage Framework 2048. Single-use biocompostable cups are provided at no additional charge.",
            "Terminal locations are displayed on the Kahvi 2050 approved vendor map. New locations are subject to a 90-day licensing review before activation. Priority access is available for registered commercial account holders."
          ],
          price: "€3.20 / serving",

          ctaLabel: "Find Nearest Terminal",
        },
        {
          id: "kahvi-museo",
          name: "Kahvi Museo",
          shortDescription: "A state-registered heritage experience documenting the pre-Collapse history of coffee cultivation and trade in Finland.",
          description: [
            "Kahvi Museo is a certified cultural heritage service operating under the Museum Act (2045 revision). The experience spans three licensed exhibition halls in the former Paulig facility in Vuosaari, now administered by the Helsinki Cultural Heritage Authority.",
            "The permanent collection documents the full lifecycle of pre-Collapse coffee culture — from colonial trade routes through the Scandinavian third-wave movement to the regulatory transition period of 2031–2038. All interpretive materials have been reviewed by the National Content Standards Board.",
            "Group bookings of eight or more must submit a Cultural Access Request form at least 14 days in advance. Educational institutions qualify for the subsidised access rate of €4.50 per student. Individual passes are available on a first-come allocation basis each morning from 09:00."
          ],
          price: "€12.00 / person",
          ctaLabel: "Book a Visit",
        },
        {
          id: "very-berry",
          name: "Very Berry",
          shortDescription: "Licensed Nordic berry infusion service using only foraged and cultivated berries from approved Finnish estates.",
          description: [
            "Very Berry operates under the Forage and Cultivar Licensing Scheme (FCLS-2047). All berry stocks are sourced exclusively from estates holding current FCLS certification, with provenance verified at each harvest point via the national agricultural telemetry system.",
            "The service offers both prepared infusion (hot and cold), and a subscription delivery option for home preparation kits. Each kit contains dried berry blends, a reusable stainless preparation vessel, and a printed care and compliance card detailing acceptable preparation parameters.",
            "Very Berry infusions are classified as a supplementary nutritive beverage under the Finnish Nutritive Beverage Framework and do not count toward the daily coffee-equivalent allocation. Available at licensed preparation points city-wide."
          ],
          price: "€5.80 / serving",
          ctaLabel: "Subscribe to Deliveries",
        },
        {
          id: "circular-data-lab",
          name: "Circular Data Lab",
          shortDescription: "Regulatory-grade data services for beverage supply chain traceability and circular economy compliance reporting.",
          description: [
            "Circular Data Lab provides the computational infrastructure that underpins Kahvi 2050's traceability commitments. Enterprise clients use the Lab's API suite to generate, store, and submit supply chain records required under EU Circular Economy Regulation 2047/88.",
            "Services include: batch provenance ledger, carbon offset calculation and certification, waste stream reporting, and automated compliance submission to the Finnish Environment Institute. All data is stored on servers located within the EU under Tier 3 jurisdictional agreements.",
            "Pricing is tiered by API call volume and organisation size. Public sector clients are eligible for subsidised rate agreements. Data sovereignty guarantees are provided in writing as part of all contracts over €5,000 annually."
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
      description: "Approved public and professional events listed under the National Events Register for Nutritive Beverage Culture.",
      offerings: [
        {
          id: "ive-been-underground",
          name: "I've Been Underground",
          shortDescription: "A licensed immersive experience exploring the informal coffee trade networks that operated during the Transition Period of 2031–2038.",
          description: [
            "I've Been Underground is a state-approved immersive experience produced in partnership with the Finnish Memory Archive and the Helsinki Cultural Heritage Authority. It documents the informal distribution networks and social rituals that sustained coffee culture during the years when commercial supply collapsed and regulatory frameworks had not yet formed.",
            "The experience takes place across three levels of the former Cable Factory basement and lasts approximately 90 minutes. It has received a Cultural Content Classification of C-III (mature themes, archival material, simulated environments). Participants must be 16 or over.",
            "Tickets are allocated through a monthly public ballot. Unsuccessful applicants receive priority entry in the following month's ballot. Group cultural access subsidies are available for registered community organisations and schools."
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
  tagline: "Optimise. Automate. Elevate.",
  description: "The smart marketplace for next-generation beverage innovation. Discover AI-formulated products, precision automation services, and the community powering the fourth-wave coffee revolution.",
  heroSubtext: "Powered by Kahvi Intelligence Engine™ — Real-time personalisation active",
  accent: "#d4b84a",
  secondary: "#5f7a6e",
  feel: "sleek",
  categories: [
    {
      id: "products",
      name: "Products",
      description: "Hardware and formulations engineered for peak performance. Every product is data-backed, iteratively improved, and optimised for the human-technology interface.",
      offerings: [
        {
          id: "post-consumer-nutrients-2",
          name: "Post Consumer Nutrients 2",
          shortDescription: "Second-generation closed-loop nutrient recovery system. Full home integration with the Kahvi Intelligence dashboard.",
          description: [
            "Post Consumer Nutrients 2 is the residential counterpart to enterprise-grade circular processing. The PCN2 home unit — a 28cm countertop device — processes up to 800g of spent grounds per week into a nutrient slurry deployable directly through compatible smart garden or balcony planter systems via the Kahvi Home API.",
            "The unit learns from your preparation patterns to predict recovery cycles, notifying you when the processing chamber is ready. Integration with the Kahvi Intelligence Engine provides a live carbon impact dashboard, showing your cumulative offset in real time.",
            "PCN2 requires a one-time installation calibration performed remotely by a certified Kahvi technician. Units are covered by a 5-year smart warranty — hardware faults are diagnosed automatically and parts dispatched before you notice the problem."
          ],
          price: "€349.00",
          ctaLabel: "Order Now",
        },
        {
          id: "zero-gravity-coffee",
          name: "Zero Gravity Coffee",
          shortDescription: "Micro-pressurised beverage pods engineered for preparation in low-gravity and high-altitude environments.",
          description: [
            "Zero Gravity Coffee was developed in collaboration with the European Space Habitat Authority for use aboard orbital stations and high-altitude research facilities. The sealed extraction pod uses a two-chamber micro-pressurisation system that requires no heating element — exothermic reaction is triggered by chamber activation.",
            "The 2050 civilian release retains the original engineering for earth-based use cases: no power source required, preparation in under 90 seconds, and a shelf life of 8 years from manufacture date. Ideal for expeditions, remote work environments, and serious preparedness planning.",
            "Available in four profiles: Concentrate, Filtered, Cold Extraction, and Stimulant-Free. Pods are fully compostable within 12 weeks in standard municipal composting conditions. Minimum order: 12 pods."
          ],
          price: "€38.00 / 12 pods",
          ctaLabel: "Add to Cart",
        },
        {
          id: "dr-device",
          name: "Dr. Device",
          shortDescription: "Biometric-integrated smart brewer that adjusts extraction parameters based on your real-time physiological data.",
          description: [
            "Dr. Device is the most advanced home brewing system on the market. It pairs with your registered health wearable to read cortisol levels, sleep debt, and hydration status before each preparation cycle, then adjusts brew temperature, extraction time, caffeine concentration, and flavour profile accordingly.",
            "The companion app maintains a longitudinal record of your consumption patterns and physiological responses, generating weekly insight reports and monthly recommendations. Over time, Dr. Device learns your optimal preparation windows and will proactively suggest when not to brew.",
            "Dr. Device is compatible with all Kahvi 2050 certified pods and grounds. It requires a stable network connection and a registered Kahvi Intelligence account. Health data is processed on-device and never leaves your local network without explicit consent."
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
          shortDescription: "A precision infusion experience designed by AI and delivered by calibrated automation at the Punavuori Innovation District.",
          description: [
            "Paradigm Shift is Helsinki's first fully AI-designed infusion bar. The menu — updated every 14 days by the Kahvi Intelligence Engine — responds to aggregate seasonal health data, atmospheric conditions, and collective preference signals drawn from the Kahvi Intelligence community network.",
            "Each infusion is prepared by a Paradigm Shift automated brewing arm to a tolerance of ±0.3°C and ±0.4g. Human staff are present for experience support, allergen queries, and edge-case troubleshooting. No item on the menu has ever been prepared the same way twice.",
            "Walk-ins are welcome during off-peak hours (10:00–12:00, 14:30–16:30). Peak-hour slots require a 15-minute advance reservation through the app. The bar operates a no-cash policy; payment via Kahvi Wallet or registered SEPA account only."
          ],
          price: "€9.50–€18.00",
          ctaLabel: "Reserve a Slot",
        },
        {
          id: "hologram-farmer",
          name: "Hologram Farmer",
          shortDescription: "A live holographic consultation service connecting you with agronomists overseeing vertical coffee cultivation in real time.",
          description: [
            "Hologram Farmer provides direct access to the agronomists managing Kahvi 2050's partner vertical estates. Sessions are conducted via high-fidelity holographic projection — the agronomist appears life-size in your home or workspace, with their farm environment rendered in the background.",
            "Sessions are available in Finnish, Swedish, and English. Topics covered include: varietal selection, home cultivation guidance, estate sourcing stories, and customised growing plans for balcony and indoor setups. Each session produces a written summary and a personalised cultivation plan.",
            "Sessions last 45 minutes. A recording is available for 30 days after the session via your account. Group sessions of up to 6 participants are available at a discounted rate. Equipment requirement: a Holo-Ready display device or compatible headset."
          ],
          price: "€55.00 / session",
          ctaLabel: "Book a Session",
        },
        {
          id: "robot-barista",
          name: "Robot Barista",
          shortDescription: "On-demand robotic barista deployment for events, offices, and installations. Precision at scale.",
          description: [
            "Robot Barista offers single-day and multi-day deployments of Kahvi 2050's autonomous preparation units. Each unit is a self-contained, mobile platform capable of producing up to 180 servings per hour across a menu of 24 preparation styles.",
            "The unit arrives pre-calibrated for your event profile — guest volume, preparation preference distribution, and serving window — derived from data you provide during booking. On-site technical support is provided for deployments over 300 guests.",
            "Robot Barista units require a standard 240V supply and a 1.5m × 1.5m footprint. They operate in temperatures between 5°C and 35°C. Custom branding wraps are available for an additional fee. All spent grounds are collected and processed post-event via Post Consumer Nutrients."
          ],
          price: "From €480.00 / day",
          ctaLabel: "Get a Quote",
        },
      ],
    },
    {
      id: "community",
      name: "Community",
      description: "The network where the fourth-wave community builds, shares, and solves. Membership unlocks early access, co-creation tools, and collective intelligence.",
      offerings: [
        {
          id: "internood-community",
          name: "Internood Community",
          shortDescription: "A global peer network for technologists working at the intersection of food systems, automation, and beverage culture.",
          description: [
            "Internood Community is a members-only network of 12,400 practitioners — engineers, agronomists, product designers, data scientists, and operations specialists — working across the food technology and beverage automation sectors. Founded in 2044, it has become the primary informal knowledge exchange for the field.",
            "Membership includes: access to the Internood private forum, a monthly digest of pre-publication research, priority tickets to Kahvi 2050 events, and a profile in the community directory. Members regularly collaborate on open-source tooling, share job opportunities, and peer-review each other's technical work.",
            "Applications are reviewed monthly. Applicants are asked to provide a brief professional biography and a short statement of interest. 80% of applications are accepted. Student memberships are available at a reduced rate for registered higher education students."
          ],
          price: "€12.00 / month",
          ctaLabel: "Apply for Membership",
        },
        {
          id: "tech-forests",
          name: "Tech Forests",
          shortDescription: "A distributed citizen science initiative maintaining Finland's experimental agroforestry plots using sensor networks and collective data stewardship.",
          description: [
            "Tech Forests is a participatory science programme connecting 3,200 volunteer stewards to 47 experimental agroforestry plots distributed across the Finnish archipelago, Lapland, and the Tampere hinterland. Each plot is instrumented with a dense sensor network measuring soil chemistry, microclimate, canopy density, and biodiversity indicators.",
            "Stewards commit to one monitoring visit per month and contribute observations via the Tech Forests app. All data is processed by the Kahvi Intelligence Engine and published as open datasets quarterly. Three peer-reviewed papers citing Tech Forests data have been published in 2049 alone.",
            "Participation is free. Stewards receive a monthly data digest for their assigned plot, an annual steward report, and invitation to the yearly in-person gathering. Travel grants are available for stewards travelling more than 150km to participate."
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
  tagline: "Grown. Brewed. Shared.",
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
