import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type StoreState = {
  appLanguage: AppLanguage;
  setAppLanguage: (lang: AppLanguage) => void;
};

export const useAppLanguage = create<StoreState>()(
  persist(
    (set, get) => ({
      appLanguage: "en",
      setAppLanguage: (lang: AppLanguage) => {
        set({ appLanguage: lang });
      },
    }),
    {
      name: "app-language",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
