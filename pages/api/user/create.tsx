import type { NextApiRequest, NextApiResponse } from "next";
import database from "@/libs/clients/database";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user = await database.user.create({
    data: {
      name: "honggildong",
      email: "test@gmail.com",
      phone: "01012341234",
    },
  });

  res.status(200).json({
    user,
  });
}
