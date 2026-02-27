type Props = {
  taskName: string;
  completeWithin: Date;
};
function TaskItem({ taskName, completeWithin }: Props) {
  const date = completeWithin
    ? new Date(completeWithin).toLocaleTimeString()
    : "";
  return (
    <div className="w-fit bg-slate-300 px-3.5 py-1.5">
      <div className="flex w-120 items-center justify-between px-3.5 py-1.5">
        <h3>{taskName}</h3>
        <p>{date}</p>
      </div>
    </div>
  );
}

export default TaskItem;
