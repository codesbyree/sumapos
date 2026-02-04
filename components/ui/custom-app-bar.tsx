import { MenuIcon } from "lucide-react-native";
import { View } from "react-native";
import { Appbar, IconButton, useTheme } from "react-native-paper";
import ChangeStoreBottomSheet from "../change-store-bottom-sheet";

import ThemedText from "./themed-text";

export default function CustomAppBar() {
  const theme = useTheme();

  return (
    <Appbar.Header
      style={{
        backgroundColor: theme.colors.background,
        gap: 10,
        justifyContent: "space-between",
      }}
    >
      <IconButton
        size={24}
        icon={(props) => (
          <MenuIcon size={props.size} color={props.color} strokeWidth={1.5} />
        )}
      />

      <View
        style={{
          paddingHorizontal: 20,
          height: 50,
          backgroundColor: theme.colors.elevation.level2,
          borderRadius: 1000,
          flex: 1,
          justifyContent: "center",
        }}
      >
        <ThemedText
          style={{
            textAlign: "center",
          }}
          priority="secondary"
          variant="bodyLarge"
        >
          Search products
        </ThemedText>
      </View>

      <ChangeStoreBottomSheet />
    </Appbar.Header>
  );
}
