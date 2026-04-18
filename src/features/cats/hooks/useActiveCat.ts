import { useCatStore } from '../store/catStore';

export function useActiveCat() {
  const activeCatId = useCatStore((s) => s.activeCatId);
  const cats = useCatStore((s) => s.cats);
  const setActiveCatId = useCatStore((s) => s.setActiveCatId);
  const active = cats.find((c) => c.id === activeCatId) ?? null;
  return { activeCatId, active, cats, setActiveCatId };
}
