import { z } from "zod";

import { playerUUIDSchema, pregameIDSchema } from "../../common-types";
import { defineEndpoint } from "../../schema";

export const PreGamePlayerResponseSchema = z.object({
  Subject: playerUUIDSchema,
  MatchID: pregameIDSchema,
  Version: z.number(),
});

export default defineEndpoint({
  name: "PreGame Player",
  description: "Get the pre-game match ID for the provided player",
  type: "glz",
  url: "pregame/v1/players/:puuid",
  responses: {
    "200": PreGamePlayerResponseSchema,
  },
});
