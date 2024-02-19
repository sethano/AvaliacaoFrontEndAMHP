import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";
import { IBreakpoints } from "@/types/tailwind";

export const getBreakpoint = (
  size: "sm" | "md" | "lg" | "xl" | "2xl"
): number => {
  const breakpoints = resolveConfig(tailwindConfig).theme?.screens as
    | IBreakpoints
    | undefined;

  return parseInt(breakpoints![size].replace("px", ""));
};
