import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  tagline: {
    type: String
  },
  points: [
    {
      type: String
    }
  ],
});

const servicesPageSchema = new mongoose.Schema(
  {
    pageTitle: {
      type: String,
      default: "Our Services"
    },
    description:{
        type: String,
        default: "Digital Marketing Services Built for Real Business Outcomes"
    },
    services: [serviceSchema]
  },
  { timestamps: true }
);

export default mongoose.model("ServicesPage", servicesPageSchema);