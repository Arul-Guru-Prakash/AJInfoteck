import mongoose from "mongoose";

const footerSchema = new mongoose.Schema({
  logo: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  socialLinks: {
    facebook: String,
    twitter: String,
    instagram: String
  },

  services: {
    title: {
      type: String,
      default: "SERVICE"
    },
    links: [
      {
        name: String,
        link: String
      }
    ]
  },

  usefulLinks: {
    title: {
      type: String,
      default: "USEFUL LINKS"
    },
    links: [
      {
        name: String,
        link: String
      }
    ]
  },

  contact: {
    address: String,
    email: String,
    phone: String
  },

  copyright: {
    type: String
  }

}, { timestamps: true });

export default mongoose.model("Footer", footerSchema);