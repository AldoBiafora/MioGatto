import { TrendingUp } from 'lucide-react-native';
import { EmptyState, Screen } from '@/components';
import { useTheme } from '@/theme';

export default function Peso() {
  const theme = useTheme();
  return (
    <Screen>
      <EmptyState
        icon={<TrendingUp color={theme.colors.info} size={48} />}
        title="Traccia il peso"
        subtitle="Aggiungi misurazioni periodiche per monitorare la crescita."
      />
    </Screen>
  );
}
