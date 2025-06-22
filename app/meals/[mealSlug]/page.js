import Image from 'next/image';
import classes from './page.module.css';

export default function MealsDetails({params}) {
  return <>
    <header classes={classes.header}>
      <div className={classes.image}>
        <Image fill  />
      </div>
      <div className={classes.headerText}>
        <h1>TITLE</h1>
        <p className={classes.creator}>by <a href={`mailto:${}`}>NAME</a></p>
        <p className={classes.summary}>SUMMARY</p>
      </div>
    </header>
    <main>
      <p className={classes.instructions}></p>
    </main>
    <p>{params.mealSlug} - Meal Slug</p>
  </>
}