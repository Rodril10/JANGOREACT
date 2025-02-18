import { useNavigate } from "react-router-dom";

export function TaskCard({ Task }) {
  const navigate = useNavigate();
  return (
    <div
      className="bg-zinc-800 p-3 hover:bg-zinc-600 hover:cursor-pointer"
      style={{ background: "gray" }}
      onClick={() => navigate(`/task/${Task.id}`)}
    >
      <h1 className="font-bold uppercase">{Task.title}</h1>
      <p>{Task.description}</p>
      <hr />
    </div>
  );
}
