/** 2 parameter : initialState, Action */
export default function ToDoReducer(todos, action) {
  switch (action.type) {
    case "tambah":
      let newId = todos[todos.length - 1].id + 1;

      const objBaru = { id: newId, name: action.name, isCompleted: false };

      const addNewTodos = [...todos, objBaru];

      return addNewTodos;

    case "selesaikan":
      const newTodos = todos.map((td) => {
        if (td.id === action.id) {
          td.isCompleted = true;
        }

        return td;
      });

      return newTodos;
  }
}
