import { FileText, Upload, Send, CheckCircle, Clock, Loader } from 'lucide-react';
import { useState } from 'react';

export default function Lapor() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: 'infrastructure',
    description: '',
  });

  const [complaints, setComplaints] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComplaint = {
      id: `LPR-${String(complaints.length + 1).padStart(3, '0')}`,
      title: formData.title,
      category: formData.category,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      status: 'submitted',
      description: formData.description,
    };
    setComplaints([newComplaint, ...complaints]);
    setFormData({ title: '', category: 'infrastructure', description: '' });
    setShowForm(false);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'submitted':
        return 'bg-orange-500';
      case 'processed':
        return 'bg-blue-500';
      case 'resolved':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusProgress = (status) => {
    switch (status) {
      case 'submitted':
        return 33;
      case 'processed':
        return 66;
      case 'resolved':
        return 100;
      default:
        return 0;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Lapor Complaints</h1>
          <p className="text-blue-200/60">Laporkan isu dan pantau statusnya</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
        >
          <FileText size={20} />
          New Complaint
        </button>
      </div>

      {showForm && (
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-white mb-6">Submit a Complaint</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-blue-200 mb-2 font-medium">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200/40 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Brief description of the issue"
                required
              />
            </div>

            <div>
              <label className="block text-blue-200 mb-2 font-medium">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              >
                <option value="infrastructure">Infrastructure</option>
                <option value="utilities">Utilities</option>
                <option value="environment">Environment</option>
                <option value="healthcare">Healthcare</option>
                <option value="education">Education</option>
                <option value="transportation">Transportation</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-blue-200 mb-2 font-medium">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200/40 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                placeholder="Provide detailed information about the issue"
                required
              />
            </div>

            <div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center hover:border-blue-500/50 transition-all cursor-pointer">
              <Upload className="mx-auto mb-3 text-blue-300" size={32} />
              <p className="text-blue-200 font-medium mb-1">Upload supporting documents or images</p>
              <p className="text-blue-200/60 text-sm">Click to browse or drag and drop files here</p>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Submit Complaint
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-6 py-3 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold rounded-xl transition-all duration-300"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="space-y-4">
        {complaints.length === 0 && (
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-blue-200/70">
            Belum ada laporan. Data pengaduan akan tampil di sini.
          </div>
        )}

        {complaints.map((complaint) => (
          <div
            key={complaint.id}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-blue-300 font-mono text-sm">{complaint.id}</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-semibold rounded-lg border border-blue-500/30">
                    {complaint.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{complaint.title}</h3>
                <p className="text-blue-200/70 text-sm">{complaint.description}</p>
              </div>
              <span className="text-blue-200/60 text-sm whitespace-nowrap">{complaint.date}</span>
            </div>

            <div className="mt-6 mb-4">
              <div className="relative">
                <div className="flex justify-between mb-4">
                  <div className="flex-1 text-center relative">
                    <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${
                      complaint.status === 'submitted' || complaint.status === 'processed' || complaint.status === 'resolved'
                        ? 'bg-green-500'
                        : 'bg-white/20'
                    } transition-all duration-500`}>
                      <CheckCircle className="text-white" size={20} />
                    </div>
                    <p className={`mt-2 text-sm font-medium ${
                      complaint.status === 'submitted' || complaint.status === 'processed' || complaint.status === 'resolved'
                        ? 'text-white'
                        : 'text-blue-200/60'
                    }`}>
                      Submitted
                    </p>
                  </div>

                  <div className="flex-1 text-center relative">
                    <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${
                      complaint.status === 'processed' || complaint.status === 'resolved'
                        ? 'bg-blue-500'
                        : complaint.status === 'submitted'
                        ? 'bg-blue-500/50 animate-pulse'
                        : 'bg-white/20'
                    } transition-all duration-500`}>
                      {complaint.status === 'submitted' ? (
                        <Loader className="text-white animate-spin" size={20} />
                      ) : (
                        <Clock className="text-white" size={20} />
                      )}
                    </div>
                    <p className={`mt-2 text-sm font-medium ${
                      complaint.status === 'processed' || complaint.status === 'resolved'
                        ? 'text-white'
                        : 'text-blue-200/60'
                    }`}>
                      Processed
                    </p>
                  </div>

                  <div className="flex-1 text-center relative">
                    <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${
                      complaint.status === 'resolved'
                        ? 'bg-green-500'
                        : 'bg-white/20'
                    } transition-all duration-500`}>
                      <CheckCircle className="text-white" size={20} />
                    </div>
                    <p className={`mt-2 text-sm font-medium ${
                      complaint.status === 'resolved'
                        ? 'text-white'
                        : 'text-blue-200/60'
                    }`}>
                      Resolved
                    </p>
                  </div>
                </div>

                <div className="absolute top-5 left-0 right-0 h-1 bg-white/10 -z-10">
                  <div
                    className={`h-full ${getStatusColor(complaint.status)} transition-all duration-1000`}
                    style={{ width: `${getStatusProgress(complaint.status)}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <div className={`px-4 py-2 rounded-lg font-semibold ${
                complaint.status === 'submitted'
                  ? 'bg-orange-500/20 text-orange-300'
                  : complaint.status === 'processed'
                  ? 'bg-blue-500/20 text-blue-300'
                  : 'bg-green-500/20 text-green-300'
              }`}>
                {complaint.status === 'submitted' && 'Waiting for Review'}
                {complaint.status === 'processed' && 'Under Investigation'}
                {complaint.status === 'resolved' && 'Issue Resolved'}
              </div>
              <button className="px-4 py-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-medium rounded-lg transition-all duration-300">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
