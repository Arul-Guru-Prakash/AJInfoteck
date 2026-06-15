import mongoose from "mongoose";

const headerSchema = new mongoose.Schema(
  {
    logo: {
      type: String
    },

    menu: {
      home: {
        title: String,
        link: String
      },
      services:{
        title: String,
        link: String
      },
      servicesDropdown: [
        {
          title: String,
          link: String
        }
      ],

      staffpro: {
        title: String,
        link: String
      },

      talenthub: {
        title: String,
        link: String
      },

      about: {
        title: String,
        link: String
      },

      careers: {
        title: String,
        link: String
      },

      contact: {
        title: String,
        link: String
      },

      privacy: {
        title: String,
        link: String
      },

      terms: {
        title: String,
        link: String
      }
    }
  },
  { timestamps: true }
);

export default mongoose.model("Header", headerSchema);
