import { initButton } from "./components/button-component";
import { initText } from "./components/text-component";
import { initStars } from "./components/star-component";
import { initHands } from "./components/hands-component";
import { initScore } from "./components/score-component";
import { welcomePage } from "./pages/welcome-page";
import { goTo, handleRoute } from "./router";
function main() {
  initButton();
  initText();
  initStars();

  initHands();
  initScore();
  welcomePage();
  if (location.pathname == "/") {
    history.replaceState({}, "", "/welcome");
  }
  handleRoute(location.pathname);
  window.addEventListener("popstate", () => {
    handleRoute(location.pathname);
  });
  localStorage.clear();
}

main();
