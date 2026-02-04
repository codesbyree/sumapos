import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack initialRouteName="welcome-screen">
      <Stack.Screen name="welcome-screen" />
    </Stack>
  );
}
