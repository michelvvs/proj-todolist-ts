import { useState } from "react";
import * as C from "./styles";
import { Item } from "../../types/Item";

type Props = {
  item: Item;
};
export const ListItem = ({ item }: Props) => {
  const [isChecked, setIsChecked] = useState(item.check);

  return (
    <C.Container>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <label className={isChecked ? "isChecked" : ""}>{item.descr}</label>
    </C.Container>
  );
};
