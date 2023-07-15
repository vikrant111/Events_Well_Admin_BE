const mongoose = require("mongoose");

require('dotenv').config();

const MONGO_URL = process.env.MONGO_URL;

mongoose.connection.once("open", () => {
  console.log("mongodb connection ready!");
});

mongoose.connection.on("error", (err:any) => {
  console.log("Error====>", err);
});

export async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

export async function mongoDisconnect(){
    await mongoose.disconnect()
}

