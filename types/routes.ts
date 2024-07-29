export type Route = {
  path: string;
  label?: string;
  needUser: boolean
};

export const routes: Route[] = [
  { path: "/", label: "Acceuil", needUser: false },
  { path: "/ingredients", label: "Ingrédients", needUser: true },
  { path: "/potions", label: "Potions", needUser: true },
  // { path: "/inventory", label: "Inventaire", needUser: true },
];