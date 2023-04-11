import styles from "../styles/Design.module.css";

export default function Design() {
  return (
    <>
      <main>
        <div className="pageheader">
          <h1>Design Tasks</h1>
          <p>A space for the design stuff to live.</p>
        </div>
        <div>
          <p>
            To implement a design system that is comprehensive but not overly
            complex. Design should be minimalistic with bright accent colors. It
            should be as accessible as possible avoiding any gimmicky fads that
            could impede usage.
          </p>
          <p>
            Design should be authentic to me. Voice of the page should be casual
            and fun similar to a journal. Except I tend to talk to myself like
            I'm going to be giving a speech, so it's probably always going to be
            a little stilted sounding.
          </p>
        </div>
        <div>
          <h2>Design Standards</h2>
          <p>
            Usually this would be a branding guide but I don't know if I'm ready
            to tackle the task of creating full branding standards so I'm going
            to stick with picking colors, fonts and a general layout for the
            website to start with. Of course I already have too many assets
            created but I wanted to so I did.
          </p>
          <div>Put image of the logo sheet here</div>
          <div className={styles.colorList}>
            <h3>Color List</h3>
            <h4>Main colors</h4>
            <ul>
              <li>
                Magenta - #FF00FF{" "}
                <span className={styles.colorspotMagenta}>
                  &nbsp;&nbsp;&nbsp;
                </span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
