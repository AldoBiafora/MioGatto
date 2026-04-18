import { useLocalSearchParams } from 'expo-router';
import { Screen, Text } from '@/components';

export default function DiarioDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <Screen>
      <Text variant="h2">Momento {id}</Text>
      <Text variant="body">Dettaglio del ricordo (placeholder).</Text>
    </Screen>
  );
}
