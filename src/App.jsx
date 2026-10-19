
import { useState } from "react";
import "./App.css";

function App() {
  // Missão 1: contador
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador((valorAnterior) =>
      valorAnterior < 10 ? valorAnterior + 1 : valorAnterior
    );
  }

  function diminuir() {
    setContador((valorAnterior) => valorAnterior - 1);
  }

  // Missão 2: aviso
  const [visivel, setVisivel] = useState(false);

  // Missão 3 e desafio final: saudação
  const [nome, setNome] = useState("");
  const [mostrarSaudacao, setMostrarSaudacao] = useState(true);

  return (
    <div className="container">
      <header>
        <h1>Prática de React</h1>
        <p>Aprendendo useState e componentes interativos.</p>
      </header>

      <main>
        <section className="card">
          <h2>Missão 1 - Contador</h2>

          <p className="numero">{contador}</p>

          <div className="botoes">
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={diminuir}>Voltar um</button>
            <button onClick={() => setContador(0)}>Zerar</button>
          </div>

          {contador === 10 && (
            <p className="sucesso">Meta atingida!</p>
          )}
        </section>

        <section className="card">
          <h2>Missão 2 - Aviso</h2>

          <button onClick={() => setVisivel(!visivel)}>
            Alternar aviso
          </button>

          {visivel && (
            <p className="aviso">O aviso está visível!</p>
          )}
        </section>

        <section className="card">
          <h2>Missão 3 - Saudação</h2>

          <input
            type="text"
            value={nome}
            onChange={(evento) => setNome(evento.target.value)}
            placeholder="Digite seu nome"
          />

          <p>Olá, {nome || "visitante"}!</p>
        </section>

        <section className="card">
          <h2>Desafio final - Boas-vindas</h2>

          <input
            type="text"
            value={nome}
            onChange={(evento) => setNome(evento.target.value)}
            placeholder="Digite seu nome"
          />

          <button
            onClick={() => setMostrarSaudacao(!mostrarSaudacao)}
          >
            {mostrarSaudacao ? "Esconder saudação" : "Mostrar saudação"}
          </button>

          {mostrarSaudacao && (
            <p className="saudacao">
              Olá, {nome || "visitante"}! Seja bem-vindo(a)!
            </p>
          )}
        </section>
      </main>

      <footer>
        <p>Atividade de React - useState</p>
      </footer>
    </div>
  );
}

export default App;
