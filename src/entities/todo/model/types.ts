export type Todo = {
  id: string,
  name: string,
  completed?: boolean,
};

export type TodosState = {
  todos: Todo[],
};
