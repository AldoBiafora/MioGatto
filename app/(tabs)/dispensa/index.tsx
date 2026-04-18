import { Package } from 'lucide-react-native';
import { EmptyState, Screen } from '@/components';
import { useTheme } from '@/theme';

export default function DispensaHome() {
  const theme = useTheme();
  return (
    <Screen>
      <EmptyState
        icon={<Package color={theme.colors.primary} size={48} />}
        title="La dispensa è vuota"
        subtitle="Gestisci cibo, scorte e budget in un unico posto."
      />
    </Screen>
  );
}
