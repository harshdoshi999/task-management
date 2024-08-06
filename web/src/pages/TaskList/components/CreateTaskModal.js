import React, { useEffect, useState } from "react";
import { addTask, updateTask } from "../../../apis.js";

const CreateTaskModal = ({
  isOpen = false,
  onClose = () => {},
  taskData = {},
  isEditMode = false,
}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    setName(taskData.name)
    setDescription(taskData.description)
    setStatus(taskData.status)
  },[taskData])

  const handleSubmit = (e) => {
    e.preventDefault();
    isEditMode ? updateTaskData() : createTaskData()
  };

  const createTaskData = async () => {
    try {
        const task = { name, description, status };
        await addTask(task);
        onClose();
      } catch (error) {
        console.error("Error adding task:", error);
      }
  }

  const updateTaskData = async () => {
    try {
        const task = { name, description, status };
        await updateTask(taskData._id, task);
        onClose();
      } catch (error) {
        console.error("Error adding task:", error);
      }
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl mb-4">{isEditMode ? "Update Task" : "Create Task"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            >
              <option value="">Select status</option>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-4 px-4 py-2 bg-gray-500 text-white rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              {isEditMode ? "Update" : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTaskModal;
