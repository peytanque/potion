import { RecipesApiResponse, recipesData } from "@types";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<RecipesApiResponse>) {
  res.status(200).json({ data: recipesData });
}
