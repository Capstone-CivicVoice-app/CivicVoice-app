import { getMoodSummary as getMoodSummaryModel, submitMood as submitMoodModel } from "../models/mood.model.js";

const getMoodSummary = async (req, res) => {
  const data = await getMoodSummaryModel();
  res.json({ message: "Mood summary data", data });
};

const submitMood = async (req, res) => {
  const { mood } = req.body;
  const result = await submitMoodModel({ userId: req.user.id, mood });
  res.json({ message: "Mood submitted", result });
};

export { getMoodSummary, submitMood };
