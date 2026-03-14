import { welcomePage } from "./pages/welcome-page";
import { instructionsPage } from "./pages/instructions-page";
import { playPage } from "./pages/play-page";
import { resultsPage } from "./pages/results-page";
function goTo(path: string) {
  history.pushState({}, "", path);
}

const routes = [
  {
    path: /\/welcome/,
    content: welcomePage,
  },
  {
    path: /\/instructions/,
    content: instructionsPage,
  },
  {
    path: /\/play/,
    content: playPage,
  },
  {
    path: /\/results/,
    content: resultsPage,
  },
];
function handleRoute(route: string) {
  const rootEl = document.querySelector(".root");
  if (rootEl) rootEl.innerHTML = "";
  for (const r of routes) {
    if (r.path.test(route)) {
      r.content();
      break;
    }
  }
}

export { goTo, handleRoute };
