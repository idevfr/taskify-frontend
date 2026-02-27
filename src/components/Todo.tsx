import { useNavigate } from "react-router-dom";

type Props = {
  todo: {
    _id: string;
    title: string;
    taskSize: number;
    completedTask: number;
  };
};
function Todo({ todo }: Props) {
  const navigate = useNavigate();
  return (
    <div className="h-40 w-full bg-gray-950 select-none">
      <div
        onClick={() => navigate(`/home/todos/${todo._id}`)}
        className="h-40 w-full cursor-pointer space-y-6 bg-white px-3.5 py-2.5 ring-1 transition-all duration-200 hover:translate-x-2.5 hover:-translate-y-2.5 hover:rounded-xl active:translate-x-0 active:translate-y-0 active:rounded-none active:bg-gray-300"
      >
        <h3 className="text-center text-lg font-semibold">{todo.title}</h3>
        <div className="flex flex-col items-center justify-between gap-1.5 text-sm font-semibold">
          <p>Task: {todo.taskSize}</p>
          <p>completed:{todo.completedTask}</p>
        </div>
      </div>
    </div>
  );
}

export default Todo;
