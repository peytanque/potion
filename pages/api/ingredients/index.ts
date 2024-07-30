import type { NextApiRequest, NextApiResponse } from "next";

import { IngredientsApiResponse, ingredientsData } from "@types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IngredientsApiResponse>
) {
  res.status(200).json({ data: ingredientsData });
}
