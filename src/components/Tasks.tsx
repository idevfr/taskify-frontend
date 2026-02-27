import TaskItem from "./TaskItem";

type Props = {
  tasks:
    | {
        _id: string;
        taskName: string;
        isComplete: boolean;
        completeWithin: Date;
        belongsTo: string;
      }[]
    | undefined;
};

function Tasks({ tasks = [] }: Props) {
  return (
    <div
      className={`flex w-fit flex-col items-center gap-3.5 overflow-x-hidden ${tasks.length ? "overflow-y-scroll" : "justify-center overflow-y-hidden"}`}
    >
      <div>
        {!tasks.length && (
          <h1 className="text-2xl font-semibold">
            no task to show ! add some !
          </h1>
        )}
        <div className="flex flex-col gap-3.5">
          {tasks.length &&
            tasks.map((item) => {
              return (
                <TaskItem
                  key={item._id}
                  completeWithin={item.completeWithin}
                  taskName={item.taskName}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Tasks;
