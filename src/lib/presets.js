export const PRESETS = {
  A: {
    id: 'A',
    name: 'Organic Tech',
    theme: {
      colors: {
        primary: '#2E4036', // Moss
        accent: '#CC5833', // Clay
        background: '#F2F0E9', // Cream
        text: '#1A1A1A', // Charcoal
        surface: '#FFFFFF',
      },
      fonts: {
        heading: 'font-jakarta',
        subheading: 'font-outfit',
        drama: 'font-cormorant',
        data: 'font-ibm-mono',
      },
      imageMood: 'nature, moss, laboratory, glass, organic',
    },
    content: {
      brandName: "Aetheria Bio",
      purpose: "Bridging the gap between molecular precision and holistic wellness.",
      cta: "Request Access",
      hero: {
        line1: "Longevity is the",
        line2: "New Currency."
      },
      features: [
        {
          type: "shuffler",
          title: "Genomic Sequencing",
          desc: "Full-stack DNA analysis mapped to your biological age.",
          labels: ["Exome Analysis", "Genome Mapping", "Epigenome"]
        },
        {
          type: "typewriter",
          title: "Real-time Biomarkers",
          desc: "Continuous monitoring of 50+ key performance indicators.",
          labels: ["Live Feed"]
        },
        {
          type: "scheduler",
          title: "Adaptive Protocols",
          desc: "Daily supplement stacks adjusted by your sleep data.",
          labels: ["Morning Stack", "Deep Sleep", "Recovery"]
        }
      ],
      philosophy: {
        neutral: "Most healthcare focuses on: sick care.",
        differentiated: "We focus on: precision vitality."
      },
      protocol: [
        {
          step: "01",
          title: "Baseline Scan",
          desc: "Comprehensive blood panel and whole-body MRI to establish your biological baseline."
        },
        {
          step: "02",
          title: "Protocol Design",
          desc: "AI-generated supplement and nutrition plan tailored to your genetic predispositions."
        },
        {
          step: "03",
          title: "Feedback Loop",
          desc: "Quarterly re-testing to calibrate your protocol based on actual physiological changes."
        }
      ],
      pricing: {
        enabled: true,
        tiers: [
          { name: "Essential", price: "$299/mo", features: ["Quarterly Labs", "Basic Supplement Pack", "App Access"] },
          { name: "Performance", price: "$599/mo", features: ["Monthly Labs", "Custom Compounding", "Coach Access"] },
          { name: "Enterprise", price: "Custom", features: ["Family Office Support", "Private Physician", "Concierge"] }
        ]
      }
    }
  },
  B: {
    id: 'B',
    name: 'Midnight Luxe',
    theme: {
      colors: {
        primary: '#0D0D12', // Obsidian
        accent: '#C9A84C', // Champagne
        background: '#FAF8F5', // Ivory (Note: The prompt says Ivory Background, but Midnight Luxe implies dark. However, the preset text says Background Ivory. Wait.
        // Let's re-read Preset B.
        // "Palette: Obsidian #0D0D12 (Primary), Champagne #C9A84C (Accent), Ivory #FAF8F5 (Background), Slate #2A2A35 (Text/Dark)"
        // "Identity: A private members' club... dark marble, gold accents".
        // If background is Ivory, it's a light theme with dark primary?
        // But "Midnight Luxe" suggests dark.
        // Let's look at the "Hero Section" rule: "Full-bleed background image... with a heavy primary-to-black gradient overlay".
        // If Primary is Obsidian (#0D0D12), the Hero will be dark.
        // The rest of the site: "All cards: bg-[background] surface". If background is Ivory, the cards are light.
        // This creates a high contrast: Dark Hero -> Light Content. That works for "Editorial".
        // Okay, I will stick to the provided palette.
        text: '#2A2A35', // Slate
        surface: '#FFFFFF',
      },
      fonts: {
        heading: 'font-inter',
        subheading: 'font-inter', // Using Inter for both as prompt says "Headings: Inter"
        drama: 'font-playfair',
        data: 'font-jetbrains',
      },
      imageMood: 'luxury, dark marble, gold, architecture, watch',
    },
    content: {
      brandName: "NOIR CAPITAL",
      purpose: "Exclusive wealth management for the modern aristocracy.",
      cta: "Inquire Membership",
      hero: {
        line1: "Capital meets",
        line2: "Heritage."
      },
      features: [
        {
          type: "shuffler",
          title: "Asset Allocation",
          desc: "Dynamic rebalancing across private equity and real assets.",
          labels: ["Private Equity", "Real Estate", "Fine Art"]
        },
        {
          type: "typewriter",
          title: "Market Intelligence",
          desc: "Direct feed from our global trading desks.",
          labels: ["Alpha Stream"]
        },
        {
          type: "scheduler",
          title: "Concierge Banking",
          desc: "24/7 access to your dedicated financial liaison.",
          labels: ["Wire Transfer", "Estate Plan", "Tax Audit"]
        }
      ],
      philosophy: {
        neutral: "Most banks focus on: transactions.",
        differentiated: "We focus on: legacy."
      },
      protocol: [
        {
          step: "I",
          title: "Initiation",
          desc: "Strictly by invitation. A vetting process to ensure alignment of values."
        },
        {
          step: "II",
          title: "Architecture",
          desc: "Structuring your holdings for multi-generational tax efficiency."
        },
        {
          step: "III",
          title: "Expansion",
          desc: "Aggressive growth strategies in emerging markets and alternative assets."
        }
      ],
      pricing: {
        enabled: true,
        tiers: [
          { name: "Silver", price: "0.5% AUM", features: ["Advisory", "Tax Planning", "Quarterly Review"] },
          { name: "Gold", price: "0.8% AUM", features: ["Discretionary", "Estate Planning", "Monthly Review"] },
          { name: "Black", price: "By Invite", features: ["Family Office", "Private Equity Access", "Concierge"] }
        ]
      }
    }
  },
  C: {
    id: 'C',
    name: 'Brutalist Signal',
    theme: {
      colors: {
        primary: '#E8E4DD', // Paper (This is Primary?)
        // Wait. "Palette: Paper #E8E4DD (Primary), Signal Red #E63B2E (Accent), Off-white #F5F3EE (Background), Black #111111 (Text/Dark)"
        // If Primary is Paper (Light), and Hero uses "primary-to-black gradient", it might look muddy.
        // But Brutalist often uses light backgrounds.
        // Let's assume Primary here acts as the dominant brand color, but for the Hero Gradient, maybe we should invert or use Black if Primary is light?
        // Rule: "heavy primary-to-black gradient overlay". If Primary is #E8E4DD, gradient is Light->Black. That's weird.
        // Maybe for this preset, I should treat Black as the "Dark" color for gradients.
        // However, I must follow the prompt. I will use the colors as defined.
        // Actually, "Primary" in Tailwind usually implies the main brand color.
        // Let's trust the aesthetic. Brutalism is weird.
        accent: '#E63B2E', // Signal Red
        background: '#F5F3EE', // Off-white
        text: '#111111', // Black
        surface: '#FFFFFF',
      },
      fonts: {
        heading: 'font-space-grotesk',
        subheading: 'font-space-grotesk',
        drama: 'font-dm-serif',
        data: 'font-space-mono',
      },
      imageMood: 'concrete, brutalist, industrial, raw, structure',
    },
    content: {
      brandName: "SYSTEM_CORE",
      purpose: "Decentralized infrastructure for the new internet.",
      cta: "Deploy Node",
      hero: {
        line1: "Construct the",
        line2: "Future."
      },
      features: [
        {
          type: "shuffler",
          title: "Node Distribution",
          desc: "Global mesh network with zero downtime.",
          labels: ["Tokyo", "Berlin", "New York"]
        },
        {
          type: "typewriter",
          title: "Packet Stream",
          desc: "Encrypted data transmission logs.",
          labels: ["/var/log"]
        },
        {
          type: "scheduler",
          title: "Uptime Monitor",
          desc: "Guaranteed availability via redundant systems.",
          labels: ["Ping", "Latency", "Jitter"]
        }
      ],
      philosophy: {
        neutral: "Most clouds focus on: abstraction.",
        differentiated: "We focus on: bare metal."
      },
      protocol: [
        {
          step: "001",
          title: "Compile",
          desc: "Source code optimization for specific hardware targets."
        },
        {
          step: "002",
          title: "Deploy",
          desc: "Containerized orchestration across the distributed mesh."
        },
        {
          step: "003",
          title: "Scale",
          desc: "Automated resource allocation based on real-time load."
        }
      ],
      pricing: {
        enabled: true,
        tiers: [
          { name: "Dev", price: "$0", features: ["1 Node", "Community Support", "Public IP"] },
          { name: "Pro", price: "$49", features: ["10 Nodes", "Priority Support", "VPC"] },
          { name: "Corp", price: "$999", features: ["Unlimited", "SLA", "Dedicated Hardware"] }
        ]
      }
    }
  },
  D: {
    id: 'D',
    name: 'Vapor Clinic',
    theme: {
      colors: {
        primary: '#0A0A14', // Deep Void
        accent: '#7B61FF', // Plasma
        background: '#F0EFF4', // Ghost (Light again?)
        // "Palette: Deep Void #0A0A14 (Primary), Plasma #7B61FF (Accent), Ghost #F0EFF4 (Background), Graphite #18181B (Text/Dark)"
        // Hero uses Primary (Dark) -> Black. This works well.
        // Content uses Background (Light). High contrast again.
        text: '#18181B', // Graphite
        surface: '#FFFFFF',
      },
      fonts: {
        heading: 'font-sora',
        subheading: 'font-sora',
        drama: 'font-instrument',
        data: 'font-fira',
      },
      imageMood: 'neon, bioluminescence, cyberpunk, dark water, microscope',
    },
    content: {
      brandName: "NEO.GEN",
      purpose: "Cybernetic enhancements for the post-human era.",
      cta: "Upgrade Now",
      hero: {
        line1: "Humanity beyond",
        line2: "Biology."
      },
      features: [
        {
          type: "shuffler",
          title: "Gene Editing",
          desc: "CRISPR-Cas9 precision modifications.",
          labels: ["Target", "Slice", "Repair"]
        },
        {
          type: "typewriter",
          title: "Neural Link",
          desc: "Direct brain-computer interface telemetry.",
          labels: ["Synapse"]
        },
        {
          type: "scheduler",
          title: "Implant Sync",
          desc: "Firmware updates for your cybernetic limbs.",
          labels: ["Download", "Install", "Reboot"]
        }
      ],
      philosophy: {
        neutral: "Most evolution focuses on: chance.",
        differentiated: "We focus on: design."
      },
      protocol: [
        {
          step: "v1.0",
          title: "Analysis",
          desc: "Mapping your neural pathways and biological limitations."
        },
        {
          step: "v2.0",
          title: "Augmentation",
          desc: "Surgical integration of hardware and wetware components."
        },
        {
          step: "v3.0",
          title: "Ascension",
          desc: "Breaking the shackles of baseline human performance."
        }
      ],
      pricing: {
        enabled: true,
        tiers: [
          { name: "Basic", price: "Credits", features: ["Retina Display", "Memory Boost", "Standard Support"] },
          { name: "Advanced", price: "Credits", features: ["Muscle Weave", "Reflex Boost", "Priority Support"] },
          { name: "Chrome", price: "Credits", features: ["Full Body", "Immortality", "Dedsec Support"] }
        ]
      }
    }
  }
};
