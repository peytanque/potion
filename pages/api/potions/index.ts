import { PotionsApiResponse, potionsData } from "@types";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PotionsApiResponse>) {
  res.status(200).json({ data: potionsData });
}
