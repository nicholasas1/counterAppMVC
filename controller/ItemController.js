import { items } from '../models/Item';

export const getAllItems = () => {
  return items;
};

export const getItemById = (id) => {
  return items.find(item => item.id === id);
};
