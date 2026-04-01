import { getLaporList, createLapor, getLaporById, updateLaporStatus } from "../models/lapor.model.js";

const listLapor = async (req, res) => {
  try {
    const data = await getLaporList(req.user.id);
    res.json({ message: "Lapor data", data });
  } catch (err) {
    res.status(500).json({ message: "Gagal mengambil data laporan.", error: err.message });
  }
};

const createLaporItem = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(400).json({ message: "Title dan description wajib diisi." });
    }
    const result = await createLapor({ userId: req.user.id, title, description });
    res.status(201).json({ message: "Laporan berhasil dibuat.", result });
  } catch (err) {
    res.status(500).json({ message: "Gagal membuat laporan.", error: err.message });
  }
};

const getLaporDetail = async (req, res) => {
  try {
    const data = await getLaporById(req.params.id);
    if (!data) return res.status(404).json({ message: "Laporan tidak ditemukan." });
    res.json({ message: "Lapor detail", data });
  } catch (err) {
    res.status(500).json({ message: "Gagal mengambil detail laporan.", error: err.message });
  }
};

const updateLaporStatusItem = async (req, res) => {
  try {
    const { status } = req.body;
    if (!status) return res.status(400).json({ message: "Status wajib diisi." });
    const result = await updateLaporStatus(req.params.id, status);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Laporan tidak ditemukan." });
    }
    res.json({ message: "Status laporan berhasil diperbarui." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { listLapor, createLaporItem, getLaporDetail, updateLaporStatusItem };

