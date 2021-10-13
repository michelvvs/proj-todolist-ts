import { useState } from "react";
import { Item } from "./types/Item";
import * as C from "./App.styles";
import { ListItem } from "./components/ListItem";
import { ItemAdd } from "./components/ItemAdd";

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, descr: "comprar salgado", check: false },
    { id: 2, descr: "comprar refri pra rapaziada", check: true },
    { id: 3, descr: "comprar leite", check: false },
  ]);

  const updateList = (newItem: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      descr: newItem,
      check: false,
    });
    setList(newList);
  };

  return (
    <div>
      <C.Container>
        <C.Area>
          <C.Header>Todo List</C.Header>
          <ItemAdd eventAdd={updateList}></ItemAdd>
          {list.map((listItem, index) => (
            <ListItem item={listItem}></ListItem>
          ))}
        </C.Area>
      </C.Container>
    </div>
  );
};

export default App;
