import { ServerCodePage } from "./_404.tsx";
import { type RouteConfig } from "$fresh/server.ts";

export const config: RouteConfig = {
  skipInheritedLayouts: true,
};

export default function InternalServerError() {
  return ServerCodePage({
    serverCode: 500,
    codeDescription: "Oops! Something went wrong.",
  });
}
