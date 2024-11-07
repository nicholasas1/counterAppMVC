import { getUsers, getUserById } from "../models/UserModel";

export const fetchUsers = async () => {
  const users = await getUsers();
  return users;
};

export const fetchUserDetails = async (id) => {
  const user = await getUserById(id);
  return user;
};
