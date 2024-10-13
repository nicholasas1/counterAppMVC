import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync("population_survey.db");

export const initDB = async () => {
  await db.execAsync(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS survey_data (
      id INTEGER PRIMARY KEY NOT NULL,
      number TEXT NOT NULL,
      name TEXT NOT NULL,
      address TEXT NOT NULL,
      age INTEGER NOT NULL,
      gender TEXT NOT NULL
    );
  `);
  console.log("Table created successfully");
};

export const getAllData = async () => {
  const allRows = await db.getAllAsync("SELECT * FROM survey_data");
  return allRows;
};

// Insert survey data
export const insertData = async (
  name,
  age,
  gender,
  address,
  id_card_number
) => {
  const result = await db.runAsync(
    "INSERT INTO survey_data (number, name, address, age, gender) VALUES (?, ?, ?, ?, ?)",
    id_card_number,
    name,
    address,
    age,
    gender
  );
  return result;
};

// Update survey data
export const updateData = async (
  id,
  name,
  age,
  gender,
  address,
  id_card_number
) => {
  const result = await db.runAsync(
    "UPDATE survey_data SET number = ?, name = ?, address = ?, age = ?, gender = ? WHERE id = ?",
    id_card_number,
    name,
    address,
    age,
    gender,
    id
  );
  return result;
};

// Delete survey data
export const deleteData = async (id) => {
  const result = await db.runAsync("DELETE FROM survey_data WHERE id = ?", id);
  return result;
};

// Get survey data by ID
export const getDataById = async (id) => {
  try {
    const result = await db.getAllAsync(
      "SELECT * FROM survey_data WHERE id = ?",
      [id]
    );
    return result.length > 0 ? result[0] : null;
  } catch (error) {
    console.log("Error fetching data by ID:", error);
    throw error; 
  }
};
