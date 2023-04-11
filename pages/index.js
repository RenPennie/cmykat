import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <main>
        <h1>A Self Guided Study in UX/UI and web development</h1>
        <div>
          The goal of this site is to create a structure that I can scaffold
          knowledge onto in a practical way. I plan on using it to document the
          development stages of the site from initial structure &rarr; design
          &rarr; iteration &rarr; publishing.
        </div>
        <div>
          Basic structure of the site is built out to hold update notes.
          Progress branches now: dev side progress and design side progress.
          <p className={styles.devsteps}>
            Dev next steps: create design page, refine dynamics for update
            entries.
          </p>
          <p className={styles.designsteps}>
            Design next steps: create a site map, pick design variables
          </p>
        </div>
      </main>
    </>
  );
}
