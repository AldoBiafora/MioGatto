import { CalendarDays } from 'lucide-react-native';
import { EmptyState, Screen } from '@/components';
import { useTheme } from '@/theme';

export default function Appuntamenti() {
  const theme = useTheme();
  return (
    <Screen>
      <EmptyState
        icon={<CalendarDays color={theme.colors.primary} size={48} />}
        title="Nessun appuntamento ancora"
        subtitle="Aggiungi la prossima visita dal veterinario."
      />
    </Screen>
  );
}
