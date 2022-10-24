import React from "react";
import "./App.css";
import "./normalize.css";
import "./App.css";
import { CardPreview } from "./components/CardPreview";
import { getCards } from "./services/cardService";

function App() {
  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    getCards().then(setCards);
  }, []);
  return (
    <div>
      <header>
        <h1>
          Card<span className="titleHighlight">Flip</span>
        </h1>
        <h2>Lets Get Lucky</h2>
      </header>
      <main>
        <h3>Your cards</h3>
        <div className="gridContainer">
          {cards.map(({ id, definition, term }) => (
            <CardPreview key={id} definition={definition} term={term} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
