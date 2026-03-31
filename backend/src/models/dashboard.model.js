const getDashboardSummary = async () => ({
    totalUsers: 0,
    totalLapor: 0,
    totalForumPosts: 0,
    totalVotes: 0,
    moodDistribution: {
        happy: 0,
        sad: 0,
        neutral: 0,
    },
});

export { getDashboardSummary };