import pool from "../config/db";

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

const getLaporById = async ( laporId ) => null;

const updateLaporStatus = async (laporId, status) => ({ success: true });

export { getLaporList, createLapor, getLaporById, updateLaporStatus };