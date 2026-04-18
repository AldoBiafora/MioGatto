import { Boxes } from 'lucide-react-native';
import { EmptyState, Screen } from '@/components';
import { useTheme } from '@/theme';

export default function Scorte() {
  const theme = useTheme();
  return (
    <Screen>
      <EmptyState
        icon={<Boxes color={theme.colors.secondary} size={48} />}
        title="Nessuna scorta registrata"
        subtitle="Tieni sotto controllo quanto cibo è rimasto."
      />
    </Screen>
  );
}
