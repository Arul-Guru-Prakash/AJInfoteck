import mongoose from "mongoose";

const careersSchema = new mongoose.Schema({
  title: {
    type: String,
    default: "Hire Me"
  },
  name:{
    type: String,
    default: "Full name"
  },
  email: {
    type: String,
    default: "Email"
  },
  phone: {
    type: String,
    default: "Phone Number"
    },
    select: {
      type: String,
      default: "Select Role"
    },
    roles:[{
        type: String
    }],
    button: {
            type: String,
            default: "Apply Now"
    },
    openrolesTitle: {
            type: String,
            default: "Open Roles"
    },
    openroles: [
        {
                type: String,
            }
    ]

});

export default mongoose.model("Careers", careersSchema);