const getLaporList = async () => [];
const createLapor = async ({ userId, title, content }) => ({ id: 1 });
const getLaporById = async (id) => null;
const updateLaporStatus = async ({ id, status }) => ({ success: true });

export { getLaporById, createLapor, getLaporList, updateLaporStatus };