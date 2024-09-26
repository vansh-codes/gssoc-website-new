import dbConnect from "../../utils/dbConnect";
import CALeaderboard from "../../utils/models/caLeaderboard";

const allowCors = (fn) => async (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  return await fn(req, res);
};

const handler = async (req, res) => {
  const { method } = req;

  console.log(`Received ${method} request`);

  await dbConnect();

  if (method === "GET") {
    try {
      const leaderboardData = await CALeaderboard.find({});
      return res.status(200).json({ success: true, data: leaderboardData });
    } catch (error) {
      console.error("Error fetching leaderboard data:", error.message);
      return res.status(500).json({ success: false, error: error.message });
    }
  } else {
    console.error(`Method ${method} not allowed`);
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }
};

export default allowCors(handler);
