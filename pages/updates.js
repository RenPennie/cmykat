import styles from "../styles/Updates.module.css";
import { getLocalData } from "../lib/localdata";

export async function getStaticProps() {
  const localData = await getLocalData();

  return {
    props: { localData },
  };
}

export default function Home({ localData }) {
  return (
    <>
      <section>
        <h1 className={styles.title}>Updates to site:</h1>
        <p>
          Tracking the progress of the site including screenshots/screen
          recordings when relevant.
          <br />A note on version numbering. Last digit of number is tracking
          iterations rather than patches while in dev mode (0.*.* numbering).
          Once I start using the site as a client facing portfolio site it will
          follow&nbsp;
          <a href="https://semver.org/spec/v2.0.0.html">semantic versioning.</a>
        </p>
        <h2>Current Version: 0.1.0</h2>
        {/* RENDERED FROM data.json FILE */}
        <div>
          {localData.map(
            ({ id, version, desc, goal, success, next, notes }) => (
              <div key={id}>
                <div className={styles.entry}>
                  <h3>{version} - Updates</h3>
                  <p>{desc}</p>
                  <h4>Goals:</h4>
                  <ul>
                    <li>{goal.one}</li>
                    <li>{goal.two}</li>
                    <li>{goal.three}</li>
                  </ul>
                  <h4>Successes:</h4>
                  <ul>
                    <li>{success.one}</li>
                    <li>{success.two}</li>
                    <li>{success.three}</li>
                  </ul>
                  <h4>Next Iteration:</h4>
                  <ul>
                    <li>{next.one}</li>
                    <li>{next.two}</li>
                    <li>{next.three}</li>
                  </ul>
                  <div className={styles.notes}>
                    <h4>Notes:</h4>
                    <p>{notes}</p>
                  </div>
                </div>
                <div className={styles.break}></div>
              </div>
            )
          )}
        </div>
      </section>
    </>
  );
}
