import { Pressable, PressableProps, StyleSheet, View } from "react-native";
import { Surface, SurfaceProps, useTheme } from "react-native-paper";

import ThemedText from "./themed-text";

function SegmentedMenuWrapper({ children }: SurfaceProps) {
  return (
    <Surface mode="flat" elevation={5} style={{ borderRadius: 36 }}>
      {children}
    </Surface>
  );
}

type SegmentedMenuHeaderProps = {
  title: string;
};

function SegmentedMenuHeader({ title }: SegmentedMenuHeaderProps) {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.storeItemContainer,
        {
          borderBottomWidth: 1,
          borderColor: theme.colors.background,
        },
      ]}
    >
      <ThemedText weight="medium" variant="bodyMedium">
        {title}
      </ThemedText>
    </View>
  );
}

interface SegmentedMenuItemProps extends PressableProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

function SegmentedMenuItem({
  children,
  icon,
  ...rest
}: SegmentedMenuItemProps) {
  const theme = useTheme();

  return (
    <Pressable
      {...rest}
      style={[
        styles.storeItemContainer,
        {
          borderBottomWidth: 1,
          borderColor: theme.colors.background,
        },
      ]}
    >
      {icon}

      <View>{children}</View>
    </Pressable>
  );
}

interface SegmentedMenuFooterProps extends PressableProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

function SegmentedMenuFooter({
  children,
  icon,
  ...rest
}: SegmentedMenuFooterProps) {
  return (
    <Pressable {...rest} style={[styles.storeItemContainer]}>
      {icon}
      <View>{children}</View>
    </Pressable>
  );
}

export {
  SegmentedMenuFooter,
  SegmentedMenuHeader,
  SegmentedMenuItem,
  SegmentedMenuWrapper,
};

const styles = StyleSheet.create({
  storeItemContainer: {
    height: 56,
    paddingHorizontal: 16,

    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
