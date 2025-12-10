import app from "../src/app.js";
import connectDB from "../src/db/index.js";

export default async function handler(req, res) {
  await connectDB();        // ✅ connect per request (cached)
  return app(req, res);     // ✅ let Express handle routing
}
