import TaskItem from "./TaskItem";
const { data } = {
  data: [
    {
      _id: "69a06688e9e1d03c5c55498c",
      taskName: "code",
      isComplete: false,
      completeWithin: "2026-03-06T11:13:00.000Z",
      belongsTo: "69a062066f6ff1ac73af13f0",
      createdAt: "2026-02-26T15:28:08.047Z",
      updatedAt: "2026-02-26T15:28:08.047Z",
      __v: 0,
    },
    {
      _id: "69a066b1e9e1d03c5c554990",
      taskName: "sleep",
      isComplete: false,
      completeWithin: "2026-03-06T14:13:00.000Z",
      belongsTo: "69a062066f6ff1ac73af13f0",
      createdAt: "2026-02-26T15:28:49.649Z",
      updatedAt: "2026-02-26T15:28:49.649Z",
      __v: 0,
    },
    {
      _id: "69a0677e5b96667657692e35",
      taskName: "push up",
      isComplete: false,
      completeWithin: "2026-03-05T22:00:00.000Z",
      belongsTo: "69a062066f6ff1ac73af13f0",
      createdAt: "2026-02-26T15:32:14.645Z",
      updatedAt: "2026-02-26T15:32:14.645Z",
      __v: 0,
    },
    {
      _id: "69a07d23195bf7ae72c48f66",
      taskName: "dada",
      isComplete: false,
      belongsTo: "69a062066f6ff1ac73af13f0",
      createdAt: new Date("2026-02-26T17:04:35.729Z"),
      updatedAt: new Date("2026-02-26T17:04:35.729Z"),
      __v: 0,
    },
  ],
};
// {
//     "_id": "69a1d889a3e270702beb2a99",
//     "taskName": "hey",
//     "isComplete": false,
//     "completeWithin": "2026-02-28T08:46:00.000Z",
//     "belongsTo": "69a05c836f6ff1ac73af13e2",
//     "createdAt": "2026-02-27T17:46:49.586Z",
//     "updatedAt": "2026-02-27T17:46:49.586Z",
//     "__v": 0
// }
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
  console.log(tasks);
  return (
    <div
      className={`flex w-fit flex-col items-center gap-3.5 overflow-x-hidden ${tasks.length ? "overflow-y-scroll" : "justify-center overflow-y-hidden"}`}
    >
      <div>
        {!data.length && (
          <h1 className="text-2xl font-semibold">
            no task to show ! add some !
          </h1>
        )}
        <div className="flex flex-col gap-3.5">
          {data.length &&
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
