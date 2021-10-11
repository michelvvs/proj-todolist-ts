import { Header } from "./components/Header";
import { ButtonAlert } from "./components/ButtonAlert";
import { useState } from "react";
import { stringify } from "querystring";

const App = () => {
  const listaTarefas = ["viado1", "viado2", "viado3"];

  const [bgColor, setBgColor] = useState("red");
  const handleButtonChangeColor = () => {
    setBgColor("blue");
  };
  return (
    <div style={{ backgroundColor: bgColor }}>
      <Header name="jupiara"></Header>
      <ButtonAlert />
      <button onClick={handleButtonChangeColor}> troca bl</button>
      {listaTarefas.map((tarefa, i) => (
        <p>{tarefa}</p>
      ))}
      ;
    </div>
  );
};

export default App;
