import { BookHeart, Cat, HeartPulse, Package, type LucideIcon } from 'lucide-react-native';

export type TabRoute = 'salute' | 'dispensa' | 'diario' | 'profilo';

export type TabConfig = {
  name: TabRoute;
  label: string;
  icon: LucideIcon;
};

export const TABS: TabConfig[] = [
  { name: 'salute', label: 'Salute', icon: HeartPulse },
  { name: 'dispensa', label: 'Dispensa', icon: Package },
  { name: 'diario', label: 'Diario', icon: BookHeart },
  { name: 'profilo', label: 'Profilo', icon: Cat },
];
