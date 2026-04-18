import { HeartPulse } from 'lucide-react-native';
import { EmptyState, Screen } from '@/components';
import { useTheme } from '@/theme';

export default function SaluteHome() {
  const theme = useTheme();
  return (
    <Screen>
      <EmptyState
        icon={<HeartPulse color={theme.colors.primary} size={48} />}
        title="La salute del tuo gatto, al sicuro."
        subtitle="Qui troverai appuntamenti, vaccini e andamento del peso."
      />
    </Screen>
  );
}
