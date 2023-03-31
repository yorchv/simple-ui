import { ReactElement, ReactNode } from "react";
import { create } from "zustand";
import constants from "~/constants";

export type Component = {
  name: string;
  type: keyof typeof constants;
  id: string;
  classes: string[];
};

// create a zustand store type
export type ComponentStore = {
  components: Component[];
  addComponent: (component: Component) => void;
};

export const useComponents = create<ComponentStore>((set, get) => ({
  components: [],

  addComponent: (component: Component) => {
    set((state) => ({
      components: [...state.components, component],
    }));
  },
}));
