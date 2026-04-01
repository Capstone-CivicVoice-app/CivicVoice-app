import { LayoutDashboard, MessageSquare, FileText, Vote, UserCircle } from 'lucide-react';

export default function BottomNav({ activeView, onViewChange }) {
  const navItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'forum', icon: MessageSquare, label: 'Forum' },
    { id: 'lapor', icon: FileText, label: 'Lapor' },
    { id: 'voting', icon: Vote, label: 'Voting' },
    { id: 'profile', icon: UserCircle, label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-8 py-4 shadow-2xl">
        <div className="flex items-center gap-8">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;

            return (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className={`flex flex-col items-center gap-1 transition-all duration-300 ${
                  isActive ? 'text-blue-400' : 'text-white/60 hover:text-white/90'
                }`}
              >
                <div className={`p-2.5 rounded-xl transition-all duration-300 ${
                  isActive ? 'bg-blue-500/20' : 'hover:bg-white/5'
                }`}>
                  <Icon size={22} strokeWidth={2} />
                </div>
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
