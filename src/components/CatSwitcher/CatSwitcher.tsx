import { Pressable, ScrollView, View, type ViewStyle } from 'react-native';
import { Plus } from 'lucide-react-native';
import { useTheme } from '@/theme';
import { Avatar } from '../Avatar';
import { useActiveCat } from '@/features/cats';

export function CatSwitcher() {
  const theme = useTheme();
  const { activeCatId, setActiveCatId, cats } = useActiveCat();

  const container: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.sm,
    backgroundColor: theme.colors.background,
  };

  const addSlot: ViewStyle = {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1.5,
    borderColor: theme.colors.border,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={container}
    >
      {cats.map((cat) => {
        const isActive = cat.id === activeCatId;
        return (
          <Pressable
            key={cat.id}
            onPress={() => setActiveCatId(cat.id)}
            style={{
              borderWidth: isActive ? 2 : 0,
              borderColor: theme.colors.primary,
              borderRadius: 28,
              padding: 2,
            }}
          >
            <Avatar initials={cat.name.slice(0, 1).toUpperCase()} size="md" />
          </Pressable>
        );
      })}
      <Pressable style={addSlot} accessibilityLabel="Aggiungi gatto">
        <Plus color={theme.colors.textSecondary} size={20} />
      </Pressable>
      <View />
    </ScrollView>
  );
}
