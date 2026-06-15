import mongoose from "mongoose";

const homeSchema = new mongoose.Schema(
  {
    logo: {
      type: String
    },

    heroTitle: {
      type: String,
      default: "Engineering the Future."
    },
   
    heroSubtitle: {
      type: String
    },
   
    heroCTA: {
      type: String,
      default: "Unlock Free Growth Audit"
    },
    h2: {
      type: String,
      default: "What We Do"
    },

    whatWeDoContent: {
      type: String,
      default: "Build tech. Hire pros. Train winners. One partner for digital dominance."
    },

    whatWeDoPoints: [
      {
        type: String
      }
    ],
    industries: {
      type: String,
      default: "Industries We Serve"
    },
    industriesPoints: [
      {
        type: String
      }
    ],
    hireme:{
      type:String
    } ,
    headingWords:[{
      type: String
    }]

  },
  { timestamps: true }
);

export default mongoose.model("Home", homeSchema);