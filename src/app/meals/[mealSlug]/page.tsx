import { getMeal } from '@/lib/meals'
import classes from './page.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Meal } from '@/src/types/meal'

export default function MealDetailsPage({ params }: { params: { mealSlug: string } }) {
  const meal: Meal | undefined = getMeal(params.mealSlug)

  if (!meal) {
    notFound()
  }
  meal.instructions = meal.instructions.replace(/\n/g, '<br />')
  return <>
    <header className={classes.header}>
      <div className={classes.image}>
        <Image src={meal.image} fill alt={meal.title} /> 
        </div>
      <div className={classes.headerText}>
        <h1>Title</h1>
        <p className={classes.creator}>
          by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a></p>
        <p className={classes.summary}>{meal.summary}</p>
      </div>

    </header>
    <main>
      <p className={classes.instructions} dangerouslySetInnerHTML={{__html:meal.instructions }}></p></main>
      </>
}