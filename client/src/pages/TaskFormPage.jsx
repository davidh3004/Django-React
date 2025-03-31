import { useEffect } from 'react';
import { get, set, useForm } from 'react-hook-form';
import { createTask, deleteTask, updateTask, getTask } from '../API/Tasks.api';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from "react-hot-toast";

export function TaskFormPage() {
    const { register, handleSubmit, formState: {errors}, setValue } = useForm();
    const navigate = useNavigate();
    const params = useParams();

    const onsubmit = handleSubmit(async data=> {
        if(params.id) {
            await updateTask(params.id, data);
            toast.success('Task updated successfully!', {
              position: 'bottom-center',
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: false,
              theme: "dark",
              style: {
                backgroundColor: '#101010',
                color: '#fff',
              },
          });
        } else {
            await createTask(data);
            toast.success('Task created successfully!', {
                position: 'bottom-center',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                theme: "dark",
                style: {
                  backgroundColor: '#101010',
                  color: '#fff',
                },
            });
        }
      navigate("/tasks");
    })

    useEffect(() => {
      async function loadTask(){
        if(params.id){
          const res = await getTask(params.id);
          console.log(res.data);
          setValue("title", res.data.title);
          setValue("description", res.data.description);
          setValue("done", res.data.done);
        }
      }
      loadTask();
      }, []);

    return (
      <div className='max-w-xl mx-auto'>
        <form onSubmit={onsubmit}>
          <input className='bg-zinc-700 p-3 rounded-lg block w-full mb-3' type="text" placeholder="Title" name="" id="" {...register("title", {required: true})} />
          {errors.title && <span>This field is required</span>}
          <textarea className='bg-zinc-700 p-3 rounded-lg block w-full mb-3' rows="3" placeholder="Description" {...register("description", {required: true})} ></textarea>
          {errors.description && <span>This field is required</span>}
          <button className='bg-indigo-500 p-3 rounded-lg block w-full mt-3'>Save</button>
        </form>
        { params.id && (
          <div className='flex justify-between items-center'>
            <label className="ms-2 text-md font-medium text-gray-900 dark:text-gray-300">
              <input className='mr-2' type="checkbox" {...register("done")} />
              Done
            </label>
            <button className='bg-red-500 p-3 rounded-lg w-48 mt-3' onClick={async () => {
              window.confirm("Are you sure you want to delete this task?") &&
              await deleteTask(params.id);
              navigate("/tasks");
              toast.success('Task deleted successfully!', {
                position: 'bottom-center',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                theme: "dark",
                style: {
                  backgroundColor: '#101010',
                  color: '#fff',
                },
              });
            }}>
              Delete
            </button>
          </div>

        )
        }
      </div>
    );
  }