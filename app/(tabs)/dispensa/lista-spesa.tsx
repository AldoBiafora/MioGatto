import { ListChecks } from 'lucide-react-native';
import { EmptyState, Screen } from '@/components';
import { useTheme } from '@/theme';

export default function ListaSpesa() {
  const theme = useTheme();
  return (
    <Screen>
      <EmptyState
        icon={<ListChecks color={theme.colors.primary} size={48} />}
        title="Lista vuota"
        subtitle="Verrà compilata in automatico quando le scorte saranno basse."
      />
    </Screen>
  );
}
