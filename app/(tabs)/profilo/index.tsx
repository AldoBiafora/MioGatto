import { Cat } from 'lucide-react-native';
import { EmptyState, Screen } from '@/components';
import { useTheme } from '@/theme';

export default function ProfiloHome() {
  const theme = useTheme();
  return (
    <Screen>
      <EmptyState
        icon={<Cat color={theme.colors.primary} size={48} />}
        title="Presenta il tuo gatto"
        subtitle="Microchip, età, allergie e condizioni mediche."
      />
    </Screen>
  );
}
