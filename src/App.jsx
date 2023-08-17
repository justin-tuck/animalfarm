import React from "react";
import AnimalFarm from "./components/AnimalFarm/AnimalFarm";
import BookStore from "./components/BookStore/BookStore";
import Accordion from "./components/Accordion/Accordion";

function App() {
  return (
    <main className="accordion-container">
      <Accordion>
        <Accordion.Item title={"Book Store"}>
          <BookStore />
        </Accordion.Item>
        <Accordion.Item title={"Animal Farm"}>
          <AnimalFarm />
        </Accordion.Item>
      </Accordion>
    </main>
  );
}

export default App;
