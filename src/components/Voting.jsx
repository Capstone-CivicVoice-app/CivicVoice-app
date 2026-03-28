import { CheckCircle, Users, TrendingUp, Plus, BarChart3 } from 'lucide-react';
import { useState } from 'react';

export default function Voting() {
  const [votedLeader, setVotedLeader] = useState(null);
  const [votedPolls, setVotedPolls] = useState(new Set());

  const [leaders, setLeaders] = useState([]);
  const [polls, setPolls] = useState([]);

  const handleLeaderVote = (leaderId) => {
    if (votedLeader === null) {
      setVotedLeader(leaderId);
      setLeaders(leaders.map((leader) => {
        if (leader.id === leaderId) {
          const newVotes = leader.votes + 1;
          const totalVotes = leaders.reduce((sum, l) => sum + l.votes, 0) + 1;
          return { ...leader, votes: newVotes, percentage: (newVotes / totalVotes) * 100 };
        }
        return leader;
      }));
    }
  };

  const handlePollVote = (pollId, optionId) => {
    if (!votedPolls.has(pollId)) {
      setVotedPolls(new Set(votedPolls).add(pollId));
      setPolls(polls.map((poll) => {
        if (poll.id === pollId) {
          const newTotalVotes = poll.totalVotes + 1;
          const newOptions = poll.options.map((option) => {
            if (option.id === optionId) {
              const newVotes = option.votes + 1;
              return { ...option, votes: newVotes, percentage: (newVotes / newTotalVotes) * 100 };
            }
            return { ...option, percentage: (option.votes / newTotalVotes) * 100 };
          });
          return { ...poll, totalVotes: newTotalVotes, options: newOptions };
        }
        return poll;
      }));
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Voting & Polls</h1>
          <p className="text-blue-200/60">Sarana voting & polling warga</p>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Leader Popularity</h2>
          <div className="flex items-center gap-2 text-blue-200/80">
            <Users size={20} />
            <span className="font-semibold">{leaders.reduce((sum, l) => sum + (l.votes || 0), 0).toLocaleString()} total votes</span>
          </div>
        </div>

        {leaders.length === 0 && (
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-blue-200/70">
            Belum ada kandidat. Tambahkan data kandidat untuk menampilkan kartu.
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {leaders.map((leader) => (
            <div
              key={leader.id}
              className={`bg-white/10 backdrop-blur-xl border-2 rounded-2xl p-6 transition-all duration-300 ${
                votedLeader === leader.id
                  ? 'border-green-500 bg-green-500/10 scale-105'
                  : votedLeader === null
                  ? 'border-white/20 hover:border-blue-500/50 hover:bg-white/15'
                  : 'border-white/10 opacity-60'
              }`}
            >
              <div className="relative mb-4">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-48 object-cover rounded-xl"
                />
                {votedLeader === leader.id && (
                  <div className="absolute top-2 right-2 bg-green-500 text-white p-2 rounded-full">
                    <CheckCircle size={20} />
                  </div>
                )}
              </div>

              <h3 className="text-xl font-bold text-white mb-1">{leader.name}</h3>
              <p className="text-blue-200/60 text-sm mb-4">{leader.position}</p>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-blue-200/80 text-sm">Support</span>
                  <span className="text-white font-bold">{leader.percentage?.toFixed?.(1) ?? '0.0'}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-500"
                    style={{ width: `${leader.percentage || 0}%` }}
                  ></div>
                </div>
                <p className="text-blue-200/60 text-xs mt-1">{(leader.votes || 0).toLocaleString()} votes</p>
              </div>

              <button
                onClick={() => handleLeaderVote(leader.id)}
                disabled={votedLeader !== null}
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                  votedLeader === leader.id
                    ? 'bg-green-500 text-white'
                    : votedLeader === null
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg hover:scale-105'
                    : 'bg-white/10 text-blue-200/40 cursor-not-allowed'
                }`}
              >
                {votedLeader === leader.id ? 'Voted' : votedLeader === null ? 'Vote' : 'Locked'}
              </button>
            </div>
          ))}
        </div>

        {votedLeader && (
          <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-6 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-400" size={24} />
              <div>
                <p className="text-green-300 font-semibold">Vote recorded successfully!</p>
                <p className="text-green-300/70 text-sm">Thank you for participating in the democratic process.</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Community Polls</h2>
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2">
            <Plus size={20} />
            Create Poll
          </button>
        </div>

        <div className="space-y-6">
          {polls.length === 0 && (
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-blue-200/70">
              Belum ada poll. Tambahkan data poll untuk menampilkan daftar.
            </div>
          )}

          {polls.map((poll) => {
            const hasVoted = votedPolls.has(poll.id);

            return (
              <div
                key={poll.id}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{poll.question}</h3>
                    <div className="flex items-center gap-4 text-sm text-blue-200/60">
                      <span>By {poll.author}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Users size={14} />
                        {poll.totalVotes?.toLocaleString?.() ?? 0} votes
                      </span>
                      <span>•</span>
                      <span className="text-orange-400">{poll.timeLeft}</span>
                    </div>
                  </div>
                  <button className="p-2 bg-white/10 hover:bg-white/15 border border-white/20 rounded-lg transition-all">
                    <BarChart3 size={20} className="text-blue-300" />
                  </button>
                </div>

                <div className="space-y-3">
                  {poll.options.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handlePollVote(poll.id, option.id)}
                      disabled={hasVoted}
                      className={`w-full text-left transition-all duration-300 ${
                        hasVoted ? 'cursor-default' : 'cursor-pointer hover:scale-[1.02]'
                      }`}
                    >
                      <div className={`relative overflow-hidden rounded-xl border-2 transition-all ${
                        hasVoted
                          ? 'border-white/20 bg-white/5'
                          : 'border-white/20 bg-white/10 hover:border-blue-500/50'
                      }`}>
                        {hasVoted && (
                          <div
                            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 transition-all duration-1000"
                            style={{ width: `${option.percentage || 0}%` }}
                          ></div>
                        )}
                        <div className="relative px-4 py-3 flex items-center justify-between">
                          <span className="text-white font-medium">{option.text}</span>
                          {hasVoted && (
                            <div className="flex items-center gap-3">
                              <span className="text-blue-200/60 text-sm">{option.votes?.toLocaleString?.() ?? 0} votes</span>
                              <span className="text-white font-bold">{option.percentage?.toFixed?.(0) ?? 0}%</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {hasVoted && (
                  <div className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-300" />
                    <span className="text-green-300 text-sm font-medium">Your vote has been recorded</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-blue-500/20 rounded-xl">
            <TrendingUp className="text-blue-300" size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Voting Impact</h3>
            <p className="text-blue-200/70 mb-4">
              Ringkasan dampak voting dapat ditampilkan di sini.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-white mb-1">--</p>
                <p className="text-blue-200/60 text-sm">Metric A</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-white mb-1">--</p>
                <p className="text-blue-200/60 text-sm">Metric B</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-white mb-1">--</p>
                <p className="text-blue-200/60 text-sm">Metric C</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}