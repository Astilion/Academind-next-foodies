import sql from 'better-sqlite3'

const db = sql('meals.db');


export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // timeout for tutorial purposes
    return db.prepare('SELECT * FROM meals').all(); // can use get insted of all if it is a single row


}