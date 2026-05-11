import { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { flushSync } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';

const ProjectPage = lazy(() => import('./pages/ProjectPage'));

/** Developer mode toggles debug-style UI (badges, outlines, extra notes) from the navbar switch. */
function AppRoutes() {
  const [developerMode, setDeveloperMode] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = useCallback(() => {
    const run = () => {
      flushSync(() => {
        setDarkMode((v) => !v);
      });
    };
    if (typeof document.startViewTransition === 'function') {
      document.startViewTransition(run);
    } else {
      run();
    }
  }, []);

  return (
    <Routes>
      <Route
        element={
          <MainLayout
            developerMode={developerMode}
            onToggleDev={() => setDeveloperMode((v) => !v)}
            darkMode={darkMode}
            onToggleDark={toggleDarkMode}
          />
        }
      >
        <Route index element={<Home />} />
        <Route
          path="projects/:slug"
          element={
            <Suspense
              fallback={
                <div className="rounded-xl border border-slate-200 bg-white px-6 py-12 text-center text-sm text-slate-600 shadow-panel dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
                  Loading project…
                </div>
              }
            >
              <ProjectPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
