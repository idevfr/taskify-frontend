// import { GrCheckmark, GrClose } from "react-icons/gr";
import React, { useState } from "react";
import AppLayout from "../layouts/AppLayout";
import Tasks from "./Tasks";
import { useParams } from "react-router-dom";
import { useCreatesub } from "../hooks/useCreateSub";
import Loader from "../ui/Loader";
import { useGetAllSub } from "../hooks/useGetAllSub";
// taskName completeWithin
function CreateSub() {
  const [taskTime, setTaskTime] = useState("");
  const [taskTitle, setTaskTitle] = useState("");
  const { todoId } = useParams();
  const { createSub, isCreatingSub } = useCreatesub();
  const { isLoadingSub, subTodoData } = useGetAllSub();
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!todoId || !taskTitle) return;
    await createSub(
      {
        _id: todoId,
        val: { taskName: taskTitle, completeWithin: taskTime },
      },
      {
        onSuccess: () => {
          setTaskTitle("");
          setTaskTime("");
        },
      },
    );
  }
  if (isCreatingSub || isLoadingSub) return <Loader />;
  return (
    <AppLayout>
      <div className="h-full w-full">
        <h1 className="pt-6 text-center text-2xl font-bold">
          Title : <span>{subTodoData?.data.todoTitle}</span>
        </h1>
        <div className="mt-6 h-full w-full space-y-6">
          <div className="flex h-[40%] justify-center">
            <Tasks tasks={subTodoData?.data.tasks} />
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center gap-6"
          >
            <div className="flex items-center justify-center gap-5">
              <input
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                className="rounded-sm border-2 px-3.5 py-1.5 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:rounded-2xl hover:shadow-xl"
                type="text"
                placeholder="new task"
              />
              <input
                className="w-full cursor-pointer appearance-none rounded-sm border-2 px-3.5 py-1.5 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:rounded-2xl hover:shadow-xl"
                onClick={(e) => e.currentTarget.showPicker()}
                value={taskTime}
                onChange={(e) => setTaskTime(e.target.value)}
                type="time"
              />
            </div>

            <div className="h-14 w-32 rounded-2xl border-2 transition-all duration-150 hover:scale-105">
              <button className="flex h-full w-full cursor-pointer items-center justify-center rounded-2xl bg-gray-950 px-6 py-1.5 text-sm font-semibold text-white transition-all duration-150 hover:scale-95 active:scale-100">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </AppLayout>
  );
}

export default CreateSub;
