import { RecipeApiResponse, recipesData } from "@types";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<RecipeApiResponse | undefined>
) {
  const { slug } = req.query;
  const val = recipesData.find(
    (recipe) => recipe.slug === slug
  );
  val
    ? res.status(200).json({ data: val })
    : res.status(500).json({ data: undefined, error: `Aucune recette ne semble correspondre au slug : ${slug}` });
}
