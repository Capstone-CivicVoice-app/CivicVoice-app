import ChatBot from "./Chatbot";


export default function Dashboard() {
  const stats = [];
  const sentimentData = [];
  const moods = [];
  const topIssues = [];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2"> Test Edit</h1>
          <p className="text-blue-200/60">Ringkasan partisipasi publik</p>
        </div>
        <div className="text-right text-sm text-blue-200/60">
          <p>Last updated</p>
          <p className="text-white font-medium">--</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.length === 0 && (
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-blue-200/70">
            Belum ada statistik. Isi data untuk menampilkan metrik utama.
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-6">Public Sentiment Analysis</h2>
          {sentimentData.length === 0 ? (
            <div className="h-64 flex items-center justify-center text-blue-200/60">
              Tambahkan data sentimen untuk menampilkan grafik.
            </div>
          ) : null}
        </div>

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-2">National Vibe Check</h2>
          <p className="text-blue-200/60 text-sm mb-6">Bagian ini siap diisi opsi mood.</p>
          {moods.length === 0 ? (
            <div className="text-blue-200/60 text-sm">Belum ada opsi mood.</div>
          ) : null}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white mb-4">Top Issues</h3>
          {topIssues.length === 0 ? (
            <div className="text-blue-200/60 text-sm">Isi daftar isu utama di sini.</div>
          ) : null}
        </div>

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white mb-4">Response Time</h3>
          <div className="text-blue-200/60 text-sm">Masukkan ringkasan response time.</div>
        </div>

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white mb-4">Engagement Rate</h3>
          <div className="text-blue-200/60 text-sm">Masukkan ringkasan engagement.</div>
        </div>
      </div>

        
    </div>
  );
}
