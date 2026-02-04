import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { CommonActions } from "@react-navigation/native";
import { BottomNavigation, useTheme } from "react-native-paper";

export default function CustomTabBar({
  navigation,
  state,
  descriptors,
  insets,
}: BottomTabBarProps) {
  const theme = useTheme();

  return (
    <BottomNavigation.Bar
      navigationState={state}
      safeAreaInsets={insets}
      style={{ backgroundColor: theme.colors.background }}
      // This is crucial: tell the bar how to handle the press
      onTabPress={({ route, preventDefault }) => {
        const event = navigation.emit({
          type: "tabPress",
          target: route.key,
          canPreventDefault: true,
        });

        if (
          state.index !== state.routes.indexOf(route) &&
          !event.defaultPrevented
        ) {
          navigation.dispatch({
            ...CommonActions.navigate(route.name, route.params),
            target: state.key,
          });
        }
      }}
      // Use the icons defined in your Tabs.Screen options
      renderIcon={({ route, focused, color }) => {
        const { options } = descriptors[route.key];
        if (options.tabBarIcon) {
          return options.tabBarIcon({ focused, color, size: 24 });
        }
        return null;
      }}
      getLabelText={({ route }) => {
        const { options } = descriptors[route.key];
        return options.title ?? route.name;
      }}
    />
  );
}
