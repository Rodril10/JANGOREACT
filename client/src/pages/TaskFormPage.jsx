import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { createTask, deleteTask, getTask, updateTask } from "../api/task.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

export function TaskFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();
  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateTask(params.id, data);
      toast.success("task updated", {
        position: "botton-right",
        style: {
          background: "#333",
          color: "#fff",
        },
      });
    } else {
      await createTask(data);
      toast.success("task created", {
        position: "botton-right",
        style: {
          background: "#333",
          color: "#fff",
        },
      });
    }
    navigate("/Task");
  });

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const res = await getTask(params.id);
        setValue("title", res.data.title);
        setValue("description", res.data.description);
      }
    }
    loadTask();
  });
  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="title"
          {...register("title", { required: true })}
          className="bg=zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.title && <span>This field is required</span>}
        <textarea
          placeholder="description"
          {...register("description", { required: true })}
          className="bg=zinc-700 p-3 rounded-lg block w-full mb-3"
        ></textarea>
        {errors.description && <span>This field is required</span>}

        <button className="bg-indigo-500 -p-3 rounded-lg block w-full mt-3">Save</button>
        {params.id && (
          <div className="flex justify-end">
            <button
              className="bg-red-500 p-3 rounded-lg w-48 mt-3"
              onClick={async () => {
                const accept = window.confirm("are you sure");
                if (accept) {
                  await deleteTask(params.id);
                  toast.success("task deleted", {
                    position: "botton-right",
                    style: {
                      background: "#333",
                      color: "#fff",
                    },
                  });
                  navigate("/Task");
                }
              }}
            >
              Delete
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
