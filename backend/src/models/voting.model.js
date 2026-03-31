const getVotingList = async () => {
    //TODO: query database untuk ambil data voting
    return [];
};

const saveVote = async ({ userId, candidateId }) => {
    //TODO: query database untuk simpan vote
    return { success: true };
};

export { getVotingList, saveVote };