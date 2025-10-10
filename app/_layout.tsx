import { useMaterial3Theme } from "@pchmn/expo-material3-theme";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import {
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
  ThemeProvider,
} from "react-native-paper";

import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

// Prevent splash screen auto-hide
SplashScreen.preventAutoHideAsync();

// Set the animation options. This is optional.
SplashScreen.setOptions({
  duration: 100,
  fade: true,
});

export default function Main() {
  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme();

  const paperTheme =
    colorScheme === "dark"
      ? { ...MD3DarkTheme, colors: theme.dark }
      : { ...MD3LightTheme, colors: theme.light };

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <PaperProvider theme={paperTheme} settings={{ rippleEffectEnabled: false }}>
      <ThemeProvider theme={paperTheme}>
        <Stack />
      </ThemeProvider>
    </PaperProvider>
  );
}
