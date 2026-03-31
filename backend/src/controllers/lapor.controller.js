import { getLaporList, createLapor, getLaporById, updateLaporStatus } from "../models/lapor.model.js";

const listLapor = async (req, res) => {
  const data = await getLaporList(req.user.id);
  res.json({ message: "Lapor data", data });
};

const createLaporItem = async (req, res) => {
  const { title, description } = req.body;
  const result = await createLapor({ userId: req.user.id, title, description });
  res.json({ message: "Lapor created", result });
};

const getLaporDetail = async (req, res) => {
  const data = await getLaporById(req.params.id);
  res.json({ message: "Lapor detail", data });
};

const updateLaporStatusItem = async (req, res) => {
  const { status } = req.body;
  const result = await updateLaporStatus({ id: req.params.id, status });
  res.json({ message: "Lapor status updated", result });
};

export { listLapor, createLaporItem, getLaporDetail, updateLaporStatusItem };
