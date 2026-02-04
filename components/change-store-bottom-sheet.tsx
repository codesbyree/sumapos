import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { CogIcon, PlusIcon } from "lucide-react-native";
import { useCallback, useRef, useState } from "react";
import { Image, View } from "react-native";
import {
  Avatar,
  Button,
  IconButton,
  Portal,
  useTheme,
} from "react-native-paper";

import ThemedText from "./ui/themed-text";
import {
  SegmentedMenuFooter,
  SegmentedMenuHeader,
  SegmentedMenuItem,
  SegmentedMenuWrapper,
} from "./ui/vertical-segmented-menu";

export default function ChangeStoreBottomSheet() {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    [],
  );

  const openBottomSheet = () => {
    bottomSheetRef.current?.snapToIndex(0);
    setIsOpen(true);
  };

  return (
    <>
      <IconButton
        onPress={openBottomSheet}
        icon={() => (
          <Avatar.Image
            size={30}
            source={require("@/assets/app-icon/ios-light.png")}
          />
        )}
      />

      {isOpen && (
        <Portal>
          <BottomSheet
            ref={bottomSheetRef}
            onClose={() => setIsOpen(false)}
            enablePanDownToClose={true}
            overDragResistanceFactor={0.5}
            index={0}
            backdropComponent={renderBackdrop}
            enableDynamicSizing
            backgroundStyle={{
              backgroundColor: theme.colors.background,
            }}
            handleIndicatorStyle={{
              backgroundColor: theme.colors.primary,
              height: 8,
              width: 48,
            }}
          >
            <BottomSheetScrollView
              contentContainerStyle={{ padding: 16, gap: 16 }}
            >
              <CurrentProfileView />

              <SegmentedMenuWrapper>
                <SegmentedMenuHeader title="Your stores" />

                <SegmentedMenuItem
                  icon={
                    <Image
                      source={require("@/assets/app-icon/ios-light.png")}
                      style={{ width: 36, height: 36, borderRadius: 100 }}
                    />
                  }
                >
                  <ThemedText variant="bodyMedium" weight="medium">
                    Superpos2
                  </ThemedText>
                  <ThemedText variant="bodySmall">
                    Lorem ipsum dolor sit amet consectetur.
                  </ThemedText>
                </SegmentedMenuItem>

                <SegmentedMenuItem
                  icon={
                    <View
                      style={{
                        backgroundColor: theme.colors.elevation.level1,
                        borderRadius: 100,
                        padding: 2,
                      }}
                    >
                      <PlusIcon
                        color={theme.colors.onSurface}
                        strokeWidth={1.5}
                        size={20}
                      />
                    </View>
                  }
                >
                  <ThemedText variant="bodyMedium" weight="medium">
                    Add another store
                  </ThemedText>
                </SegmentedMenuItem>

                <SegmentedMenuFooter
                  icon={
                    <CogIcon
                      color={theme.colors.onSurface}
                      strokeWidth={1.5}
                      size={20}
                    />
                  }
                >
                  <ThemedText variant="bodyMedium" weight="medium">
                    Manage store on this device
                  </ThemedText>
                </SegmentedMenuFooter>
              </SegmentedMenuWrapper>
            </BottomSheetScrollView>
          </BottomSheet>
        </Portal>
      )}
    </>
  );
}

function CurrentProfileView() {
  return (
    <View style={{ marginTop: 8, marginBottom: 16 }}>
      <View style={{ alignItems: "center", gap: 8 }}>
        <Image
          source={require("@/assets/app-icon/ios-light.png")}
          style={{ width: 75, height: 75, borderRadius: 1000 }}
        />

        <ThemedText variant="titleLarge" weight="medium">
          Hi, Superpos!
        </ThemedText>

        <Button mode="outlined" labelStyle={{ fontFamily: "gsans-normal" }}>
          Manage your store
        </Button>
      </View>
    </View>
  );
}
