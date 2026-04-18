import { Link, Stack } from 'expo-router';
import { Screen, Text, Button } from '@/components';

export default function NotFound() {
  return (
    <>
      <Stack.Screen options={{ title: 'Pagina non trovata' }} />
      <Screen>
        <Text variant="h2">Ops, niente qui.</Text>
        <Text variant="body">La pagina che cerchi non esiste.</Text>
        <Link href="/" asChild>
          <Button label="Torna alla home" />
        </Link>
      </Screen>
    </>
  );
}
