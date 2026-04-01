import pool from "../config/db.js";

const getLaporList = async (userId) => {
    const [rows] = await pool.query(
        `SELECT id, title, description, status, created_at 
         FROM laporan 
         WHERE user_id = ? 
         ORDER BY created_at DESC`,
        [userId]
    );
    return rows;
};

const createLapor = async ({ userId, title, description }) => {
    const [result] = await pool.query(
        `INSERT INTO laporan (user_id, title, description, status)
        VALUES (?, ?, ?, 'baru')`,
        [userId, title, description]
    );
    return { id: result.insertId };
}

const getLaporById = async ( laporId ) => {
    const [rows] = await pool.query(
        `SELECT l.id, l.title, l.description, l.status, l.created_at,
                u.name AS user_name
         FROM laporan l
         JOIN users u ON l.user_id = u.id
         WHERE l.id = ?`,
        [laporId]
    );
    return rows[0] || null;
}

const updateLaporStatus = async (laporId, status) => {
    const validStatuses = ['baru', 'diproses', 'selesai', 'ditolak'];
    if (!validStatuses.includes(status)) {
        throw new Error("Status tidak valid.");
    }
    const [result] = await pool.query(
        `UPDATE laporan SET status = ? WHERE id = ?`,
        [status, laporId]
    );
    return { affectedRows: result.affectedRows };
};

export { getLaporList, createLapor, getLaporById, updateLaporStatus };
