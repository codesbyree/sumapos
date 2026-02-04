import { MenuIcon } from "lucide-react-native";
import { View } from "react-native";
import { Appbar, IconButton, Text, useTheme } from "react-native-paper";

export default function CustomAppBar() {
  const theme = useTheme();

  return (
    <Appbar.Header
      style={{ backgroundColor: theme.colors.background, gap: 10 }}
    >
      <IconButton
        size={20}
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
        <Text
          style={{
            textAlign: "center",
            opacity: 0.7,
            fontFamily: "gsans",
          }}
          variant="bodyLarge"
        >
          Search product
        </Text>
      </View>

      <View
        style={{
          width: 48,
          height: 48,
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: 8,
        }}
      >
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 1000,
            backgroundColor: theme.colors.elevation.level2,
          }}
        ></View>
      </View>
    </Appbar.Header>
  );
}
