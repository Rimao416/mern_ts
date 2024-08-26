import mongoose from "mongoose";
import { app } from "./app";
const port: string | undefined = process.env.PORT;

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL!);

    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
      console.log("Erreur de connexion")
    console.log(error);
  }
};

startServer()