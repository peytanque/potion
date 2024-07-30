export type Route = {
  path: string;
  label?: string;
};

export const routes: Route[] = [
  { path: "/ingredients", label: "Ingrédients" },
  { path: "/potions", label: "Potions" },
];