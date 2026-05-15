'use client';

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import useSWR from 'swr';

const fetcher = (u: string) => fetch(u).then((r) => r.json());

const VALID_THEMES = ['light', 'paper', 'dark'] as const;
type Theme = typeof VALID_THEMES[number];

function applyTheme(theme: string) {
  const t: Theme = VALID_THEMES.includes(theme as Theme) ? (theme as Theme) : 'light';
  if (t === 'light') {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.setAttribute('data-theme', t);
  }
  // Persist in localStorage so the theme applies before the first API response
  try { localStorage.setItem('dp-theme', t); } catch { /* */ }
}

/** Read the stored theme from localStorage immediately on mount (no flash). */
function restoreStoredTheme() {
  try {
    const stored = localStorage.getItem('dp-theme');
    if (stored) applyTheme(stored);
  } catch { /* */ }
}

export function ThemeProvider() {
  const { status } = useSession();

  // Restore on first render so there's no flash
  useEffect(() => { restoreStoredTheme(); }, []);

  // Fetch user prefs once signed in
  const { data } = useSWR<any>(
    status === 'authenticated' ? '/api/user' : null,
    fetcher,
    { revalidateOnFocus: false },
  );

  // Apply theme whenever the server value arrives or changes
  useEffect(() => {
    if (data?.user?.theme) applyTheme(data.user.theme);
  }, [data?.user?.theme]);

  return null; // renders nothing — side-effect only
}

// Exported helper so the settings page can preview a theme live
export { applyTheme };
