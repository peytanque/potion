import { IngredientApiResponse, ingredientsData } from "@types";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IngredientApiResponse | undefined>
) {
  const { slug } = req.query;
  const val = ingredientsData.find(
    (ingredient) => ingredient.slug === slug
  );
  val
    ? res.status(200).json({ data: val })
    : res
        .status(500)
        .json({
          data: undefined,
          error: `Aucun ingrédient ne semble correspondre au slug : ${slug}`,
        });
}
