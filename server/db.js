const mongoose = require("mongoose");
const { INITIAL_BLOGS } = require("./seedData");

let isConnected = false;

// Fallback in-memory storage if MongoDB is not reachable
let memoryBlogs = INITIAL_BLOGS.map((item, index) => ({
  _id: "mem_" + (index + 1) + "_" + Math.random().toString(36).substr(2, 9),
  ...item,
  createdAt: item.createdAt || new Date(),
  updatedAt: new Date()
}));

async function connectDB() {
  const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/digital_marketing_db";

  try {
    mongoose.set("strictQuery", false);

    console.log(`[Database] Attempting connection to MongoDB at: ${uri}`);
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 4000,
    });

    isConnected = true;
    console.log(">>> [Database] Connected successfully to MongoDB!");

    // Seed database if empty
    const Blog = require("./models/Blog");
    const count = await Blog.countDocuments();
    if (count === 0) {
      console.log("[Database] Empty collection detected. Seeding initial digital marketing articles...");
      await Blog.insertMany(INITIAL_BLOGS);
      console.log(`[Database] Successfully seeded ${INITIAL_BLOGS.length} articles!`);
    }
  } catch (err) {
    isConnected = false;
    console.warn(`\n[Database Notice] Could not connect to MongoDB server: ${err.message}`);
    console.warn("[Database Notice] Falling back to In-Memory store for all Add/Edit/Delete/Update API operations.");
    console.warn("[Database Notice] To persist to real MongoDB, start your local MongoDB service or set MONGODB_URI in .env!\n");
  }
}

function getMemoryStore() {
  return memoryBlogs;
}

function setMemoryStore(newStore) {
  memoryBlogs = newStore;
}

function getDbStatus() {
  return {
    connected: isConnected,
    mode: isConnected ? "MongoDB" : "In-Memory Fallback"
  };
}

module.exports = {
  connectDB,
  getMemoryStore,
  setMemoryStore,
  getDbStatus
};
