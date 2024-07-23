import { PotionApiResponse, potionsData } from "@types";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PotionApiResponse | undefined>
) {
  const { slug } = req.query;
  const val = potionsData.find(
    (potion) => potion.slug === slug
  );
  val
    ? res.status(200).json({ data: val })
    : res.status(500).json({ data: undefined, error: `Aucune recette ne semble correspondre au slug : ${slug}` });
}
