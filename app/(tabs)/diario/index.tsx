import { BookHeart } from 'lucide-react-native';
import { EmptyState, Screen } from '@/components';
import { useTheme } from '@/theme';

export default function DiarioHome() {
  const theme = useTheme();
  return (
    <Screen>
      <EmptyState
        icon={<BookHeart color={theme.colors.primary} size={48} />}
        title="Nessun ricordo ancora"
        subtitle="Salva foto e note dei momenti speciali del tuo gatto."
      />
    </Screen>
  );
}
