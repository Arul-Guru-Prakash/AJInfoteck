import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/AuthRoutes.js";
import homeRoutes from "./routes/HomeRoutes.js";
import headerRoutes from "./routes/HeaderRoutes.js";
import serviceRoutes from "./routes/ServiceRoutes.js";
import staffProRoutes from "./routes/StaffProRoutes.js";
import talentHubRoutes from "./routes/TalentHubRoutes.js";
import aboutRoutes from "./routes/AboutRoutes.js";
import careersRoutes from "./routes/CareersRoutes.js";
import footerRoutes from "./routes/FooterRoutes.js";
import contactRoutes from "./routes/ContactRoutes.js";
import mail from "./routes/mail.js";


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("API Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


app.use("/api/auth", authRoutes);
app.use("/api/home", homeRoutes);
app.use("/api/header", headerRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/staffpro", staffProRoutes);
app.use("/api/talenthub", talentHubRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/careers", careersRoutes);
app.use("/api/footer", footerRoutes);
app.use("/api/contact", contactRoutes);
app.use("/assets", express.static("assets"));
app.use("/uploads", express.static("uploads"));
app.use("/api/apply", mail);

