import mongoose from "mongoose";

const talentHubSchema = new mongoose.Schema({
  navbar: {
    logo: { type: String, 
      default: "TalentHub" },
    links: [{ name: String,
       path: String }],
    signinButton: { name: String,
       path: String },
    startedButton: { name: String,
       path: String },
  },
  page1: {
    hero: {
      title: {
        type: String,
        default: "Where Talent Meets Opportunity",
      },
      subtitle: {
        type: String,
        default: "AI-Powered Career Intelligence Platform",
      },
      description: {
        type: String,
        default:
          "Transform your career journey with the world's first psychometric-driven, AI-powered career guidance platform that connects students, colleges, and employers in one unified ecosystem.",
      },

      journeyButton: {
        name: String,
        link: String,
      },
      pricingButton: {
        name: String,
        link: String,
      },
    },

    stats: [
      {
        value: String,
        label: String,
      },
    ],
  },
  page2: {
    title: {
      type: String,
      default: "The TalentHub 6-Step Career Transformation Journey"
    },
    subtitle: {
      type: String
    },

    steps: [
      {
        stepNumber: Number,

        title: String,

        description: String,

        points: [
          {
            type: String
          }
        ]
      }
    ]
  },

  page3: {
    title: {
      type: String,
      default: "Everything You Need to Unlock Your Potential"
    },

    subtitle: {
      type: String
    },

    features: [
      {
        title: String,
        description: String
      }
    ]
  },
  page4: {
   title: {
    type: String,
    default: "Choose Your Career Transformation Plan"
  },

  subtitle: {
    type: String,
    default: "Flexible pricing options designed for every stage of your journey"
  },

  plans: [
    {
      name: {
        type: String
      },

      price: {
        type: String
      },

      duration: {
        type: String,
        default: "/month"
      },

      description: {
        type: String
      },

      badge: {
        type: String   // MOST POPULAR (optional)
      },

      features: [
        {
          type: String
        }
      ],

      button: {
        text: {
          type: String
        }
      }
    }
  ],

  enterprise: {
    title: {
      type: String,
      default: "For Institutions & Employers"
    },

    description: {
      type: String
    },

    button: {
      text: {
        type: String
      }
    }
  },
  
},
page5: {
title: {
    type: String,
    default: "Success Stories That Inspire"
  },

  subtitle: {
    type: String,
    default: "Hear from students who transformed their careers with TalentHub"
  },

  stories: [
    {
      quote: {
        type: String
      },

      name: {
        type: String
      },

      role: {
        type: String
      },

      avatar: {
        type: String
      },

      stats: {
        careerFit: {
          type: String
        },

        package: {
          type: String
        },

        time: {
          type: String
        }
      }
    }
  ]
},
h1: {
  type: String,
  default: "Launch Your Career with TalentHub Today"
},
description: {
  type: String,
  default: "Join 8,500+ students who transformed their careers with our AI-powered platform"
},
signupButton: {
  type: String,
  default: "Sign Up Free"
},
plansButton: {
  type: String,
  default: "View All Plans"
}
}
, { timestamps: true });


export default mongoose.model("TalentHub", talentHubSchema);
