import "./App.css";
import DictionarySearch from "./DictionarySearch";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header mb-5">Dictionary App</header>
        <main>
          <DictionarySearch />
        </main>
        <footer className="text-center">Coded by Megan Paul Lynch</footer>
      </div>
    </div>
  );
}

export default App;
