// router.ts (ou utils/router.ts)
import type { NavigateFunction } from "react-router";

let navigateFn: NavigateFunction | null = null;

export function initRouter(navigate: NavigateFunction) {
  navigateFn = navigate;
}

export function navigate(path: string) {
  if (navigateFn) {
    navigateFn(path);
  } else {
    window.location.href = path;
  }
}
