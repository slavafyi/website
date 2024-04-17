import { FreshContext } from "$fresh/server.ts";
import redirects from "../data/redirects.json" with { type: "json" };

export async function handler(
  req: Request,
  ctx: FreshContext,
): Promise<Response> {
  const url = new URL(req.url);
  const match = redirects.find((item) => item.source === url.pathname);

  if (match) {
    return Response.redirect(match.destination, match.status || 302);
  }

  return await ctx.next();
}
