import { IngredientsApiResponse, ingredientsData } from "@types";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IngredientsApiResponse>
) {
  res.status(200).json({ data: ingredientsData });
}
