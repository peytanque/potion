import { PotionType } from "./type";

export const potionsData: PotionType[] = [
  {
    slug: "potion-invisibilite",
    name: "Potion d'invisibillité",
    asset: {
      src: "https://api.dofusdb.fr/img/items/250/12786.png",
    },
    ingredients: [
      { slug: "noix-de-coco", requiredQuantity: 1 },
      { slug: "yttrium", requiredQuantity: 2 },
      { slug: "mandragore", requiredQuantity: 3 },
    ],
  },
  {
    slug: "potion-amour",
    name: "Potion d'amour",
    asset: {
      src: "https://api.dofusdb.fr/img/items/250/12023.png",
    },
    ingredients: [
      { slug: "bave-de-lama", requiredQuantity: 1 },
      { slug: "plume-de-griffon", requiredQuantity: 2 },
      { slug: "helium-liquide", requiredQuantity: 3 },
    ],
  },
  {
    slug: "potion-jeunesse",
    name: "Potion de jeunesse",
    asset: {
      src: "https://api.dofusdb.fr/img/items/250/12041.png",
    },
    ingredients: [
      { slug: "or", requiredQuantity: 1 },
      { slug: "crin-de-licorne", requiredQuantity: 2 },
      { slug: "azote-liquide", requiredQuantity: 3 },
    ],
  },
  {
    slug: "potion-immortalite",
    name: "Potion d'immortalité",
    asset: {
      src: "https://api.dofusdb.fr/img/items/250/12803.png",
    },
    ingredients: [
      { slug: "poil-de-yeti", requiredQuantity: 1 },
      { slug: "jus-de-horglup", requiredQuantity: 2 },
      { slug: "argent", requiredQuantity: 3 },
    ],
  },
  {
    slug: "potion-clairvoyance",
    name: "Potion de clairvoyance",
    asset: {
      src: "https://api.dofusdb.fr/img/items/250/12083.png",
    },
    ingredients: [
      { slug: "epine-de-herisson", requiredQuantity: 1 },
      { slug: "jus-de-horglup", requiredQuantity: 2 },
      { slug: "noix-de-coco", requiredQuantity: 3 },
    ],
  },
  {
    slug: "potion-force",
    name: "Potion de force",
    asset: {
      src: "https://api.dofusdb.fr/img/items/250/79181.png",
    },
    ingredients: [
      { slug: "poil-de-yeti", requiredQuantity: 1 },
      { slug: "or", requiredQuantity: 2 },
      { slug: "argent", requiredQuantity: 3 },
    ],
  },
  {
    slug: "potion-vitesse",
    name: "Potion de vitesse",
    asset: {
      src: "https://api.dofusdb.fr/img/items/250/12754.png",
    },
    ingredients: [
      { slug: "helium-liquide", requiredQuantity: 1 },
      { slug: "plume-de-griffon", requiredQuantity: 2 },
      { slug: "azote-liquide", requiredQuantity: 3 },
    ],
  },
  {
    slug: "potion-guerison",
    name: "Potion de guérison",
    asset: {
      src: "https://api.dofusdb.fr/img/items/250/12722.png",
    },
    ingredients: [
      { slug: "crin-de-licorne", requiredQuantity: 1 },
      { slug: "mandragore", requiredQuantity: 2 },
      { slug: "bave-de-lama", requiredQuantity: 3 },
    ],
  },
  {
    slug: "potion-transformation",
    name: "Potion de transformation",
    asset: {
      src: "https://api.dofusdb.fr/img/items/250/12809.png",
    },
    ingredients: [
      { slug: "queue-d-ecureil", requiredQuantity: 1 },
      { slug: "yttrium", requiredQuantity: 2 },
      { slug: "epine-de-herisson", requiredQuantity: 3 },
    ],
  },
];
