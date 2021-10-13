import * as C from "./styles";
import { useState } from "react";

type event = {
  key: string;
};

type Props = {
  eventAdd: (newItem: string) => void;
};
export const ItemAdd = (props: Props) => {
  const [inputText, setInputText] = useState("");
  const handleKeyUp = (event: event) => {
    //console.log(event.key);
    if (event.key === "Enter" && inputText !== "") {
      props.eventAdd(inputText);
      setInputText("");
    }
  };

  return (
    <C.Container>
      <div>➕</div>
      <input
        value={inputText}
        onKeyUp={(e) => handleKeyUp(e)}
        type="text"
        placeholder="digite alguma tarefa"
        onChange={(e) => setInputText(e.target.value)}
      ></input>
    </C.Container>
  );
};
