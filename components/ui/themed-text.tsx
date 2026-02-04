import { Text, type TextProps } from "react-native-paper";

type FontWeightTypes = "normal" | "medium" | "semibold" | "bold";
type FontPriorityTypes = "high" | "secondary" | "tertiary";
type RegisteredFontsTypes =
  | "gsans-normal"
  | "gsans-medium"
  | "gsans-semibold"
  | "gsans-bold";

interface Props<T> extends TextProps<T> {
  weight?: FontWeightTypes;
  priority?: FontPriorityTypes;
}

export default function ThemedText({
  children,
  style,
  variant,
  weight = "normal",
  priority = "high",
}: Props<any>) {
  const fontByWeights: Record<FontWeightTypes, RegisteredFontsTypes> = {
    normal: "gsans-normal",
    medium: "gsans-medium",
    semibold: "gsans-semibold",
    bold: "gsans-bold",
  };

  return (
    <Text
      variant={variant}
      style={[style, { fontFamily: fontByWeights[weight] }]}
    >
      {children}
    </Text>
  );
}
