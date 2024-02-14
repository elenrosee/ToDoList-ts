import { useState, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { SvgPlus } from "../../icons";
import { AddToDoForm, Btn, Title, Wrapper } from "./ToDoForm.styled";
import { addTodo } from "../../redux";

export const ToDoForm = () => {
  const [name, setName] = useState<string>("");

  const dispatch = useDispatch();

  const handleChange = (event: FormEvent) => {
    const { value } = event.target as HTMLInputElement;
    setName(value);
  };

  const newItem = {
    id: Date.now(),
    name,
    checked: false,
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addTodo(newItem));
    setName("");
  };

  return (
    <Wrapper>
      <Title>To Do List</Title>
      <AddToDoForm onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          autoComplete="off"
          placeholder="Add new task to do"
          required
        />
        <Btn type="submit">
          <SvgPlus />
        </Btn>
      </AddToDoForm>
    </Wrapper>
  );
};
