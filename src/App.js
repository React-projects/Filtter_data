import ExpensiveItem from "./components/ExpensiveItem";

function App() {
  const expenses = [
    {
      id: "e1",
      name: "Realmadrid",
      price: 94.12,
      des: "Real Madrid Club de Fútbol, commonly referred to as Real Madrid, is a Spanish professional football club based in Madrid",
    },
    {
      id: "e2",
      name: "Elhalal",
      price: 799.49,
      des: "Al Hilal is a professional multi-sports club based in Riyadh, Saudi Arabia",
    },
    {
      id: "e3",
      name: "Elnasr",
      price: 294.67,
      des: "Al Nassr Football Club is a Saudi Arabian professional football club based in Riyadh",
    },
    {
      id: "e4",
      name: "Manshister city",
      price: 450,
      des: "Manchester City Football Club is an English professional football club based in Manchester that competes in the Premier League",
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpensiveItem name={expenses[0].name} price={expenses[0].price}des={expenses[0].des}></ExpensiveItem>
      <ExpensiveItem name={expenses[1].name} price={expenses[1].price}des={expenses[1].des}></ExpensiveItem>
      <ExpensiveItem name={expenses[2].name} price={expenses[2].price}des={expenses[2].des}></ExpensiveItem>
      <ExpensiveItem name={expenses[3].name} price={expenses[3].price}des={expenses[3].des}></ExpensiveItem>
      
    </div>
  );
}

export default App;
