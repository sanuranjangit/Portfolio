import { useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { cn } from '../../utils/helpers';

export default function MainLayout({
  developerMode = false,
  onToggleDev,
  darkMode = false,
  onToggleDark,
}) {
  const outletContext = useMemo(
    () => ({ developerMode, darkMode }),
    [developerMode, darkMode]
  );
  return (
    <div
      className={cn(
        'min-h-screen bg-slate-100 transition-colors duration-500 ease-in-out dark:bg-slate-950',
        developerMode && 'bg-slate-200/80 dark:bg-slate-900'
      )}
    >
      <Navbar
        developerMode={developerMode}
        onToggleDev={onToggleDev}
        darkMode={darkMode}
        onToggleDark={onToggleDark}
      />
      <div className="mx-auto max-w-[1248px] px-4 py-6 sm:px-6 lg:py-8">
        <div className="grid grid-cols-1 gap-[20px] lg:grid-cols-[minmax(0,286px)_minmax(0,1fr)] lg:items-start">
          <Sidebar developerMode={developerMode} />
          <main className="min-w-0 space-y-6">
            <Outlet context={outletContext} />
          </main>
        </div>
      </div>
    </div>
  );
}
