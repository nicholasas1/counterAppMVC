import {
  getAllData as getAllDataModel,
  getDataById as getDataByIdModel,
  insertData as insertDataModel,
  updateData as updateDataModel,
  deleteData as deleteDataModel,
} from "../models/DataModel";

export const getAllData = async (callback) => {
  const result = await getAllDataModel();
  callback(result);
};

export const getDataById = async (id, callback) => {
  const result = await getDataByIdModel(id);
  callback(result);
};

export const addNewData = async (name, age, gender, callback) => {
  const result = await insertDataModel(name, age, gender);
  callback(result);
};

export const editData = async (id, name, age, gender, callback) => {
  const result = await updateDataModel(id, name, age, gender);
  callback(result);
};

export const removeData = async (id, callback) => {
  const result = await deleteDataModel(id);
  callback(result);
};
