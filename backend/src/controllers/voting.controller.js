import { getVotingList, saveVote } from "../models/voting.model.js";

const listVoting = async (req, res) => {
    const data = await getVotingList();
    res.json({ message: "Voting data", data });
};

const submitVote = async (req, res) => {
    const { candidateId } = req.body;
    const result = await saveVote({ userId: req.user.id, candidateId });
    res.json({ message: "Vote submitted", result });
}

export { listVoting, submitVote };