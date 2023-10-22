import Component from "../components/Component/Component.js";

class App extends Component {
  protected populate(): void {
    this.element.innerHTML = `
    <header class="main-header">
      <h1 class="main-title">Pokemons</h1>
    </header>
    <main class="main"></main>
    `;
  }
}

export default App;
