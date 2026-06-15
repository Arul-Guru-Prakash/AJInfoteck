import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    title: {
    type: String,
    default: "Contact Us"
  },
  h1: {
    type: String,
    default: "Let's Build Together"
  },

    locationTitle: {
      type: String,
      default: "Tirunelveli HQ:"
    },

    address: { type: String },
    phone: { type: String },
    email: { type: String },
 
  form: {
    title: {
      type: String,
      default: "Free Consultation"
    },

    namelabel: {
      type: String,
      default: "Your Name"
    },
    emaillabel: {
      type: String,
      default: "Your Email"
    },
    messagelabel: {
      type: String,
      default: "Your Message(optional)"
    },

    button: {
      type: String,
      default: "Submit"
    }
  },

  responseMessage: {
    type: String,
    default: "We reply in hours, not days."
  }

});

export default mongoose.model("Contact", contactSchema);