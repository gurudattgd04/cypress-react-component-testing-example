import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { CardPreview } from "./CardPreview";

it("Renders the expected term", () => {
  const expectedTerm = "this is a term";
  const { getByText } = render(<CardPreview term={expectedTerm} />);
  expect(getByText(expectedTerm)).toBeInTheDocument;
});

it("Flips the card to reveal the definition", () => {
  const expectedTerm = "This is the term";
  const expectedDef = "This is definition";
  const { getByText, getByTestId, queryByText } = render(
    <CardPreview definition={expectedDef} term={expectedTerm} />
  );
  expect(getByText(expectedTerm)).toBeInTheDocument;
  const flipButton = getByTestId("tertiary");
  fireEvent.click(flipButton);
  expect(getByText(expectedDef)).toBeInTheDocument;
  expect(queryByText(expectedTerm)).not.toBeInTheDocument;
});
