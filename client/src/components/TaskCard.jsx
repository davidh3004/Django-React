import { useNavigate } from "react-router-dom";


export function TaskCard({ task }) {
  const navigate = useNavigate();
  return (
    <div className="bg-zinc-700 p-3 hover:bg-zinc-600 hover:cursor-pointer rounded-lg shadow-md transition-all duration-300 ease-in-out"
      // style={{backgroundColor: task.done ? "lightgreen" : "lightcoral", padding: "10px", margin: "10px", borderRadius: "5px"}}

      onClick={() => {
        navigate(`/tasks/${task.id}`, {
          state: { task },
        });
      }}
    
    
    >
      <h1 className="font-bold uppercase">{task.title}</h1>
      <p className="text-slate-400">{task.description}</p>
      <p>Status: {task.done ? "Done" : "Pending"}</p>
      <p>Created At: {new Date(task.dateCreated).toLocaleDateString()}</p>
      <p>Updated At: {new Date(task.dateUpdated).toLocaleDateString()}</p>
    </div>
  );
}