import { getDashboardSummary } from "../models/dashboard.model.js";

const getDashboard = async (req, res) => {
  const data = await getDashboardSummary();
  res.json({ message: "Dashboard data", data });
};

export { getDashboard };
