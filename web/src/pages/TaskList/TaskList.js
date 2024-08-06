import { useEffect, useState } from "react";
import { getTasks } from "../../apis.js";
import CreateTaskModal from "./components/CreateTaskModal.js";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [taskData, setTaskData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await getTasks();
        console.log("data:", data);
        setTasks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTaskData({});
    // Optionally, you can re-fetch the tasks here to show the new task
    const fetchTasks = async () => {
      try {
        const data = await getTasks();
        setTasks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = search
      ? task.name.toLowerCase().includes(search.toLowerCase())
      : true;
    const matchesStatus = statusFilter ? task.status === statusFilter : true;
    return matchesSearch && matchesStatus;
  });

  return (
    <div class="max-w-4xl mx-auto mt-10">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-3xl font-bold">Task List</h1>
        <button
          onClick={() => openModal()}
          class="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]"
        >
          Create
        </button>
      </div>
      <div class="flex justify-between items-center mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search tasks..."
          class="border border-gray-300 p-2 rounded-lg w-1/2"
        />
        <div class="relative w-1/4">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            class="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Filter by Status</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 3a1 1 0 01.832.445l4.773 7.165a1 1 0 01-.832 1.555H4.227a1 1 0 01-.832-1.555l4.773-7.165A1 1 0 0110 3z" />
            </svg>
          </div>
        </div>
      </div>
      <div class="flex">
        {filteredTasks.length === 0 && <p>No tasks</p>}
        {filteredTasks.map(({ _id, name, description, status }, index) => {
          return (
            <div key={index} class="max-w-sm mt-10">
              <div class="bg-white shadow-lg rounded-lg p-6">
                <h2
                  onClick={() => {
                    setTaskData({ _id, name, description, status });
                    openModal();
                  }}
                  class="text-2xl font-bold mb-2"
                >
                  {name}
                </h2>
                <p class="text-gray-700 mb-4">{description}</p>
                <div class="flex items-center">
                  <span class="text-sm font-medium text-gray-600">Status:</span>
                  <span class="ml-2 px-2 py-1 bg-blue-200 text-blue-800 rounded-full text-sm">
                    {status}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <CreateTaskModal
        isOpen={isModalOpen}
        onClose={closeModal}
        taskData={taskData}
        isEditMode={Object.keys(taskData).length !== 0}
      />
    </div>
  );
}
