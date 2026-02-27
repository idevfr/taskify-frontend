import React, { useState } from "react";
import { useCreateMain } from "../hooks/useCreateMain";
import Loader from "../ui/Loader";
import { useNavigate } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
function NewTask() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDate, setTodoDate] = useState("");
  const { isCreatingMain, createMain } = useCreateMain();
  const minValue = new Date().toISOString().split("T")?.[0];
  const navigate = useNavigate();
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!todoTitle.length) return;
    const date = new Date(todoDate);
    if (!date) return;
    await createMain(
      { title: todoTitle, date: date },
      {
        onSuccess: (data) => {
          navigate(`/home/todos/${data.data._id}`);
        },
      },
    );
    setTodoTitle("");
  }
  if (isCreatingMain) return <Loader />;
  return (
    <AppLayout>
      <div className="flex h-full w-full items-center justify-center">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex h-full w-full flex-col items-center justify-center gap-14"
        >
          <input
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
            type="text"
            required
            disabled={isCreatingMain}
            placeholder="Tittle"
            className="w-[40%] rounded-sm border-2 px-3.5 py-5 text-xl font-semibold transition-all duration-300 hover:scale-105 hover:rounded-2xl hover:shadow-2xl"
          />
          <input
            onClick={(e) => e.currentTarget.showPicker()}
            required
            type="date"
            value={todoDate}
            onChange={(e) => setTodoDate(e.target.value)}
            min={minValue}
            disabled={isCreatingMain}
            className="cursor-pointer rounded-sm border-2 px-8 py-2 text-lg font-semibold transition-all duration-200 hover:scale-105 hover:rounded-2xl"
          />
          <div className="h-14 w-32 rounded-2xl border-2 transition-all duration-150 hover:scale-105">
            <button className="flex h-full w-full cursor-pointer items-center justify-center rounded-2xl bg-gray-950 px-6 py-1.5 text-xl font-semibold text-white transition-all duration-150 hover:scale-95 hover:text-2xl active:scale-100">
              next
            </button>
          </div>
        </form>
      </div>
    </AppLayout>
  );
}

export default NewTask;
