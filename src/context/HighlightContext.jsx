import { createContext, useCallback, useContext, useMemo, useState } from "react";

const HighlightContext = createContext({
  keywords: [],
  pulseKeywords: () => {},
  clearPulse: () => {},
  isProjectHighlighted: () => false,
});

function projectMatches(project, keywords) {
  if (!keywords.length) return false;
  const blob = [project.name, project.tagline, project.meta, ...(project.stack || [])]
    .join(" ")
    .toLowerCase();

  return keywords.some((keyword) => {
    const token = keyword.toLowerCase().trim();
    if (token.length < 3) return false;
    return blob.includes(token);
  });
}

export function HighlightProvider({ children }) {
  const [keywords, setKeywords] = useState([]);

  const pulseKeywords = useCallback((next) => {
    setKeywords(Array.isArray(next) ? next : []);
  }, []);

  const clearPulse = useCallback(() => setKeywords([]), []);

  const isProjectHighlighted = useCallback(
    (project) => projectMatches(project, keywords),
    [keywords]
  );

  const value = useMemo(
    () => ({ keywords, pulseKeywords, clearPulse, isProjectHighlighted }),
    [keywords, pulseKeywords, clearPulse, isProjectHighlighted]
  );

  return (
    <HighlightContext.Provider value={value}>{children}</HighlightContext.Provider>
  );
}

// Context modules export both the provider and the consumer hook.
// eslint-disable-next-line react-refresh/only-export-components
export function useHighlight() {
  return useContext(HighlightContext);
}
