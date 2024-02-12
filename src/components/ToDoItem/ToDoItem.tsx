import { FC } from "react";

import { useDispatch } from "react-redux";
import { SvgCheckMark, SvgTrashBin } from "../../icons";
import { BtnChecked, DeleteBtn, Item, ToDoName } from "./ToDoItem.styled";
import { changeTodo, deleteTodo } from "../../redux";

type ItemType = {
  id: number;
  name: string;
  checked: boolean;
};

interface ToDoItemProps {
  item: ItemType;
}

export const ToDoItem: FC<ToDoItemProps> = ({ item }) => {
  const dispatch = useDispatch();

  const deleteToDo = (item: ItemType) => {
    dispatch(deleteTodo(item.id));
  };

  const changeToDo = (item: ItemType) => {
    const isChecked = item.checked === true ? false : true;

    dispatch(changeTodo({ ...item, checked: isChecked }));
  };

  return (
    <Item key={item.id}>
      <BtnChecked
        onClick={() => changeToDo(item)}
        className={item.checked ? "checked" : ""}
      >
        <SvgCheckMark fill={item.checked ? "white" : ""} />
      </BtnChecked>
      <ToDoName className={item.checked ? "checked" : ""}>{item.name}</ToDoName>
      <DeleteBtn onClick={() => deleteToDo(item)} type="submit">
        <SvgTrashBin />
      </DeleteBtn>
    </Item>
  );
};
