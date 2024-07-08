import sql from 'better-sqlite3'
import { Meal } from '@/src/types/meal';
import slugify from 'slugify';
import xss from 'xss';
const db = sql('meals.db');


export async function getMeals() {
    // await new Promise((resolve) => setTimeout(resolve, 2000)); // timeout for tutorial purposes

    // throw new Error('Loading meals failed')
    return db.prepare('SELECT * FROM meals').all(); // can use get insted of all if it is a single row


}

export function getMeal(slug: string): Meal | undefined {
    const result =  db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
    return result as Meal | undefined
}

export function saveMeal(meal) {
 meal.slug = slugify(meal.title, {lower:true});
 meal.instructions = xss(meal.instructions);//security
}