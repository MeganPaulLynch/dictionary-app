import "./App.css";
import DictionarySearch from "./DictionarySearch";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <DictionarySearch defaultSearchTerm="greeting" />
        </main>
        <footer className="text-center">Coded by Megan Paul Lynch</footer>
      </div>
    </div>
  );
}

export default App;
