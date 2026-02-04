import { Tabs } from "expo-router";
import { ChartAreaIcon, HomeIcon } from "lucide-react-native";
import { View } from "react-native";
import { useTheme } from "react-native-paper";

import { MAIN_TAB_BAR } from "@/contents/language-content";
import { useAppLanguage } from "@/store/app-customizations/useAppLanguage";

import CustomAppBar from "@/components/ui/custom-app-bar";
import { CustomTabBar } from "@/components/ui/custom-tab-bar";

export default function TabsLayout() {
  const theme = useTheme();
  const { appLanguage } = useAppLanguage();

  return (
    <View style={{ flex: 1 }}>
      <CustomAppBar />

      <Tabs
        initialRouteName="home-screen"
        screenOptions={{
          headerShown: false,
          sceneStyle: {
            backgroundColor: theme.colors.background,
          },
          animation: "shift",
        }}
        tabBar={(props) => <CustomTabBar {...props} />}
      >
        <Tabs.Screen
          name="home-screen"
          options={{
            title: MAIN_TAB_BAR.tabBarTitles.home[appLanguage],
            tabBarIcon: (props) => (
              <HomeIcon
                strokeWidth={1.5}
                color={props.color}
                fill={props.color}
                size={props.size}
                fillOpacity={0.3}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="transactions-screen"
          options={{
            title: MAIN_TAB_BAR.tabBarTitles.transactions[appLanguage],
            tabBarIcon: (props) => (
              <ChartAreaIcon
                strokeWidth={1.5}
                color={props.color}
                fill={props.color}
                size={props.size}
                fillOpacity={0.3}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="statistics-screen"
          options={{
            title: MAIN_TAB_BAR.tabBarTitles.statistics[appLanguage],
            tabBarIcon: (props) => (
              <ChartAreaIcon
                strokeWidth={1.5}
                color={props.color}
                fill={props.color}
                size={props.size}
                fillOpacity={0.3}
              />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}
