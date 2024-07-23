// todo icons

import {
  Blender,
  Cookie,
  Home,
  Inventory2,
  SvgIconComponent,
} from "@mui/icons-material";

export type Route = {
  path: string;
  label?: string;
  icon?: SvgIconComponent
};

export const routes: Route[] = [
  { path: "/", label: "Acceuil", icon: Home },
  { path: "/ingredients", label: "Ingrédients", icon: Cookie },
  { path: "/recipes", label: "Recettes", icon: Blender },
  { path: "/inventory", label: "Inventaire", icon: Inventory2 },
];
