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

export default function ThemedText(props: Props<any>) {
  const {
    children,
    style,
    weight = "normal",
    priority = "high",
    ...rest // This contains variant, numberOfLines, etc.
  } = props;

  const fontByWeights: Record<FontWeightTypes, RegisteredFontsTypes> = {
    normal: "gsans-normal",
    medium: "gsans-medium",
    semibold: "gsans-semibold",
    bold: "gsans-bold",
  };

  const opacityByPriority: Record<FontPriorityTypes, number> = {
    high: 1,
    secondary: 0.7,
    tertiary: 0.5,
  };

  return (
    <Text
      {...rest}
      style={[
        style,
        {
          fontFamily: fontByWeights[weight],
          opacity: opacityByPriority[priority],
        },
      ]}
    >
      {children}
    </Text>
  );
}
