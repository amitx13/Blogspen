import { atom } from "recoil";

export const themeState = atom<boolean>({
    key: "themeState",
    default: typeof window !== "undefined" && localStorage.getItem("theme")
      ? JSON.parse(localStorage.getItem("theme")!)
      : true,
  });