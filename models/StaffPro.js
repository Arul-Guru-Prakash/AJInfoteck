import mongoose from "mongoose";

const staffProSchema = new mongoose.Schema(
  {
    page1: {
      title: {
        type: String,
        default: "StaffPRO",
      },
      subtitle: {
        type: String,
        default: "AI - POWERED STAFFING",
      },
      description: {
        type: String,
        default:
          "Intelligent Workforce Solutions for India's Manufacturing Leaders",
      },
      p: {
        type: String,
        default: "A Flagship Service by AJ Infoteck",
      },
      h3: {
        type: String,
        default: "POWERED BY TALENTHUB",
      },
      p2: {
        type: String,
        default:
          "Manufacturing Excellence Through AI-Driven Hiring Intelligence",
      },
    },
    page2: {
      h6: {
        type: String,
        default: "WHO WE ARE",
      },
      h2: {
        type: String,
        default: "About StaffPRO",
      },
      p1: {
        type: String,
        default:
          "Transforming manufacturing staffing through intelligent automation and datadriven precision.",
      },
      p2: {
        type: String,
        default:
          "StaffPRO is AJ Infoteck's flagship AI-powered manufacturing staffing solution, exclusively powered by TalentHUB technology. We deliver production-fit, shift-ready, and fully compliant manpower to medium and large-scale manufacturing companies across India.",
      },
      keyMetrics: [
        {
          value: { type: String },
          label: { type: String },
        },
      ],
      vision: {
        type: String,
        default: "Our Vision",
      },
      visiondetail: {
        type: String,
        default:
          "To revolutionize manufacturing workforce management through AI-driven intelligence, ensuring factories maintain uninterrupted production with stable, skilled, and production-ready talent",
      },
      expertiseTitle: {
        type: "String",
        default: "Core Expertise",
      },
      expertiseContent: [
        {
          title: {
            type: "String",
          },
          description: {
            type: "String",
          },
        },
      ],
    },
    page3: {
      focus: {
        type: String,
        default: "Our Focus",
      },
      focusTitle: {
        type: String,
        default: "Who We Serve",
      },
      focusLine: {
        type: String,
        default:
          "Manufacturing leaders seeking workforce transformation through intelligent staffing solutions",
      },
      para: {
        type: String,
        default:
          "Our primary customers are medium to large-scale manufacturing companies employing 50–1,000+ shopfloor workers, particularly those facing challenges with high attrition, rapid expansion, or complex bulk hiring requirements.",
      },
      industriesTitle: {
        type: String,
        default: "Target Industries",
      },
      industries: [{ type: String }],
      DecisionMakersTitle: {
        type: String,
        default: "Decision Makers We Partner With",
      },
      DecisionMakers: [{ type: String }],
    },
    page4: {
      sectionTag: {
        type: String,
        default: "WHERE WE OPERATE",
      },
      title: {
        type: String,
        default: "Geographic Coverage",
      },
      subtitle: {
        type: String,
        default:
          "Strategic presence across India's key manufacturing corridors.",
      },

      coverageCards: [
        {
          title: {
            type: String,
          },
          subtitle: {
            type: String,
          },
          description: {
            type: String,
          },
        },
      ],

      reachTitle: {
        type: String,
        default: "Our Reach in Detail",
      },

      reachDetails: [
        {
          title: {
            type: String,
          },
          description: {
            type: String,
          },
        },
      ],

      strategicAdvantage: {
        title: {
          type: String,
          default: "Strategic Advantage",
        },
        description: {
          type: String,
          default:
            "Our multi-tier coverage model enables us to serve both local Chennai manufacturers and national-scale enterprises with the same level of expertise, compliance, and turnaround time.",
        },
      },
    },
    page5: {
      sectionTag: {
        type: String,
      },
      title: {
        type: String,
        default: "Core Services",
      },
      subtitle: {
        type: String,
        default:
          "Comprehensive staffing solutions designed for manufacturing excellence.",
      },

      services: [
        {
          title: {
            type: String,
          },
          description: {
            type: String,
          },
        },
      ],

      advantage: {
        title: {
          type: String,
          default: "The StaffPRO Advantage",
        },
        points: [
          {
            title: {
              type: String,
            },
            description: {
              type: String,
            },
          },
        ],
      },
    },
    page6: {
      sectionTag: {
        type: String,
        default: "OUR IMPACT",
      },
      title: {
        type: String,
        default: "Problems We Solve",
      },
      subtitle: {
        type: String,
        default:
          "Transforming workforce challenges into competitive advantages.",
      },

      challengesTitle: {
        type: String,
        default: "Challenges",
      },
      challenges: [{ text: String }],

      solutionsTitle: {
        type: String,
        default: "StaffPRO Solutions",
      },
      solutions: [{ text: String }],

      deliverablesTitle: {
        type: String,
        default: "Deliverables & Outcomes",
      },

      metrics: [{ value: String, label: String }],

      deliverables: [{ title: String, description: String }],

      result: {
        type: String,
      },
    },
    page7: {
      sectionTag: {
        type: String,
        default: "GET IN TOUCH",
      },
      title: {
        type: String,
        default: "Contact Leadership",
      },
      subtitle: {
        type: String,
        default:
          "Connect with our team to discuss your workforce transformation journey.",
      },

      leaders: [
        {
          name: {
            type: String,
          },
          position: {
            type: String,
          },
          mobile: {
            type: String,
          },
          email: {
            type: String,
          },
          responsibilitiesTitle: {
            type: String,
          },
          responsibilities: [
            {
              type: String,
            },
          ],
        },
      ],

      generalInquiry: {
        title: {
          type: String,
          default: "General Inquiries",
        },
        description: {
          type: String,
        },
        email: {
          type: String,
        },
        website: {
          type: String,
        },
      },

      footer: {
        brand: {
          type: String,
          default: "StaffPRO",
        },
        tagline: {
          type: String,
        },
        note: {
          type: String,
        },
      },
    },
  },
  { timestamps: true },
);

export default mongoose.model("StaffPro", staffProSchema);
