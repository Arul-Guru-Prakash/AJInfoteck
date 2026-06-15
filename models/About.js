import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema({
  title: {
    type: String,
    default: "About Us"
  },
  whoweare: {
    title: {
      type: String,
        default: "Who We Are"
    },
    points:[{
        type: String
    }]
},
mission: {
  title: {
    type: String,
    default: "Our Mission"
  },
  description: {
    type: String,
    default: "To make technology and talent simple, accessible, and impactful for every organization we work with."
  }
},
vision: {
  title: {
    type: String,
    default: "Our Vision"
  },
  description: {
    type: String,
    default: "To become a trusted global partner in technology services, staffing, and digital learning solutions."
  }
},
teamTitle: {
      type: String,
      default: "Meet Our Team"
    },
    description: {
      type: String
    },
    team: [ {name: {
      type: String,
      required: true
    },
    initials: {
      type: String
    },
    role: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
  profile:{
    type:"String"
  }}]
 

});

export default mongoose.model("About", aboutSchema);
