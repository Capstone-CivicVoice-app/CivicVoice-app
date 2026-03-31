import { ArrowUp, MessageCircle, Share2, Clock, AlertCircle, CheckCircle, Timer } from 'lucide-react';
import { useState } from 'react';

export default function Forum() {
  const [posts, setPosts] = useState([]);

  const statusConfig = {
    open: { icon: AlertCircle, color: 'text-orange-400', bg: 'bg-orange-500/20', label: 'Open' },
    'in-progress': { icon: Timer, color: 'text-blue-400', bg: 'bg-blue-500/20', label: 'In Progress' },
    resolved: { icon: CheckCircle, color: 'text-green-400', bg: 'bg-green-500/20', label: 'Resolved' },
  };

  const handleUpvote = (id) => {
    setPosts(posts.map((post) =>
      post.id === id ? { ...post, upvotes: post.upvotes + 1 } : post
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Public Forum</h1>
          <p className="text-blue-200/60">Diskusi isu publik</p>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
          + New Post
        </button>
      </div>

      <div className="flex gap-3 mb-6">
        {['All', 'Infrastructure', 'Healthcare', 'Education', 'Environment', 'Transportation'].map((filter) => (
          <button
            key={filter}
            className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
              filter === 'All'
                ? 'bg-blue-500 text-white'
                : 'bg-white/10 text-blue-200/80 hover:bg-white/15 border border-white/20'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {posts.length === 0 && (
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-blue-200/70">
            Belum ada postingan. Tambahkan data forum di sini.
          </div>
        )}

        {posts.map((post) => {
          const StatusIcon = statusConfig[post.status]?.icon || AlertCircle;

          return (
            <div
              key={post.id}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex gap-4">
                <div className="flex flex-col items-center gap-2">
                  <button
                    onClick={() => handleUpvote(post.id)}
                    className="p-2 rounded-lg bg-white/10 hover:bg-blue-500/30 border border-white/20 hover:border-blue-500/50 transition-all duration-300 group"
                  >
                    <ArrowUp size={20} className="text-blue-300 group-hover:scale-110 transition-transform" />
                  </button>
                  <span className="text-white font-bold text-lg">{post.upvotes}</span>
                </div>

                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-semibold rounded-lg border border-blue-500/30">
                          {post.category}
                        </span>
                        <div className={`flex items-center gap-1.5 px-3 py-1 rounded-lg ${statusConfig[post.status]?.bg || 'bg-white/10'}`}>
                          <StatusIcon size={14} className={statusConfig[post.status]?.color || 'text-blue-200'} />
                          <span className={`text-xs font-semibold ${statusConfig[post.status]?.color || 'text-blue-200'}`}>
                            {statusConfig[post.status]?.label || 'Status'}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 hover:text-blue-300 transition-colors cursor-pointer">
                        {post.title}
                      </h3>
                      <p className="text-blue-200/70 text-sm leading-relaxed">{post.content}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/10">
                    <div className="flex items-center gap-4 text-sm text-blue-200/60">
                      <span className="flex items-center gap-1">
                        Posted by <span className="text-blue-300 font-medium">{post.author}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {post.timeAgo}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/20 transition-all duration-300 text-blue-200 hover:text-white">
                        <MessageCircle size={16} />
                        <span className="font-medium">{post.comments}</span>
                      </button>
                      <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/20 transition-all duration-300 text-blue-200 hover:text-white">
                        <Share2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center">
        <p className="text-blue-200/60 mb-4">Load more akan aktif setelah data tersedia</p>
        <button className="px-6 py-3 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold rounded-xl transition-all duration-300">
          Load More Posts
        </button>
      </div>
    </div>
  );
}
