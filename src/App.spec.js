import React from "react";
import { render, act } from "@testing-library/react";
import App from "./App";
import { getCards } from "./services/cardService";

jest.mock("./services/cardService.js");

it("Renders cards from API", async () => {
  const mockCards = [
    { id: 1, term: "Term 1", defintion: "Answer 1" },
    { id: 2, term: "Term 2", defintion: "Answer 2" },
    { id: 3, term: "Term 3", defintion: "Answer 3" },
  ];
  getCards.mockResolvedValue(mockCards);
  let debug;
  await act(async () => {
    ({ debug } = render(<App />));
  });
  debug();
});
