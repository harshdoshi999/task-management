import axios from 'axios';

// Load environment variables
const BASE_URL = process.env.REACT_APP_BASE_URL;

// Add Task
const addTask = async (task) => {
  try {
    const response = await axios.post(`${BASE_URL}/task/add`, task);
    return response.data;
  } catch (error) {
    console.error('Error adding task:', error);
    throw error;
  }
};

// Get all Tasks
const getTasks = async () => {
  console.log('hello')
  try {
    const response = await axios.get(`${BASE_URL}/tasks`);
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

// Update Task
const updateTask = async (taskId, updatedTask) => {
  try {
    const response = await axios.put(`${BASE_URL}/task/update/${taskId}`, updatedTask);
    return response.data;
  } catch (error) {
    console.error('Error updating task:', error);
    throw error;
  }
};

// Delete Task
const deleteTask = async (taskId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/task/delete/${taskId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting task:', error);
    throw error;
  }
};

export { addTask, getTasks, updateTask, deleteTask };
