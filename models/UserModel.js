import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const getUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching users data: ", error);
    return [];
  }
};

export const getUserById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}?id=${id}`);
    return response.data[0];
  } catch (error) {
    console.error("Error fetching user by id: ", error);
    return null;
  }
};
