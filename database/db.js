import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync("population_survey.db");

export const initDB = async () => {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS survey_data (
      id INTEGER PRIMARY KEY NOT NULL,
      name TEXT NOT NULL,
      age INTEGER NOT NULL,
      gender TEXT NOT NULL
    )
  `);
  console.log("Table created successfully");
};

export const getAllData = async () => {
  const allRows = await db.getAllAsync("SELECT * FROM survey_data");
  return allRows;
};

// Insert survey data
export const insertData = async (name, age, gender) => {
  const result = await db.runAsync(
    "INSERT INTO survey_data (name, age, gender) VALUES (?, ?, ?)",
    name,
    age,
    gender
  );
  return result;
};

// Update survey data
export const updateData = async (id, name, age, gender) => {
  const result = await db.runAsync(
    "UPDATE survey_data SET name = ?, age = ?, gender = ? WHERE id = ?",
    name,
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
