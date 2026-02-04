import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type StoreState = {
  colorScheme: AppColorScheme;
  setAppColorScheme: (scheme: AppColorScheme) => void;
  toggleAppColorScheme: () => void;
};

export const useAppColorScheme = create<StoreState>()(
  persist(
    (set, get) => ({
      colorScheme: "dark",
      setAppColorScheme: (scheme) => set({ colorScheme: scheme }),
      toggleAppColorScheme: () => {
        if (get().colorScheme === "dark") set({ colorScheme: "light" });
        else set({ colorScheme: "dark" });
      },
    }),
    {
      name: "app-color-schema-storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
