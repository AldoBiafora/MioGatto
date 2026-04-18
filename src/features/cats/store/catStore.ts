import { create } from 'zustand';
import type { Cat } from '../types';

type CatStore = {
  activeCatId: string | null;
  cats: Cat[];
  setActiveCatId: (id: string | null) => void;
  setCats: (cats: Cat[]) => void;
};

export const useCatStore = create<CatStore>((set) => ({
  activeCatId: null,
  cats: [],
  setActiveCatId: (id) => set({ activeCatId: id }),
  setCats: (cats) => set({ cats }),
}));
