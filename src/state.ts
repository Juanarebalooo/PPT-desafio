export type Play = "piedra" | "papel" | "tijera";
type PossibleResults = "win" | "lose" | "draw";
type Game = {
  myPlay: Play;
  computerPlay: Play;
};

const state = {
  data: {
    currentGame: {
      myPlay: "",
      computerPlay: "",
    },
    gameResult: "",
    history: [] as Array<Game>,
  },

  listeners: [] as Array<(p?: any) => any>,
  getState() {
    return this.data;
  },
  setState(newState: any) {
    this.data = newState;
    for (const cb of this.listeners) {
      cb();
    }
  },
  subscribe(callback: (p?: any) => any) {
    this.listeners.push(callback);
  },
  setResults(result: PossibleResults) {
    const currentState = this.getState();
    currentState.gameResult = "";
    this.setState({
      ...currentState,
      gameResult: result,
    });
  },
  whoWins(myplay: Play, computerplay: Play) {
    const currentState = this.getState();
    const currentGame: Game = { myPlay: myplay, computerPlay: computerplay };
    if (myplay === "tijera" && computerplay === "papel") {
      this.setResults("win");
      currentState.history.push(currentGame);
      localStorage.setItem("gameHistory", JSON.stringify(currentState.history));
    } else if (myplay === "piedra" && computerplay === "tijera") {
      this.setResults("win");
      currentState.history.push(currentGame);
      localStorage.setItem("gameHistory", JSON.stringify(currentState.history));
    } else if (myplay === "papel" && computerplay === "piedra") {
      this.setResults("win");
      currentState.history.push(currentGame);
      localStorage.setItem("gameHistory", JSON.stringify(currentState.history));
    } else if (myplay === computerplay) {
      this.setResults("draw");
    } else if (myplay === "tijera" && computerplay === "piedra") {
      this.setResults("lose");
      currentState.history.push(currentGame);
      localStorage.setItem("gameHistory", JSON.stringify(currentState.history));
    } else if (myplay === "piedra" && computerplay === "papel") {
      this.setResults("lose");
      currentState.history.push(currentGame);
      localStorage.setItem("gameHistory", JSON.stringify(currentState.history));
    } else if (myplay === "papel" && computerplay === "tijera") {
      this.setResults("lose");
      currentState.history.push(currentGame);
      localStorage.setItem("gameHistory", JSON.stringify(currentState.history));
    }
  },
  calculateScore() {
    const currentState = this.getState();
    let playerScore = 0;
    let computerScore = 0;
    currentState.history.forEach((game) => {
      const playerWins =
        (game.myPlay === "tijera" && game.computerPlay === "papel") ||
        (game.myPlay === "piedra" && game.computerPlay === "tijera") ||
        (game.myPlay === "papel" && game.computerPlay === "piedra");
      if (playerWins) {
        playerScore++;
      } else if (!playerWins) {
        computerScore++;
      }
    });

    return { playerScore, computerScore };
  },
  loadHistory() {
    const savedHistory = localStorage.getItem("gameHistory");
    if (savedHistory) {
      this.data.history = JSON.parse(savedHistory);
    }
  },
};

export { state };
