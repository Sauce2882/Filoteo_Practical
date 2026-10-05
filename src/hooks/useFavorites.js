import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "team-directory-favorites";

function readStoredFavorites() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.map(Number).filter((id) => Number.isFinite(id));
  } catch {
    return [];
  }
}

export default function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    if (typeof window === "undefined") return [];
    return readStoredFavorites();
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    } catch {
      // storage full / unavailable — ignore
    }
  }, [favorites]);

  useEffect(() => {
    function syncFromStorage() {
      setFavorites(readStoredFavorites());
    }
    window.addEventListener("storage", syncFromStorage);
    window.addEventListener("favorites-changed", syncFromStorage);
    return () => {
      window.removeEventListener("storage", syncFromStorage);
      window.removeEventListener("favorites-changed", syncFromStorage);
    };
  }, []);

  const toggleFavorite = useCallback((id) => {
    const numericId = Number(id);
    setFavorites((prev) => {
      const next = prev.includes(numericId)
        ? prev.filter((favId) => favId !== numericId)
        : [...prev, numericId];
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore
      }
      window.dispatchEvent(new CustomEvent("favorites-changed"));
      return next;
    });
  }, []);

  const isFavorite = useCallback(
    (id) => favorites.includes(Number(id)),
    [favorites]
  );

  const clearFavorites = useCallback(() => {
    setFavorites([]);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    } catch {
      // ignore
    }
    window.dispatchEvent(new CustomEvent("favorites-changed"));
  }, []);

  return { favorites, favoriteCount: favorites.length, isFavorite, toggleFavorite, clearFavorites };
}
