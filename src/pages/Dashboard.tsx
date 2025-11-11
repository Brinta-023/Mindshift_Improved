import { useState } from 'react';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import Sidebar from '../components/dashboard/Sidebar';
import ChatArea from '../components/dashboard/ChatArea';
import JournalArea from '../components/dashboard/JournalArea';
import RightPanel from '../components/dashboard/RightPanel';
import SettingsPanel from '../components/dashboard/SettingsPanel';
import TreeRing from '../components/TreeRing';
import { useTheme } from '../contexts/ThemeContext';

type View = 'chat' | 'journal' | 'settings' | 'goals';

export default function Dashboard() {
  const [currentView, setCurrentView] = useState<View>('chat');
  const [selectedRegion, setSelectedRegion] = useState('US');
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10 dark:opacity-5">
        <TreeRing
          ringCount={12}
          className="absolute -top-20 -left-20 w-[400px] h-[400px]"
        />
        <TreeRing
          ringCount={8}
          className="absolute top-1/3 -right-10 w-[300px] h-[300px]"
        />
        <TreeRing
          ringCount={10}
          className="absolute -bottom-20 left-1/4 w-[350px] h-[350px]"
        />
      </div>

      <div className="flex h-screen bg-gradient-to-br from-warm-white via-mint-50/20 to-sage-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors relative">
        <Sidebar currentView={currentView} onViewChange={setCurrentView} />

        <div className="flex-1 flex flex-col overflow-hidden">
          <DashboardHeader
            selectedRegion={selectedRegion}
            onRegionChange={setSelectedRegion}
            darkMode={isDark}
            onDarkModeToggle={toggleTheme}
          />

          <div className="flex-1 flex overflow-hidden">
            <main className="flex-1 overflow-y-auto p-6">
              {currentView === 'chat' && <ChatArea />}
              {currentView === 'journal' && <JournalArea />}
              {currentView === 'settings' && <SettingsPanel />}
              {currentView === 'goals' && (
                <div className="text-center text-gray-600 dark:text-gray-400 mt-20">
                  Goals & Progress view coming soon...
                </div>
              )}
            </main>

            <RightPanel selectedRegion={selectedRegion} />
          </div>
        </div>
      </div>
    </div>
  );
}
