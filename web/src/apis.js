import axios from "axios";

const API_URL = process.env.REACT_APP_BASE_URL;

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/auth/login`, {
    email,
    password,
  });
  return response.data.token;
};

export const signup = async (email, password) => {
  await axios.post(`${API_URL}/auth/signup`, { email, password });
};

export const getTasks = async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get(`${API_URL}/tasks`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const addTask = async (task) => {
  console.log(task);
  const token = localStorage.getItem("token");
  await axios.post(`${API_URL}/task/add`, task, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const deleteTask = async (id) => {
  const token = localStorage.getItem("token");
  await axios.delete(`${API_URL}/task/delete/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const updateTask = async (id, task) => {
  const token = localStorage.getItem("token");
  await axios.put(`${API_URL}/task/update/${id}`, task, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
