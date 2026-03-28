import { useState } from 'react';
import BottomNav from './components/BottomNav.jsx';
import Dashboard from './components/Dashboard.jsx';
import Forum from './components/Forum.jsx';
import Lapor from './components/Lapor.jsx';
import Voting from './components/Voting.jsx';
import Chatbot from './components/Chatbot.jsx';

function App() {
  const [activeView, setActiveView] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1128] via-[#1a2744] to-[#0f1b35] pb-24">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {activeView === 'dashboard' && <Dashboard />}
        {activeView === 'forum' && <Forum />}
        {activeView === 'lapor' && <Lapor />}
        {activeView === 'voting' && <Voting />}
      </div>

      <BottomNav activeView={activeView} onViewChange={setActiveView} />
      <Chatbot />
    </div>
  );
}

export default App;
