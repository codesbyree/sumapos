import { useState } from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

import NewTransactionsFAB from "@/components/ui/new-transactions-fab";
import ThemedText from "@/components/ui/themed-text";

export default function HomeScreen() {
  const [fabExtended, setFabExtended] = useState(true);

  const onScroll = ({
    nativeEvent,
  }: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentScrollPosition =
      Math.floor(nativeEvent?.contentOffset?.y) ?? 0;

    setFabExtended(currentScrollPosition <= 0);
  };

  return (
    <View style={styles.container}>
      <ScrollView onScroll={onScroll} showsVerticalScrollIndicator={false}>
        <View style={{ height: 4000 }}>
          <ThemedText variant="bodyLarge" weight="normal">
            New invoice
          </ThemedText>
        </View>
      </ScrollView>

      <NewTransactionsFAB isExtended={fabExtended} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
