import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { DefaultTheme, PaperProvider, ThemeProvider } from "react-native-paper";

import { selectColorScheme } from "@/constant/app-color-schema";
import { useAppColorScheme } from "@/store/app-customizations/useAppColorScheme";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Prevent splash screen auto-hide
SplashScreen.preventAutoHideAsync();

// Set the animation options. This is optional.
SplashScreen.setOptions({
  duration: 100,
  fade: true,
});

function AppContent() {
  const { colorScheme } = useAppColorScheme();

  const theme = {
    ...DefaultTheme,
    colors: selectColorScheme(colorScheme),
  };

  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme} settings={{ rippleEffectEnabled: false }}>
        <ThemeProvider theme={theme}>
          <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
            <Stack
              screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: theme.colors.background },
              }}
            >
              <Stack.Screen name="index" />
              <Stack.Screen name="(main)" />
              <Stack.Screen name="(auth)" />
            </Stack>
          </View>

          <StatusBar style={colorScheme} animated />
        </ThemeProvider>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default function Main() {
  const [isAppReady, setIsAppReady] = useState(false);

  const [fontLoaded, fontError] = useFonts({
    "gsans-normal": require("@/assets/fonts/GoogleSans-Regular.ttf"),
    "gsans-medium": require("@/assets/fonts/GoogleSans-Medium.ttf"),
    "gsans-semibold": require("@/assets/fonts/GoogleSans-SemiBold.ttf"),
    "gsans-bold": require("@/assets/fonts/GoogleSans-Bold.ttf"),
  });

  useEffect(() => {
    // other than fetching fonts and running db migration,
    // this fn also can be used for when we want to fetch initial data for certain components
    const prepareApp = async () => {
      const isFontsLoaded = fontLoaded || fontError;
      if (isFontsLoaded) {
        try {
          setIsAppReady(true);
          SplashScreen.hideAsync();
        } catch (error: any) {
          console.log(error.message);
        }
      }
    };

    prepareApp();
  }, [fontLoaded, fontError]);

  const contentRenderer = () => {
    if (!isAppReady) return null;
    return <AppContent />;
  };

  return <GestureHandlerRootView>{contentRenderer()}</GestureHandlerRootView>;
}
