import { useTodos } from "../hooks/useGetAllTodo";
import AppLayout from "../layouts/AppLayout";
import Todo from "./Todo";

function Todos() {
  const { todos } = useTodos();
  return (
    <AppLayout overflowALlowed={true}>
      <div className="grid grid-cols-4 place-items-center gap-6 p-10">
        {todos?.map((item) => (
          <Todo key={item._id} todo={item} />
        ))}
      </div>
    </AppLayout>
  );
}

export default Todos;
