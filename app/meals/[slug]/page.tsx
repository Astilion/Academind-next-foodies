export default function MealPage({ params }: { params: { slug: string } }) {
    return <div>My Post: {params.slug}</div>
  }