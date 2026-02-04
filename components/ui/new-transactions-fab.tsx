import { useAppLanguage } from "@/store/app-customizations/useAppLanguage";
import { PlusIcon } from "lucide-react-native";
import { StyleSheet } from "react-native";
import { AnimatedFAB } from "react-native-paper";

import { NEW_TRANSACTION_FAB } from "@/contents/language-content";

type Props = {
  isExtended: boolean;
};

export default function NewTransactionsFAB({ isExtended }: Props) {
  const { appLanguage } = useAppLanguage();

  return (
    <AnimatedFAB
      extended={isExtended}
      icon={(props) => (
        <PlusIcon color={props.color} size={props.size} strokeWidth={1.5} />
      )}
      label={NEW_TRANSACTION_FAB[appLanguage]}
      iconMode="dynamic"
      animateFrom="right"
      visible
      style={[styles.fabStyle]}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  fabStyle: {
    bottom: 16,
    right: 16,
    position: "absolute",
    fontFamily: "gsans-normal",
  },
});
