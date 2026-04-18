import { Wallet } from 'lucide-react-native';
import { EmptyState, Screen } from '@/components';
import { useTheme } from '@/theme';

export default function Budget() {
  const theme = useTheme();
  return (
    <Screen>
      <EmptyState
        icon={<Wallet color={theme.colors.info} size={48} />}
        title="Budget ancora da impostare"
        subtitle="Monitora le spese mensili per cibo, vet e accessori."
      />
    </Screen>
  );
}
