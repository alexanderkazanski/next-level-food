import Image from 'next/image';
import classes from './page.module.css';
import { getMeal } from '@/lib/meals';
import { notFound } from 'next/navigation';

export default function MealsDetailsPage({params}) {
    const meal = getMeal(params.mealSlug);

    if (!meal) notFound();

    const { title, image, creator_email, summary, instructions } = meal;

  let htmlInstructions = instructions.replace(/\n/g, '<br />')


  return <>
    <header classes={classes.header}>
      <div className={classes.image}>
        <Image src={image} fill alt={summary} />
      </div>
      <div className={classes.headerText}>
        <h1>{title}</h1>
        <p className={classes.creator}>by <a href={`mailto:${creator_email}`}>{creator_email}</a></p>
        <p className={classes.summary}>{summary}</p>
      </div>
    </header>
    <main>
      <p 
        className={classes.instructions}
        dangerouslySetInnerHTML={{
          __html: `${htmlInstructions}`,
        }}
      ></p>
    </main>
  </>
}