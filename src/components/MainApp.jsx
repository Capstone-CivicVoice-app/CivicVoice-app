import { useState } from 'react';
import BottomNav from './BottomNav.jsx';
import Dashboard from './Dashboard.jsx';
import Forum from './Forum.jsx';
import Lapor from './Lapor.jsx';
import Voting from './Voting.jsx';
import Chatbot from './Chatbot.jsx';
import Profile from './Profile.jsx';

function MainApp() {
  const [activeView, setActiveView] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1128] via-[#1a2744] to-[#0f1b35] pb-24">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {activeView === 'dashboard' && <Dashboard />}
        {activeView === 'forum' && <Forum />}
        {activeView === 'lapor' && <Lapor />}
        {activeView === 'voting' && <Voting />}
        {activeView === 'profile' && <Profile />}
      </div>

      <BottomNav activeView={activeView} onViewChange={setActiveView} />
      <Chatbot />
    </div>
  );
}

export default MainApp;
