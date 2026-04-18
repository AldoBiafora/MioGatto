import { Syringe } from 'lucide-react-native';
import { EmptyState, Screen } from '@/components';
import { useTheme } from '@/theme';

export default function Vaccini() {
  const theme = useTheme();
  return (
    <Screen>
      <EmptyState
        icon={<Syringe color={theme.colors.secondary} size={48} />}
        title="Libretto vaccinale vuoto"
        subtitle="Registra vaccini e richiami per non perdere le scadenze."
      />
    </Screen>
  );
}
