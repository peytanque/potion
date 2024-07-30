import type { NextApiRequest, NextApiResponse } from "next";

import { PotionsApiResponse, potionsData } from "@types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PotionsApiResponse>) {
  res.status(200).json({ data: potionsData });
}
